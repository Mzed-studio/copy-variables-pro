import React, { useState, useEffect, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";

// Importing components without lazy loading
const {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} = require("./components/ui/select");
const Button = require("./components/ui/button").default; // Importing Button with default export

// Define a type for the collection items
interface Collection {
  id: string;
  name: string;
}

const App = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [copiedCollection, setCopiedCollection] = useState<Collection | null>(
    null
  );
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Request all collections when UI loads
    parent.postMessage({ pluginMessage: { type: "get-collections" } }, "*");
    // Check for saved collection data when UI loads
    parent.postMessage(
      { pluginMessage: { type: "check-saved-collection" } },
      "*"
    );

    // Listen for messages from the plugin code
    window.onmessage = (event: MessageEvent) => {
      console.log("Received message from plugin:", event.data.pluginMessage);
      const msg = event.data.pluginMessage;

      if (msg.type === "no-collections") {
        setStatus("No variable collections found.");

      } else if (msg.type === "collections-list") {
        setCollections(msg.data);

      } else if (msg.type === "collection-copied") {
        setCopiedCollection(msg.data);
        setStatus(`[${msg.data.name}] copied.`);

      } else if (msg.type === "collection-pasted") {
        setCopiedCollection(null);
        setStatus(`[${msg.name}] pasted successfully!`);

      } else if (msg.type === "saved-collection-found") {
        setCopiedCollection(msg.data);
        setStatus(`Found: [${msg.data.name}]. Ready to paste!`);
                
      } else if (msg.type === "no-saved-collection") {
        setStatus("No saved collection found.");
      } else if (msg.type === "paste-error") {
  setStatus(msg.message);
  setCopiedCollection(null);  // Clear the copied collection state
}

    };
  }, []);

  const handleCopy = () => {
    if (selectedCollection) {
      parent.postMessage(
        {
          pluginMessage: {
            type: "copy-collection",
            collectionId: selectedCollection,
          },
        },
        "*"
      );
    }
  };

  const handlePaste = () => {
    if (copiedCollection) {
      parent.postMessage(
        { pluginMessage: { type: "paste-collection", data: copiedCollection } },
        "*"
      );
    }
  };

  return (
    <div className="p-4 space-y-4">
      <p className="text-sm text-center text-green-600 border border-green-300 rounded-md p-2">
        {status}
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Select onValueChange={setSelectedCollection}>
          <SelectTrigger>
            <SelectValue placeholder="Select a Collection" />
          </SelectTrigger>
          <SelectContent>
            {collections.map((collection: Collection) => (
              <SelectItem key={collection.id} value={collection.id}>
                {collection.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Suspense>

      <div className="space-y-3 pt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <Button
            onClick={handleCopy}
            disabled={!selectedCollection}
            className="w-full"
          >
            Copy Collection
          </Button>
          <Button
            onClick={handlePaste}
            disabled={!copiedCollection}
            className="w-full"
          >
            Paste Collection
          </Button>
        </Suspense>
      </div>
    </div>
  );
};

console.log("About to render React app");

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("react-page");
  const root = createRoot(container);
  root.render(<App />);
});

console.log("React app rendered");
