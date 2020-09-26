sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_MSA.controller.SECOND_PRDDET", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_NFS.view.SECOND_PRDDET
		 */
		onInit: function () {
	debugger;
				var oRouter = this.getOwnerComponent().getRouter();

			oRouter.getRoute("SECOND_PRDDET").attachPatternMatched(function (oEvent) {
			debugger;
			var prdID = oEvent.getParameters().arguments.prdID ;
				this.getView().bindElement("/Products("+ prdID +")");

			}, this);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_NFS.view.SECOND_PRDDET
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_NFS.view.SECOND_PRDDET
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_NFS.view.SECOND_PRDDET
		 */
		//	onExit: function() {
		//
		//	}

	});

});