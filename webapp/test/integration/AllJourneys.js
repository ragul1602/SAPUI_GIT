/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/batch41/db02/ZBATCH41_DB02/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/batch41/db02/ZBATCH41_DB02/test/integration/pages/App",
	"com/batch41/db02/ZBATCH41_DB02/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.batch41.db02.ZBATCH41_DB02.view.",
		autoWait: true
	});
});