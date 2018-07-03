// this will swap out the received javascript file for the local version

'use strict';

var LibraryInjector = {};

LibraryInjector.inject = function (requestDetails) {
	
	var injectedLibrary = LibraryFingerprinter.libraryFromRequest(requestDetails);
	
	if(injectedLibrary == userlibs.UNKNOWN)
	{
		// possible improvement only add listener for known url patterns
		console.log("No match - injected library is %o", injectedLibrary);
		return;
	}
	
	console.log("Match for injectable library: %o", injectedLibrary);
	
	var injectedLibraryURL = browser.extension.getURL(injectedLibrary.path);
	
	return {
		redirectUrl: injectedLibraryURL
	};
}

browser.webRequest.onBeforeRequest.addListener(
	LibraryInjector.inject,
	{urls: ["<all_urls>"], types:["script"]},
	["blocking"]
);