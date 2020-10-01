/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/view/zragav_demo3/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/view/zragav_demo3/test/integration/pages/Home",
	"com/smax/view/zragav_demo3/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.view.zragav_demo3.view.",
		autoWait: true
	});
});