'use strict'

const jst = require('jst')

exports.name = 'jst'
exports.inputFormats = ['jst', 'html', 'text']
exports.outputFormat = 'html'

exports.compile = function (str, opts) {
  jst.configure(opts)
  return jst.compile(str)
}

exports.render = function (str, opts, locals) {
  locals = arguments.length <= 2 ? opts : locals
  opts = opts && typeof opts === 'object' ? opts : {}
  locals = locals && typeof locals === 'object' ? locals : {}

  jst.configure(opts)
  return jst.render(str, locals)
}
