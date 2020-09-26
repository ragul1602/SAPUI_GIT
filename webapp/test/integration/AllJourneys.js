/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SMAX/SPLITAPP/ZPROJECT_ROUTER_SPLITAPP/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SMAX/SPLITAPP/ZPROJECT_ROUTER_SPLITAPP/test/integration/pages/Splitapp",
	"COM/SMAX/SPLITAPP/ZPROJECT_ROUTER_SPLITAPP/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.view.",
		autoWait: true
	});
});