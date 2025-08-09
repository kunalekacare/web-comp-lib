// build.js

const { registerCustomCode, getConfig } = require('./config.js');

(async () => {
    try {
        const styleDictionaryModule = await import('style-dictionary');
        const StyleDictionary = styleDictionaryModule.default;
        
        if (!StyleDictionary) throw new Error("Could not find StyleDictionary.default.");

        // Register all your custom code just once.
        registerCustomCode(StyleDictionary);

        // --- THE FIX: Call getConfig to get a configuration ---
        const config = getConfig('patient');
        
        // Create a Style Dictionary instance using this config.
        const sd = new StyleDictionary(config);
        
        await sd.buildAllPlatforms();

    } catch (error) {
        console.error('\n❌ Build failed! The show cannot go on:');
        // Add more detailed logging for reference errors
        if (error.message && error.message.includes('Reference Errors')) {
            console.error(error.details || error.message);
        } else {
            console.error(error);
        }
        process.exit(1);
    }
})();