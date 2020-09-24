/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/multitab/ZPROJECT_ROUTER_MULTITAB/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/multitab/ZPROJECT_ROUTER_MULTITAB/test/integration/pages/MT_1STPAGE",
	"com/smax/multitab/ZPROJECT_ROUTER_MULTITAB/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.multitab.ZPROJECT_ROUTER_MULTITAB.view.",
		autoWait: true
	});
});