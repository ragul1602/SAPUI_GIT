/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/flexi/ZPROJ_FLEXI/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/flexi/ZPROJ_FLEXI/test/integration/pages/View1",
	"com/smax/flexi/ZPROJ_FLEXI/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.flexi.ZPROJ_FLEXI.view.",
		autoWait: true
	});
});