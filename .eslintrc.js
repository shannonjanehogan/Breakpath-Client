module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "react-native"
  ],
  "ecmaFeatures": {
    "jsx": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "arrow-body-style": [0],
    "no-console": [1],
    "strict": ["error", "global"],
    "curly": "warn"
  }
}
