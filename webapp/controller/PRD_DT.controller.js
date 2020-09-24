sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.datapass.ZPROJECT_ROUTER_DATAPASS.controller.PRD_DT", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.smax.datapass.ZPROJECT_ROUTER_DATAPASS.view.PRD_DT
		 */
		onInit: function () {

			// debugger;

		

			//   var oRouters = sap.ui.core.UIComponent.getRouterFor(this);
			//     oRouters.getRoute("second").attachPatternMatched(this._onObjectMatched, this);
			// },
			// _onObjectMatched: function (oEvent) {
			//     var obj = oEvent.getParameter("arguments").details;

			var oRouter = this.getOwnerComponent().getRouter();
				// var oListS1 = this.getView().byId("idTab");

			oRouter.getRoute("PRD_DT").attachPatternMatched(function (oEvent) {

				var thatData = oEvent.getParameters().arguments.X;
				
				debugger;
			 var oList1 = this.getView().byId("idTab");
			 		var filters = [];
			 	var filter2 = new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.EQ, thatData);
			 filters.push(filter2);	
			 oList1.getBinding("items").filter(filters);
				
				
			// get ref of simpleform
			// this.getView().byId("SimpleFormDisplay354").bindElement("/Products("+thatData+")");
			

			},this);

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.smax.datapass.ZPROJECT_ROUTER_DATAPASS.view.PRD_DT
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.smax.datapass.ZPROJECT_ROUTER_DATAPASS.view.PRD_DT
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.smax.datapass.ZPROJECT_ROUTER_DATAPASS.view.PRD_DT
		 */
		//	onExit: function() {
		//
		//	}

	});

});