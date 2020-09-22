/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/fotmat/ZPROJECT_FORMATTER/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/fotmat/ZPROJECT_FORMATTER/test/integration/pages/View1",
	"com/smax/fotmat/ZPROJECT_FORMATTER/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.fotmat.ZPROJECT_FORMATTER.view.",
		autoWait: true
	});
});