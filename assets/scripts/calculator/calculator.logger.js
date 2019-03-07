import {CalculatorWidget} from './calculator.core';
import AWN from 'awesome-notifications';
let NotifierModule = new AWN();

/**
 * ___ The Calculator ___
 *
 * I use Revealing Module Pattern, therefore code stays in a function scope with public and private methods. The widget
 * is wrapped in an IFFE (Immediately-Invoked Function Expression), so it runs immediately when the file is run.
 * Methods starting with underscore are considered as private, i.e. _resetResults()
 *
 * @author Wojciech Mikołajewski <w.mikolajewski@protonmail.ch>
 */


export let CalculatorResultLogger = (function (CalculatorWidget) {
	// console.log('Widget loaded: Calculator Result Loger');

	/**
	 * Handle on press save action
	 */
	CalculatorWidget.onPressSaveButton = function(userData){

		$.ajax({
			type: 'POST',
			url: '/index.php',
			data:{
				userDataObject: userData
			},
			success:function() {
				// console.log('Log saved to file');
				// alert(html);
				// console.log(html);
			}
		});

	};

	return CalculatorWidget;

})(CalculatorWidget || {});

// Handle click on button with result
$(CalculatorWidget.Button.save).click(function() {
	let dataObject = CalculatorWidget.userDataObject;
	if(dataObject.result){
		NotifierModule.success('Your result has been saved to file');
		CalculatorWidget.onPressSaveButton(CalculatorWidget.userDataObject);
	} else {
		NotifierModule.warning('Empty result. Nothing save');
	}
});

