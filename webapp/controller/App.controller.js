sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/m/Label",
	"sap/m/Text"
], function (Controller, Dialog, Label, Text) {
	"use strict";

	return Controller.extend("com.smax.ZBATCH41_CREATE.controller.App", {
		onInit: function () {

		},
		onPrd: function(event){
			debugger;
			var oDialog1 = new Dialog({
				title : "Product Details",
				content : [
					new Label({ text : "Product ID"}),
					new Text({text : "{m1>ProductID}"}),
					new Label({ text : "Product Name"}),
					new Text({text : "{m1>ProductName}"})
					],
					buttons : [
						new sap.m.Button({text : "Close", press : function(){
							
							oDialog1.close();
						}})
						]
			});
			
			var ProductID = event.getSource().getTitle();
			
			this.getView().addDependent(oDialog1);
			oDialog1.bindElement("m1>/Products("+ProductID+")");
			oDialog1.open();                                       
			
			
		},
		
		onItemPress : function(event){
			// get dialog box
			
			debugger;
			var oDialog = new Dialog({
				title : "Customer Details",
				content : [
					new Label({ text : "Customer ID"}),
					new sap.m.Text({text : "{CustomerID}"}),
					new sap.m.Label({ text : "Contact Name"}),
					new sap.m.Text({text : "{CompanyName}"})
					],
					buttons : [
						new sap.m.Button({ text : "Close" , press : function(){
							
							oDialog.close();
						}
							
						})
						]
			});
			// getselected customer ID
			//and bind data to dialog
		var customerID = 	event.getSource().getTitle();
		
		//oDialog.setModel(this.getView().getModel());
		this.getView().addDependent(oDialog);
		oDialog.bindElement("/Customers('"+customerID+"')");	
			oDialog.open();
		
	//	alert(oDialog.getContent()[1].getText());
		this.getView().byId("ip").setValue((oDialog.getContent()[1].getText()));
		
		}
	});
});