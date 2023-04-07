## Highlights error when using `swagger-ui-react` + `webpack` 

```
yarn install
yarn start
```

Ends up with error: 
```
ERROR in ./node_modules/swagger-ui-react/swagger-ui.css (./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/swagger-ui-react/swagger-ui.css)
Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):
Error: original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.
```
