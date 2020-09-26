sap.ui.define([
			"sap/ui/core/mvc/Controller"
		], function (Controller) {
			"use strict";

			return Controller.extend("COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP_PGS.controller.FIRST_CUST", {

				/**
				 * Called when a controller is instantiated and its View controls (if available) are already created.
				 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
				 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.FIRST_CUST
				 */
				onInit: function () {
					//console.log("First cust init");
					//this.getView().setSelected();
				
					
				},

				/**
				 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
				 * (NOT before the first rendering! onInit() is used for that one!).
				 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.FIRST_CUST
				 */
				//	onBeforeRendering: function() {
				//
				//	},

				/**
				 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
				 * This hook is the same one that SAPUI5 controls get after being rendered.
				 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.FIRST_CUST
				 */
				onAfterRendering: function () {
				
	// debugger;
	// 			this.getOwnerComponent().getRouter('FIRST_CUST').getRoute().attachPatternMatched(function (oEvent) {
	// 					debugger;	
	// 				 var firstItem = this.getView().byId("list").getItems()[0]; 
 //         this.getView().byId("list").setSelectedItem(firstItem,true); 
						
	// 				},this);
							// var view = oRouter.getRoute('FIRST_CUST');
							// .byId( ("onItemPress").eq(0).attr("list")).firePress();

							// this.getView().byId('list').setSelectedItem('ALFKI');fvc 
							// 		var aItems = this.getView().byID('list');
							// 		debugger;
							// aItems[0].setSelected(true);

						},

						/**
						 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
						 * @memberOf COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.FIRST_CUST
						 */
						//	onExit: function() {
						//
						//	},
						onItemPress: function (oEvent) {
							//oEvent - press
							
							debugger;
							var custId = oEvent.getSource().getTitle();
							this.getOwnerComponent().getRouter("SECOND_PAGE").navTo("SECOND_PAGE", {
								custID: custId
							});
						}

					});

			});