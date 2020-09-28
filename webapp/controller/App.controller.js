sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/model/xml/XMLModel"
], function (Controller, ResourceModel, XMLModel) {
	"use strict";

	return Controller.extend("com.batch41.table.ZBATCH41_TABLES.controller.App", {
		onInit: function () {

			/*	var oModel = new sap.ui.model.json.JSONModel();
				oModel.loadData("model/employees.json");
				this.getView().setModel(oModel);*/

			//var oModel = new sap.ui.model.xml.XMLModel();
			var oModel = new XMLModel();
			oModel.loadData("model/employee.xml");
			
			this.getView().setModel(oModel);

			//named Model
			sap.ui.localResources("i18n");
			var oResourceModel = new ResourceModel({
				bundleName: "i18n.i18n"
			});
			
			this.getView().setModel(oResourceModel, "i1");
			
			
		}
	});
});