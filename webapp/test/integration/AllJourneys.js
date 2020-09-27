/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SAMX/TABSRCH/ZPROJECT_TABLE_SRCH/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SAMX/TABSRCH/ZPROJECT_TABLE_SRCH/test/integration/pages/TABSRCH",
	"COM/SAMX/TABSRCH/ZPROJECT_TABLE_SRCH/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SAMX.TABSRCH.ZPROJECT_TABLE_SRCH.view.",
		autoWait: true
	});
});