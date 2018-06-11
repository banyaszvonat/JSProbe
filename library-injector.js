// this will swap out the received javascript file for the local version

'use strict';

var LibraryInjector = {};

LibraryInjector.inject = function (requestDetails) {
	
	var internalLibraryIdentifier = LibraryFingerprinter.libraryFromRequest(requestDetails)
	var injectedLibrary = userlibs[internalLibraryIdentifier];
	
	
	if(injectedLibrary == userlibs.UNKNOWN)
	{
		// possible improvement only add listener for known url patterns
		return;
	}
	
	console.log("URL match for injectable library: %o", injectedLibrary);
	
	var injectedLibraryURL = chrome.extension.GetURL(injectedLibrary.path);
	
	return {
		redirectUrl: injectedLibraryURL
	};
}

browser.webRequest.onBeforeRequest.addListener(
	LibraryInjector.inject,
	{urls: ["<all_urls>"], types:["script"]},
	"blocking"
);