/*global QUnit*/

sap.ui.define([
	"COM/SMAX/LE/ZEXP_LAYOUTEDITOR/controller/LE.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LE Controller");

	QUnit.test("I should test the LE controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});