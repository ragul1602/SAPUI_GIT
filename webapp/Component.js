sap.ui.define([
	// "sap.base.util.UriParameters",
	"sap/ui/core/UIComponent",
	"jquery.sap.global",
	// "sap/ui/Device",
	"com/smax/flexi/ZPROJ_FLEXI/model/models",
	"sap/f/library",
	"sap/ui/model/json/JSONModel",

	"sap/f/FlexibleColumnLayoutSemanticHelper"

], function (UIComponent, jquery, models, fioriLibrary, JSONModel, FlexibleColumnLayoutSemanticHelper) {
	"use strict";

	return UIComponent.extend("com.smax.flexi.ZPROJ_FLEXI.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {

			debugger;
			
			var oModel, oRouter;

			oModel = new JSONModel();

			this.setModel(oModel, "lay");

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing

			oRouter = this.getRouter();
			oRouter.initialize();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);

			// set the device model
			// this.setModel(models.createDeviceModel(), "device");

		},
		_onBeforeRouteMatched: function (oEvent) {
			debugger;
			// if (oEvent.mParameters.arguments.layout !== 'fullPage')
			// {
			var oModel = this.getModel("lay"),
				sLayout;
			// sLayout = oEvent.getParameter().arguments.layout;
			// sLayout = fioriLibrary.LayoutType.getOwnerComponent;

			var sLayout = oEvent.mParameters.arguments.layout;

			if (!sLayout) {
				// sLayout = fioriLibrary.LayoutType.getOwnerComponent;
				// sLayout = sap.f.LayoutType.OneColumn;
				sLayout = sap.f.LayoutType.TwoColumnsBeginExpanded;
				
			}

			if (sLayout !== '') {
				oModel.setProperty("/layout", sLayout);
			}
		},
		getHelper: function () {
debugger;
			var oFCL = this.getRootControl().byId("fc");
			var LayoutType = fioriLibrary.LayoutType;
			var oParams = jQuery.sap.getUriParameters(),
			// var	oParams = UriParameters.fromQuery(location.search),
			
				oSettings = {
					defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
					// defaultThreeColumnLayoutType: LayoutType.ThreeColumnsMidExpanded,
					mode: oParams.get("mode"),
					initialColumnsCount: 2,
					maxColumnsCount: oParams.get("max")
				};

			return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);

		}

	});

});