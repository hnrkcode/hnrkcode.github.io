module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./public/css");
  eleventyConfig.addPassthroughCopy("./public/js");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
