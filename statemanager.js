//State manager for keeping track of what's injected on which tabs
//enabled/disabled state, etc
// TODO: API

//StateManager.tabs[requestDetails.tabId][originalFilename] = {injected: false, path: injectedLibrary.name || userlibs.UNKNOWN, original_filename: originalFilename};

//TODO send out messages to all the tabs

'use strict';

var StateManager = {};

StateManager.tabs = {};