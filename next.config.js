const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(
  withSass({
    env: {
      GEOLOCATION_KEY: "f13b370660844a71be282b2c1337aed6",
    },
  })
);
