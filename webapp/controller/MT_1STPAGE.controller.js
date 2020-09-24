sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.multitab.ZPROJECT_ROUTER_MULTITAB.controller.MT_1STPAGE", {
		onInit: function () {


	


		},
		
		onClick:function (oEvent) {
			
			debugger;
			
			
			 var SID = oEvent.getSource().getBindingContext().getProperty("SupplierID");
			 var PID = oEvent.getSource().getBindingContext().getProperty("ProductID");
			
			this.getOwnerComponent().getRouter().navTo('PRDSUP_DET',{X : PID,Y : SID});
			
		}
		
		
	});
});