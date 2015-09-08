angular.module('recipeService', [])

.factory('Recipe', function($http) {

	// create a new object
	var recipeFactory = {};

	// get a single recipe
	recipeFactory.get = function(id) {
		return $http.get('/api/recipes/' + id);
	};

	// get all recipes
	recipeFactory.all = function() {
		return $http.get('/api/recipes/');
	};

	// create a recipe
	recipeFactory.create = function(recipeData) {
		return $http.post('/api/recipes/', recipeData);
	};

	// update a recipe
	recipeFactory.update = function(id, recipeData) {
		return $http.put('/api/recipes/' + id, recipeData);
	};

	// delete a recipe
	recipeFactory.delete = function(id) {
		return $http.delete('/api/recipes/' + id);
	};

	// return our entire recipeFactory object
	return recipeFactory;

});
