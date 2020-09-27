sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.table.ZPROJECT_TABLE_ITEMSADD.controller.ITEMSADD", {
		onInit: function () {

		},
		onPress: function () {

			debugger;
			// var oSelect = this.getView().byId("dropdown");

			// var sSelected = oSelect.getSelectedItem().getText();

			var filters = [];

			var oList = this.getView().byId("idTable");

			// oList.getBinding("items").filter(filters); ragav

			// var sCheck = oList.getSelectedItem().getText();  

			var value = oList.getSelectedItem();;

			var sPath = value.getTable()._aSelectedPaths;

			// 	       var oInput = this.byId("sForm");
			// 	       // get selected employee id
			// 	       var empID = 4;
			// // oInput.bindElement("/Employees("+empID+")");
			// // oInput.bindElement("/Employees("+sSelected+")");

			// oInput.bindElement(sPath[0]);

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
			//var oList2 = this.getView().byId("idTable");
			//	oList2.setVisible('false');

			var total = value.getTable()._aSelectedPaths.length;
			for (var i = 0; i < total; i++) {
				// var string = sPath[i].getProperty("EmployeeID") ;
				var cells = oSelectedItem[i].getCells();
				var f1 = cells[0].getText();
				var filter2 = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ, f1);
				filters.push(filter2);

			}
			var oList1 = this.getView().byId("idTable2");
			oList1.getBinding("items").filter(filters);

			oList1.setVisible(true);

			oList.setVisible(false);

		},

		onRefresh: function () {

			// var oList = this.getView();
			location.reload();
			// this.getView().byId("idTable").getModel().refresh(true);
			// oList.reload();
			// // var filters[]
			// // oList.getBinding("items");

		},

		onClick: function (oEvent) {
			debugger;
			// var oSelectedItem = this.getView().byId("idTable").getSelectedItems();
			// var cells = oSelectedItem[0].getCells();
			// var oList = this.getView().byId("idTable");
			// var value1 = oEvent.getSource();
			// .getBindingContext("").getProperty("EmployeeeID");
			// var oSelectedItem1 = sap.ui.getCore().byId("table").getSelectedItems();
			// var oSelectedItem = this.getView().byId("idTable").getSelectedItems().Cells();
			// var filters = [];
			// var f1 = oEvent.getSource().getBindingContext().getProperty("EmployeeID");
			// var filter2 = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ, f1);
			// filters.push(filter2);
			// var oList1 = this.getView().byId("idTable1");
			var oList2 = this.getView().byId("idTable2");
			// oList2 = oList1.getBinding("items").filter(filters);
			// oList2.setVisible(true);

			// capture the data

			// create a item

		
			// var f2 = oEvent.getSource().getBindingContext().getProperty("EmployeeID");
			//  var columnListItemNewLine = new sap.m.ColumnListItem({
   //     cells: [
   //       new Text({
   //         text: f2
   //       })]
			//  });
			 
			// oList2.addItem(columnListItemNewLine );
	
		  var ocol = new sap.m.ColumnListItem({
		  	cells: [
     // add created controls to item
     new sap.m.Text({text: oEvent.getSource().getBindingContext().getProperty("EmployeeID")}),
     new sap.m.Text({text: oEvent.getSource().getBindingContext().getProperty("FirstName")}),
     new sap.m.Text({text: oEvent.getSource().getBindingContext().getProperty("LastName")}),
     new sap.m.Text({text: oEvent.getSource().getBindingContext().getProperty("City")}),
     new sap.m.Text({text: oEvent.getSource().getBindingContext().getProperty("Region")}),
     new sap.m.Text({text: oEvent.getSource().getBindingContext().getProperty("PostalCode")}),
     new sap.m.Text({text: oEvent.getSource().getBindingContext().getProperty("Country")})

     ]
		  	
		  	});

			oList2.addItem(ocol);	


			// alert("Event fired");	
		}

	});
});