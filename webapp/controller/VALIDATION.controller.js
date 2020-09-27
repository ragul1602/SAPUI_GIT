sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/SelectDialog",
	"sap/ui/core/Fragment",
	"sap/m/Label",
	"sap/m/Text",
	"sap/ui/layout/form/SimpleForm",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Button",
	"sap/m/library"

], function (Controller, Dialog, Fragment, Label, Text, f, List, StandardListItem, Button, mobileLibrary) {
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

			// 26/02/2020	

			if (!this.pressDialog) {

				this.pressDialog = new Dialog({
					noDataText: "No Products Found",
					title: "Select Product",
					search: "handleSearch",
					confirm: 'handleClose()',
					cancel: function (oEvent) {
						debugger;
						var aContexts = oEvent.getParameter("selectedContexts");
						if (aContexts && aContexts.length) {
							MessageToast.show("You have chosen " + aContexts.map(function (oContext) {
								return oContext.getObject().Name;
							}).join(", "));
						} else {
							MessageToast.show("No new item was selected.");
						}
						// oEvent.getSource().getBinding("items").filter([]);
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
				this.pressDialog.open();

				//to get access to the global model
				// this.getView().addDependent(this.pressDialog);
			}

		},

		handleSelectDialogPress: function (oEvent) {
			var oButton = oEvent.getSource();
			if (!this._oDialog) {
				Fragment.load({
					name: "sap.m.sample.SelectDialog.view.Dialog",
					controller: this
				}).then(function (oDialog) {
					this._oDialog = oDialog;
					this._oDialog.setModel(this.getView().getModel());
					this._configDialog(oButton);
					this._oDialog.open();
				}.bind(this));
			} else {
				this._configDialog(oButton);
				this._oDialog.open();
			}
		},

		_configDialog: function (oButton) {
			// Multi-select if required
			var bMultiSelect = !!oButton.data("multi");
			this._oDialog.setMultiSelect(bMultiSelect);

			var sCustomConfirmButtonText = oButton.data("confirmButtonText");
			this._oDialog.setConfirmButtonText(sCustomConfirmButtonText);

			// Remember selections if required
			var bRemember = !!oButton.data("remember");
			this._oDialog.setRememberSelections(bRemember);

			//add Clear button if needed
			var bShowClearButton = !!oButton.data("showClearButton");
			this._oDialog.setShowClearButton(bShowClearButton);

			// Set growing property
			var bGrowing = oButton.data("growing");
			this._oDialog.setGrowing(bGrowing == "true");

			// Set growing threshold
			var sGrowingThreshold = oButton.data("threshold");
			if (sGrowingThreshold) {
				this._oDialog.setGrowingThreshold(parseInt(sGrowingThreshold));
			}

			// Set draggable property
			var bDraggable = oButton.data("draggable");
			this._oDialog.setDraggable(bDraggable == "true");

			// Set draggable property
			var bResizable = oButton.data("resizable");
			this._oDialog.setResizable(bResizable == "true");

			// Set style classes
			var sResponsiveStyleClasses =
				"sapUiResponsivePadding--header sapUiResponsivePadding--subHeader sapUiResponsivePadding--content sapUiResponsivePadding--footer";
			var sResponsivePadding = oButton.data("responsivePadding");
			if (sResponsivePadding) {
				this._oDialog.addStyleClass(sResponsiveStyleClasses);
			} else {
				this._oDialog.removeStyleClass(sResponsiveStyleClasses);
			}

			// clear the old search filter
			this._oDialog.getBinding("items").filter([]);

			// toggle compact style
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._oDialog);
		},

		handleSearch: function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", FilterOperator.Contains, sValue);
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},

		handleClose: function (oEvent) {
			debugger;
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				MessageToast.show("You have chosen " + aContexts.map(function (oContext) {
					return oContext.getObject().Name;
				}).join(", "));
			} else {
				MessageToast.show("No new item was selected.");
			}
			oEvent.getSource().getBinding("items").filter([]);
		},

		handleValueHelp2: function (oEvent) {
			debugger;
			if (!this._oValueHelpDialog) {
			this._oValueHelpDialog = sap.ui.xmlfragment("COM.SMAX.VALID.ZPROJECT_VALIDATION1.view.ValueHelp", this);
			this.getView().addDependent(this._oValueHelpDialog);
				// this._oValueHelpDialog.setModel(this.getView().getModel());
					// this._configValueHelpDialog();
								

					this._oValueHelpDialog.open();
				// Fragment.Load({
				// 	name: "sap.m.sample.SelectDialog.view.ValueHelp",
				// 	controller: this
				// }).then(function (oValueHelpDialog) {
				// 	this._oValueHelpDialog = oValueHelpDialog;
				// 	this.getView().addDependent(this._oValueHelpDialog);
				// 	this._configValueHelpDialog();
				// 	this._oValueHelpDialog.open();
				// }.bind(this));
			} else {
				// this._configValueHelpDialog();
				this._oValueHelpDialog.open();
			}
		},

		_configValueHelpDialog: function () {
			var sInputValue = this.byId("emp").getValue(),
				oModel = this.getView().getModel(),
				aProducts = oModel.getProperty("/Employees");

			aProducts.forEach(function (oProduct) {
				oProduct.selected = (oProduct.Name === sInputValue);
			});
			oModel.setProperty("/Employees", aProducts);
		},

		handleValueHelpClose: function (oEvent) {
			debugger;
				var empNo = oEvent.getParameters("selectedContexts").selectedItem.getTitle();
								this.getView().byId('emp').setValue(empNo);
			
			// var oSelectedItem = oEvent.getParameter("selectedItem"),
			// 	oInput = this.byId("productInput");

			// if (oSelectedItem) {
			// 	this.byId("productInput").setValue(oSelectedItem.getTitle());
			// }

			// if (!oSelectedItem) {
			// 	oInput.resetProperty("value");
			// }
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