sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/export/Spreadsheet"
	
], function (Controller,Spreadsheet) {
	"use strict";

	return Controller.extend("com.smax.excel.zproject_excel.controller.Excel", {
		onInit: function () {

		},
			createColumnConfig: function() {
			var aCols = [];

			aCols.push({
				label: 'EmployeeID',
				type: 'number',
				property: 'EmployeeID',
				scale: 0
			});

			aCols.push({
				label: 'FirstName',
				property: 'FirstName',
				type: 'string'
			});

			aCols.push({
				label: 'LastName',
				property: 'LastName',
				type: 'string'
			});

			aCols.push({
				label: 'Full name',
				property: ['LastName', 'FirstName'],
				type: 'string',
				template: '{1} {0}'
			});

			aCols.push({
				label: 'City',
				property: 'City',
				type: 'string'
			});

			aCols.push({
				label : 'Region',
				property: 'Region',
				type: 'string',
							});

		aCols.push({
				label : 'Country',
				property: 'Country',
				type: 'string',
							});

		

			return aCols;
		},

		onPress  : function() {
			
			debugger;
			var aBoundProperties, aCols, oProperties, oRowBinding, oSettings, oTable, oController;

			oController = this;

			if (!this._oTable) {
				this._oTable = this.byId("idTable1");
			}

			oTable = this._oTable;
			oRowBinding = oTable.getBinding("items");

			aCols = this.createColumnConfig();

			var oModel = oRowBinding.getModel();
			var oModelInterface = oModel.getInterface();

			oSettings = {
				workbook: { columns: aCols },
				dataSource: {
					type: "oData",
					dataUrl: oRowBinding.getDownloadUrl ? oRowBinding.getDownloadUrl() : null,
					serviceUrl: oModelInterface.sServiceUrl,
					headers: oModelInterface.getHeaders ? oModelInterface.getHeaders() : null,
					count: oRowBinding.getLength ? oRowBinding.getLength() : null,
					useBatch: oModelInterface.bUseBatch,
					sizeLimit: oModelInterface.iSizeLimit
				},
				worker: false // We need to disable worker because we are using a MockServer as OData Service
			};

			new Spreadsheet(oSettings).build();
		},

		
		
	});
});