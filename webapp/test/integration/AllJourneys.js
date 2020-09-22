/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/TableCB/Zproject_odata_TableCB/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/TableCB/Zproject_odata_TableCB/test/integration/pages/TableCB",
	"com/smax/TableCB/Zproject_odata_TableCB/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.TableCB.Zproject_odata_TableCB.view.",
		autoWait: true
	});
});