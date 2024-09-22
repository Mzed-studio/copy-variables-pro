export type Mode = {
    modeId: string;
    name: string;
  };
  
  export type VariableInfo = {
    name: string;
    id: string;
    resolvedType: VariableResolvedDataType;
    valuesByMode: { [modeId: string]: VariableValue };
    scopes?: VariableScope[];
  };
  
  export type CollectionInfo = {
    id: string;
    name: string;
    modes: Mode[];
    variables: VariableInfo[];
  };