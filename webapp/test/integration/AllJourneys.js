/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/batch41/filter/ZBATCH41_FILTER/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/batch41/filter/ZBATCH41_FILTER/test/integration/pages/App",
	"com/smax/batch41/filter/ZBATCH41_FILTER/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.batch41.filter.ZBATCH41_FILTER.view.",
		autoWait: true
	});
});