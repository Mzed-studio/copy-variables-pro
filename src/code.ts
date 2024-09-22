import { CollectionInfo, Mode } from './types/types';

figma.showUI(__html__, { themeColors: true, width: 300, height: 400 });
// figma.showUI(__html__);

figma.ui.onmessage = async (msg: {
  type: string;
  collectionId?: string;
  data?: CollectionInfo;
}) => {
  if (msg.type === "get-collections") {
    const collections = await figma.variables.getLocalVariableCollectionsAsync();
    if (collections.length === 0) {
      figma.ui.postMessage({ type: "no-collections" });
      return;
    }

    const collectionsInfo = collections.map((collection) => ({
      id: collection.id,
      name: collection.name,
    }));

    figma.ui.postMessage({ type: "collections-list", data: collectionsInfo });
  } else if (msg.type === "check-saved-collection") {
    const userId = figma.currentUser?.id;
    if (!userId) {
      figma.ui.postMessage({ type: "user-not-logged-in" });
      return;
    }

    const collectionData = await figma.clientStorage.getAsync(`collection-${userId}`);
    if (collectionData) {
      figma.ui.postMessage({
        type: "saved-collection-found",
        data: collectionData,
      });
    } else {
      figma.ui.postMessage({ type: "no-saved-collection" });
    }
  } else if (msg.type === "copy-collection" && msg.collectionId) {
    const collections = await figma.variables.getLocalVariableCollectionsAsync();
    const selectedCollection = collections.find((c) => c.id === msg.collectionId);

    if (!selectedCollection) {
      figma.ui.postMessage({ type: "no-collections" });
      return;
    }

    const variables = await Promise.all(
      selectedCollection.variableIds.map((id) =>
        figma.variables.getVariableByIdAsync(id)
      )
    );

    const collectionData: CollectionInfo = {
      id: selectedCollection.id,
      name: selectedCollection.name,
      modes: selectedCollection.modes,
      variables: variables
        .filter((v): v is Variable => v !== null)
        .map((v) => ({
          id: v.id,
          name: v.name,
          resolvedType: v.resolvedType,
          valuesByMode: Object.fromEntries(
            Object.entries(v.valuesByMode).map(([modeId, value]) => {
              if (
                value &&
                typeof value === "object" &&
                "type" in value &&
                value.type === "VARIABLE_ALIAS"
              ) {
                return [
                  modeId,
                  { type: "VARIABLE_ALIAS", id: (value as VariableAlias).id },
                ];
              }
              return [modeId, value as VariableValue];
            })
          ),
          scopes: v.scopes || [],
        })),
    };

    const userId = figma.currentUser?.id;
    if (!userId) {
      figma.ui.postMessage({ type: "user-not-logged-in" });
      return;
    }

    await figma.clientStorage.setAsync(`collection-${userId}`, collectionData);

    figma.ui.postMessage({ type: "collection-copied", data: collectionData });


  // } else if (msg.type === "paste-collection") {
  //   const userId = figma.currentUser?.id;
  //   if (!userId) {
  //     figma.ui.postMessage({ type: "user-not-logged-in" });
  //     return;
  //   }

  //   const collectionData = await figma.clientStorage.getAsync(`collection-${userId}`);
  //   if (!collectionData) {
  //     figma.ui.postMessage({ type: "no-copied-collection" });
  //     return;
  //   }

  //   const newCollection = figma.variables.createVariableCollection(collectionData.name);
  //   const modeIdMap: { [oldModeId: string]: string } = {};
  //   modeIdMap[collectionData.modes[0].modeId] = newCollection.modes[0].modeId;

  //   collectionData.modes.slice(1).forEach((mode: Mode) => {
  //     const newMode = newCollection.addMode(mode.name);
  //     modeIdMap[mode.modeId] = newMode;
  //   });

  //   const variableIdMap: { [oldId: string]: string } = {};

  //   // First pass: create all variables
  //   for (const v of collectionData.variables) {
  //     const newVariable = figma.variables.createVariable(v.name, newCollection, v.resolvedType);
  //     if (v.scopes) {
  //       newVariable.scopes = v.scopes;
  //     }
  //     variableIdMap[v.id] = newVariable.id;
  //   }

  //   // Second pass: set values and resolve aliases
  //   for (const v of collectionData.variables) {
  //     const newVariable = await figma.variables.getVariableByIdAsync(variableIdMap[v.id]);
  //     if (newVariable) {
  //       for (const [oldModeId, value] of Object.entries(v.valuesByMode)) {
  //         const newModeId = modeIdMap[oldModeId];
  //         if (newModeId) {
  //           if (value && typeof value === "object" && "type" in value && value.type === "VARIABLE_ALIAS") {
  //             const aliasedVariableId = (value as VariableAlias).id;
  //             const newAliasId = variableIdMap[aliasedVariableId];
  //             if (newAliasId) {
  //               const aliasedVariable = await figma.variables.getVariableByIdAsync(newAliasId);
  //               if (aliasedVariable) {
  //                 const newAlias = figma.variables.createVariableAlias(aliasedVariable);
  //                 newVariable.setValueForMode(newModeId, newAlias);
  //               }
  //             }
  //           } else {
  //             newVariable.setValueForMode(newModeId, value as VariableValue);
  //           }
  //         }
  //       }
  //     }
  //   }

  //   // Successfully pasted the collection, now delete it from storage
  //   await figma.clientStorage.deleteAsync(`collection-${userId}`);

  //   // Notify the UI that the collection has been pasted successfully
  //   figma.ui.postMessage({ type: "collection-pasted", name: collectionData.name });
  // }

   } else if (msg.type === "paste-collection") {
  const userId = figma.currentUser?.id;
  if (!userId) {
    figma.ui.postMessage({ type: "user-not-logged-in" });
    return;
  }

  const collectionData = await figma.clientStorage.getAsync(`collection-${userId}`);
  if (!collectionData) {
    figma.ui.postMessage({ type: "no-copied-collection" });
    return;
  }

  try {
    const newCollection = figma.variables.createVariableCollection(collectionData.name);
    const modeIdMap: { [oldModeId: string]: string } = {};
    modeIdMap[collectionData.modes[0].modeId] = newCollection.modes[0].modeId;

    collectionData.modes.slice(1).forEach((mode: Mode) => {
      const newMode = newCollection.addMode(mode.name);
      modeIdMap[mode.modeId] = newMode;
    });

    const variableIdMap: { [oldId: string]: string } = {};

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
      const newVariable = await figma.variables.getVariableByIdAsync(variableIdMap[v.id]);
      if (newVariable) {
        for (const [oldModeId, value] of Object.entries(v.valuesByMode)) {
          const newModeId = modeIdMap[oldModeId];
          if (newModeId) {
            if (value && typeof value === "object" && "type" in value && value.type === "VARIABLE_ALIAS") {
              const aliasedVariableId = (value as VariableAlias).id;
              const newAliasId = variableIdMap[aliasedVariableId];
              if (newAliasId) {
                const aliasedVariable = await figma.variables.getVariableByIdAsync(newAliasId);
                if (aliasedVariable) {
                  const newAlias = figma.variables.createVariableAlias(aliasedVariable);
                  newVariable.setValueForMode(newModeId, newAlias);
                }
              }
            } else {
              newVariable.setValueForMode(newModeId, value as VariableValue);
            }
          }
        }
      }
    }

    // Successfully pasted the collection, now delete it from storage
    await figma.clientStorage.deleteAsync(`collection-${userId}`);

    // Notify the UI that the collection has been pasted successfully
    figma.ui.postMessage({ type: "collection-pasted", name: collectionData.name });

  } catch (error) {
    if (error instanceof Error && error.message.includes("Limited to 1 modes only")) {
      figma.ui.postMessage({ 
        type: "paste-error", 
        message: "This file only supports 1 mode. The collection was not pasted correctly."
      });
      return;
    }
    // If it's a different error, rethrow it
    throw error;
  }
   }

};