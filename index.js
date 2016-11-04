(function(){
  var defaultsDeep, ribcage;
  defaultsDeep = require('lodash').defaultsDeep;
  ribcage = require('ribcage');
  module.exports = function(sails){
    return {
      initialize: function(cb){
        var settings, env;
        settings = defaultsDeep(sails.config.ribcage || {}, {
          rootDir: sails.config.appPath + "/node_modules"
        });
        sails.ribcage = env = {
          sails: sails,
          settings: settings
        };
        return ribcage.init(env, function(err, data){
          env.env = sails.config.environment;
          env.log("ribcage initialized in " + env.env + " env, code ver " + env.version, {}, 'init', env.env, 'ok');
          return cb();
        });
      }
    };
  };
}).call(this);
