
module.exports = function (eleventyConfig) {
	const handlebars = require("handlebars");
	eleventyConfig.setLibrary("hbs", handlebars);

	return {
		dir: {
			includes: "../includes",
			input: "./src/pages",
			output: "./test"
		},
	}
};