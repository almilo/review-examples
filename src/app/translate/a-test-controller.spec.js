describe('A test controller', function () {
    var aTestServiceMock, createController;

    beforeEach(module('app', function($provide) {
        aTestServiceMock = jasmine.createSpyObj('aTestServiceMock', ['say']);
        $provide.value('aTestService', aTestServiceMock);
    }));

    beforeEach(inject(function($controller, $rootScope) {
        createController = function() {
            var scope = $rootScope.$new();
            $controller('aTestController', {$scope: scope});

            return scope;
        };
    }));

    it('must get injected the specifically mocked service and an application-wide mocked $translate service', function () {
        aTestServiceMock.say.andReturn('Hello World!!');

        var scope = createController();

        expect(scope.language).toEqual({locale: 'en'});
        expect(scope.say).toBe('Hello World!!');
    });
});
