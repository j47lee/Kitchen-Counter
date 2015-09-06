// inject 'kitchenRoutes' from app-routes.js
angular.module('kitchenApp', ['kitchenRoutes'])

// CONTROLLERS ================================================
//controller for ENTIRE site
.controller('mainController', function(){
  var vm = this;
}) //end mainController

//home page specific controller
.controller('homeController', function(){
  var vm = this;
  vm.message = 'Welcome to the Home Page';
}) //end homeController

//about page specific controller
.controller('aboutController', function(){
  var vm = this;
  vm.message = 'Welcome to the About Page';
}) //end aboutController

.controller('contactController', function(){
  var vm = this;
  vm.message = 'Welcome to the Contact Page'
});
