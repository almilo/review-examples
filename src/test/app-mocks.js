angular.module('ngMock')
    .provider({
        $translate: function () {
            this.$get = function () {
                var translateMock = jasmine.createSpyObj('$translateMock', ['use']);
                translateMock.use.andReturn({
                    locale: 'en'
                });

                return translateMock;
            }
        }
    });
