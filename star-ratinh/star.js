window.onload = function () {
  $('.rate-area > span').click(function(){
      $(this).siblings().removeClass('checked');
      $(this).addClass('checked');
  });
}
