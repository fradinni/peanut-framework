define([
	"underscore",
	"jquery",
	"backbone"
], function(_, $, Backbone) {

	//
	// Basic Peanut Page
	//
	var Page = Backbone.View.extend({

		tagName: 'div',


		/**
		*
		*/
		initialize: function(params) {

			// Initialize params
			params = params || {};
			this.application = params.application;
			this.layout = params.layout;


			// Initialize var to indicate if page has been rendered
			this.rendered = false;

			// Set data-role attribute for jquery mobile
			this.attributes = params.attributes || {};
			this.attributes["data-role"] = "page";

		},


		/**
		*
		*/
		render: function(show) {

			show = show || false;

			// Render page
			var html = _.template(this.template, {model: this.model, collection: this.collection});
			this.$el.html(html);
			
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