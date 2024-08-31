const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "CategoryApp",
  filename: "./remoteEntry.js",
  exposes: {
    "./CategoryAdd" :
      "./projects/micro-fontend/src/features/category-add/category-add.component.ts",
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
