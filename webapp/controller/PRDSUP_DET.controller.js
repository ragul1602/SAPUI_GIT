sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.multitab.ZPROJECT_ROUTER_MULTITAB_MSEL.controller.PRDSUP_DET", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.smax.multitab.ZPROJECT_ROUTER_MULTITAB.view.PRDSUP_DET
		 */
		onInit: function () {
			
		debugger;
			
			var oRouter = this.getOwnerComponent().getRouter();
			
			oRouter.getRoute("PRDSUP_DET").attachPatternMatched(function(oEvent){
				debugger;	
				
				var arg = oEvent.getParameters("arguments");
			// var PrdId = oEvent.getParameters().arguments.X;
			var PrdId = arg.arguments.X;
			var SupId = arg.arguments.Y;
			
				this.getView().byId("SF1").bindElement("/Suppliers("+SupId+")");
				
				// this.getView().byId("idTable1");
				
				
				var oList1 = this.getView().byId("idTable1");
			 		var filters = [];
			 	var filter2 = new sap.ui.model.Filter("SupplierID", sap.ui.model.FilterOperator.EQ, SupId);
			 filters.push(filter2);	
			 oList1.getBinding("items").filter(filters);
				
			},this);

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.smax.multitab.ZPROJECT_ROUTER_MULTITAB.view.PRDSUP_DET
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.smax.multitab.ZPROJECT_ROUTER_MULTITAB.view.PRDSUP_DET
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.smax.multitab.ZPROJECT_ROUTER_MULTITAB.view.PRDSUP_DET
		 */
		//	onExit: function() {
		//
		//	}

	});

});