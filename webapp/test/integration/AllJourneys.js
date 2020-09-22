/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SAMX/TABLES/ZPROJECT_ODATA_2TABLES/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SAMX/TABLES/ZPROJECT_ODATA_2TABLES/test/integration/pages/TABLES_PARALEL",
	"COM/SAMX/TABLES/ZPROJECT_ODATA_2TABLES/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SAMX.TABLES.ZPROJECT_ODATA_2TABLES.view.",
		autoWait: true
	});
});