sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter"
], function (Controller, Filter) {
	"use strict";

	return Controller.extend("emax.cls05.ZCLS05SPLITAPP.controller.ProductList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf emax.cls05.ZCLS05SPLITAPP.view.ProductList
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf emax.cls05.ZCLS05SPLITAPP.view.ProductList
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf emax.cls05.ZCLS05SPLITAPP.view.ProductList
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf emax.cls05.ZCLS05SPLITAPP.view.ProductList
		 */
		//	onExit: function() {
		//
		//	}
			onItemSelection : function(oEvent){
		
			this.getOwnerComponent().getRouter().navTo("p2", {pid : oEvent.getSource().getTitle() });
	},
	onSearch : function(oEvent){
		var query = oEvent.getSource().getValue();
	
		var aFilters = [];
		
		var filter = new Filter("ProductID", sap.ui.model.FilterOperator.StartsWith, query);
		aFilters.push(filter);
		
		var list = this.getView().byId("idList");
		
	var	binding = list.getBinding("items");
		
		binding.filter(aFilters);
		
	}


	});

});