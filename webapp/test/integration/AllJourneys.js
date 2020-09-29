/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SMAX/ODATA13/ZPROJECT_DEMO13/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SMAX/ODATA13/ZPROJECT_DEMO13/test/integration/pages/odata",
	"COM/SMAX/ODATA13/ZPROJECT_DEMO13/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SMAX.ODATA13.ZPROJECT_DEMO13.view.",
		autoWait: true
	});
});