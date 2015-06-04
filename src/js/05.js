(function(){

  var expect = require("expect.js");
  var boot = require("./boot");

  describe("引数を全く取らない関数 n123 を次のように定義せよ", function(){

    it("配列を返す", function(){
      expect(n123()).to.be.an("array");
    });

    it("返り値の長さは123", function(){
      expect(n123().length).to.be(123);
    });

    it("返り値の要素は全てtrueである", function(){
      expect(n123().reduce(function(i, j){
        return i && j;
      })).to.be(true);
    });
    
  });

  boot();

})();
