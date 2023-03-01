module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./public/css/style.css");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
