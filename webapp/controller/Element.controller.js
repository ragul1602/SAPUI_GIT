sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.yardSAPYARD_ELEMENT_BINDING.controller.Element", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.yardSAPYARD_ELEMENT_BINDING.view.Element
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.herculis, this);
		},
			herculis: function(oParams){
			//Whenever route changes this method will get called

			//Read the URL hash tag, read the index passed by View 1 in URL params
			var sPath = oParams.getParameters().arguments.animalId;
			//Prepare the address of selected fruit using the index
			
			
			if(sPath === undefined){
				alert("empty hash tag");
			}else if(sPath !== 'undefined')
			{ 
				//Bind that address of selected fruit with the current view
				sPath = "/animals/" + sPath;
				this.getView().bindElement(sPath);
			}
			//or
			//Bind that address of selected fruit with the current Form
			/*var oForm = this.getView().byId("idSForm");
			oForm.bindElement(sPath);*/
		
			
			
			
		},
		
		onPressback:function(){
		this.oRouter.navTo("AggRoute")	;
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.yardSAPYARD_ELEMENT_BINDING.view.Element
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.yardSAPYARD_ELEMENT_BINDING.view.Element
		 */
		onAfterRendering: function() {

		}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.yardSAPYARD_ELEMENT_BINDING.view.Element
		 */
		//	onExit: function() {
		//
		//	}

	});

});