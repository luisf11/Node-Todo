
var moduleTodo = angular.module('moduleTodo', []);

funtion TodoController($scope, $http) {
	
	$scope.formData = {};

 	// when landing on the page, get all todos and show them
	$http.get('/api/todos')

		.success(function(data) {

			$scope.todos = data;

			console.log(data);
		})

		.error(function(data) {
			console.log('Scope -> get() error: ' + data);
		});


	// when submitting the add form, send the text to the node API
	$scope.createTodo =  function() {

		$http.post('/api/todos', $scope.formData)

			.success(function(data) {

				$scope.formData{};

				$scope.todos = data;

				console.log(data);

			})

			.error(function(data) {
   				console.log('Scope -> createTodo() error: ' + data);
			});
	};


	// delete a todo after checking it
	$scope.deleteTodo = function(id) {

		$http.delete('/api/todos/' + id)
			
			.success(function(data) {

				$scope.todos = data;

				console.log(data);

			})

			.error(function(data) {
				console.log('Scope -> deleteTodo() error: ' + data);
			});
	}





}