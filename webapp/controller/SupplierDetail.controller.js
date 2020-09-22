sap.ui.define([ "sap/ui/core/mvc/Controller",
'sap/f/library'
], function (Controller,fioriLibrary) { "use strict";

return Controller.extend("com.smax.flexi.ZPROJ_FLEXI.controller.SupplierDetail", {

/**
*	Called when a controller is instantiated and its View controls (if available) are already created.
*	Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*	@memberOf Supplier.SecondApp.view.SupplierDetail
*/
onInit: function () {
	
	
				var oRouter = this.getOwnerComponent().getRouter();
				// var oListS1 = this.getView().byId("idTab");

			oRouter.getRoute("SupplierDetail").attachPatternMatched(function(oEvent){
				debugger;
				var thatData = oEvent.getParameters().arguments.arg;
				
			/*	debugger;
					var filters = [];
				var filter2 = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ, thatData);
			filters.push(filter2);	
			oList1.getBinding("items").filter(filters);
			*/	
				
			// get ref of simpleform
			// this.getView().byId("SimpleFormDisplay354").bindElement("/Products("+thatData+")");
				// this.getView().byId("productsTable").bindElement("/Suppliers({+"thatData+"})/Products");
				// this.getView().byId("productsTable").bindElement({
				// 	path: "/Suppliers(0)/Products",
				// model: "Products"
					
				// 	});
				
				// this.getView().byId("sf1").bindElement("/Suppliers("+thatData+")");
				
				this.getView().bindElement("/Suppliers("+thatData+")");
				
					// this.getView().bindElement("/Suppliers(1)");
					
					// var sPath = "/Suppliers({"+thatData+"})/Products";
					
					// belowwill check tomorow
					this.byId('productsTable').bindItems({
					path : "/Suppliers("+thatData+")/Products",
					template: this.byId("productsTable").getBindingInfo("items").template
        		
				
					
					});
					
					
			},this);
				
				// this.getView().byId("SimpleFormDisplay354").bindElement("/Products("+thatData+")");
			

},
onEditToggleButtonPress: function() {
var oObjectPage = this.getView().byId("ObjectPageLayout"),
bCurrentShowFooterState = oObjectPage.getShowFooter();

oObjectPage.setShowFooter(!bCurrentShowFooterState);
},
onNavig:function(oEvent){
	debugger;
		// // var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(2),
		// 	var supplierPath = this.getView().byId('list').getSelectedContextPaths()[0];
		// 	// var supplier = supplierPath.split("/").slice(-1).pop();
		// 	 var sup = this.getView().byId('list').getSelectedItems()[0].mProperties.number;
			 
			 	 var sp1 = this.getView().getBindingContext().sPath;
			 var sup = sp1.slice(11).replace(')','')
			 
			 var PRDID = oEvent.getSource().mAggregations.cells[0].mProperties.text;
			 
	this.getOwnerComponent().getRouter().navTo("Third", {
				
				arg: sup,
				PRD:PRDID,
				layout:	fioriLibrary.LayoutType.ThreeColumnsMidExpanded,
		
			});
},

	handleClose: function (oEvent) {
			debugger;

			// var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/endColumn/closeColumn");
			// var arg = this._arg;
			this.getOwnerComponent().getRouter().navTo("Supplier", {
				layout: sap.f.LayoutType.OneColumn
				
			});
		},
/**
*	Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
*	(NOT before the first rendering! onInit() is used for that one!).
*	@memberOf Supplier.SecondApp.view.SupplierDetail
*/
// onBeforeRendering: function() {
//
// },

/**
*	Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
*	This hook is the same one that SAPUI5 controls get after being rendered.
*	@memberOf Supplier.SecondApp.view.SupplierDetail
*/
// onAfterRendering: function() {
//
// },

/**
*	Called when the Controller is destroyed. Use this one to free resources and finalize activities.
*	@memberOf Supplier.SecondApp.view.SupplierDetail
*/
// onExit: function() {
//
// }

});

});
