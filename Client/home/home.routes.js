export default function ($stateProvider) {
    // $routeProvider
    //     .when('/', {
    //         templateUrl: 'home/view/home.html',
    //         controller: 'HomeController'
    //     })

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/view/home.html',
            controller : 'HomeController'
        });
}