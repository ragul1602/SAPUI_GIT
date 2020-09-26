sap.ui.define(
	["sap/ui/core/Control"],
	function(Control){
		
		Control.extend("COM.SMAX.SPLITAPP.ZPROJECT_ROUTER_SPLITAPP.Controls.Heading",{
			
			metadata:{
				properties:{
					"Label":"",
					"Color":"",
					"border":""
				}
			},
			init:function(){},
			renderer: function(oRm,oControl){
				debugger;
				// oRm.write("<h1>"+ oControl.getLabel() + "</h1>");
				oRm.write("<h1");
				oRm.addStyle("color",oControl.getColor());
				oRm.addStyle("border",oControl.getBorder());
				oRm.writeStyles();
				oRm.write(">" + oControl.getLabel() + "</h1>");
				
				
				
			}
		});
		
	}
	);