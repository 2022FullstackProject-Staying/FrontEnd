$(function() {
    $('.select1').click(function() {
        $('.table').show();
        $('#select_wrap').show();
        $('.review_wrap').hide();
    })
});
$(function() {
    $('.select2').click(function() {
        $('.review_wrap').show();
        $('#select_wrap').hide();
        $('.table').hide();
    })
});

window.onload = function () {

    var f = document.getElementsByClassName("select")[0];
    var s = document.getElementsByClassName("select")[1];

    f.onclick = function() {
        this.style.fontWeight = "bold";
        s.style.fontWeight = "normal";
       /* s.mouseenter= ("font-weight",'bold');
        s.onmouseout= ("font-weight",'');*/
    }

    s.onclick = function() {
        this.style.fontWeight = "bold";
        f.style.fontWeight = "normal";
       /* f.onmouseover= ("font-weight",'bold');
        f.onmouseout= ("font-weight",'');*/
    }
}  