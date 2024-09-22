import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Button } from './components/ui/button';
import './styles/globals.css';
console.log('UI script is running');
const App = () => {
    console.log('App component is rendering');
    const [collections, setCollections] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState('');
    const [copiedCollection, setCopiedCollection] = useState(null);
    const [status, setStatus] = useState('');
    useEffect(() => {
        // Request all collections when UI loads
        parent.postMessage({ pluginMessage: { type: 'get-collections' } }, '*');
        // Check for saved collection data when UI loads
        parent.postMessage({ pluginMessage: { type: 'check-saved-collection' } }, '*');
        // Listen for messages from the plugin code
        window.onmessage = (event) => {
            console.log("Received message from plugin:", event.data.pluginMessage);
            const msg = event.data.pluginMessage;
            if (msg.type === 'no-collections') {
                setStatus('No variable collections found.');
            }
            else if (msg.type === 'collections-list') {
                setCollections(msg.data);
            }
            else if (msg.type === 'collection-copied') {
                setCopiedCollection(msg.data);
                setStatus(`[${msg.data.name}] copied.`);
            }
            else if (msg.type === 'collection-pasted') {
                setStatus(`[${copiedCollection.name}] pasted successfully!`);
            }
            else if (msg.type === 'saved-collection-found') {
                setCopiedCollection(msg.data);
                setStatus(`Found: [${msg.data.name}]. Ready to paste!`);
            }
            else if (msg.type === 'no-saved-collection') {
                setStatus('No saved collection found.');
            }
        };
    }, []);
    const handleCopy = () => {
        if (selectedCollection) {
            parent.postMessage({ pluginMessage: { type: 'copy-collection', collectionId: selectedCollection } }, '*');
        }
    };
    const handlePaste = () => {
        if (copiedCollection) {
            parent.postMessage({ pluginMessage: { type: 'paste-collection', data: copiedCollection } }, '*');
        }
    };
    return (React.createElement("div", { className: "p-4 space-y-4" },
        React.createElement("p", { className: "text-sm text-center text-green-600 border border-green-300 rounded-md p-2" }, status),
        React.createElement(Select, { onValueChange: setSelectedCollection },
            React.createElement(SelectTrigger, null,
                React.createElement(SelectValue, { placeholder: "Select a Collection" })),
            React.createElement(SelectContent, null, collections.map((collection) => (React.createElement(SelectItem, { key: collection.id, value: collection.id }, collection.name))))),
        React.createElement("h2", null, "Copy a collection to your clipboard, then paste it into another document."),
        React.createElement("div", { className: "space-y-2" },
            React.createElement(Button, { onClick: handleCopy, disabled: !selectedCollection, className: "w-full" }, "Copy Collection"),
            React.createElement(Button, { onClick: handlePaste, disabled: !copiedCollection, className: "w-full" }, "Paste Collection"))));
};
console.log('About to render React app');
ReactDOM.render(React.createElement(App, null), document.getElementById('react-page'));
console.log('React app rendered');
