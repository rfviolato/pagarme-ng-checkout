'use strict';
(function(){

	angular.module('pg-ng-checkout', [])
	.provider('$pgCheckout' PgCheckout);

	function PgCheckout(){

		console.log('provider up!');

		return{

			//injectable service
			$get: $get,
			//config methods
			setApiKey: setApiKey,

		}

		function setApiKey(){
			
		}

		function $get(){
			
		}
		
	}

})(window, document);