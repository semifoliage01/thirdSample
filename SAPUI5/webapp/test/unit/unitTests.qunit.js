/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sample/sapui5/SAPUI5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});