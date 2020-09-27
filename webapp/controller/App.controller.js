sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.batch41.filter.ZBATCH41_FILTER.controller.App", {
		onInit: function () {

		},
		onButtonPress : function(){
			// first get selected country from select
			var oSelect = this.getView().byId("idcountry");
			
			var sSelectedText = oSelect.getSelectedItem().getText();
			// filter the list
		
			
			var filters = []; 
			
			var filter1 = new sap.ui.model.Filter("Country", sap.ui.model.FilterOperator.EQ, sSelectedText);
			
				var filter2 = new sap.ui.model.Filter("City", sap.ui.model.FilterOperator.StartsWith, 'M');
				
			filters.push(filter1);
		    filters.push(filter2);
		    
		   	var oList = this.getView().byId("idList");	
		   	
			oList.getBinding("items").filter(filters);
			oList.setVisible(true);
			
			
		}
	});
});