sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.odata.read.Z_ODATA_READ.controller.App", {
		onInit: function () {

		},
		onCreate : function(){
			// collect data
			var num = 12.00;
			var data = {
				ID : this.getView().byId("idProduct").getValue(),
			    Name : 	this.getView().byId("idName").getValue(),
			    Description : 	this.getView().byId("idDescription").getValue(),
		//	    ReleaseDate : 	this.getView().byId("idReleaseDate").getValue(),
			    ReleaseDate : 	new Date(),
			    DiscontinuedDate : 	new Date(),
			    Rating : 2,
			    Price : 	num.toFixed(2)
			};
			
		var oModel = this.getOwnerComponent().getModel(); // mentioned in manifest
		
		oModel.create("/Products", data, {
			success : function(){
				sap.m.MessageToast.show("Data creaated");
			},
			error : function(){
				sap.m.MessageToast.show("Data not creaated");	
			}
		})
			
			
			
			
			
		}
	});
});