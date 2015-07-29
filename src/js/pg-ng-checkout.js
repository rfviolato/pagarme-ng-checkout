'use strict';
(function(){

	angular.module('pg-ng-checkout', [])
	.provider('$pgCheckout', PgCheckout);

	function PgCheckout(){

		var _encryptKey;

		return{

			//config methods
			setEncryptKey: setEncryptKey,

			//injectable service
			$get: $get,

		}

		function setEncryptKey(key){

			_encryptKey = key;
			
		}

		function $get($q, $interval){

			var checkout;
			var get = {

				open: open,

			};

			return get;

			function open(params, success){

				_getInstance(success).then(function(checkout){

					checkout.open(params);
					
				});
				
			}

			function _getInstance(success){


				var promise = $q(function(resolve, reject){

					var elapsedTime = 0;
					var intervalTime = 20;
					var interval = $interval(function(){

						if(PagarMeCheckout){

							if(PagarMeCheckout.Checkout && _encryptKey){

								var _data = {'encryption_key': _encryptKey, success: success};

								$interval.cancel(interval);
								resolve(new PagarMeCheckout.Checkout(_data));
								

							}

						}else if(elapsedTime === 10000){

							$interval.cancel(interval);
							reject('load timeout');

						}

						elapsedTime += intervalTime;
						
					}, intervalTime);

					
				});

				return promise;

				
			}
			
		}
		
	}

})(window, document);