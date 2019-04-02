function validate(e){
    var a={isOK:!1,reason:""};
    return""===e?a.reason="不能为空！":/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(e)?Number(e)<0?a.reason="必须大于零":a.isOK=!0:a.reason="必须是数值",a
}

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
        $area = $('#area'),
        $widthValidate = $('#width-validate'),
        $heightValidate = $('#height-validate'),
        isPassValidate = false;

    $width.focusout(function() {
      var result = validate($width.val());
          isPassValidate = result.isOK;
          if(!result.isOK) {
            $widthValidate.html('宽度' + result.reason);
            $width.select();                    
          } else {
            $widthValidate.html('');      
          }
});

    $height.focusout(function() {
      var result = validate($height.val());
          isPassValidate = result.isOK;
          if(!result.isOK) {
            $heightValidate.html('高度' + result.reason);
            $height.select();     
            } else {
              $heightValidate.html('');           
              }        
    });
          
  $calc.click(function(){
    if(!isPassValidate) return;
    var w = $width.val(),
        h = $height.val();
    var r = new Rectangle(w, h);
    $perimeter.val(r.perimeter());
    $area.val(r.area());
              
});

});



