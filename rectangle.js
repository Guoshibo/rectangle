/* global Rectangle, validate, isLegalKey: true */
$(function() {
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area'),
        $widthValidate = $('#width-validate'),
        $heightValidate = $('#height-validate'),
        isPassValidate = false;

$width.keypress(function(e) {
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
          e.preventDefault();           
  } 

  if(e.key === '.'){
    if(e.target.value === "") e.preventDefault();
    if(e.target.value.indexOf('.')!==-1){
      e.preventDefault();
    }else{
      if(e.target.selectionStart===0)e.preventDefault();
    }
  } 
});

$height.keypress(function(e) {
  if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
          e.preventDefault();
              
  }
    
});

$btnCal.click(function(){
      if(!isPassValidate) return;

          var w = $width.val(),
          h = $height.val();

    var r = new Rectangle(w, h);

        $perimeter.val(r.perimeter());
            $area.val(r.area());
              
});

});
