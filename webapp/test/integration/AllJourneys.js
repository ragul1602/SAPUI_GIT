/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/proj/ZRAGAV_DEMO7/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/proj/ZRAGAV_DEMO7/test/integration/pages/View1",
	"com/smax/proj/ZRAGAV_DEMO7/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.proj.ZRAGAV_DEMO7.view.",
		autoWait: true
	});
});