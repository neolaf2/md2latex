import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  // Command to convert Markdown to LaTeX. It now accepts a URI argument.
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.convertMdToLatex', (uri: vscode.Uri) => {
      convertDocument(uri, 'markdown', 'latex');
    })
  );

  // Command to convert LaTeX to Markdown.
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.convertLatexToMd', (uri: vscode.Uri) => {
      convertDocument(uri, 'latex', 'markdown');
    })
  );
}

function convertDocument(uri: vscode.Uri | undefined, from: string, to: string) {
  let inputFilePath: string;
  // Prefer the URI from the context menu. If not available, fallback to the active editor.
  if (uri && uri.fsPath) {
    inputFilePath = uri.fsPath;
  } else {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor or file selected.');
      return;
    }
    inputFilePath = editor.document.fileName;
  }

  // Determine the output file extension.
  const outputFilePath = inputFilePath.replace(
    path.extname(inputFilePath),
    to === 'latex' ? '.tex' : '.md'
  );

  // Build the pandoc command.
  const command = `pandoc -f ${from} -t ${to} "${inputFilePath}" -o "${outputFilePath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      vscode.window.showErrorMessage(`Conversion error: ${stderr}`);
      return;
    }
    vscode.window.showInformationMessage(`Converted file saved as ${outputFilePath}`);
    // Open the converted file.
    vscode.workspace.openTextDocument(outputFilePath).then((doc) => {
      vscode.window.showTextDocument(doc);
    });
  });
}
