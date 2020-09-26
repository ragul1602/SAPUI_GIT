sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_POP.controller.FIRST_CUST", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.FIRST_CUST
		 */
		onInit: function () {

			// debugger;
			// this.getOwnerComponent().getRouter().getRoute().
			// attachEventOnce("onItemPress",function () {
			// 	debugger;
			// 	var firstItem = this.getView().byId("list").getItems()[0];
			// 	this.getView().byId("list").setSelectedItem(firstItem, true);

			// }, this);
			debugger;
			// 			this.getView("FIRST_CUST").byId("list").attachEventOnce("onItemPress", function (oEvent) {

			// 	jQuery.when(this.oUpdateFinishedDeferred).then(jQuery.proxy(function () {

			// 		this.selectDetail();

			// 	}, this));
			// 	this.oUpdateFinishedDeferred.resolve();

			// }, this);

			// var oList = this.getView().byID('list');
			 
			 this.getView().byId('list').attachUpdateFinished(function () {
			 //this.getOwnerComponent().getRouter().getRoute().attachUpdateFinished(function () {
				debugger;
				this.getView().byId('list').getItems()[0].firePress();
			}, this);

			// this.getOwnerComponent().getRouter().getRoute("TargetSplitapp").attachPatternMatched(function (oEvent) {

			// 	debugger;
			// 	this.attachEvent('Press');
			// 	this.fireEvent('Press');

			// }, this);

			// 		debugger;
			// this.getOwnerComponent().getRouter().getRoute('TargetSplitapp').attachPatternMatched
			// (function () {
			// 		debugger;	
			// 	 var firstItem = this.getView().byId("list").getItems()[0]; 
			//       this.getView().byId("list").setSelectedItem(firstItem,true); 

			// 	},this);

		},

		onItemPress: function (oEvent) {
			//oEvent - press
			debugger;
			var custId = oEvent.getSource().getTitle();
			this.getOwnerComponent().getRouter().navTo("Second_CustDet", {
				custID: custId
			});
		}

	});

});