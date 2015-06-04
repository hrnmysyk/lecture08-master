(function(){

  var expect = require("expect.js");
  var boot = require("./boot");
  
  describe("引数を1つとる関数 fizzbuzz を次のように定義せよ", function(){

    context("引数が3の倍数の場合", function(){
      it('文字列"fizz"を返す', function(){
        expect(fizzbuzz(3)).to.be("fizz");
        expect(fizzbuzz(9)).to.be("fizz");
        expect(fizzbuzz(21)).to.be("fizz");
      });
    });

    context("引数が5の倍数の場合", function(){
      it('文字列"buzz"を返す', function(){
        expect(fizzbuzz(5)).to.be("buzz");
        expect(fizzbuzz(10)).to.be("buzz");
        expect(fizzbuzz(125)).to.be("buzz");
      });
    });

    context("引数が3の倍数で、しかも5の倍数の場合", function(){
      it('文字列"fizzbuzz"を返す', function(){
        expect(fizzbuzz(15)).to.be("fizzbuzz");
        expect(fizzbuzz(45)).to.be("fizzbuzz");
        expect(fizzbuzz(60)).to.be("fizzbuzz");
      });
    });    

    context("それ以外の場合", function(){
      it("引数に指定された値を返す", function(){
        expect(fizzbuzz(7)).to.be(7);
        expect(fizzbuzz(41)).to.be(41);
      });
    });
    
  });

  boot();

})();
