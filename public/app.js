'use strict';
(function(){

	angular.module('pg-ng-checkout-demo', ['pg-ng-checkout'])
	.config(config)
	.run(run);

	function config($pgCheckoutProvider){

		$pgCheckoutProvider.setEncryptKey('ek_test_mSVAcBZidrQieIX53fWPlLfchMMk6A');
		
	}

	function run($pgCheckout){

		$pgCheckout.open({"customerData":false, "amount":"100000", "createToken": "false"}, t);

		function t(){

			console.log('and we have a callback!');
			
		}
		
	}
	
})(window, document);