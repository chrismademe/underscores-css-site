const fs = require('fs');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = (config) => {
    // Navigation Plugin
    config.addPlugin(eleventyNavigationPlugin);

    // Passthrough Files/Directories
    let passThrough = ['src/assets', 'src/robots.txt', 'src/.htaccess'];
    passThrough.forEach((item) => {
        config.addPassthroughCopy(item);
    });

    // Setup Markdown config
    let md = require('markdown-it');
    let mdPrism = require('markdown-it-prism');
    let options = { html: true };
    config.setLibrary('md', md(options).use(mdPrism));

    // Component Example
    config.addFilter('example', function (input) {
        return `<div class="component-example">${input}</div>`;
    });

    // Handle 404 locally
    config.setBrowserSyncConfig({
        callbacks: {
            ready: (err, browserSync) => {
                const content404 = fs.readFileSync('_site/404.html');

                browserSync.addMiddleware('*', (req, res) => {
                    // Provides the 404 content without redirect.
                    res.write(content404);
                    res.end();
                });
            },
        },
    });

    return {
        dir: {
            input: 'src',
            layouts: '_layouts',
        },
    };
};
