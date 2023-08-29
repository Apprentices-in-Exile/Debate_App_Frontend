module.exports = {
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'standard-with-typescript'
    ],
    parserOptions: {
      project: ['./tsconfig.json']
    }
  }],
  plugins: ['react-refresh', 'react', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-warning-comments": 0
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      pragma: "React",  // Pragma to use, default to "React"
      fragment: "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: "0.53" // Flow version
    }
  }
}
