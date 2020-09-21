sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.batch41.db.ZBATCH41_DB01.controller.App", {

		onInit: function () {
			
			debugger;	
	alert("STOP");
	 
		  // instantiate JSONModel
		  var oModel = new sap.ui.model.json.JSONModel();
		  
		  //loaded Data into JSONModel
		  oModel.loadData("model/companyData.json");
		  
		  // set model to view
		  this.getView().setModel(oModel);
		  
		  
		  
		 
		}
		
	});
});