/**
 * ___ The Calculator ___
 *
 * I use Revealing Module Pattern, meaning I operate within function scope with public and private methods. The widget
 * is wrapped in an IFFE (Immediately-Invoked Function Expression), so it runs immediately when the file is run.
 * Methods starting with underscore are considered as private, i.e. _resetResults()
 *
 * @author Wojciech Mikołajewski <w.mikolajewski@protonmail.ch>
 * @type {{onPressDigitButton, onPressResultButton, Button, onPressAcButton, onPressSaveButton, onPressOperationButton}}
 */

export let CalculatorWidget = (function () {

	console.log('Widget loaded: Calculator');

	// Button identifiers
	const Button = {
		class: '.c_calc__btn',
		number: '[data-number]',
		operator: '[data-operator]',
		result: '[data-resolve]',
		clear: '[data-clear]',
		save: '[data-save]'
	};

	// Variables to be used
	let number1 = '';
	let number2 = '';
	let operator = '';
	let result = '';

	/**
	 * Handle select of a digit
	 * @param input
	 */
	let onPressDigitButton = function (input) {
		if(!result){
			if(!operator){
				number1 += input;
				$('#js-number1').html(number1);
			}
			else {
				number2 += input;
				$('#js-number2').html(number2);
			}
		}
	};

	/**
	 * Handle selection of operator type
	 * @param type
	 */
	let onPressOperationButton = function (type) {
		if(!result){
			operator = type;
			$('#js-operator').html(operator);
		}
	};

	/**
	 * Handle selection of result button
	 */
	let onPressResultButton = function(){
		if(number1 && number2 && operator){
			result = eval(number1 + operator + number2);
			$('#js-result').html(result);
		}
	};

	/**
	 * Handle selection of AC button
	 */
	let onPressAcButton = function(){
		_resetResults();
	};

	// Private function
	let _resetResults = function(){
		number1 = '';
		number2 = '';
		operator = '';
		result = '';

		$('#js-number1').html('');
		$('#js-number2').html('');
		$('#js-operator').html('');
		$('#js-result').html('0');
	};

	// Return public API
	return {
		onPressDigitButton: onPressDigitButton,
		onPressOperationButton: onPressOperationButton,
		onPressResultButton: onPressResultButton,
		onPressAcButton: onPressAcButton,
		Button: Button,
	};

})();



// Handle click on button with digit
$(CalculatorWidget.Button.number).click(function() {
	let _input = $(this).data('number');
	CalculatorWidget.onPressDigitButton(_input);
});

// Handle click on button with action
$(CalculatorWidget.Button.operator).click(function() {
	let _input = $(this).data('operator');
	CalculatorWidget.onPressOperationButton(_input);
});

// Handle click on button with result
$(CalculatorWidget.Button.result).click(function() {
	CalculatorWidget.onPressResultButton();
});

// Handle click on button with result
$(CalculatorWidget.Button.clear).click(function() {
	CalculatorWidget.onPressAcButton();
});


