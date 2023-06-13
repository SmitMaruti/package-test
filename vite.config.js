const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "lib/main.js"),
            name: "@smitmaruti/package-test",
            fileName: (format) => `@smitmaruti/package-test.${format}.js`,
        },
    },
});
