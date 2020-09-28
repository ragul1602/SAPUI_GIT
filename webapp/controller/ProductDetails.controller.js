sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("emax.cls05.ZCLS05SPLITAPP.controller.ProductDetails", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf emax.cls05.ZCLS05SPLITAPP.view.ProductDetails
		 */
			onInit : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.getRoute("p2").attachPatternMatched(function(oEvent){
			debugger;
			var productID = oEvent.getParameters().arguments.pid;
			
			this.getView().bindElement("/Products('"+productID+"')");
		},this);
	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf emax.cls05.ZCLS05SPLITAPP.view.ProductDetails
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf emax.cls05.ZCLS05SPLITAPP.view.ProductDetails
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf emax.cls05.ZCLS05SPLITAPP.view.ProductDetails
		 */
		//	onExit: function() {
		//
		//	}
		onCreate : function(){
		
		var oDialog = new sap.m.Dialog({
			title : "Create Product",
			content : [
				new sap.m.Label({ text : "Product ID"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Name"}),
				new sap.m.Input()
			],
			buttons : [
				new sap.m.Button({ text : "Save and Close", press : function(){
					// collect data
					var data = {
							ProductID : oDialog.getContent()[1].getValue(),
							Name : oDialog.getContent()[3].getValue()
					};
					// save data to SAP
					var oModel = oDialog.getModel();
					oModel.create("/ProductSet", data, {
						success : function(){
							sap.m.MessageToast.show("Data Created");
						},
						error : function(){
							sap.m.MessageToast.show("Data Not Created");
						}
					});
					oDialog.close();
				}})
			]
		});
		var oModel = this.getOwnerComponent().getModel();
		oDialog.setModel(oModel);
		oDialog.open();
		 
	},
	onUpdate : function(){
		var oController = this;
		var oDialog = new sap.m.Dialog({
			title : "Update Name",
			content : [
				new sap.m.Label({ text : "Product ID"}),
				new sap.m.Text({ text : oController.getView().byId("idProd").getText()}),
				new sap.m.Label({ text : "Name"}),
				new sap.m.Input({ value : oController.getView().byId("idName").getTitle()})
				
			],
			buttons : [
				new sap.m.Button({ text : "Update and Close", press : function(){
					// collect data
					var data = {
							Name : oDialog.getContent()[3].getValue()
					};
					// update request to SAP
					var oModel = oDialog.getModel();
					var prodID = oController.getView().byId("idProd").getText();
					oModel.update("/ProductSet('"+prodID+"')", data , {
						success : function(){
							sap.m.MessageToast.show("Data Updated");
						},
						error : function(){
							sap.m.MessageToast.show("Data Not Updated");
						}
					});
					oDialog.close();
				} })
			]
		});
		var oModel = this.getOwnerComponent().getModel();
		oDialog.setModel(oModel);
		oDialog.open();
	}

	});

});