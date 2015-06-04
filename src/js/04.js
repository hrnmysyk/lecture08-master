(function(){

  var expect = require("expect.js");
  var boot = require("./boot");

  describe("引数を全く取らない関数 zero を次のように定義せよ", function(){

    it("配列を返す", function(){
      expect(zero()).to.be.an("array");
    });

    it("返り値の長さは0", function(){
      expect(zero().length).to.be(0);
    });
    
  });

  boot();

})();
