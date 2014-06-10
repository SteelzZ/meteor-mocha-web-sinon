Package.describe({
  summary: "Sinon integration for mocha-web."
});

Npm.depends({
  "sinon": "1.10.2",
  "sinon-chai": "2.5.0"
});

Package.on_use(function (api, where) {

  api.use(["coffeescript"], ["client", "server"]);

  api.add_files(["source/server.coffee"], "server");
  api.add_files([
    "source/beforeClient.coffee",
    "source/sinon.js",
    "source/sinon-chai.js"
  ], "client");

});
