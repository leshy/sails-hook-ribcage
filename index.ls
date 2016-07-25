# autocompile

require! {
  'ribcage'
}


module.exports = (sails) ->
  do
    initialize: (cb) ->
      env = sails.env = {}

      env.settings = do
        rootDir: sails.config.appPath + "/node_modules"

      env.sails = sails

      ribcage.init env, (err,data) ->
        env.log 'ribcage initialized', {}, 'init'
        cb()
