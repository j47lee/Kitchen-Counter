angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'app/views/pages/home.html'
		})

		// login page
		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
   			controller  : 'mainController',
    		controllerAs: 'login'
		})

		// show all users
		.when('/users', {
			templateUrl: 'app/views/pages/users/all.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		// form to create a new user
		// same view as edit page
		.when('/users/create', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})

		// page to user profile
		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/show.html',
			controller: 'userEditController',
			controllerAs: 'user'
		})

		// page to edit a user
		.when('/users/:user_id/edit', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		})

		// page to add user ingredient
		.when('/users/:user_id/add_ing', {
			templateUrl: 'app/views/pages/users/add_ing.html',
			controller: 'userEditController',
			controllerAs: 'user'
		})

		// page to edit user ingredient
		.when('/users/:user_id/edit_ing', {
			templateUrl: 'app/views/pages/users/edit_ing.html',
			controller: 'userEditController',
			controllerAs: 'user'
		})


		//RECIPES =================================================================
		// show all recipes
		.when('/recipes', {
			templateUrl: 'app/views/pages/recipes/all.html',
			controller: 'recipeController',
			controllerAs: 'recipe'
		})

		// page to one recipe
		.when('/recipes/:recipe_id', {
			templateUrl: 'app/views/pages/recipes/show.html',
			controller: 'recipeEditController',
			controllerAs: 'recipe'
		})

	$locationProvider.html5Mode(true);

});
