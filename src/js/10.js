(function(){

  var expect = require("expect.js");
  var boot = require("./boot");

  describe("引数を1つとる関数 isPrimeNumber を次のように定義せよ", function(){

    context("引数が素数の場合", function(){
      it("trueを返す", function(){
        expect(isPrimeNumber(2)).to.be(true);
        expect(isPrimeNumber(19)).to.be(true);
        expect(isPrimeNumber(29)).to.be(true);        
        expect(isPrimeNumber(157)).to.be(true);
      });
    });

    context("引数が素数でない場合", function(){
      it("falseを返す", function(){
        expect(isPrimeNumber(1)).to.be(false);
        expect(isPrimeNumber(4)).to.be(false);
        expect(isPrimeNumber(1235)).to.be(false);        
        expect(isPrimeNumber(49)).to.be(false);
      });      
    });
    
  });

  boot();

})();
