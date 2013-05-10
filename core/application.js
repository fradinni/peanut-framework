define([
	"underscore",
	"jquery",
	"jquerymobile",
	"backbone"
], function(_, $, Mobile, Backbone) {


	/**
	* Peanut Application
	* 
	* This class represents a Client-Side Application and extend
	* Backbone Router, this is where Application's routes are defined.
	*
	* @param params {object} Application parameters
	*
	* Available parameters:
	*   - name : Application name
	*   - version: Application version
	*   - debug: Indicates if logs should be displayed
	*/
	var Application = Backbone.Router.extend({


		//
		// Initialize Application
		//
		initialize: function(params) {
			params = params || {};
			this.name = params.name;
			this.version = params.version;
			this.debug = params.debug || false;

			if(this.debug) console.log('[Application] Initialize...');
		},


		//
		// Define Application routes
		//
		setRoutes: function() {
			if(this.debug) console.log('[Application] Set routes...');
		},


		//
		// Start application
		//
		start: function() {
			// Init routes
			this.setRoutes();

			// Start backbone history
			Backbone.history.start();

			if(this.debug) console.log("[Application] "+this.name + " v"+this.version+" is started !");
		},


		//
		// Change page
		//	
		changePage: function(page, transition, reverse, trigger) {

			// Check if page exists
			var div = $('#'+page);
			if(div.length && div.length > 0) {
				$.mobile.changePage( "#"+page , { transition: transition || 'fade', reverse: reverse || false, changeHash: trigger || false } );
			}
		}

	});


	return Application;

});