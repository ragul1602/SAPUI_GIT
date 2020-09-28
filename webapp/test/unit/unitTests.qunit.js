/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"COM/SMAX/LE/ZEXP_LAYOUTEDITOR/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});