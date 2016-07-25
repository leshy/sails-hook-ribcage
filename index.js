(function(){
  var ribcage;
  ribcage = require('ribcage');
  module.exports = function(sails){
    return {
      initialize: function(cb){
        var env;
        env = sails.env = {};
        env.settings = {
          rootDir: sails.config.appPath + "/node_modules"
        };
        env.sails = sails;
        return ribcage.init(env, function(err, data){
          env.log('ribcage initialized', {}, 'init');
          return cb();
        });
      }
    };
  };
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlc2gvY29kaW5nL25vZGVsaWJzL3NhaWxzLWhvb2stcmliY2FnZS9pbmRleC5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUdFLE9BQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLFNBQUE7RUFJRixNQUFNLENBQUMsT0FBUSxDQUFBLENBQUEsQ0FBRSxRQUFBLENBQUEsS0FBQTtXQUViO01BQUEsWUFBWSxRQUFBLENBQUEsRUFBQTs7UUFDVixHQUFJLENBQUEsQ0FBQSxDQUFFLEtBQUssQ0FBQyxHQUFJLENBQUEsQ0FBQSxDQUFFO1FBRWxCLEdBQUcsQ0FBQyxRQUFTLENBQUEsQ0FBQSxDQUNYO1VBQUEsU0FBUyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQSxDQUFBLENBQWlCO1FBQS9DO1FBRUYsR0FBRyxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBQUU7ZUFFWixPQUFPLENBQUMsS0FBSyxLQUFLLFFBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQTtVQUNoQixHQUFHLENBQUMsSUFBSSx1QkFBdUIsSUFBSSxNQUEzQjtpQkFDUixHQUFFO1NBRlM7O0lBUmYiLCJzb3VyY2VzQ29udGVudCI6WyIjIGF1dG9jb21waWxlXG5cbnJlcXVpcmUhIHtcbiAgJ3JpYmNhZ2UnXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoc2FpbHMpIC0+XG4gIGRvXG4gICAgaW5pdGlhbGl6ZTogKGNiKSAtPlxuICAgICAgZW52ID0gc2FpbHMuZW52ID0ge31cblxuICAgICAgZW52LnNldHRpbmdzID0gZG9cbiAgICAgICAgcm9vdERpcjogc2FpbHMuY29uZmlnLmFwcFBhdGggKyBcIi9ub2RlX21vZHVsZXNcIlxuXG4gICAgICBlbnYuc2FpbHMgPSBzYWlsc1xuXG4gICAgICByaWJjYWdlLmluaXQgZW52LCAoZXJyLGRhdGEpIC0+XG4gICAgICAgIGVudi5sb2cgJ3JpYmNhZ2UgaW5pdGlhbGl6ZWQnLCB7fSwgJ2luaXQnXG4gICAgICAgIGNiKClcbiJdfQ==
