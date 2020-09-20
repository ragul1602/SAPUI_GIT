/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/odata/read/Z_ODATA_READ/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/odata/read/Z_ODATA_READ/test/integration/pages/App",
	"com/smax/odata/read/Z_ODATA_READ/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.odata.read.Z_ODATA_READ.view.",
		autoWait: true
	});
});