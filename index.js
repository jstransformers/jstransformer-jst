'use strict';

var jst = require('jst');
var extend = require('extend-shallow');

exports.name = 'jst';
exports.inputFormats = ['jst', 'html', 'text'];
exports.outputFormat = 'html';

exports.compile = function (str, opts, locals) {
  opts = extend({}, opts, locals);
  jst.configure(opts);

  return jst.compile(str);
};

exports.render = function (str, opts, locals) {
  locals = arguments.length <= 2 ? opts : locals;
  opts = opts && typeof opts === 'object' ? opts : {};
  locals = locals && typeof locals === 'object' ? locals : {};

  jst.configure(opts);
  return jst.render(str, locals);
};
