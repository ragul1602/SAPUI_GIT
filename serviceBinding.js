function initModel() {
	var sUrl = "/Northwind2/V2/(S(40nmbdluyrancsdrd35ohgal))/OData/OData.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}