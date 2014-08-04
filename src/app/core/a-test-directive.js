angular.module('app')
    .directive('aTest', function () {
        return {
            replace: true,
            templateUrl: 'production/core/a-test-directive.tpl.html',
            link: function (scope) {
                scope.text = 'Hello World!!';
            }
        };
    });
