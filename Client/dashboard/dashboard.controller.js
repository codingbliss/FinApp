export default function($scope, AuthService, $state){
    $scope.welcome = 'Welcome!!';

    $scope.logout = function() {
        AuthService.logout();
        $state.go('login');
    }
}