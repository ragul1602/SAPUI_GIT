sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.flexi.ZPROJ_FLEXI.controller.app", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.SupplierDetail
		 */
		onInit: function () {
			
			this.oOwnerComponent = this.getOwnerComponent();
			this.oRouter = this.oOwnerComponent.getRouter();
			this.oRouter.attachRouteMatched(this.onRouteMatched, this);

		},
		onRouteMatched:function(oEvent){
			
			debugger;
			
			var sRouteName = oEvent.getParameter("name"),
			oArguments = oEvent.getParameter("arguments");
			
			this.currentRouteName = sRouteName;
			// this.supplier = oArguments.supplier; 
					this.supplier = oArguments.arg; 
		
			
		},
		onStateChanged:function(oEvent){
			
			var navArrow = oEvent.getParameter("isNavigationArrow"),
			sLayout = oEvent.getParameter("layout");
			
			if (navArrow)
			{
				this.oRouter.navTo(this.currentRouteName,
				{layout : sLayout, arg: this.supplier}, true);
			}
			
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.SupplierDetail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.SupplierDetail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.SupplierDetail
		 */
			onExit: function() {
			this.oRouter.detachRouteMatched(this.onRouteMatched,this);
			}

	});

});