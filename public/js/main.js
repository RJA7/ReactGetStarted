require.config({
    paths: {
        "react"   : "libs/react/react-with-addons",
        "reactDom": "libs/react/react-dom",
        "babel"   : "libs/requirejs-react-jsx/babel-5.8.34.min",
        "jsx"     : "libs/requirejs-react-jsx/jsx",
        "text"    : "libs/requirejs-text/text"
    },

    shim: {
        "react": {
            "exports": "React"
        }
    },

    config: {
        babel: {
            sourceMaps   : "inline", // One of [false, 'inline', 'both']. See https://babeljs.io/docs/usage/options/
            fileExtension: ".jsx" // Can be set to anything, like .es6 or .js. Defaults to .jsx
        }
    }
});

require(['jsx!app'], function (App) {

    var app = new App();
    app.init();

});
