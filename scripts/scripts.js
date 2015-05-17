/**
 * @ngdoc overview
 * @name gitself
 * @description
 * # gitself
 *
 * Main module of the application.
 */
angular.module('gitself', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngMaterial',
    'ngFabForm'
  ]);

/**
 * @ngdoc overview
 * @name gitself.routes
 * @description
 * # gitself.routes
 *
 * Routes module. All app states are defined here.
 */

angular.module('gitself')
    .config(["$stateProvider", function ($stateProvider)
    {
        'use strict';

        $stateProvider
            /* STATES-NEEDLE - DO NOT REMOVE THIS */;

    }]);