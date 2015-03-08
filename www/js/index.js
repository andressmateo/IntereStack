var interestack = angular.module('ui.bootstrap.interestack', ['ui.bootstrap']);

interestack.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

interestack.controller('interestackCtrl', function($scope, $http) {
	
	$scope.groups =  [];
	
	
	//$http.get('http://interestack.herokuapp.com/get_gropus', {
	$http.get('http://127.0.0.1:5000/get_gropus', {
	      params: {
	      }
	    }).then(function(response){
	    	response.data.names.map(function(item){
	    		$scope.groups.push(item.name);
	        });
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

