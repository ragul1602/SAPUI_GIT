sap.ui.define(
	
	["sap/m/Button"],
		function (oBtn) {


	oBtn.extend("COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.Controls.rButton", {

		metadata: {

			properties: {
				
			},

			events: {

				"hover": {}
			}
				},
				
				

		onmouseover: function () {

			this.fireHover();

		},

	
		renderer: {}

	});

});
