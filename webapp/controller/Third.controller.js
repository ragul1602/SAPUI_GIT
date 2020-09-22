sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/f/library'
], function (Controller, fioriLibrary) {
	"use strict";

	return Controller.extend("com.smax.flexi.ZPROJ_FLEXI.controller.Third", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.Third
		 */
		onInit: function () {
			debugger;
			var oRouter = this.getOwnerComponent().getRouter();
			// var oListS1 = this.getView().byId("idTab");
				this.oModel = this.getOwnerComponent().getModel();

			oRouter.getRoute("Third").attachPatternMatched(function (oEvent) {
				debugger;

				var PRDID = oEvent.getParameters().arguments.PRD;
				this._arg = oEvent.getParameters().arguments.arg;

				this.getView().bindElement("/Products(" + PRDID + ")");

			}, this);

		},

		handleClose: function (oEvent) {
			debugger;

			// var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/closeColumn");
			// var arg = this._arg;
			this.getOwnerComponent().getRouter().navTo("SupplierDetail", {
				layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
				arg: this._arg
			});
		},
		onPress:function(){
			
			
			debugger;
			
			
				var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(3);
				var oRouter = this.getOwnerComponent().getRouter();
			// this.oRouter.navTo("fullPage", {layout: oNextUIState.layout});21/08/2020
			
			oRouter.navTo("fullPage", {layout: "EndColumnFullScreen"});
			
	
			
			// 	this.getOwnerComponent().getRouter().navTo("fullPage",
			// 	{
			// 	layout: sap.f.LayoutType.EndColumnFullScreen
			
			// }
			// );
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.Third
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.Third
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.Third
		 */
		//	onExit: function() {
		//
		//	}

	});

});