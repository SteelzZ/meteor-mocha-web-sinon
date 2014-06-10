# Sinon integration for mocha-web

This package adds the sinon library for mocha-web unit testing of Meteor apps.
Now you can simply use `sinon.spy` etc. anywhere in your test code on server and client.

[Please read the complete documentation about sinon](http://sinonjs.org/docs/) for details.

The sinon matchers can be added to chai so you can write your expectations more
fluently like this: `expect(mySpy).to.have.been.calledOnce`

You just have to wire them up somewhere in your test configuration by calling: `chai.use(sinonChai)`

Checkout [all sinon-chai matchers](https://www.npmjs.org/package/sinon-chai) for your own sake!

## Install with Meteorite
Install the module with: `mrt add mocha-web-sinon`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [grunt](https://github.com/gruntjs/grunt).

## Release History
2014.06 :: Version 0.1.5 - Fixes problems with integrating sinon into mocha-web
2014.06 :: Version 0.1.2 - Removes automatic sinon-chai wiring from this package
2014.06 :: Version 0.1.0

## License
2014 Code Adventure
Licensed under the MIT license.
