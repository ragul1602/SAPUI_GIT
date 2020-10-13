sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.batch41.ZBATCH41_ODATA01.controller.App", {
	
	
		onInit: function () {
           var url="/Northwind2/V2/Northwind/Northwind.svc/";  //OData service url
           
           var oModel = new sap.ui.model.odata.v2.ODataModel(url);
           
           this.getView().setModel(oModel);
		}
		
		
	});
});