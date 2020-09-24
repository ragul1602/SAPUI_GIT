/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/datapass/ZPROJECT_ROUTER_DATAPASS/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/datapass/ZPROJECT_ROUTER_DATAPASS/test/integration/pages/DATAPASS",
	"com/smax/datapass/ZPROJECT_ROUTER_DATAPASS/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.datapass.ZPROJECT_ROUTER_DATAPASS.view.",
		autoWait: true
	});
});