sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("COM.SMAX.ROUTER3.ZPROJECT_ROUTER3.controller.PAGE1_V1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf COM.SMAX.ROUTER3.ZPROJECT_ROUTER3.view.PAGE1_V1
		 */
		onInit: function () {

		},
		
		onPress: function () {
			// var router = this.getOwnerComponent().getRouter();
			// router.navTo("PAGE2_V2");
			var y = 'My data Pass';
			this.getOwnerComponent().getRouter().navTo("PAGE2_V2", {x : y});
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf COM.SMAX.ROUTER3.ZPROJECT_ROUTER3.view.PAGE1_V1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf COM.SMAX.ROUTER3.ZPROJECT_ROUTER3.view.PAGE1_V1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf COM.SMAX.ROUTER3.ZPROJECT_ROUTER3.view.PAGE1_V1
		 */
		//	onExit: function() {
		//
		//	}

	});

});