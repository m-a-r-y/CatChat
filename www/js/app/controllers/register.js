angular.module('catchat.register',[])

    .controller('RegisterController',['$scope', '$location', function($scope, $location){
        $scope.goLogin = function() {
            $location.path('/login');
        }
        $scope.goRegister = function() {
            $location.path('/register');
        }
    }]);
