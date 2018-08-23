// Script for the addon popup

'use strict';

function displayFiles() {
	var currentTab = browser.tabs.query({active: true, currentWindow: true});
	var containerDiv = document.getElementById('files-container');
	
	for (jsFile in StateManager.tabs[currentTab])	{
		var filenameDiv = containerDiv.createElement('div');
		var nameDiv = containerDiv.createElement('div');
		
		var filename = document.createTextNode(jsFile.original_filename);
		var libName = document.createTextNode(jsFile.path);
		
		filenameDiv.append(filename);
		nameDiv.append(libName);
		
		containerDiv.append(filenameDiv);
		containerDiv.append(nameDiv);
	}
};

displayFiles();