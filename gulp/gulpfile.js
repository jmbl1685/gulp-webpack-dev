const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const Proxy = {
  proxy: "http://localhost:8080",
  port: 3000,
  watch: true,
  files: ["C:/inetpub/TechStore/DesktopModules/ProductModule/ProductModule"]
};

const DevelopmentServer = {
  files: ["C:/Users/Juan Manuel/Desktop/example_site/"],
  host: "localhost",
  port: 3000,
  watch: true,
  server: {
    baseDir: "C:/Users/Juan Manuel/Desktop/example_site/"
  }
};

gulp.task("default", () => {
  browserSync.init(DevelopmentServer);
});
