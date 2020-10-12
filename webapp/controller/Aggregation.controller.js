sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.yardSAPYARD_ELEMENT_BINDING.controller.Aggregation", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.yardSAPYARD_ELEMENT_BINDING.view.Aggregation
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
		},
		
		onItemPress:function(oEvent){
			
			var sPath = oEvent.getParameter("listItem").getBindingContext().getPath();

		    var sItemIndex = sPath.split("/")[sPath.split("/").length - 1];
		    
			this.oRouter.navTo("EleRoute",{
				animalId:sItemIndex
			});
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.yardSAPYARD_ELEMENT_BINDING.view.Aggregation
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.yardSAPYARD_ELEMENT_BINDING.view.Aggregation
		 */
			onAfterRendering: function() {
		
			}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.yardSAPYARD_ELEMENT_BINDING.view.Aggregation
		 */
		//	onExit: function() {
		//
		//	}

	});

});