describe('A test controller', function () {
    var aTestServiceMock;

    beforeEach(module('app', function ($provide) {
        aTestServiceMock = createMock($provide, 'aTestService', ['say']);
    }));

    beforeEach(inject());

    it('must get injected the specifically mocked service and an application-wide mocked $translate service', function () {
        aTestServiceMock.say.andReturn('Hello World!!');

        var controller = createController('aTestController');

        expect(controller._scope.language).toEqual({locale: 'en'});
        expect(controller._scope.say).toBe('Hello World!!');
    });
});
