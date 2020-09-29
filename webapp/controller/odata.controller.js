sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("COM.SMAX.ODATA13.ZPROJECT_DEMO13.controller.odata", {
		onInit: function () {

			var url = "/Northwind/V2/Northwind/Northwind.svc/"; //OData service url

			var oModel = new sap.ui.model.odata.v2.ODataModel(url);

			this.getView().setModel(oModel);

		}
	});
});