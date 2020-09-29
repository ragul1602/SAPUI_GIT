sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.odata.ZPROJECT_DEMO10.controller.View_oDta", {
		onInit: function () {


var url = "/Northwind/V2/Northwind/Northwind.svc/"; 
var oDt1 = new sap.ui.model.odata.v2.ODataModel(url);  

this.getView().setModel(oDt1);



		}
	});
});