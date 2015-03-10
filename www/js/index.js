var interestack = angular.module('ui.bootstrap.interestack', ['ui.bootstrap']);

//Controlador único del la aplicación
interestack.controller('interestackCtrl', function($scope, $http) {
	
	$scope.groups = [];
	//Precarga los grupos para que estén disponibles para la consulta.
	$http.jsonp('http://interestack.herokuapp.com/get_gropus?callback=JSON_CALLBACK', {
	      params: {
	      }
	    }).then(function(response){
	    	response.data.groups.map(function(item){
	    		$scope.groups.push(item);
	        });
	    });
	
	
	//Manejo de las vistas y eventos.
	$scope.template = "main_search.html";
	$scope.search = function () {
		$scope.group_question = document.getElementById("search").value;;
		$scope.template = "results.html";
	};
	$scope.view = function(g){
		$scope.toView = g;
		$scope.template = "view_group.html";
	};
	$scope.addForm = function(g){
		$scope.toAdd = g;
		$scope.template = "add.html";
	};
	
	$scope.add = function(){
		//$http.jsonp('http://interestack.herokuapp.com/users?callback=JSON_CALLBACK', {
		$http.jsonp('http://127.0.0.1:5000/users?callback=JSON_CALLBACK', {
		      params: {
		    	  user: $scope.user,
				  email: $scope.email,
				  group: $scope.toAdd.name
		      }
		    }).then(function(response){
		    	response.data.users.map(function(item){
		    		//$scope.groups.push(item);
		    		alert(item.name);
		        });
		    });
	};

});
//Filtro para la búsqueda por nombre.
interestack.filter('search_for_groups', function(){

	return function(arr, group_question){
		if(!group_question){
			return arr;
		}
		var result = [];
		group_question = group_question.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.toLowerCase().indexOf(group_question) !== -1){
				result.push(item);
			}
		});
		return result;
	};
});

