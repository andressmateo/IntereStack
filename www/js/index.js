/*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

}*/
var interestack = angular.module('ui.bootstrap.interestack', ['ui.bootstrap']);

interestack.controller('interestackCtrl', function($scope, $http) {
	
	$scope.groups =  ["Calculo 1 - Felix", "Semillero de programación", "Aprendiendo Haskell", 
	                  "Mecánica de fluidos", "Simulación y modelación", "Cálculo 3", "Monitorías Juan Pablo Álvarez",
	                  "Observadores de aves", "SERES", "Becados ANDI", "Estudiantes becados", "Ingeniería de Sistemas 2013-1",
	                  "¡Speak english with us!", "Cálculo 2", "Cálculo 3 - Espitia", "Pre-cálculo"];
	
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

