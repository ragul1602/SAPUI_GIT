sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.odata2.ZPROJECT_DEMO15.controller.odata2", {
		onInit: function () {

			var url = "/Northwind/V2/northwind/northwind.svc/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(url);
			this.getView().setModel(oModel);

		}
	});
});