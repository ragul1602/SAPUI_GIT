sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.databind1.ZPROJECT_DEMO8.controller.app_ragav", {
		onInit: function () {
    
    var oDta = new sap.ui.model.json.JSONModel();
    
    oDta.loadData("model/empData.json");
    
    // this.getView().setmodel();
    
    this.getView().setModel(oDta);                                 
    
   var oCont = this.getView().byId("S1");
   
   oCont.bindElement("/address/0/");


		}
	});
});