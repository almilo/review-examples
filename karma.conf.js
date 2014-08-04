module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',

            'src/app/**/*-module.js',
            'src/app/**/*.js',
            'src/app/**/*.tpl.html'
        ],

        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        reporters: ['dots'],

        browsers: ['Chrome'],
        autoWatch: true,
        singleRun: false,

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/app/',
            prependPrefix: 'production/',
            moduleName: 'app'
        }
    });
};
