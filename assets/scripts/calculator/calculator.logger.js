/**
 * ___ The Calculator ___
 *
 * I use Revealing Module Pattern, therefore code stays in a function scope with public and private methods. The widget
 * is wrapped in an IFFE (Immediately-Invoked Function Expression), so it runs immediately when the file is run.
 * Methods starting with underscore are considered as private, i.e. _resetResults()
 *
 * @author Wojciech Mikołajewski <w.mikolajewski@protonmail.ch>
 */


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
			url: '/index.php',
			data:{
				userDataObject: _calcDataObject
			},
			success:function(html) {
				alert(html);
				// console.log(html);
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

