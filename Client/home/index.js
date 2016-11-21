import angular from 'angular';
import angularRouter from 'angular-route';
import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home',['ui.router'])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;
    