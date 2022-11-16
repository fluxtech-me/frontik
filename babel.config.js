const scriptFile = process.argv[1];

// for demo
if (scriptFile.endsWith("start.js") || scriptFile.endsWith("demo-build.js")) {
  module.exports = {
    presets: ["react-app"],
  };
  return;
}

// for lib
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "transform-rename-import",
      {
        replacements: [{ original: "^(.+?)\\.scss", replacement: "$1.css" }],
      },
    ],
  ],
};