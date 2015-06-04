(function(){

  var expect = require("expect.js");
  var boot = require("./boot");
  
  describe("引数を1つとる関数 buzz を次のように定義せよ", function(){

    context("引数が5の倍数の場合", function(){
      it('文字列"buzz"を返す', function(){
        expect(buzz(5)).to.be("buzz");
        expect(buzz(10)).to.be("buzz");
        expect(buzz(75)).to.be("buzz");
      });
    });

    context("それ以外の場合", function(){
      it("引数に指定された値を返す", function(){
        expect(buzz(3)).to.be(3);
        expect(buzz(7)).to.be(7);
        expect(buzz(39)).to.be(39);
      });
    });
    
  });

  boot();

})();
