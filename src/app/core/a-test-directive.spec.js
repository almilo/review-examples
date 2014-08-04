describe('A test directive', function () {
    beforeEach(module('app'));

    it('must use the template referenced in templateUrl', function () {
        var test = compileTemplate('<div a-test></div>');

        expect(test.text()).toBe('Hello World!!');
    });
});
