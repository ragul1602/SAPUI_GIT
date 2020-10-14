/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/databind1/ZPROJECT_DEMO8/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/databind1/ZPROJECT_DEMO8/test/integration/pages/app_ragav",
	"com/smax/databind1/ZPROJECT_DEMO8/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.databind1.ZPROJECT_DEMO8.view.",
		autoWait: true
	});
});