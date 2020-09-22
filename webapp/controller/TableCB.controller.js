sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.TableCB.Zproject_odata_TableCB.controller.TableCB", {
		onInit: function () {

		},
		
				onPress: function () {

debugger;
			var oSelect = this.getView().byId("dropdown");

			var sSelected = oSelect.getSelectedItem().getText();

			var filters = [];

			// var filter1 = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ, sSelected);

			// filters.push(filter1);

			var oList = this.getView().byId("idTable");

			// oList.getBinding("items").filter(filters); ragav
			
		// var sCheck = oList.getSelectedItem().getText();  
	
	var value = oList.getSelectedItem();                        ;
			
			var sPath = value.getTable()._aSelectedPaths;
			
			// var oList1 = this.getView().byId("sForm");
			
	       //oList1.setBinding("Employees").filter(filters);
	       
	       //oList1.bindElement("Employees");
	       
	       var oInput = this.byId("sForm");
	       // get selected employee id
	       var empID = 4;
// oInput.bindElement("/Employees("+empID+")");
// oInput.bindElement("/Employees("+sSelected+")");

oInput.bindElement(sPath[0]);

//oInput.bindProperty("1234512345","EmployeeID");
//oInput.setBinding(oInput);
	// 		var total  = value.getTable()._aSelectedPaths.length;
	// 		for ( var i = 0; i < total; i++)
	// 		{  
	// 			// var string = sPath[i].getProperty("EmployeeID") ;
	// 	var filter2 = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ, 0);
	// 		filters.push(filter2);	
		
	// 		}
	// oList.getBinding("items").filter(filters);
	
	
	 var oSelectedItem = this.getView().byId("idTable").getSelectedItems();
	//   var item1 = oSelectedItem[0];
 //var cells = item1.getCells();
 //var oPname = cells[0].getText();
 //var oDescription = cells[1].getText();
 //var oRating = cells[2].getText();
 
 
 
 			var total  = value.getTable()._aSelectedPaths.length;
			for ( var i = 0; i < total; i++)
			{  
				// var string = sPath[i].getProperty("EmployeeID") ;
				var cells = oSelectedItem[i].getCells();
				var f1 = cells[0].getText();
		var filter2 = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ,f1 );
			filters.push(filter2);	
		
			}
	oList.getBinding("items").filter(filters);
	
	
		},
		
		onRefresh: function(){
			
			
			
		// var oList = this.getView().byId("idTable");
		location.reload();
		// this.getView().byId("idTable").getModel().refresh(true);
		// oList.reload();
		// var filters[]
		// oList.getBinding("items");
		
		}
		
		
	});
});