sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/resource/ResourceModel"

	],
	function (Controller, ResourceModel) {
		"use strict";

		return Controller.extend("com.smax.proj.ZRAGAV_DEMO7.controller.homePage", {

			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf com.smax.proj.ZRAGAV_DEMO7.view.homePage
			 */
			onInit: function () {
				debugger;
				var carousel = this.getView().byId('car');
				carousel.firePageChanged();
				// carousel.attachPageChanged(carousel, function () {
					
				// }, this);
				// this.img1

				var oModel = new sap.ui.model.json.JSONModel();

				oModel.loadData("model/HDFC.json");

				this.getView().setModel(oModel);

				var oDta1 = this.getView().byId("S1");

				oDta1.bindElement("/address/");

				sap.ui.localResources("i18n");

				var oRes = new ResourceModel({
					bundleName: "i18n.i18n"
				});

				this.getView().setModel(oRes, "p1");

				//sap.ui.getCore().attachValidationError(function (oEvent) {

				//         oEvent.getParameter('Number').setValueState(ValueState.Error);

				//     });

				//     sap.ui.getCore().attachValidationSuccess(function (oEvent) {

				//         oEvent.getParameter(“element“).setValueState(ValueState.None);

				//     });

			},

			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf com.smax.proj.ZRAGAV_DEMO7.view.homePage
			 */
			//	onBeforeRendering: function() {
			//
			//	},

			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that SAPUI5 controls get after being rendered.
			 * @memberOf com.smax.proj.ZRAGAV_DEMO7.view.homePage
			 */
			//	onAfterRendering: function() {
			//
			//	},

			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf com.smax.proj.ZRAGAV_DEMO7.view.homePage
			 */
			//	onExit: function() {
			//
			//	}

			onLogin: function () {

				var oAll = this.getView().getParent();
				oAll.to(oAll.getPages()[1]);

			},

			onCar: function () {
				debugger;
				var carousel = this.getView().byId('car');
				setTimeout(function () {
					carousel.next();
				}, 2500);
				carousel.attachPageChanged(carousel, function () {
					carousel.next();
				}, this);
				// setTimerLoop(carousel, false, 5);

				// setLoop("true");

			}

		});

	});