import React, { useState, useEffect, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";

import LazySelect from "./components/LazySelect"; // Load synchronously
import Button from "./components/ui/button"; // Load synchronously
import { RotateCw } from "lucide-react";

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
      const msg = event.data.pluginMessage;

      if (msg.type === "no-collections") {
        setStatus("No variable collections found.");
      } else if (msg.type === "collections-list") {
        setCollections(msg.data);
        setStatus("Collections refreshed!"); 

        const userId = figma.currentUser?.id;
        if (userId) {
          parent.postMessage({ pluginMessage: { type: "check-saved-collection" } }, "*");
        }

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
        setCopiedCollection(null); // Clear the copied collection state
      } else if (msg.type === "auth-error") {
        setStatus("Please log in to Figma to use this feature.");
      } else if (msg.type === "empty-collection") {
        setStatus("The selected collection is empty or invalid.");
      } else if (msg.type === "alias-error") {
        setStatus("One or more variable aliases could not be resolved.");
      } else if (msg.type === "mode-error") {
        setStatus("Cannot paste due to mode restrictions.");
      } else if (msg.type === "storage-error") {
        setStatus("Storage limit exceeded. Cannot save collection.");
      } else if (msg.type === "network-error") {
        setStatus("Network issue encountered. Please try again.");
      } else if (msg.type === "concurrent-modification") {
        setStatus("Collection modified in Figma. Please refresh and try again.");
      } else if (msg.type === "unsupported-type") {
        setStatus("Unsupported variable types detected. Cannot copy.");
      } else if (msg.type === "unexpected-error") {
        setStatus("An unexpected error occurred. Please try again.");
      }
    };
  }, []);

  // Function to refresh collections
  const handleRefresh = async() => {
    setStatus("Refreshing collections...");
    parent.postMessage({ pluginMessage: { type: "get-collections" } }, "*");
  };


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
    } else {
      setStatus("Please select a collection to copy.");
    }
  };

  const handlePaste = () => {
    if (copiedCollection) {
      parent.postMessage(
        { pluginMessage: { type: "paste-collection", data: copiedCollection } },
        "*"
      );
    } else {
      setStatus("No collection copied to paste.");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <p className="text-sm text-center text-green-600 border border-green-300 rounded-md p-2">
        {status}
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex items-center space-x-2">
          <LazySelect onValueChange={setSelectedCollection} collections={collections} />
          <Button variant="outline" size="icon" onClick={handleRefresh}>
            <RotateCw size={16}/>
          </Button>
        </div>
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


document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("react-page");
  const root = createRoot(container);
  root.render(<App />);
});
