sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.ZBATCH41_ODATA_CREATE.controller.App", {
		onInit: function () {

		},
		onCreate : function(){
			debugger;
			
			var data = {
				ID : parseInt(this.getView().byId("prodId").getValue()),
				Name : this.getView().byId("name").getValue(),
				Description : this.getView().byId("description").getValue(), 
				// ReleaseDate : this.getView().byId("releaseDate"), THIS WILL CREATE ERROR
				ReleaseDate : this.getView().byId("releaseDate").getDateValue(), 
				DiscontinuedDate : this.getView().byId("discontinuedDate").getDateValue(),
				Rating : parseInt(this.getView().byId("rating").getValue()),
				Price : parseInt(this.getView().byId("price").getValue()).toFixed(2)
			};
			
			this.getView().getModel().create("/Products", data, {
			    success : function(){
			    	sap.m.MessageToast.show("Data Updated");
			    },
			    error : function(error){
			    sap.m.MessageToast.show("Data not Updated");
			    }
			});
		}
	});
});