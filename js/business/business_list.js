/* 객실관리, 리뷰 클릭시 하단 화면 변경 */
$(function() {
    $('.select1').click(function() {
        $('.table').show();
        $('#review_wrap').hide();
        $('#select_wrap').show();
    })
});
$(function() {
    $('.select2').click(function() {
        $('.table').hide();
        $('#review_wrap').show();
        $('#select_wrap').hide();

        // 객실삭제 버튼 누르고 input박스 생긴 상태에서 리뷰눌렀을 경우 객실관리(기본화면)으로 변경
        $('.del_click').css("display", "none");

                $('#del_click').css("display", "none");
                $('#canccle_click').css("display", "none");

                $('#add_click').css("display", "inline-block");
                $('#room_del_click').css("display", "inline-block");

                // 체크 된 체크박스 해제
                $(":checkbox").prop("checked",false);
    })
});

/* 클릭시 굵기 변경 */
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