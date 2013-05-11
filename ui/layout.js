define([
	"underscore",
	"jquery",
	"backbone",
	"peanut!ui/uielement"
], function(_, $, Backbone, UIElement) {


	//
	// Peanut Basic Layout
	// Basic Layout has a header, a footer and a content
	//
	var Layout = UIElement.extend({

		tagName: 'div',

		className: 'peanut-layout',

		initialize: function(params) {

			// Initialize params
			params = params || {};

			// Set application
			this.application = params.application;

			this.rendered = false;
		},


		render: function() {

			// Indicates layout has been rendered
			this.rendered = true;
		}

	});


	return Layout;
});