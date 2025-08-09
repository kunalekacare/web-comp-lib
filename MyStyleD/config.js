// config.js

const { isNotThemeToken, isThemeToken } = require('./src/filter.js');

/**
 * This function registers all the custom code Style Dictionary will need.
 */
function registerCustomCode(StyleDictionary) {
  StyleDictionary.registerTransform(require('./src/resolve-relative-references.js'));

  StyleDictionary.registerParser(require('./src/parser.js'));
  StyleDictionary.registerAction(require('./src/ios-colorsets-themed-action.js'));
  StyleDictionary.registerFormat(require('./src/compose-material-scheme.js'));
  StyleDictionary.registerFormat(require('./src/swift-uifont-formatter.js'));
  StyleDictionary.registerFormat(require('./src/compose-object-with-references.js'));
  
  StyleDictionary.registerFilter({ name: 'isNotThemeToken', filter: isNotThemeToken });
  StyleDictionary.registerFilter({ name: 'isThemeToken', filter: isThemeToken });
  StyleDictionary.registerFilter({ name: 'isColor', filter: (token) => token.$type === 'color' });
  StyleDictionary.registerFilter({ name: 'isLight', filter: (token) => token.theme === 'light' });
  StyleDictionary.registerFilter({ name: 'isDark', filter: (token) => token.theme === 'dark' });
  StyleDictionary.registerFilter({ name: 'isPatient', filter: (token) => token.brand === 'patient' });
  StyleDictionary.registerFilter({ name: 'isDoctor', filter: (token) => token.brand === 'doctor' });
  StyleDictionary.registerFilter({ name: 'isDimension', filter: (token) => token.$type === 'dimension' });
  StyleDictionary.registerFilter({ name: 'isTypography', filter: (token) => token.$type === 'typography' });
  StyleDictionary.registerFilter({ name: 'isNonThemeColor', filter: (token) => token.$type === 'color' && !token.attributes.theme });
}

/**
 * Generates the Style Dictionary configuration for a specific brand.
 */
function getConfig(brand) {
  return {
    source: [
      "tokens/minimal-tokens.json"
    ],
    platforms: {
      "css": {
        "transforms": ["attribute/cti", "name/kebab", "size/rem", "color/css"],
        "buildPath": "build/css/",
        "files": [{
          "destination": "_variables.css",
          "format": "css/variables"
        }]
      }
    }
  };
}

module.exports = { registerCustomCode, getConfig };