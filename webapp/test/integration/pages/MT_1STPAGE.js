sap.ui.define([
	"sap/ui/test/Opa5",
	"com/smax/multitab/ZPROJECT_ROUTER_MULTITAB/test/integration/pages/Common",
	"sap/ui/test/actions/Press"
], function (Opa5, Common, Press) {
	"use strict";
	var sViewName = "MT_1STPAGE";
	Opa5.createPageObjects({
		onTheAppPage: {
			baseClass: Common,

			actions: {
				//This is an example of an OPA action that needs to be fixed 
				iDoMyAction: function () {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						actions: [function () {
							//Implement your action here
						}],
						errorMessage: "implement test"
					});
				}
			},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The MT_1STPAGE view is displayed");
						},
						errorMessage: "Did not find the MT_1STPAGE view"
					});
				},

				//This is an example of an OPA assertion that needs to be fixed 
				iDoMyAssertion: function () {
					return this.waitFor({
						id: "idAppControl",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(false, "Implement test");
						},
						errorMessage: "implement me"
					});
				}
			}
		}
	});

});