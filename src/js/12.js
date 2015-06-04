(function(){

  var expect = require("expect.js");
  var boot = require("./boot");

  describe("1つの正の整数を引数とする関数 isLeapYear を次のように定義せよ", function(){

    context("引数が閏年の場合", function(){
      it("trueを返す。なお閏年の定義はグレゴリオ歴に従うとする", function(){
        expect(isLeapYear(2000)).to.be(true);
        expect(isLeapYear(2004)).to.be(true);
      });
    });

    context("引数が閏年でない場合", function(){
      it("falseを返す", function(){
        expect(isLeapYear(1900)).to.be(false);
        expect(isLeapYear(2015)).to.be(false);
      });
    });
    
  });

  boot();

})();
