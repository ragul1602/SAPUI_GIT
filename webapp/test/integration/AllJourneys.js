/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/batch41/ZBATCH41_ODATA01/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/smax/batch41/ZBATCH41_ODATA01/test/integration/pages/App",
	"com/smax/batch41/ZBATCH41_ODATA01/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.smax.batch41.ZBATCH41_ODATA01.view.",
		autoWait: true
	});
});