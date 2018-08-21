// this will swap out the received javascript file for the local version

'use strict';

var LibraryInjector = {};

LibraryInjector.inject = function (requestDetails) {
	
	var originalFilename = LibraryFingerprinter.extractFilename(requestDetails);
	var injectedLibraryIdentifier = LibraryFingerprinter.libraryFromRequest(requestDetails);
	var injectedLibrary = userlibs[injectedLibraryIdentifier]; //accessing userlibs here is probably a step towards spaghetti code
	
	if( !StateManager.tabs[requestDetails.tabId] ) {
		StateManager.tabs[requestDetails.tabId] = {};
	}

	StateManager.tabs[requestDetails.tabId][originalFilename] = {injected: false, path: injectedLibrary.name || userlibs.UNKNOWN, original_filename: originalFilename};
	
	if(injectedLibrary == userlibs.UNKNOWN)
	{
		// possible improvement only add listener for known url patterns
		console.log("No match - injected library is %o", injectedLibrary);
		return;
	}
	
	console.log("Match for injectable library: %o", injectedLibrary);
	
	var injectedLibraryURL = browser.extension.getURL(injectedLibrary.path);
	console.log("Path for injected library: %o", injectedLibraryURL);
	injectedLibraryURL = injectedLibraryURL.toString();
	
	StateManager.tabs[requestDetails.tabId][originalFilename]['injected'] = true;
	
	return {
		'redirectUrl': injectedLibraryURL
	};
}

//TODO: maybe a listener here StateManager to send data to popup script

browser.webRequest.onBeforeRequest.addListener(
	LibraryInjector.inject,
	{urls: ["<all_urls>"], types:["script"]},
	["blocking"]
);