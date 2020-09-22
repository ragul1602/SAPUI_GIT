sap.ui.define(function() {
	"use strict";

	var Formatter = {

// debugger;
		UnitsInStock :  function (uis) {
				if (uis > 20) {
					return "SUCCESS";
				} else if (uis < 20 && uis > 10 ) {
					return "Warning";
				} else if (uis < 10){
					return "Error";
				} else {
					return "None";
				}
		}
	};

	return Formatter;

}, /* bExport= */ true);
