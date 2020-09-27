/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/twotab/ZPROJECT_ODATA_TWOTAB/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/twotab/ZPROJECT_ODATA_TWOTAB/test/integration/pages/twotab",
	"com/smax/twotab/ZPROJECT_ODATA_TWOTAB/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.twotab.ZPROJECT_ODATA_TWOTAB.view.",
		autoWait: true
	});
});