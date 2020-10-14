/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/tab/ZPROJECT_DEMO9/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/tab/ZPROJECT_DEMO9/test/integration/pages/Table_AB",
	"com/smax/tab/ZPROJECT_DEMO9/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.tab.ZPROJECT_DEMO9.view.",
		autoWait: true
	});
});