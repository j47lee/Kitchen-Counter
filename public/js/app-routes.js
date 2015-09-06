// inject 'ngRoute' for routing
angular.module('kitchenRoutes', ['ngRoute'])

//route configuration
.config(function($routeProvider, $locationProvider){
  $routeProvider
    // home page route
    .when('/', {
      templateUrl  : 'views/pages/home.html',
      controller   : 'homeController',
      controllerAs : 'home'
    })

    // about page route
    .when('/about', {
      templateUrl  : 'views/pages/about.html',
      controller   : 'aboutController',
      controllerAs : 'about'
    })

    // contact page route
    .when('/contact', {
      templateUrl  : 'views/pages/contact.html',
      controller   : 'contactController',
      controllerAs : 'contact'
    });

  //removes # from the URL (aesthetic)
  $locationProvider.html5Mode(true);
});
