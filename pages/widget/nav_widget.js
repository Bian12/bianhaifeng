define(["dojo/_base/declare",
    "dojo/_base/lang",	
    "dojo/_base/connect",
    "dojo/on",
    "dojo/query",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/nav_widget.html"],
    function (declare, lang, connect, on, query,  _WidgetBase, _TemplatedMixin, template) {
		var thisClassName = "pages.widgets.nav_widget";
        var navWidget = declare(thisClassName, [_WidgetBase, _TemplatedMixin], {
            baseClass:"navbar",
            templateString: template,

            constructor: function () {
                
            },

            postCreate: function () {
				var sronly=query('.sr-only-toggle',this.domNode);
				on(sronly,'click',function(){
					alert(1);
				})
				//navbar_toggle.addContent('<a href="javascript:alert(1);">点我</a>')
            }

        });

        lang.setObject(thisClassName, navWidget);
        return navWidget;
	});
    