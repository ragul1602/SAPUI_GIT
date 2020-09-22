/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/odata/ZPROJ_ODATA_CREATE/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/odata/ZPROJ_ODATA_CREATE/test/integration/pages/ODT_CREATE",
	"com/smax/odata/ZPROJ_ODATA_CREATE/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.odata.ZPROJ_ODATA_CREATE.view.",
		autoWait: true
	});
});