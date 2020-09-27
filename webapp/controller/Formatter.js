sap.ui.define(function() {
	"use strict";

	// var Formatter = {


return {
		country :  function (cCountry) {
			debugger;
			if (cCountry === "UK") {
					return 'Success';
				} else if (cCountry === "USA") {
					return 'Warning';
				} else if (cCountry === "Discontinued"){
					return "Error";
				} else {
					return "None";
				}
		}};
				
				// if (oTable[i].getCells()[6].getText() === "UK") {
				// 	oTable[i].getCells()[6].$().addClass("cell_Color_Green");

				// } else {
				// 	oTable[i].getCells()[6].$().addClass("cell_Color_Red");

				// }
			

			// var oTable = this.getView().byId("idTable1").getItems();
			// var oItems  = oTable.getItems();
			
			// for (var i = 0; i < oTable.length; i++) {
			// 	oTable[i].getCells()[6].$().removeClass("cell_Color_Green");
			// 	oTable[i].getCells()[6].$().removeClass("cell_Color_Red");

			// 	if (oTable[i].getCells()[6].getText() === "UK") {
			// 		oTable[i].getCells()[6].$().addClass("cell_Color_Green");

			// 	} else {
			// 		oTable[i].getCells()[6].$().addClass("cell_Color_Red");

			// 	}

			// 	// if (oItems[i].getCells()[4].getText() === "true") {
			// 	//  oItems[i].getCells()[4].$().addClass("cell_Color_Green");



	// return Formatter;

}, /* bExport= */ true);