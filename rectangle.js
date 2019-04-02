function Rectangle(e,a){
    var t=Number(e),i=Number(a);
    this.area=function(){
      return t*i
    },
    this.perimeter=function(){
      return 2*(t+i)
    }
}
$(function() {
    var $width = $('#width'),
        $height = $('#height'),
        $calc = $('#calc'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
          
  $calc.click(function(e){
    e.preventDefault();
    //这句代码是阻止网页提交之后的自动刷新
    var w = $width.val(),
        h = $height.val();
    var r = new Rectangle(w, h);
    $perimeter.val(r.perimeter());
    $area.val(r.area());
              
});

});





