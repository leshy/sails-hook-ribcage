# autocompile
require! {
  lodash: { defaultsDeep }
  ribcage
}


module.exports = (sails) ->
  do
    initialize: (cb) ->

      settings = defaultsDeep do
        sails.config.ribcage or {},
          rootDir: sails.config.appPath + "/node_modules"

      console.log env
      sails.ribcage = env = { sails: sails, settings: settings }
      
      ribcage.init env, (err,data) ->
        env.env = sails.config.environment
        env.log "ribcage initialized in #{env.env} env, code ver #{env.version}", {}, 'init', env.env, 'ok'
        cb()


