function fn_review_form_submit() {
    let form = document.frm_review;

    if(form.review_star.value == "") {
        alert("평점을 입력해주세요");
        return false;
    } else if (form.review_content.value.length < 10 ) {
        alert("10자 이상 작성해주세요");
        return false;
    } 

    form.submit();
}


function fn_review_active() {
    let check_out = document.querySelector(".book_room_checktime tr:last-child > td:last-child > time").innerText;
    let year = check_out.substring(0, 4);
    let month = check_out.substring(4, 6);
    let day = check_out.substring(6, 8);
    let check_out_date = new Date(year, month, day);
    let now = new Date();
    if(check_out_date < now) {
        $('#exampleModal').modal("hide");
    }else {
        $('#exampleModal').modal("show");
    }

}