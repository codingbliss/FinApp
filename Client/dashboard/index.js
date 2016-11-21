import angular from 'angular';
import angularRouter from 'angular-route';
import dashboardRouting from './dashboard.routes';
import DashboardController from './dashboard.controller';

export default angular.module('app.dashboard', ['ui.router', 'ui.bootstrap'])
    .config(dashboardRouting)
    .controller('DashboardController', DashboardController)
    .name;
