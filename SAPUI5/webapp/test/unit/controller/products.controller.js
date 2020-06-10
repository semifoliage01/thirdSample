/*global QUnit*/

sap.ui.define([
	"sample/sapui5/SAPUI5/controller/products.controller"
], function (Controller) {
	"use strict";

	QUnit.module("products Controller");

	QUnit.test("I should test the products controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});