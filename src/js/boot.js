(function(){
  var expect = require("expect.js");
  mocha.setup('bdd');

  var init = function(){
    console.log("boot");
    window.addEventListener("load", function(){
      mocha.run(); 
    });
  };

  module.exports = init;
  return module;

})();
