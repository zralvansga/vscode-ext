// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "heyworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('heyworld.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hey World! by @zralvansga');
		// vscode.window.showWarningMessage('Hey World! by @zralvansga');
		const test = vscode.window.createWebviewPanel(
			'test',
			'Ini webview test',
			vscode.ViewColumn.Two,
			{}
		  );
		//   test.webview.html = getWebviewContent();
		
	});
	let disposable2 = vscode.commands.registerCommand('heyworld.start', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hey World! by @zralvansga');
		// vscode.window.showWarningMessage('Hey World! by @zralvansga');
		const start = vscode.window.createWebviewPanel(
			'start',
			'Ini webview start',
			vscode.ViewColumn.Active,
			{}
		  );
		//   test.webview.html = getWebviewContent();
		
	});
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
	
		
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
