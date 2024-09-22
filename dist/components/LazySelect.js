import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "./ui/select";
const LazySelect = ({ onValueChange, collections }) => (React.createElement(Select, { onValueChange: onValueChange },
    React.createElement(SelectTrigger, null,
        React.createElement(SelectValue, { placeholder: "Select a Collection" })),
    React.createElement(SelectContent, null, collections.map((collection) => (React.createElement(SelectItem, { key: collection.id, value: collection.id }, collection.name))))));
export default LazySelect;
