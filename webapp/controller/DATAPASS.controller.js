sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.datapass.ZPROJECT_ROUTER_DATAPASS_SF.controller.DATAPASS", {
		onInit: function () {

		},

		onPress: function (oEvent) {

			var oSelect = this.getView().byId("dd");

			var sSelected = oSelect.getSelectedItem().getText();

			// var y =  oEvent.getSource().getBindingContext().getProperty("ProductID");

			// debugger;
			this.getOwnerComponent().getRouter().navTo("PRD_DT", {
				X : sSelected
			});
		}

	});
});