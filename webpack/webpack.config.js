const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const Proxy = [
  new BrowserSyncPlugin({
    files: ["C:/inetpub/ExampleMVC/ExampleMVC/Views/**/*.*"],
    host: "0.0.0.0",
    port: 3000,
    proxy: "http://localhost:3700/ExampleMVC"
  })
];

const DevelopmentServer = [
  new BrowserSyncPlugin({
    files: ["C:/Users/Juan Manuel/Desktop/example_site/**/*.*"],
    host: "0.0.0.0",
    port: 3000,
    server: { baseDir: ["C:/Users/Juan Manuel/Desktop/example_site/"] }
  })
];

module.exports = {
  plugins: Proxy
};
