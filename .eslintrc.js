module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    "import/no-anonymous-default-export": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "error",
  },
};
