define([
	"underscore",
	"jquery",
	"backbone",
	"peanut!ui/layout"
], function(_, $, Backbone, Layout) {


	//
	// Peanut Basic Layout
	// Basic Layout is a simple page with a header and a footer
	//
	var BasicLayout = Layout.extend({

		className: 'peanut-basic-layout',

		//
		// Initialize Basic Layout
		//
		initialize: function(params) {

			params = params || params;

			this.headerData = params.headerData;
			this.footerData = params.footerData;
			this.data = params.data;

			// Initialize layout templates
			this.headerTemplate = params.headerTemplate || '<div data-role="header"><h1><%=data%></h1></div>';
			this.footerTemplate = params.footerTemplate || '<div data-role="footer"><h4><%=data%></h4></div>';
			this.contentTemplate = params.contentTemplate || '<div data-role="content"><%=content%></div>';

			this.content = this.template || params.template || params.content;

			// Call super initialize method
			Layout.prototype.initialize.call(this, params);
		},


		//
		// Render Basic Layout
		//
		render: function() {

			console.log('Render layout...');

			// Render templates
			var header = _.template(this.headerTemplate, {data: this.headerData});
			var footer = _.template(this.footerTemplate, {data: this.footerData});
			var content;

			// If content is a subview
			if( this.content && (typeof this.content.render === 'function') ) {
				this.content.render();
				content = _.template(this.contentTemplate, {content: $('<div>').append(this.content.$el.clone()).html() });
			}

			// If content is a template
			else if( typeof this.content !== 'undefined' ) {
				content = $(this.contentTemplate);
				content.html(_.template(this.content, {model: this.model, collection: this.collection, data: this.data}));
			}

			// Append content to layout $el
			this.$el.append(header).append(content).append(footer);

			// Call super render method
			Layout.prototype.render.call(this);
		}

	});


	return BasicLayout;
});