sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.filt.ZPROJECT_FILTER.controller.Filter", {
		onInit: function () {

		},

		onPress: function () {

debugger;
			var oSelect = this.getView().byId("dropdown");

			var sSelected = oSelect.getSelectedItem().getText();

			var filters = [];

			var filter1 = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ, sSelected);

			filters.push(filter1);

			var oList = this.getView().byId("idTable");

			// oList.getBinding("items").filter(filters); ragav
			
		// var sCheck = oList.getSelectedItem().getText();  
	
	var value = oList.getSelectedItem();                        ;
			
			// var sPath = value.getTable()._aSelectedPaths;
			
			// var oList1 = this.getView().byId("sForm");
			
	       //oList1.setBinding("Employees").filter(filters);
	       
	       //oList1.bindElement("Employees");
	       
	       var oInput = this.byId("sForm");
	       // get selected employee id
	       //var empID = 4;
// oInput.bindElement("/Employees("+empID+")");
oInput.bindElement("/Employees("+sSelected+")");

// oInput.bindElement(sPath[0]);

//oInput.bindProperty("1234512345","EmployeeID");
//oInput.setBinding(oInput);
			
			

		}

	});
});