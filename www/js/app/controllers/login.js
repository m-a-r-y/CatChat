angular.module('catchat.login',[])

    .controller('LoginController',['$scope','$location',function($scope, $location){
        $scope.goLogin = function() {
            $location.path('/login');
        }
        $scope.goRegister = function() {
            $location.path('/register');
        }
        $scope.goRecover = function() {
            $location.path('/recover');
        }
        $scope.goHome = function() {
            $location.path('/home');
        }
    }]);