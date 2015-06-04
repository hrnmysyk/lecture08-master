(function(){

  var expect = require("expect.js");
  var boot = require("./boot");

  describe("引数を1つとる関数 projection を次のように定義せよ", function(){
    var a = {
      name: "abcdefg"
    };
    var b = {
      name: "cfga"
    };
    var c = {
      age: 10
    };
    
    it("引数のname属性を返す", function(){
      expect(projection(a)).to.be(a.name);
      expect(projection(b)).to.be(b.name);
    });

    it("引数にname属性がない場合は、undefinedを返す", function(){
      expect(projection(c)).to.be(c.name);
    });
    
  });

  boot();

})();
