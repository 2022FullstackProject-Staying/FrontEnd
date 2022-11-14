$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll < 530) {
        $("#scroll_wrap").css("display" , "none");
      } else{
        $("#scroll_wrap").css("display" , "block");
      }
    })
  })