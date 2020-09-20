/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/batch41/Z_BATCH41_ROUTER/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/batch41/Z_BATCH41_ROUTER/test/integration/pages/App",
	"com/smax/batch41/Z_BATCH41_ROUTER/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.batch41.Z_BATCH41_ROUTER.view.",
		autoWait: true
	});
});