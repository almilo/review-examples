angular.module('app')
    .controller('aTestController', function ($scope, aTestService, $translate) {
        $scope.language = $translate.use();
        $scope.say = aTestService.say();
    });
