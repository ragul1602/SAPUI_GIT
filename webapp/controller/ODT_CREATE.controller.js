sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.smax.odata.ZPROJ_ODATA_CREATE.controller.ODT_CREATE", {
		onInit: function () {

		},
		onPress: function () {
			debugger;
			var data = {
				ID: this.getView().byId("ID").getValue(),
				Name: this.getView().byId("Name").getValue()
			};
			this.getOwnerComponent().getModel().create('/Categories', data, {
					success: function () {
						sap.m.MessageToast.show('Category Created Successfully');
					},
					
					error: function () {
						sap.m.MessageToast.show('Category Creation failed')}
			});
			
					
				
		}
			// })

	});
});