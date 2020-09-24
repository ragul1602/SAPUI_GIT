sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.multitab.ZPROJECT_ROUTER_MULTITAB_MSEL.controller.MT_1STPAGE", {
		onInit: function () {


	


		},
		
		onClick:function () {
			
			debugger;
			
			 var oSelectedItem = this.getView().byId("idTable").getSelectedItems();
			
			 //var SID = oEvent.getSource().getBindingContext().getProperty("SupplierID");
			 //var PID = oEvent.getSource().getBindingContext().getProperty("ProductID");
			
				this.getOwnerComponent().getRouter().navTo('PRDSUP_DET');
			// this.getOwnerComponent().getRouter().navTo('PRDSUP_DET',{X : PID,Y : SID});
			
		}
		
		
	});
});