sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.yardSAPYARD_ELEMENT_BINDING.controller.App", {
	onInit: function() {

	/*	var splitApp = this.getView().byId("mySplitApp");
		var fullApp = this.getView().byId("myApp_fullscreen");
		splitApp.setVisible(true);
		fullApp.setVisible(false);*/
		 
		
			},


		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.yard.view.App
		 */
			onBeforeRendering: function() {
		/*debugger;*/
			},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.yard.view.App
		 */
			onAfterRendering: function() {

		
			}
 
	});
});