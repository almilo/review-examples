beforeEach(function () {
    window.compileTemplate = function (template) {
        return getInjector().invoke(compileTemplateFactory)(template);

        function compileTemplateFactory($rootScope, $compile) {
            return function (template) {
                var scope = $rootScope.$new(),
                    compiledTemplate = $compile(template)(scope);

                scope.$digest();

                return compiledTemplate;
            };
        }
    };

    window.createController = function (controllerName) {
        return getInjector().invoke(controllerFactory)(controllerName);

        function controllerFactory($rootScope, $controller) {
            return function (controllerName) {
                var scope = $rootScope.$new(),
                    controller = $controller(controllerName, {$scope: scope});

                controller._scope = scope;

                return controller;
            };
        }
    };

    function getInjector() {
        var injector;

        inject(function ($injector) {
            injector = $injector;
        });

        return injector;
    }
});

window.createMock = function ($provide, mockName, mockMethods) {
    var mock = jasmine.createSpyObj(mockName, mockMethods);

    $provide.value(mockName, mock);

    return mock;
};
