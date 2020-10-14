sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.odata2.ZPROJECT_DEMO16.controller.odata2", {
		onInit: function () {
			
			 var url = "/Northwind/V2/Northwind/Northwind.svc/";  //OData service url
           
           var oModel = new sap.ui.model.odata.v2.ODataModel(url);
           
           this.getView().setModel(oModel);

		}
	});
});