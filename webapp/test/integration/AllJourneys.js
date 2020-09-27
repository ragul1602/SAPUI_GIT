/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SMAX/VALID/ZPROJECT_VALIDATION1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SMAX/VALID/ZPROJECT_VALIDATION1/test/integration/pages/VALIDATION",
	"COM/SMAX/VALID/ZPROJECT_VALIDATION1/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SMAX.VALID.ZPROJECT_VALIDATION1.view.",
		autoWait: true
	});
});