Package.describe({
  summary: "Sinon integration for mocha-web.",
  version: "0.1.6",
  git: "https://github.com/SteelzZ/meteor-mocha-web-sinon.git",
  name: "steelzz:mocha-web-sinon"
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
