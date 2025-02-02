# md2latex VSCode Extension

The md2latex extension enables you to easily convert between Markdown and LaTeX documents directly within Visual Studio Code using Pandoc as the conversion engine.

## Features

- **Markdown to LaTeX:** Convert `.md` files to `.tex` files.
- **LaTeX to Markdown:** Convert `.tex` files to `.md` files.
- **Context Menu Integration:** Right-click on a file in the Explorer or editor tab to quickly trigger a conversion.
- **Command Palette Support:** Use VS Code’s Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) to run conversion commands.

## Prerequisites

- **Pandoc:** Ensure Pandoc is installed and available in your system’s PATH. You can verify by running:
  ```bash
  pandoc --version

Download Pandoc from pandoc.org.
	•	Visual Studio Code: Make sure you have VS Code installed.

## Installation

### Option 1: Install from Source
	1.	Clone the Repository:

git clone https://github.com/neolaf2/md2latex.git
cd md2latex


	2.	Install Dependencies:

npm install


	3.	Build the Extension (if applicable):
If using TypeScript, compile the project:

npm run compile


	4.	Launch the Extension:
Open the project in VS Code and press F5 to open a new Extension Development Host window with the extension loaded.

### Option 2: Install from the VS Code Marketplace

If the extension is published, search for “md2latex” in the Extensions view (Ctrl+Shift+X or Cmd+Shift+X on macOS) and click Install.

Usage
	1.	Open a Document:
Open a Markdown (.md) or LaTeX (.tex) file in VS Code.
	2.	Trigger Conversion:
	•	Context Menu: Right-click the file in the Explorer or editor title area.
	•	For a Markdown file, select “Convert Markdown to LaTeX”.
	•	For a LaTeX file, select “Convert LaTeX to Markdown”.
	•	Command Palette: Press Ctrl+Shift+P (or Cmd+Shift+P on macOS) and search for the conversion command.
	3.	View Output:
The extension will use Pandoc to perform the conversion, create the new file in the same directory (with the appropriate file extension), and automatically open the converted document in a new editor tab.

## Contributing

Contributions are welcome! Feel free to fork the repository, submit issues, or create pull requests. For any questions or suggestions, please open an issue on the GitHub repository.

## License

This project is licensed under the MIT License.