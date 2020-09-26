sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_PGS.controller.SECOND_PAGE", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_PGS.view.SECOND_PAGE
		 */
		onInit: function () {

debugger;
  
 // var oSplitContainer = this.getView().byId("__xmlview0");
 // oSplitContainer.setMode(sap.m.SplitAppMode.StretchCompressMode);
 // if(oSplitContainer.isMasterShown()){
 //oSplitContainer.setMode(sap.m.SplitAppMode.HideMode);
 // }
  

			// this.setMode(sap.m.SplitAppMode.HideMode);
			
			this.getOwnerComponent().getRouter().getRoute("SECOND_PAGE").attachPatternMatched(function (oEvent) {
				debugger;
				//	var customerID = 	oEvent.getParameters().arguments.custID;   

				this.getView().bindElement("/Customers('" + oEvent.getParameters().arguments.custID + "')");
				// this.setMode(sap.m.SplitAppMode.ShowHideMode);
				// this.setMode(sap.m.SplitAppMode.HideMode);
			}, this);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_PGS.view.SECOND_PAGE
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_PGS.view.SECOND_PAGE
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_PGS.view.SECOND_PAGE
		 */
		//	onExit: function() {
		//
		//	}

	});

});