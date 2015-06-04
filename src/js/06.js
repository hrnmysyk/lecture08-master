(function(){

  var expect = require("expect.js");
  var boot = require("./boot");
  
  describe("引数を1つとる関数 fizz を次のように定義せよ", function(){

    context("引数が3の倍数の場合", function(){
      it('文字列"fizz"を返す', function(){
        expect(fizz(3)).to.be("fizz");
        expect(fizz(9)).to.be("fizz");
        expect(fizz(21)).to.be("fizz");
      });
    });

    context("それ以外の場合", function(){
      it("引数に指定された値を返す", function(){
        expect(fizz(5)).to.be(5);
        expect(fizz(7)).to.be(7);
        expect(fizz(41)).to.be(41);
      });
    });
    
  });

  boot();

})();
