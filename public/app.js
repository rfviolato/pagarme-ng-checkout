'use strict';
(function(){

	angular.module('pg-ng-checkout-demo', ['pg-ng-checkout'])
	.config(config)
	.directive('checkoutBtn', CheckoutBtn);

	function config($pgCheckoutProvider){

		$pgCheckoutProvider.setEncryptKey('ek_test_mSVAcBZidrQieIX53fWPlLfchMMk6A');
		
	}

	function CheckoutBtn($pgCheckout){

		var directive = {

			link: postLink,

		};

		return directive;

		function postLink($scope, $element){

			$element.on('click', function(){

				$pgCheckout.open({"customerData":false, "amount":"100000", "createToken": "false"}, callback);

				function callback(){

					console.log('Purchase Done!');
					
				}
				
			});
			
		}
		
	}
	
})(window, document);