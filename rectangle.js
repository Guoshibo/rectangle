$(function(){
  var $width = $('#width'),
      $height = $('#length'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $btncal = $('#calculate');

      $btncal.click(function(){
        var w = Number($width.val()),
            h = Number($height.val());

        var p =(w+h)*2;
        var a = w*h;
        $perimeter.val(p);
        $area.val(a);
      });
})
