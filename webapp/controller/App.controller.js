sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.odata.ZBATCH41_READ_ODATA.controller.App", {
		onInit: function () {
            var url = "/Northwind/v2/Northwind/Northwind.svc/";
            var oModel = new sap.ui.model.odata.v2.ODataModel(url);
            this.getView().setModel(oModel);
		}
	});
});