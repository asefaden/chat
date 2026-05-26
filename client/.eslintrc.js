module.exports = {
  "extends": "airbnb",
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "requireConfigFile": false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    }
  },
  "rules": {
    "import/prefer-default-export": 0,
    "max-len": [
      2,
      250
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1
      }
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "_d",
          "_dh",
          "_h",
          "_id",
          "_m",
          "_n",
          "_t",
          "_text"
        ]
      }
    ],
    "object-curly-newline": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/no-autofocus": 0,
    "no-shadow": 0,
    "react/prop-types": 0,
    "no-confusing-arrow": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "to",
          "hrefLeft",
          "hrefRight"
        ],
        "aspects": [
          "noHref",
          "invalidHref",
          "preferButton"
        ]
      }
    ],
    "quotes": ["error", "single"],
    "arrow-parens": ["error", "as-needed"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "semi": ["error", "always"]
  }
}
