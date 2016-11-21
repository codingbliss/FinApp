import angular from 'angular';
import angularRouter from 'angular-route';
import authRouting from './auth.routes';
import AuthController from './auth.controller';
import AuthService from './auth.service';
import AuthInterceptor from './auth.factory';

export default angular.module('app.auth', ['ui.router', 'ui.bootstrap'])
    .config(authRouting)
    .service('AuthService', AuthService)
    .factory('AuthInterceptor',AuthInterceptor)
    .controller('AuthController', AuthController)
    .name;
