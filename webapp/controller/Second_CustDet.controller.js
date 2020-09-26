sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_POP.controller.Second_CustDet", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.Second_CustDet
		 */
		onInit: function () {
			debugger;
			//	var oRouter = this.getOwnerComponent().getRouter();

			this.getOwnerComponent().getRouter().getRoute("Second_CustDet").attachPatternMatched(function (oEvent) {

				this.getView().bindElement("/Products('" + oEvent.getParameters().arguments.custID + "')");
				// this.getView().bindElement("/Products(0)");


			}, this);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.Second_CustDet
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.Second_CustDet
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.Second_CustDet
		 */
		//	onExit: function() {
		//
		//	}
	});

});