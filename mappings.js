// data structure for mapping paths, etc. to an internal identifier using userlibs

'use strict';

var mappings = {
  'path' : {},
  'filename' : {
	  'jquery.js' : userlibs.jquery,
	  'jquery.min.js' : userlibs.jquery,
	  'jquery-1.11.3.js' : userlibs.jquery
	  },
  'regex' : {}
};
