/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/excel/zproject_excel/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/excel/zproject_excel/test/integration/pages/Excel",
	"com/smax/excel/zproject_excel/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.excel.zproject_excel.view.",
		autoWait: true
	});
});