# Plugin Summary

## Overview
The plugin is designed to facilitate the management of variable collections within Figma. At the moment, it allows users to copy and paste variable collections, making it easier to manage design tokens and other variable data across different projects and files.

## Current Capabilities
- **View Variable Collections**: Users can view all local variable collections available in Figma.
- **Copy Collections**: Users can select a variable collection and copy it to their clipboard.
- **Paste Collections**: Users can paste the copied variable collection into another document or project.
- **User Notifications**: The plugin provides feedback to users about the status of their actions, such as successful copies and pastes, or errors encountered.

## Steps to Use the Plugin in Figma
1. **Open the Plugin**: Launch the plugin from the Figma plugins menu.
2. **View Collections**: Upon opening, the plugin will automatically fetch and display all available variable collections.
4. **Select a Collection**: Use the dropdown menu to select the collection you wish to copy.
5. **Copy the Collection**: Click the "Copy Collection" button to copy the selected variable collection to your clipboard.
6. **Paste the Collection**: Navigate to the document where you want to paste the collection, launch the plugin, and click the "Paste Collection" button.
7. **Check Status Messages**: Monitor the status messages displayed in the plugin for feedback on your actions.

## Limitations
- **Draft file Support**: If you copy a collection with multiple modes, and paste in a file in your draft, it won't work. This is because draft file only support 1 mode.

- **Aliased variable collections**: The plugin does not currently support pasting variable collections with aliased variables. Aliased variables are those that reference other collection. It will recognize the alias but will not be able to resolve the reference, **unless you first copy the referenced collection to the new file.**
