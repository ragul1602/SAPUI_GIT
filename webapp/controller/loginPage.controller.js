sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, RM) {
	"use strict";

	return Controller.extend("com.smax.proj.ZRAGAV_DEMO7.controller.loginPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.smax.proj.ZRAGAV_DEMO7.view.loginPage
		 */
		onInit: function () {
			
			var oDt = new RM({
				bundleName : "i18n.i18n"
				
			}) ;
			
			this.getView().setModel(oDt , 'm1');                         

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.smax.proj.ZRAGAV_DEMO7.view.loginPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.smax.proj.ZRAGAV_DEMO7.view.loginPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.smax.proj.ZRAGAV_DEMO7.view.loginPage
		 */
		//	onExit: function() {
		//
		//	}
		


	});

});