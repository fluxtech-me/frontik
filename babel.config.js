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
