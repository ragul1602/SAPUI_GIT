/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/odata/ZBATCH41_READ_ODATA/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/odata/ZBATCH41_READ_ODATA/test/integration/pages/App",
	"com/smax/odata/ZBATCH41_READ_ODATA/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.odata.ZBATCH41_READ_ODATA.view.",
		autoWait: true
	});
});