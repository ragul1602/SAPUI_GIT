sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.navigat.ZRAGAV_DEMO6.controller.secondPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.smax.navigat.ZRAGAV_DEMO6.view.secondPage
		 */
		onInit: function () {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.smax.navigat.ZRAGAV_DEMO6.view.secondPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.smax.navigat.ZRAGAV_DEMO6.view.secondPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.smax.navigat.ZRAGAV_DEMO6.view.secondPage
		 */
		//	onExit: function() {
		//
		//	}

		onfirst: function (){
			var oApp1 = this.getView().getParent();
			// oApp1.to(oApp1.getPages()[0]);
			oApp1.to("__xmlview0--firstPage","fade");
		}

	});

});