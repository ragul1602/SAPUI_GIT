/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/table/ZRAGAV_DEMO5/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/table/ZRAGAV_DEMO5/test/integration/pages/View1",
	"com/smax/table/ZRAGAV_DEMO5/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.table.ZRAGAV_DEMO5.view.",
		autoWait: true
	});
});