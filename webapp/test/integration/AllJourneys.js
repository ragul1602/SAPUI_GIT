/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SMAX/ROUTER3/ZPROJECT_ROUTER3/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SMAX/ROUTER3/ZPROJECT_ROUTER3/test/integration/pages/ROUTER_3",
	"COM/SMAX/ROUTER3/ZPROJECT_ROUTER3/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SMAX.ROUTER3.ZPROJECT_ROUTER3.view.",
		autoWait: true
	});
});