(function(){

  var expect = require("expect.js");
  var boot = require("./boot");

  describe('引数を1つとる関数 isEvenNumber を次のように定義せよ', function(){

    context("引数に偶数が指定された場合", function(){
      it("trueを返す", function(){
        expect(isEvenNumber(0)).to.be(true);
        expect(isEvenNumber(123456)).to.be(true);
        expect(isEvenNumber(9083714)).to.be(true);
      });
    });

    context("引数に奇数が指定された場合", function(){
      it("falseを返す", function(){
        expect(isEvenNumber(1)).to.be(false);
        expect(isEvenNumber(123457)).to.be(false);
        expect(isEvenNumber(9083719)).to.be(false);
      });
    });
    
  });
  
  boot();

})();
