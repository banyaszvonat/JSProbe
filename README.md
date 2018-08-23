# JSProbe
A firefox addon for replacing loaded script files for edited versions.

# Structure
* `userlibs/` contains the script files that will get used as replacements by the addon
- `mappings.js` maps filenames, URLs to internal identifiers
* `userlibs.js` defines the mapping between internal identifiers, and the script files to swap them out for
