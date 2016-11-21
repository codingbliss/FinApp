'use strict';

import angular from 'angular';
import home from './home';
import auth from './auth';
import routing from './app.config';
import dashboard from './dashboard';

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', home, auth, dashboard])
  .config(routing)
  .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated'
  })
  .constant('API_ENDPOINT', {
    url: 'http://127.0.0.1:3000/api'
    //  For a simulator use: url: 'http://127.0.0.1:8080/api'
  })
  .run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
    console.log(AuthService);
    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
      if (!AuthService.isAuthenticated()) {
        //$state.go('dashboard');
        if (next.name !== 'login') {
          event.preventDefault();
          $state.go('login');
        }
      // }else
      // {
      //   event.preventDefault();
      //   $state.go('dashboard');
      // }
      }
    })
  });

  // .controller('AppController', function ($scope, $uibModal) {
  //   $scope.open = function () {
  //     $uibModal.open({
  //       templateUrl: 'auth/view/login.html'
  //     })
  //   }
  // });


// angular.module('myApp')
//   .controller('AuthController', function ($scope) {
//     $scope.message = 'Login test';

//     $scope.ok = function () {

//     }
//   })