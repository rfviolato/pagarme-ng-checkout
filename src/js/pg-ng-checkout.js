'use strict';
(function(){

	angular.module('pg-ng-checkout', [])
	.provider('$pgCheckout', PgCheckout);

	function PgCheckout(){

		var apiKey;

		return{

			//injectable service
			$get: $get,

			//config methods
			setApiKey: setApiKey,

		}

		function setApiKey(key){

			apiKey = key;
			
		}

		function $get(){
			
		}
		
	}

})(window, document);