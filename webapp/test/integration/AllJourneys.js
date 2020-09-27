/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/treetab/ZPROJECT_TREETAB1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/treetab/ZPROJECT_TREETAB1/test/integration/pages/TreeTab",
	"com/smax/treetab/ZPROJECT_TREETAB1/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.treetab.ZPROJECT_TREETAB1.view.",
		autoWait: true
	});
});