/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/odata/ZPROJECT_DEMO10/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/odata/ZPROJECT_DEMO10/test/integration/pages/View_oDta",
	"com/smax/odata/ZPROJECT_DEMO10/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.odata.ZPROJECT_DEMO10.view.",
		autoWait: true
	});
});