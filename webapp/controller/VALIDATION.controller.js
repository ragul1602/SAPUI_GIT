sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/SelectDialog",
	"sap/m/Label",
	"sap/m/Text",
	"sap/ui/layout/form/SimpleForm",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Button",
	"sap/m/library",
	'sap/m/MessageToast',
	'sap/m/Token',

], function (Controller, Dialog, Label, Text, f, List, StandardListItem, Button, mobileLibrary, MessageToast, Token) {
	"use strict";

	return Controller.extend("COM.SMAX.VALID.ZPROJECT_VALIDATION1.controller.VALIDATION", {

		onInit: function () {

			sap.ui.getCore().attachValidationError(function (oEvent) {

				oEvent.getParameter("element").setValueState(ValueState.Error);

			});

			sap.ui.getCore().attachValidationSuccess(function (oEvent) {

				oEvent.getParameter("element").setValueState(ValueState.None);

			});

		},

		handleValueHelp: function (oEvent) {
			debugger;

			// shortcut for sap.m.ButtonType
			// var ButtonType = mobileLibrary.ButtonType;

			var oButton = oEvent.getSource();
			
			var oView = this.getView();

			// 26/02/2020	
			
			var oSelectedInput = oEvent.getSource();
			var that = this;

			if (!this.pressDialog) {
				debugger;
				this.pressDialog = new Dialog({
					noDataText: "No Products Found",
					title: "Select Product",
					search: "handleSearch()",
					multiSelect: true,
					confirm: function ( oEvent) {
						{
							// var oSelectedInput = that.getSource();
							debugger;
							var aContexts = oEvent.getParameter("selectedContexts");
							if (aContexts && aContexts.length) {
								var oEmp = oEvent.getParameters("selectedContexts").selectedItem.getDescription();
								var empNo = oEvent.getParameters("selectedContexts").selectedItem.getTitle();
						var oEmp1 = this.getView().byId("emp");
						// oEmp1.addTokens([new Token({text: empNo})]);

								// this.getView().byId('emp').setValue(empNo); 03/03/2020
								// var test = this.getView().byId('EMPID');
								var aSelectedItems = oEvent.getParameter("selectedContexts");
								var oMultiInput = this.byId("emp");
									if (aSelectedItems && aSelectedItems.length > 0) {
				aSelectedItems.forEach(function (oItem) {
					oMultiInput.addToken(new Token({
						// debugger;
						text: oItem.getProperty('EmployeeID')
					}));
				});		
									};
								
								MessageToast.show("YOU CHOSEN " + oEmp)
							} else {
								MessageToast.show("No new item was selected.");
							}
							// oEvent.getSource().getBinding("items").filter([]);
						}
						// return Controller;
					}.bind(this),
					cancel: function (oEvent) {
						// debugger;

					},

					items: ({
						path: "/Employees",

						// items:({
						// 	path: "/Employees"
						// }),

						// content : new StandardListItem ({
						// 	// path: '/Employees',
						// temp	title:"{EmployeeID}",
						// 	description: "{FirstName}",
						// 	// icon="{ProductPicUrl}"
						// 	// iconDensityAware="false"
						// 	// iconInset="false"
						// 	type:"Active" })

						// content: 
						// new List({
						// 	path: "/Employees",
						template:

							new StandardListItem({
							title: "{EmployeeID}",
							description: "{FirstName}",
							type: "Active"
								// counter: "{FirstName}"
								// })
								// }
						})
					}),
					

				});
				// 26/02/2020

				// 24/02/2020		
				// var pressDialog = new Dialog({
				// 			title: "Employees List",
				// 			content: new List({
				// 				items: {
				// 					path: "/Employees",
				// 					template: new StandardListItem({
				// 						title: "{EmployeeID}",
				// 						description: "{FirstName}",
				// 							type: "Active"
				// 						// counter: "{FirstName}"
				// 					})
				// 				}
				// 			}),

				// 			beginButton: new Button({
				// 				type: ButtonType.Emphasized,
				// 				text: "OK",
				// 				press: function (event) {
				// 					debugger;
				// 					pressDialog.close();
				// 				}.bind(this)
				// 			}),
				// 			endButton: new Button({

				// 				text: "Close",
				// 				press: function () {
				// 					pressDialog.close();
				// 				}.bind(this)
				// 			})
				// 		});

				// 24/02/2020	
				this.pressDialog.setModel(this.getView().getModel());
				// jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.pressDialog);
				// this.getView().addDependent(this.pressDialog);
				this.pressDialog.open();
					
				//to get access to the global model
				// this.getView().addDependent(this.pressDialog);
			} else {
				this.pressDialog.open();
			}

		},

		// handleClose: function (oEvent) {
		// 	debugger;
		// 	var aContexts = oEvent.getParameter("selectedContexts");
		// 	if (aContexts && aContexts.length) {
		// 		MessageToast.show("You have chosen " + aContexts.map(function (oContext) {
		// 			return oContext.getObject().Name;
		// 		}).join(", "));
		// 	} else {
		// 		MessageToast.show("No new item was selected.");
		// 	}
		// 	oEvent.getSource().getBinding("items").filter([]);
		// },

		// onPress: function() {
		// 	debugger;
		// 	var nameTextField = this.byId("emp");
		//  //this function checks its value, you can insert more checks on the value
		//  if(nameTextField.getValue() === "") {
		//      alert("Please enter a employee id!!!!");

		// }
		// },

		// 		new sap.ui.commons.TextField({
		//     // your configuration
		//     liveChange: function(){
		//         if(this.getValue() === "")
		//             this.setValueState(sap.ui.core.ValueState.Error);
		//         else
		//             this.setValueState(sap.ui.core.ValueState.Success);
		//     }
		// });

		oEvent: function () {
			debugger;
			var nameTextField = this.byId("emp");
			//this function checks its value, you can insert more checks on the value
			if (nameTextField.getValue() === "") {
				alert("Please enter a employee id!!!!");

			}
		}

	});
});