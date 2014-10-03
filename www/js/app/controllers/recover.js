angular.module('catchat.recover',[])

    .controller('RecoverController',['$scope','$location', '$ionicPopup' ,function($scope, $location, $ionicPopup){
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
        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Email Sent!',
                template: 'Please check your email to reset your password - meow!'
            });
//            alertPopup.then(function(res) {
//                console.log('Thank you for not eating my delicious ice cream cone');
//            });
        };
    }]);