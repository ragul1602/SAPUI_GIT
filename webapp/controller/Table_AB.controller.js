sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/model/xml/XMLModel"
], function (Controller, ResourceModel, XMLModel) {
	"use strict";

	return Controller.extend("com.smax.tab.ZPROJECT_DEMO9.controller.Table_AB", {
		onInit: function () {

			// var oMod = new sap.ui.model.json.JSONModel();
			// oMod.loadData("model/Emp.json");
			// this.getView().setModel(oMod);

		

			var oMod1 = new XMLModel();
			oMod1.loadData("model/Emp.xml");

			this.getView().setModel(oMod1, "m1");

			sap.ui.localResources("i18n");

			var oRes = new ResourceModel({
				bundleName : "i18n.i18n"
			});

			this.getView().setModel(oRes, "p1");

		}
	});
});