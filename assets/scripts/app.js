// Widget namespace
let Widget = {};

// Widget calculator
Widget.Calculator = (function () {

	// Button identifiers
	const Button = {
		class: '.c_calc__btn',
		number: '[data-number]',
		operator: '[data-operator]',
		result: '[data-resolve]',
		action: '[data-action]',
	};

	let number1 = '';
	let number2 = '';
	let operator = '';
	let result = '';

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

	let onPressOperationButton = function (type) {
		if(!result){
			operator = type;
			$('#js-operator').html(operator);
		}
	};

	let onPressResultButton = function(){
		if(number1 && number2 && operator){
			result = eval(number1 + operator + number2);
			$('#js-result').html(result);
		}
	};

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
$(Widget.Calculator.Button.number).click(function() {
	let _input = $(this).data('number');
	Widget.Calculator.onPressDigitButton(_input);
});

// Handle click on button with action
$(Widget.Calculator.Button.operator).click(function() {
	let _input = $(this).data('operator');
	Widget.Calculator.onPressOperationButton(_input);
});

// Handle click on button with result
$(Widget.Calculator.Button.result).click(function() {
	Widget.Calculator.onPressResultButton();
});

// Handle click on button with result
$(Widget.Calculator.Button.action).click(function() {
	Widget.Calculator.onPressAcButton();
});
