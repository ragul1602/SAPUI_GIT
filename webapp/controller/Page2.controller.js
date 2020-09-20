sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.batch41.Z_BATCH41_ROUTER.controller.Page2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.smax.batch41.Z_BATCH41_ROUTER.view.Page2
		 */
		onInit: function () {
          
          debugger;
          
        var oRouter =  this.getOwnerComponent().getRouter();
        
        // whenever goto Page2 and it's pattern matched
        // oRouter - sap.ui.core.Router
        
        // oRouter.getRoute("Page2") - sap.ui.core.routing.Route
        
        oRouter.getRoute("Page2").attachPatternMatched(function(oEvent){
        	
        	var thatData = oEvent.getParameters().arguments.x;
        	
        //	this.getView().byId().setValue
        	
        	
        })
        
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.smax.batch41.Z_BATCH41_ROUTER.view.Page2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.smax.batch41.Z_BATCH41_ROUTER.view.Page2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.smax.batch41.Z_BATCH41_ROUTER.view.Page2
		 */
		//	onExit: function() {
		//
		//	}

	});

});