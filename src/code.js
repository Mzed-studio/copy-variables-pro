var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { themeColors: true, width: 300, height: 400 });
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    if (msg.type === "get-collections") {
        const collections = yield figma.variables.getLocalVariableCollectionsAsync();
        if (collections.length === 0) {
            figma.ui.postMessage({ type: "no-collections" });
            return;
        }
        const collectionsInfo = collections.map((collection) => ({
            id: collection.id,
            name: collection.name,
        }));
        figma.ui.postMessage({ type: "collections-list", data: collectionsInfo });
    }
    else if (msg.type === "check-saved-collection") {
        const userId = (_a = figma.currentUser) === null || _a === void 0 ? void 0 : _a.id;
        if (!userId) {
            figma.ui.postMessage({ type: "user-not-logged-in" });
            return;
        }
        const collectionData = yield figma.clientStorage.getAsync(`collection-${userId}`);
        if (collectionData) {
            figma.ui.postMessage({
                type: "saved-collection-found",
                data: collectionData,
            });
        }
        else {
            figma.ui.postMessage({ type: "no-saved-collection" });
        }
    }
    else if (msg.type === "copy-collection" && msg.collectionId) {
        const collections = yield figma.variables.getLocalVariableCollectionsAsync();
        const selectedCollection = collections.find((c) => c.id === msg.collectionId);
        if (!selectedCollection) {
            figma.ui.postMessage({ type: "no-collections" });
            return;
        }
        const variables = yield Promise.all(selectedCollection.variableIds.map((id) => figma.variables.getVariableByIdAsync(id)));
        const collectionData = {
            id: selectedCollection.id,
            name: selectedCollection.name,
            modes: selectedCollection.modes,
            variables: variables
                .filter((v) => v !== null)
                .map((v) => ({
                id: v.id,
                name: v.name,
                resolvedType: v.resolvedType,
                valuesByMode: Object.fromEntries(Object.entries(v.valuesByMode).map(([modeId, value]) => {
                    if (value &&
                        typeof value === "object" &&
                        "type" in value &&
                        value.type === "VARIABLE_ALIAS") {
                        return [
                            modeId,
                            { type: "VARIABLE_ALIAS", id: value.id },
                        ];
                    }
                    return [modeId, value];
                })),
                scopes: v.scopes || [],
            })),
        };
        const userId = (_b = figma.currentUser) === null || _b === void 0 ? void 0 : _b.id;
        if (!userId) {
            figma.ui.postMessage({ type: "user-not-logged-in" });
            return;
        }
        yield figma.clientStorage.setAsync(`collection-${userId}`, collectionData);
        figma.ui.postMessage({ type: "collection-copied", data: collectionData });
    }
    else if (msg.type === "paste-collection") {
        const userId = (_c = figma.currentUser) === null || _c === void 0 ? void 0 : _c.id;
        if (!userId) {
            figma.ui.postMessage({ type: "user-not-logged-in" });
            return;
        }
        const collectionData = yield figma.clientStorage.getAsync(`collection-${userId}`);
        if (!collectionData) {
            figma.ui.postMessage({ type: "no-copied-collection" });
            return;
        }
        const newCollection = figma.variables.createVariableCollection(collectionData.name);
        const modeIdMap = {};
        modeIdMap[collectionData.modes[0].modeId] = newCollection.modes[0].modeId;
        collectionData.modes.slice(1).forEach((mode) => {
            const newMode = newCollection.addMode(mode.name);
            modeIdMap[mode.modeId] = newMode;
        });
        const variableIdMap = {};
        // First pass: create all variables
        for (const v of collectionData.variables) {
            const newVariable = figma.variables.createVariable(v.name, newCollection, v.resolvedType);
            if (v.scopes) {
                newVariable.scopes = v.scopes;
            }
            variableIdMap[v.id] = newVariable.id;
        }
        // Second pass: set values and resolve aliases
        for (const v of collectionData.variables) {
            const newVariable = yield figma.variables.getVariableByIdAsync(variableIdMap[v.id]);
            if (newVariable) {
                for (const [oldModeId, value] of Object.entries(v.valuesByMode)) {
                    const newModeId = modeIdMap[oldModeId];
                    if (newModeId) {
                        if (value && typeof value === "object" && "type" in value && value.type === "VARIABLE_ALIAS") {
                            const aliasedVariableId = value.id;
                            const newAliasId = variableIdMap[aliasedVariableId];
                            if (newAliasId) {
                                const aliasedVariable = yield figma.variables.getVariableByIdAsync(newAliasId);
                                if (aliasedVariable) {
                                    const newAlias = figma.variables.createVariableAlias(aliasedVariable);
                                    newVariable.setValueForMode(newModeId, newAlias);
                                }
                            }
                        }
                        else {
                            newVariable.setValueForMode(newModeId, value);
                        }
                    }
                }
            }
        }
        // Successfully pasted the collection, now delete it from storage
        yield figma.clientStorage.deleteAsync(`collection-${userId}`);
        // Notify the UI that the collection has been pasted successfully
        figma.ui.postMessage({ type: "collection-pasted" });
    }
});
export {};
