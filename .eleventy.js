
module.exports = function (eleventyConfig) {
	/*
		Handlebars
	 */
	const handlebars = require("handlebars");

	handlebars.registerHelper("commalist", function (array, options) {
		return array[0]
			.split(",")
			.reduce((items, item) => items += options.fn(item.trim()), "");
	});

	eleventyConfig.setLibrary("hbs", handlebars);

	/*
		Passthrough Folders
	 */
	eleventyConfig.addPassthroughCopy({"src/media/**/*": "media"});
	eleventyConfig.addPassthroughCopy({"src/**/*.css": "."});
	eleventyConfig.addPassthroughCopy({"src/**/*.js": "."});
	eleventyConfig.addPassthroughCopy({"src/**/*.map": "."});

	return {
		dir: {
			includes: "../includes",
			input: "./src/pages",
			output: "./_test"
		},
	}
};