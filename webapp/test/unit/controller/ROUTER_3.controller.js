/*global QUnit*/

sap.ui.define([
	"COM/SMAX/ROUTER3/ZPROJECT_ROUTER3/controller/ROUTER_3.controller"
], function (oController) {
	"use strict";

	//This module tests the main controller of the app. Add any other relevant tests.
	//For more information on Qunit, see https://sapui5.hana.ondemand.com/#/topic/09d145cd86ee4f8e9d08715f1b364c51
	QUnit.module("ROUTER_3 Controller");

	QUnit.test("I should test the app controller loads", function (assert) {
		var oAppController = new oController();
		var sName = oAppController.getMetadata().getName();
		assert.ok(sName, "COM/SMAX/ROUTER3/ZPROJECT_ROUTER3.controller.ROUTER_3");
	});

	//this is an example of a Qunit that needs to be fixed 
	QUnit.test("I should test any additional controls", function (assert) {
		assert.ok(false, "Implement test");
	});

});