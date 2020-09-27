sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("COM.SAMX.TABSRCH.ZPROJECT_TABLE_SRCH.controller.TABSRCH", {
		onInit: function () {

		},
		handleSearch : function (evt) {
	// create model filter
	debugger;
	var filters = [];
	var query = evt.getParameter("query");
	if (query && query.length > 0) {
		var filter = new sap.ui.model.Filter("City", sap.ui.model.FilterOperator.Contains, query);
		filters.push(filter);
	}

	// update list binding
	var list = this.getView().byId("idTable");
	var binding = list.getBinding("items");
	binding.filter(filters);
},

	onSelectionChange: function (oEvent) {
		debugger;
			var oList = oEvent.getSource();
			var oLabel = this.byId("idFilterLabel");
			var oInfoToolbar = this.byId("idInfoToolbar");

			// With the 'getSelectedContexts' function you can access the context paths
			// of all list items that have been selected, regardless of any current
			// filter on the aggregation binding.
			var aContexts = oList.getSelectedContexts(true);

			// update UI
			var bSelected = (aContexts && aContexts.length > 0);
			var sText1 = (bSelected);
			if (sText1 === true)
			{
			var sText = aContexts.length + " selected";
			}else
			{
			sText = null;	
			// this.showError("nothing selected");
			}
			
			
			// var sText = (bSelected) ? aContexts.length + " selected" + " by Ragav" : null;
			oInfoToolbar.setVisible(bSelected);
			oLabel.setText(sText);
		}
		
	});
});