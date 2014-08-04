describe('A test directive', function () {
    var compileFn;

    beforeEach(module('app'));

    beforeEach(inject(function ($compile, $rootScope) {
        compileFn = function (template) {
            var scope = $rootScope.$new(),
                compileFn = $compile(template)(scope);
            scope.$digest();

            return compileFn;
        }
    }));

    it('must use the template referenced in templateUrl', function () {
        var test = compileFn('<div a-test></div>');

        expect(test.text()).toBe('Hello World!!');
    });
});
