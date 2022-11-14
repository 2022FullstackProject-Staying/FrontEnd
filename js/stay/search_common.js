function fn_show_ul (){
    let select_option = document.querySelector("#select_option");
    let drop_icon = document.querySelector(".drop");

    if(select_option.className === "hide") {
        select_option.classList.remove("hide");
        drop_icon.classList.add("fa-caret-up");
        drop_icon.classList.remove("fa-caret-down");
    } else {
        select_option.classList.add("hide");
        drop_icon.classList.remove("fa-caret-up");
        drop_icon.classList.add("fa-caret-down");
    }
}

function fn_option_select (obj){
    document.querySelector(".selected_option").innerText = obj.innerText;
    document.querySelector("#selected").value = obj.value;
    fn_show_ul();
}

function fn_search_submit () {
    const frm = document.frm_stay_search;

    if(frm.selected.value === "none") {
        alert("숙소 유형을 선택해주세요")
        fn_show_ul();
        return false;
    }
    if(frm.check_in.value === "" || frm.check_in.value.length === 0) {
        alert("체크인 날짜를 입력해주세요");
        return false;
    }
    if(frm.check_out.value === "" || frm.check_out.value.length === 0) {
        alert("체크아웃 날짜를 입력해주세요");
        return false;
    }
    if(frm.stay_person.value === "" || frm.stay_person.value.length === 0) {
        alert("인원수를 입력해주세요");
        frm.stay_person.focus();
        return false;
    }

    frm.submit();
}