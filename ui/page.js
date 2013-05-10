define([
	"underscore",
	"jquery",
	"backbone",
	"peanut!ui/uielement"
], function(_, $, Backbone, UIElement) {

	//
	// Basic Peanut Page
	//
	var Page = UIElement.extend({

		tagName: 'div',


		/**
		*
		*/
		initialize: function(params) {

			console.log('Initialize page...');

			// Initialize params
			params = params || {};
			this.application = params.application;
			this.layout = this.layout || params.layout;

			// Set data-role attribute for jquery mobile
			this.attributes = this.attributes || params.attributes || {};
			this.attributes["data-role"] = "page";

			// Initialize var to indicate if page has been rendered
			this.rendered = false;
		},


		/**
		*
		*/
		render: function(show) {

			console.log("Render page...");

			show = show || false;

			_.each(this.attributes, function(value, attr) {
				this.$el.attr(attr, value);
			}, this);

			//
			// If page has a layout
			//
			if(typeof this.layout !== 'undefined') {
				if(!this.layout.rendered) {
					this.layout.render();
				}
				this.$el.html(this.layout.$el);
			} 

			//
			// If page has a template
			//
			else if( typeof this.template !== 'undefined') {
				var html = _.template(this.template, {model: this.model, collection: this.collection, data: this.data});
				this.$el.html(html);
			}
			
			// Append page to HTML body
			$('body').append(this.$el);

			// Indicate page has been rendered
			this.rendered = true;

			// Show page
			if(show && (typeof this.application != 'undefined')) {
				this.show();
			}
			
		},


		remove: function() {
			$('#'+this.id).remove();
			this.rendered = false;
		},


		update: function(force) {
			if(force) {
				this.remove();
				this.render(true);
				return;
			}

			// Render page
			var html = _.template(this.template, {model: this.model, collection: this.collection});
			this.$el.html(html);
		},


		/**
		*
		*/
		show: function() {
			if(!this.rendered) {
				this.render();
			}

			if(typeof this.application != 'undefined') {
				this.application.changePage(this.id);
			}
		}

	});


	return Page;

});