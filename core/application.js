define([
	"underscore",
	"jquery",
	"backbone",
	"jquerymobile",

	"peanut!core/router"
], function(_, $, Backbone, Mobile, Router) {


	//
	// Application constructor
	//
	var Application = function(name, version) {

		this.name = name;
		this.version = version;
		this.started = false;

		this.router = new Router({application: this});

		// Initialize application
		this.initialize();
	};


	//
	// Application Functions
	// 
	Application.prototype = {

		/**
		*
		*/
		initialize: function(params) {
			
		},


		/**
		*
		*/
		start: function() {
			Backbone.history.start();
			this.started = true;
		},


		/**
		*
		*/
		changePage: function(page, reverse, changeHash) {
			if(page) {
				if( $('#'+page).length == 0 ) {
					alert("Page '"+page+"' does not exists !");
				} else {
					$.mobile.changePage( "#"+page , { reverse: reverse || false, changeHash: changeHash || false } );
				}
			}
		}

	};


	return Application;
});