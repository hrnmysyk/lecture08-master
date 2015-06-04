(function(){

  var expect = require("expect.js");
  var boot = require("./boot");

  describe('id: 引数と同じ値を返す関数 id を以下の条件を満たすように定義せよ', function(){
    context("引数に数値が指定された場合、", function(){
      it("引数に指定した数値と同じ値を返す", function(){
        expect(id(5)).to.be(5);
        expect(id(-5)).to.be(-5);
        expect(id(3.14159)).to.be(3.14159);
      });
    });
    context("引数に文字列が指定された場合", function(){
      it("引数に指定した文字列と同じ値を返す", function(){
        expect(id("hello, world")).to.be("hello, world");
        expect(id("")).to.be("");
      });
    });
    context("引数にオブジェクトが与えられた場合", function(){
      it("引数と同じ属性値をもつ", function(){
        var argument = {
          x: 0,
          y: 10
        };
        var ret = id(argument);      
        expect(ret.x).to.be(argument.x);
        expect(ret.y).to.be(argument.y);
      });
    });
  });
  
  boot();

})();
