define([
	"underscore",
	"jquery",
	"backbone",
	"jquerymobile"
], function(_, $, Backbone, Mobile) {

	//
	// Default Application Router
	//
	var Router = Backbone.Router.extend({

		initialize: function(params) {

			this.application = params.application;

			this.route(/^(.*?)$/, "defaultRoute");
		},

		defaultRoute: function(route) {
			console.log('Default route: ', route);
			this.application.changePage(route);
		}
	});


	return Router;

});