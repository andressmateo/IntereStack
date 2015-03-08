var interestack = angular.module('ui.bootstrap.interestack', ['ui.bootstrap']);

interestack.controller('interestackCtrl', function($scope, $http) {
	
	/*$scope.groups = ["Calculo 1 - Felix", "Semillero de programación", "Aprendiendo Haskell",
	                 "Mecánica de fluidos", "Simulación y modelación", "Cálculo 3", "Monitorías Juan Pablo Álvarez",
	                 "Observadores de aves", "SERES", "Becados ANDI", "Estudiantes becados",
	                 "Ingeniería de Sistemas 2013-1",
	                 "¡Speak english with us!", "Cálculo 2", "Cálculo 3 - Espitia", "Pre-cálculo"];
	*/
	
	$scope.groups = [];
	/*$http.jsonp('http://interestack.herokuapp.com/get_gropus?callback=JSON_CALLBACK', {
	//$http.jsonp('http://127.0.0.1:5000/get_gropus?callback=JSON_CALLBACK', {
	      params: {
	      }
	    }).then(function(response){
	    	response.data.names.map(function(item){
	    		$scope.groups.push(item.name);
	        });
	    });*/
	
	//$http.jsonp('http://127.0.0.1:5000/get_gropus?callback=JSON_CALLBACK')
	//url = "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";
	
	
	url = "http://interestack.herokuapp.com/get_gropus?callback=JSON_CALLBACK";
	$http.jsonp(url).success(function(data){
        /*console.log(data.groups);
        response.data.groups.map(function(item){
    		$scope.groups.push(item);
        });*/
    }).error(function(data, status, headers, config) {
        $scope.error = true;
        alert("error");
    });
	
	
	$scope.template = "main_search.html";
	$scope.search = function () {
		$scope.group_question = document.getElementById("search").value;;
		$scope.template = "results.html";
	};


});

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

