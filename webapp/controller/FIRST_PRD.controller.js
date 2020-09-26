sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_NFS.controller.FIRST_PRD", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_NFS.view.FIRST_PRD
		 */
		onInit: function () {
			debugger;
			// sap.ui.getCore().byId(" __xmlview0--splApp").setVisible(false);
			 this.getView().byId("list").attachUpdateFinished(function () {
			 //this.getOwnerComponent().getRouter().getRoute().attachUpdateFinished(function () {
				debugger;
				this.getView().byId("list").getItems()[0].firePress();
			}, this);
		},
		
		onItemPress: function (oEvent) {
			//oEvent - press
			debugger;
			var prdId = oEvent.getSource().getTitle();
			this.getOwnerComponent().getRouter().navTo("SECOND_PRDDET", {
				prdID : prdId
			});
		},
		
		onBack : function (oEvent) {
			debugger;
			sap.ui.getCore().byId("__xmlview0--full").setVisible(true);
			
			sap.ui.getCore().byId("__xmlview0--splApp2").setVisible(false);
		this.getOwnerComponent().getRouter().navTo("FIRST_PRD");	
		},
		


	});

});