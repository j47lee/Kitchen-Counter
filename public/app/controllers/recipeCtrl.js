angular.module('recipeCtrl', ['recipeService'])

.controller('recipeController', function(Recipe) {

	var vm = this;

	// set a processing variable to show loading things
	vm.processing = true;
	console.log('testing');

	// grab all the recipes at page load
	Recipe.all()
		.success(function(data) {
			// when all the recipes come back, remove the processing variable
			vm.processing = false;

			// bind the recipes that come back to vm.recipes
			vm.recipes = data;

		});

	// // function to delete a recipe
	// vm.deleteRecipe = function(id) {
	// 	vm.processing = true;
	//
	// 	Recipe.delete(id)
	// 		.success(function(data) {
	//
	// 			// get all recipes to update the table
	// 			// you can also set up your api
	// 			// to return the list of recipes with the delete call
	// 			Recipe.all()
	// 				.success(function(data) {
	// 					vm.processing = false;
	// 					vm.recipes = data;
	// 				});
	// 		});
	// }; //end delete recipe

})//end recipeController


.controller('recipeShowController', function($routeParams, Recipe){
	var vm = this;

})//end recipeShowController

// // controller applied to recipe creation page
// .controller('recipeCreateController', function(Recipe) {
//
// 	var vm = this;
//
// 	// variable to hide/show elements of the view
// 	// differentiates between create or edit pages
// 	vm.type = 'create';
//
// 	// function to create a recipe
// 	vm.saveRecipe = function() {
// 		vm.processing = true;
// 		vm.message = '';
//
// 		// use the create function in the recipeService
// 		Recipe.create(vm.recipeData)
// 			.success(function(data) {
// 				vm.processing = false;
// 				vm.recipeData = {};
// 				vm.message = data.message;
// 			});
//
// 	};
//
// })

// // controller applied to recipe edit page
// .controller('recipeEditController', function($routeParams, Recipe) {
//
// 	var vm = this;
//
// 	// variable to hide/show elements of the view
// 	// differentiates between create or edit pages
// 	vm.type = 'edit';
//
// 	// get the recipe data for the recipe you want to edit
// 	// $routeParams is the way we grab data from the URL
// 	Recipe.get($routeParams.recipe_id)
// 		.success(function(data) {
// 			vm.recipeData = data;
// 		// console.log(vm.recipeData);
// 		// console.log($routeParams.recipe_id);
// 		});
//
// 	// function to save the recipe
// 	vm.saveRecipe = function() {
// 		vm.processing = true;
// 		vm.message = '';
//
// 		// call the recipeService function to update
// 		Recipe.update($routeParams.recipe_id, vm.recipeData)
// 			.success(function(data) {
// 				vm.processing = false;
//
// 				// clear the form
// 				vm.recipeData = {};
//
// 				// bind the message from our API to vm.message
// 				vm.message = data.message;
// 			});
// 	};
//
// 	//function to add ingredient to current recipe
// 	vm.addIng = function(){
// 		vm.processing = true;
// 		vm.message = '';
// 		vm.recipeData;
// 		Recipe.get($routeParams.recipe_id)
// 			.success(function(data) {
// 				vm.recipeData = data;
// 			// console.log(vm.recipeData);
// 			// console.log($routeParams.recipe_id);
//
// 			});
//
// 			console.log(vm.ingredient);
//
// 			vm.recipeData.ingredients.push(vm.ingredient);
// 		//call the recipeService function to add ingredient and update
// 			console.log(vm.recipeData);
// 		Recipe.update($routeParams.recipe_id, vm.recipeData)
// 			.success(function(data){
// 				vm.processing = false;
// 				// console.log('ingredient', vm.ingredient);
// 				// console.log('recipeData', vm.recipeData);
// 				vm.recipeData = {};
// 				vm.message = data.message;
//
// 		});
// 	};//end addIng
//
// }) //end recipeEditController
