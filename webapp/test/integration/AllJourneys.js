/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/samx/odata2/ZPROJECT_DEMO14/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/samx/odata2/ZPROJECT_DEMO14/test/integration/pages/main",
	"com/samx/odata2/ZPROJECT_DEMO14/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.samx.odata2.ZPROJECT_DEMO14.view.",
		autoWait: true
	});
});