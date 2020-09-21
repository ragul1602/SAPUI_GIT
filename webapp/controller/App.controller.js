sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.batch41.db02.ZBATCH41_DB02.controller.App", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/country.json");
			this.getView().setModel(oModel);
		}
	});
});