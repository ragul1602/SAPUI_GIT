sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.batch41.table.ZBATCH41_TABLES.controller.App", {
		onInit: function () {
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/employees.json");
			this.getView().setModel(oModel);
			
		}
	});
});