export default function ($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/view/dashboard.html',
            controller: 'DashboardController'
        });
}