/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/filterbt/ZPROJECT_filterBT/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/filterbt/ZPROJECT_filterBT/test/integration/pages/FilterBT",
	"com/smax/filterbt/ZPROJECT_filterBT/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.filterbt.ZPROJECT_filterBT.view.",
		autoWait: true
	});
});