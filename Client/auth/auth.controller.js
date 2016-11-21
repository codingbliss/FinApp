export default function ($scope, AuthService, $state) {
    $scope.user = {
        name: '',
        password: ''
    };

    $scope.login = function () {
        AuthService.login($scope.user).then(function (msg) {
            $state.go('dashboard');
        }, function (errMsg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: errMsg
            });
        });
    };
}