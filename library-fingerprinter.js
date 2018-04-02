// magic to identify various libraries goes here
// ideally it will be deterministic, and regex based matching is already stretching it
// in the future, BuiltWith-like functionality can be added


'use strict';

var LibraryFingerprinter = {};


// Entry point, passes off to sub-functions (e.g. determining library by pathname)
// Returns a text identifier that the mapper can resolve to a local copy
LibraryFingerprinter.libraryFromRequest = function (libraryRequest) {
	var filename = this.extractFilename(libraryRequest);
	return this.libraryFromFilename(filename);
}

LibraryFingerprinter.libraryFromPath = function (libraryPath) {
	return mappings.path[libraryPath] || userlibs.UNKNOWN;
}

LibraryFingerprinter.libraryFromFilename = function (libraryFilename) {
	return mappings.filename[libraryFilename] || userlibs.UNKNOWN;
}

LibraryFingerprinter.libraryFromFeature = function (libraryFeature) {
	console.log("not implemented yet");
}

LibraryFingerprinter.libraryFromRegexMatch = function (regex, content) {
	console.log("not implemented yet");
}


// Helper functions 

LibraryFingerprinter.extractPath = function (libraryRequest) {
	console.log("not implemented yet");
}

LibraryFingerprinter.extractFilename = function (libraryRequest) {
	console.log("not implemented yet");
}

LibraryFingerprinter.isJavaScript = function (libraryRequest) {
	return true;
}
