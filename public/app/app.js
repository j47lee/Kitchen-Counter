// inject the stuff service into main Angular module
angular.module('myApp', ['stuffService'])

// create controller and inject the Stuff factory
.controller('userController', function(Stuff){

  var vm = this;

  //get all the stuff
  Stuff.all()

    //promise object
    .success(function(data){

      //bind data to controller variable
      //this comes from stuffService
      vm.stuff = data;
    });

}); //end userController
