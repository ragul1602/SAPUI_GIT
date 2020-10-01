/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/navigat/ZRAGAV_DEMO6/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/navigat/ZRAGAV_DEMO6/test/integration/pages/Home_Page",
	"com/smax/navigat/ZRAGAV_DEMO6/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.navigat.ZRAGAV_DEMO6.view.",
		autoWait: true
	});
});