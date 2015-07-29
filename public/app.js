'use strict';
(function(){

	angular.module('pg-ng-checkout-demo', ['pg-ng-checkout'])
	.config(config)
	.run(run);

	function config($pgCheckoutProvider){

		$pgCheckoutProvider.setEncryptKey('ek_test_mSVAcBZidrQieIX53fWPlLfchMMk6A');
		
	}

	function run($pgCheckout){

		var checkoutPromise = $pgCheckout.getCheckout();

		checkoutPromise.then(function(checkout){

			console.log(checkout);
			
		});

		checkoutPromise.then(function(checkout){

			console.log(checkout);
			
		});
		
	}
	
})(window, document);