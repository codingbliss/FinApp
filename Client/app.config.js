function routing($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/home');
    // $urlRouterProvider.otherwise(function($injector, $location){
    //     var $state = $injector.get('$state');
    //     $state.go('home');
    // });
    $stateProvider.state("otherwise", {
        url: "*path",
        template: "",
        controller: [
            '$state',
            function ($state) {
                $state.go('dashboard')
            }]
    });

};

export default routing;