var binding = require('binding').Binding.create('cookies')

binding.registerCustomHook(function (bindingsAPI, extensionId) {
  // var apiFunctions = bindingsAPI.apiFunctions
  var cookies = bindingsAPI.compiledApi

  cookies.getAll = function (details, cb) {
    var nothing = []
    cb(nothing)
  }
})

exports.$set('binding', binding.generate())
