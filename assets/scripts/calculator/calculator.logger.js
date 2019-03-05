import {CalculatorWidget} from './calculator.core';

export let CalculatorResultLogger = (function (CalculatorWidget) {
	console.log('Widget module loaded: Calculator Result Loger');

	let _calculations = function(){

		let currentDate = new Date();

		let _calcDataObject = {
			result: 666,
			ip: '123.123.123.123',
			date: currentDate.getTime(),
			browser: 'Firefox'
		};

		// AJAX request
		$.ajax({
			type: 'POST',
			url: '/calculations.php',
			data:{
				calcData: _calcDataObject
			},
			success:function(html) {
				alert(html);
			}
		});
	};

	/**
	 * Handle on press save action
	 */
	CalculatorWidget.onPressSaveButton = function(){
		console.log('calculation');
		_calculations();
	};

	return CalculatorWidget;

})(CalculatorWidget || {});

// Handle click on button with result
$(CalculatorWidget.Button.save).click(function() {
	CalculatorWidget.onPressSaveButton();
});

