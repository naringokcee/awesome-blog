module.exports = function(eleventyConfig) {
    // CSS ve Görselleri doğrudan çıktı klasörüne kopyala
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/img");

    return {
        dir: {
            input: "src",          // Kaynak klasörümüz
            output: "_site",       // Eleventy'nin üreteceği hazır sitenin gideceği yer
            includes: "_includes"  // Şablon klasörümüz
        }
    };
};