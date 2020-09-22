/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/filt/ZPROJECT_FILTER/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/filt/ZPROJECT_FILTER/test/integration/pages/Filter",
	"com/smax/filt/ZPROJECT_FILTER/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.filt.ZPROJECT_FILTER.view.",
		autoWait: true
	});
});