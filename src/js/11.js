(function(){

  var expect = require("expect.js");
  var boot = require("./boot");

  describe("引数を2つとる関数 distance を次のように定義せよ。なお引数はともに2次元平面上の点を表し、x, y の属性を持つとする。", function(){

    it("引数1と引数2のユークリッド距離を返す", function(){
      var zero = {x: 0, y:0};
      var one = {x: 1, y: 0};
      var p = {x: 2, y: 2};
      expect(distance(zero, zero)).to.be(0);
      expect(distance(zero, one)).to.be(1);
      expect(distance(one, zero)).to.be(1);
      expect(distance(zero, p)).to.be(Math.sqrt(p.x * p.x + p.y * p.y));
    });
    
  });

  boot();

})();
