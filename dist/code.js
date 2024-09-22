/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
        for (const v of collectionData.variables) {
            const newVariable = figma.variables.createVariable(v.name, newCollection, v.resolvedType);
            if (v.scopes) {
                newVariable.scopes = v.scopes;
            }
            variableIdMap[v.id] = newVariable.id;
        }
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
        yield figma.clientStorage.deleteAsync(`collection-${userId}`);
        figma.ui.postMessage({ type: "collection-pasted", name: collectionData.name });
    }
});


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0JBQStCLGlEQUFpRDtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBLGdGQUFnRixPQUFPO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMsNkJBQTZCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3QkFBd0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQ0FBc0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0QkFBNEI7QUFDL0Q7QUFDQTtBQUNBLHlEQUF5RCxPQUFPO0FBQ2hFLCtCQUErQixpREFBaUQ7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNEJBQTRCO0FBQy9EO0FBQ0E7QUFDQSxnRkFBZ0YsT0FBTztBQUN2RjtBQUNBLG1DQUFtQyw4QkFBOEI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELE9BQU87QUFDbkUsK0JBQStCLHNEQUFzRDtBQUNyRjtBQUNBLENBQUM7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcHktdmFyaWFibGVzLXByby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3B5LXZhcmlhYmxlcy1wcm8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3B5LXZhcmlhYmxlcy1wcm8vLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgdGhlbWVDb2xvcnM6IHRydWUsIHdpZHRoOiAzMDAsIGhlaWdodDogNDAwIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgaWYgKG1zZy50eXBlID09PSBcImdldC1jb2xsZWN0aW9uc1wiKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCk7XG4gICAgICAgIGlmIChjb2xsZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJuby1jb2xsZWN0aW9uc1wiIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zSW5mbyA9IGNvbGxlY3Rpb25zLm1hcCgoY29sbGVjdGlvbikgPT4gKHtcbiAgICAgICAgICAgIGlkOiBjb2xsZWN0aW9uLmlkLFxuICAgICAgICAgICAgbmFtZTogY29sbGVjdGlvbi5uYW1lLFxuICAgICAgICB9KSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJjb2xsZWN0aW9ucy1saXN0XCIsIGRhdGE6IGNvbGxlY3Rpb25zSW5mbyB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiY2hlY2stc2F2ZWQtY29sbGVjdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IChfYSA9IGZpZ21hLmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQ7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidXNlci1ub3QtbG9nZ2VkLWluXCIgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkRhdGEgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKGBjb2xsZWN0aW9uLSR7dXNlcklkfWApO1xuICAgICAgICBpZiAoY29sbGVjdGlvbkRhdGEpIHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNhdmVkLWNvbGxlY3Rpb24tZm91bmRcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBjb2xsZWN0aW9uRGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIm5vLXNhdmVkLWNvbGxlY3Rpb25cIiB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJjb3B5LWNvbGxlY3Rpb25cIiAmJiBtc2cuY29sbGVjdGlvbklkKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25zID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGMpID0+IGMuaWQgPT09IG1zZy5jb2xsZWN0aW9uSWQpO1xuICAgICAgICBpZiAoIXNlbGVjdGVkQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIm5vLWNvbGxlY3Rpb25zXCIgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0geWllbGQgUHJvbWlzZS5hbGwoc2VsZWN0ZWRDb2xsZWN0aW9uLnZhcmlhYmxlSWRzLm1hcCgoaWQpID0+IGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyhpZCkpKTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkRhdGEgPSB7XG4gICAgICAgICAgICBpZDogc2VsZWN0ZWRDb2xsZWN0aW9uLmlkLFxuICAgICAgICAgICAgbmFtZTogc2VsZWN0ZWRDb2xsZWN0aW9uLm5hbWUsXG4gICAgICAgICAgICBtb2Rlczogc2VsZWN0ZWRDb2xsZWN0aW9uLm1vZGVzLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2KSA9PiB2ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIC5tYXAoKHYpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IHYuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogdi5uYW1lLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkVHlwZTogdi5yZXNvbHZlZFR5cGUsXG4gICAgICAgICAgICAgICAgdmFsdWVzQnlNb2RlOiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXModi52YWx1ZXNCeU1vZGUpLm1hcCgoW21vZGVJZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIiBpbiB2YWx1ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9PT0gXCJWQVJJQUJMRV9BTElBU1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IFwiVkFSSUFCTEVfQUxJQVNcIiwgaWQ6IHZhbHVlLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbW9kZUlkLCB2YWx1ZV07XG4gICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIHNjb3Blczogdi5zY29wZXMgfHwgW10sXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IChfYiA9IGZpZ21hLmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaWQ7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidXNlci1ub3QtbG9nZ2VkLWluXCIgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhgY29sbGVjdGlvbi0ke3VzZXJJZH1gLCBjb2xsZWN0aW9uRGF0YSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJjb2xsZWN0aW9uLWNvcGllZFwiLCBkYXRhOiBjb2xsZWN0aW9uRGF0YSB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFzdGUtY29sbGVjdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IChfYyA9IGZpZ21hLmN1cnJlbnRVc2VyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaWQ7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwidXNlci1ub3QtbG9nZ2VkLWluXCIgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkRhdGEgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKGBjb2xsZWN0aW9uLSR7dXNlcklkfWApO1xuICAgICAgICBpZiAoIWNvbGxlY3Rpb25EYXRhKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6IFwibm8tY29waWVkLWNvbGxlY3Rpb25cIiB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdDb2xsZWN0aW9uID0gZmlnbWEudmFyaWFibGVzLmNyZWF0ZVZhcmlhYmxlQ29sbGVjdGlvbihjb2xsZWN0aW9uRGF0YS5uYW1lKTtcbiAgICAgICAgY29uc3QgbW9kZUlkTWFwID0ge307XG4gICAgICAgIG1vZGVJZE1hcFtjb2xsZWN0aW9uRGF0YS5tb2Rlc1swXS5tb2RlSWRdID0gbmV3Q29sbGVjdGlvbi5tb2Rlc1swXS5tb2RlSWQ7XG4gICAgICAgIGNvbGxlY3Rpb25EYXRhLm1vZGVzLnNsaWNlKDEpLmZvckVhY2goKG1vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01vZGUgPSBuZXdDb2xsZWN0aW9uLmFkZE1vZGUobW9kZS5uYW1lKTtcbiAgICAgICAgICAgIG1vZGVJZE1hcFttb2RlLm1vZGVJZF0gPSBuZXdNb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdmFyaWFibGVJZE1hcCA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IHYgb2YgY29sbGVjdGlvbkRhdGEudmFyaWFibGVzKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYXJpYWJsZSA9IGZpZ21hLnZhcmlhYmxlcy5jcmVhdGVWYXJpYWJsZSh2Lm5hbWUsIG5ld0NvbGxlY3Rpb24sIHYucmVzb2x2ZWRUeXBlKTtcbiAgICAgICAgICAgIGlmICh2LnNjb3Blcykge1xuICAgICAgICAgICAgICAgIG5ld1ZhcmlhYmxlLnNjb3BlcyA9IHYuc2NvcGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyaWFibGVJZE1hcFt2LmlkXSA9IG5ld1ZhcmlhYmxlLmlkO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdiBvZiBjb2xsZWN0aW9uRGF0YS52YXJpYWJsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhcmlhYmxlID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKHZhcmlhYmxlSWRNYXBbdi5pZF0pO1xuICAgICAgICAgICAgaWYgKG5ld1ZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbb2xkTW9kZUlkLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModi52YWx1ZXNCeU1vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld01vZGVJZCA9IG1vZGVJZE1hcFtvbGRNb2RlSWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3TW9kZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIFwidHlwZVwiIGluIHZhbHVlICYmIHZhbHVlLnR5cGUgPT09IFwiVkFSSUFCTEVfQUxJQVNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWFzZWRWYXJpYWJsZUlkID0gdmFsdWUuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3QWxpYXNJZCA9IHZhcmlhYmxlSWRNYXBbYWxpYXNlZFZhcmlhYmxlSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdBbGlhc0lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsaWFzZWRWYXJpYWJsZSA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRWYXJpYWJsZUJ5SWRBc3luYyhuZXdBbGlhc0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsaWFzZWRWYXJpYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3QWxpYXMgPSBmaWdtYS52YXJpYWJsZXMuY3JlYXRlVmFyaWFibGVBbGlhcyhhbGlhc2VkVmFyaWFibGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFyaWFibGUuc2V0VmFsdWVGb3JNb2RlKG5ld01vZGVJZCwgbmV3QWxpYXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFyaWFibGUuc2V0VmFsdWVGb3JNb2RlKG5ld01vZGVJZCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2UuZGVsZXRlQXN5bmMoYGNvbGxlY3Rpb24tJHt1c2VySWR9YCk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJjb2xsZWN0aW9uLXBhc3RlZFwiLCBuYW1lOiBjb2xsZWN0aW9uRGF0YS5uYW1lIH0pO1xuICAgIH1cbn0pO1xuZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9