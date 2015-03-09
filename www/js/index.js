var interestack = angular.module('ui.bootstrap.interestack', ['ui.bootstrap']);

interestack.controller('interestackCtrl', function($scope, $http) {
	
	$scope.groups = [];
	$http.jsonp('http://interestack.herokuapp.com/get_gropus?callback=JSON_CALLBACK', {
	      params: {
	      }
	    }).then(function(response){
	    	response.data.groups.map(function(item){
	    		$scope.groups.push(item.name);
	        });
	    });
	
	$scope.template = "main_search.html";
	$scope.search = function () {
		$scope.group_question = document.getElementById("search").value;;
		$scope.template = "results.html";
	};
	$scope.view = function(){
		$scope.template = "sample_page.html";
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

