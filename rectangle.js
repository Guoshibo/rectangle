$(function() {
    var $width = $('#width'),
        $height = $('#height'),
        $calc = $('#calc'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
          
  $calc.click(function(){
    var w = $width.val(),
        h = $height.val();
    var r = new Rectangle(w, h);
    $perimeter.val(r.perimeter());
    $area.val(r.area());
              
});

});





