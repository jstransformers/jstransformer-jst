# jstransformer-jst

[jst](https://www.npmjs.com/package/jst) support for [JSTransformers](http://github.com/jstransformers)

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jst/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jst)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-jst/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-jst)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jst/master.svg)](http://david-dm.org/jstransformers/jstransformer-jst)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jst.svg)](https://www.npmjs.org/package/jstransformer-jst)

## Installation

```
npm install jstransformer-jst --save
```

## API

```js
var jst = require('jstransformer')(require('jstransformer-jst'));

var render = jst.compile('Hello {{ name }}').fn;
render({name: 'world'}) //=> 'Hello world'

jst.render('Hello {{ name }}', {name: 'world'}).body
//=> 'Hello world'
```
