/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SMAX/RAGAV/ZRAGAV_DEMO4/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SMAX/RAGAV/ZRAGAV_DEMO4/test/integration/pages/View1",
	"COM/SMAX/RAGAV/ZRAGAV_DEMO4/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SMAX.RAGAV.ZRAGAV_DEMO4.view.",
		autoWait: true
	});
});