/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/odata2/ZPROJECT_DEMO15/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/odata2/ZPROJECT_DEMO15/test/integration/pages/odata2",
	"com/smax/odata2/ZPROJECT_DEMO15/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.odata2.ZPROJECT_DEMO15.view.",
		autoWait: true
	});
});