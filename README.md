# jstransformer-jst [![The MIT License][license-img]][license-url]

[jst](https://www.npmjs.com/package/jst) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-jst --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var jst = require('jstransformer')(require('jstransformer-jst'));

var render = jst.compile('Hello {{ name }}').fn;
render({name: 'world'}) //=> 'Hello world'

jst.render('Hello {{ name }}', {name: 'world'}).body
//=> 'Hello world'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-jst/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-jst
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-jst.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-jst
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-jst.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-jst
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-jst.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-jst
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-jst.svg

[jstransformers-url]: http://github.com/jstransformers
