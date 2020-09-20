/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/ZBATCH41_CREATE/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/ZBATCH41_CREATE/test/integration/pages/App",
	"com/smax/ZBATCH41_CREATE/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.ZBATCH41_CREATE.view.",
		autoWait: true
	});
});