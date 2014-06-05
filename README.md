# Sinon integration for mocha-web

This package transparently adds sinon integration for mocha-web unit testing of Meteor apps.
Now you can simply use `sinon.spy` etc. anywhere in your test code on server and client.

[Please read the complete documentation about sinon](http://sinonjs.org/docs/) for details.

The sinon-chai matchers are also added automatically, so you can write your expectations more
fluently like this: `expect(mySpy).to.have.been.calledOnce`

Checkout [all sinon-chai matchers](https://www.npmjs.org/package/sinon-chai) for your own sake!

## Install with Meteorite
Install the module with: `mrt add mocha-web-sinon`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [grunt](https://github.com/gruntjs/grunt).

## Release History
2014.06 :: Version 0.1.0

## License
2014 Code Adventure
Licensed under the MIT license.
