/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"emax/cls05/ZCLS05SPLITAPP/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"emax/cls05/ZCLS05SPLITAPP/test/integration/pages/SAPP",
	"emax/cls05/ZCLS05SPLITAPP/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "emax.cls05.ZCLS05SPLITAPP.view.",
		autoWait: true
	});
});