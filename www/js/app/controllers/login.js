angular.module('catchat.login',[])

    .controller('LoginController',['$scope','$location',function($scope, $location){
        /*$scope.user={};
         $scope.next=function(){
         //USER.name=$scope.user.name;
         $state.go('chat');
         }*/
        $scope.goLogin = function() {
            $location.path('/login');
        }
        $scope.goRegister = function() {
            $location.path('/register');
        }
    }]);