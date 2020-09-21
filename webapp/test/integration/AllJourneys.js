/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/route/ZPROJECT_ROUTER/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/route/ZPROJECT_ROUTER/test/integration/pages/ROUTER",
	"com/smax/route/ZPROJECT_ROUTER/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.route.ZPROJECT_ROUTER.view.",
		autoWait: true
	});
});