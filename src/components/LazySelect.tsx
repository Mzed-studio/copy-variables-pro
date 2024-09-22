import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const LazySelect: React.FC<{
  onValueChange: (value: string) => void;
  collections: { id: string; name: string }[];
}> = ({ onValueChange, collections }) => (
  <Select onValueChange={onValueChange}>
    <SelectTrigger>
      <SelectValue placeholder="Select a Collection" />
    </SelectTrigger>
    <SelectContent>
      {collections.map((collection) => (
        <SelectItem key={collection.id} value={collection.id}>
          {collection.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default LazySelect;
