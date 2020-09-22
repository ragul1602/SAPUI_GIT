sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/f/library',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

], function (Controller, fioriLibrary, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.smax.flexi.ZPROJ_FLEXI.controller.Supplier", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.Supplier
		 */
		onInit: function () {
			this.oView = this.getView();

			this.oOwnerComponent = this.getOwnerComponent();

			this.oRouter = this.oOwnerComponent.getRouter();
			this.oModel = this.oOwnerComponent.getModel();

			this.oRouter.getRoute("Supplier").attachPatternMatched(this.onSelectionChange1, this);
			this.oRouter.getRoute("SupplierDetail").attachPatternMatched(this.onSelectionChange1, this);
			// this.oRouter.getRoute("Third").attachPatternMatched(this.onSelectionChange, this);

		},
		onSelectionChange: function (oEvent) {
			// var oFCL = this.oView.getParent().getParent();
			// oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);
			debugger;

			// var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(2),
			
			var supplierPath = this.getView().byId('list').getSelectedContextPaths()[0];
			// var supplier = supplierPath.split("/").slice(-1).pop();
			//var sup = this.getView().byId('list').getSelectedItems()[0].mProperties.number;21/08/2020

			var sup1 = oEvent.getSource().getBindingContext().sPath;
			var sup = sup1.slice(11).replace(')', '');

			this.getOwnerComponent().getRouter().navTo("SupplierDetail", {
				layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
				PRD: 0,
				arg: sup

			});
			

			// this.oRouter.navTo("SupplierDetail", {arg: 0

			// 	});
			// , layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded
			// var oFCL = this.oView.getParent().getParent();
			// oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);

			// var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1),
			// 	productPath = oEvent.getSource().getBindingContext("products").getPath(),
			// 	product = productPath.split("/").slice(-1).pop();

			// this.oRouter.navTo("detail", {
			// 	layout: oNextUIState.layout,
			// 	product: product
			// });

		},
		onSearch: function (oEvent) {
			var oTableSearchState = [],
				// break;
				sQuery = oEvent.getParameter("query");

			if (sQuery && sQuery.length > 0) {
				oTableSearchState = [new Filter("Name", FilterOperator.Contains, sQuery)];
			}

			this.getView().byId("list").getBinding("items").filter(oTableSearchState, "Application");
		},
		onExit: function () {
			debugger;
			// var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/closeColumn");
			this.getOwnerComponent().getRouter().navTo("master", {
				layout: "OneColumn"
			});
		},
			onSelectionChange1: function (oEvent) {
				
					debugger;
					
					if (oEvent.mParameters.arguments.arg == undefined){

			// var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(2),
			// var supplierPath = this.getView().byId('list').getSelectedContextPaths()[0];
			// // var supplier = supplierPath.split("/").slice(-1).pop();
			// //var sup = this.getView().byId('list').getSelectedItems()[0].mProperties.number;21/08/2020

			// var sup1 = oEvent.getSource().getBindingContext().sPath;
			// var sup = sup1.slice(11).replace(')', '');

			this.getOwnerComponent().getRouter().navTo("SupplierDetail", {
				layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
				PRD: 0,
				arg: 0

			});
					};
				
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.Supplier
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.Supplier
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.smax.flexi.ZPROJ_FLEXI.view.Supplier
		 */
		//	onExit: function() {
		//
		//	}

	});

});