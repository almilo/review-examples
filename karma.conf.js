module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',

            'src/test/**/*.js',

            'src/app/**/*-module.js',
            'src/app/**/*.js',
            'src/app/**/*.tpl.html'
        ],

        preprocessors: {
            '**/*.html': ['ng-html2js'],
            'src/app/**/!(*spec).js': ['coverage']
        },

        reporters: ['dots', 'coverage'],

        browsers: ['Chrome'],
        autoWatch: true,
        singleRun: false,

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/app/',
            prependPrefix: 'production/',
            moduleName: 'app'
        },

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
