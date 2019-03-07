/**
 * ___ The Calculator ___
 *
 * I use Revealing Module Pattern, therefore code stays in a function scope with public and private methods. The widget
 * is wrapped in an IFFE (Immediately-Invoked Function Expression), so it runs immediately when the file is run.
 * Methods starting with underscore are considered as private, i.e. _resetResults()
 *
 * @author Wojciech Mikołajewski <w.mikolajewski@protonmail.ch>
 */

export let CalculatorWidget = (function () {
	// console.log('Widget: Calculator');

	// Button identifiers
	const Button = {
		class: '.c_calc__btn',
		number: '[data-number]',
		operator: '[data-operator]',
		result: '[data-resolve]',
		clear: '[data-clear]',
		save: '[data-save]'
	};

	// Hooks to display
	const Display = {
		number1: '[data-calc-number1]',
		number2: '[data-calc-number2]',
		operator: '[data-calc-operator]',
		result: '[data-calc-result]'
	};

	// Variables to be used
	let number1 = '';
	let number2 = '';
	let operator = '';
	let result = '';

	let userDataObject = {
		result: result,
		// -- Data below we can take easier via PHP
		// date: currentDateTime.getTime()
		// ip: '123.123.123.123',
		// browser: 'Firefox'
	};

	/**
	 * Handle select of a digit
	 * @param input
	 */
	let onPressDigitButton = function (input) {
		if(!result){
			if(!operator){
				number1 += input;
				$(Display.number1).text(number1);
			}
			else {
				number2 += input;
				$(Display.number2).text(number2);
			}
		}
	};

	/**
	 * Handle selection of operator type
	 * @param type
	 */
	let onPressOperationButton = function (type) {
		if(!result && number1){
			operator = type;
			$(Display.operator).text(operator);
		}
	};

	/**
	 * Handle selection of result button
	 */
	let onPressResultButton = function(){
		if(number1 && number2 && operator){
			result = eval(number1 + operator + number2);
			$(Display.result).text(result);
			userDataObject.result = result;
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

		$(Display.number1).text('');
		$(Display.number2).text('');
		$(Display.operator).text('');
		$(Display.result).text('0');
	};

	// Return public API
	return {
		onPressDigitButton: onPressDigitButton,
		onPressOperationButton: onPressOperationButton,
		onPressResultButton: onPressResultButton,
		onPressAcButton: onPressAcButton,
		Button: Button,
		userDataObject: userDataObject
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


