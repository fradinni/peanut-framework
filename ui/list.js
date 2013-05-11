define([
	"underscore",
	"jquery",
	"backbone",
	"peanut!ui/uielement"
], function(_, $, Backbone, UIElement) {

	/**
	* Peanut List
	*
	*/
	var List = UIElement.extend({
		
		tagName: 'ul',

		className: 'peanut-list',


		//
		// Initialize List
		//
		initialize: function(params) {

			// Call super method
			UIElement.prototype.initialize.call(this);

			this.collection = this.collection || params.collection;
			this.template = this.template || params.template;
			this.itemTemplate = this.itemTemplate || params.itemTemplate || '<li><a href="#"><%=model.cid%></a></li>';

			this.theme = params.theme || "";

			this.attributes["data-role"] = this.attributes["data-role"] || 'listview';
			this.attributes["data-theme"] = this.attributes["data-theme"] || this.theme;
			this.attributes["data-inset"] = params.inset || false;
			this.attributes["data-filter"] = params.filter || false;
			this.attributes["data-autodividers"] = params.autoDividers || false;
		},


		//
		// Render List
		//
		render: function() {
			console.log("Render List...");

			var html = "";

			_.each(this.collection.models, function(model) {
				console.log('Render item: ', model);
				html += _.template(this.itemTemplate, {model: model});
			}, this);

			this.$el.html(html);

			// Call super method
			UIElement.prototype.render.call(this, false);
		}
	});


	return List;
});