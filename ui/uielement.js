define([
	"underscore",
	"jquery",
	"backbone"
], function(_, $, Backbone) {


	//
	// UIElement
	//
	var UIElement = Backbone.View.extend({

		tagName: 'div',

		className: 'peanut-ui-element',

		initialize: function(params) {

			// Initialize params
			params = params || {};
			this.attributes = this.attributes || params.attributes || {};
			this.application = params.application;
			this.template = this.template || params.template;
			this.data = params.data || {};
			this.rendered = false;
		},


		render: function(nativeRender) {

			nativeRender = nativeRender || true;

			// Apply attributes
			_.each(this.attributes, function(value, attr) {
				this.$el.attr(attr, value);
			}, this);

			// Generate UIElement content
			if(nativeRender) {
				//this.$el.html(_.template(this.template, {model: this.model, collection: this.collection, data: this.data}));
			}

			// Indicates element has been rendered
			this.rendered = true;
		}

	});


	return UIElement;
});