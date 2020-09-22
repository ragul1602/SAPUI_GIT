sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.filterbt.ZPROJECT_filterBT.controller.FilterBT", {
		onInit: function () {

		},
		
		
		onPress: function () {

// debugger;
			var oSelect = this.getView().byId("dropdown");

			var sSelected = oSelect.getSelectedItem().getText();
			
			var oSelect1 = this.getView().byId("dropdown1");
			
			var sSelected1 = oSelect1.getSelectedItem().getText();

			var filters = [];

			var filter1 = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.BT, sSelected,sSelected1);

			filters.push(filter1);

			var oList = this.getView().byId("idTable");

			oList.getBinding("items").filter(filters);
			
			// var oList1 = this.getView().byId("sForm");
			
	       //oList1.setBinding("Employees").filter(filters);
	       
	       //oList1.bindElement("Employees");
	       
// 	       var oInput = this.byId("sForm");
// oInput.bindElement(oFinal);
// oInput.bindProperty("1234512345","EmployeeID");
// oInput.setBinding(oInput);
			
			

		}

		
		
		
		
	});
});