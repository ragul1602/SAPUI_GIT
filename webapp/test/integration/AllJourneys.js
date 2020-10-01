/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/wipro/demo/ZRAGAV_DEMO1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/wipro/demo/ZRAGAV_DEMO1/test/integration/pages/View1",
	"com/wipro/demo/ZRAGAV_DEMO1/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.wipro.demo.ZRAGAV_DEMO1.view.",
		autoWait: true
	});
});