'use strict';
(function(){

	angular.module('pg-ng-checkout', [])
	.config(config);

	function config($pgCheckoutProvider){

		console.log($pgCheckoutProvider);
		
	}
	
})(window, document);