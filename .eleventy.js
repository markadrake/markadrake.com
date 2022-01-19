
module.exports = function (eleventyConfig) {
	const handlebars = require("handlebars");

	handlebars.registerHelper("commalist", function (array, options) {
		return array[0]
			.split(",")
			.reduce((items, item) => items += options.fn(item.trim()), "");
	});

	eleventyConfig.setLibrary("hbs", handlebars);

	return {
		dir: {
			includes: "../includes",
			input: "./src/pages",
			output: "./test"
		},
	}
};