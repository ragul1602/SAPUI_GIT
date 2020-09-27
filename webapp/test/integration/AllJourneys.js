/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/table/ZPROJECT_TABLE_ITEMSADD/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/table/ZPROJECT_TABLE_ITEMSADD/test/integration/pages/ITEMSADD",
	"com/smax/table/ZPROJECT_TABLE_ITEMSADD/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.table.ZPROJECT_TABLE_ITEMSADD.view.",
		autoWait: true
	});
});