/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"COM/SMAX/TABLE/ZPROJ_UITABLE/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"COM/SMAX/TABLE/ZPROJ_UITABLE/test/integration/pages/UI_TABLE",
	"COM/SMAX/TABLE/ZPROJ_UITABLE/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "COM.SMAX.TABLE.ZPROJ_UITABLE.view.",
		autoWait: true
	});
});