/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SMAX/ROUTER1/ZPROJECT_ROUTER1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SMAX/ROUTER1/ZPROJECT_ROUTER1/test/integration/pages/ROOTVIEW",
	"COM/SMAX/ROUTER1/ZPROJECT_ROUTER1/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SMAX.ROUTER1.ZPROJECT_ROUTER1.view.",
		autoWait: true
	});
});