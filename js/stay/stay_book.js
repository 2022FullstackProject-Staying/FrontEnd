/*$('input[type=radio][name=flexRadioDefault]').on('click', function() {

    var chkValue = $('input[type=radio][name=flexRadioDefault]:checked').val();

    if (chkValue == '1') {
        $('.pay1').css('display', 'block');
        $('.pay2').css('display', 'none');
    } else if (chkValue == '2') {
        $('.pay1').css('display', 'none');
        $('.pay2').css('display', 'block');
    }
});*/


function payCheck(){
	if (document.login_form.name.value.trim() == ""){
		alert("이름을 입력해 주세요.");
        document.login_form.name.value = "";
		document.login_form.name.focus();
		return false;
	} else if (document.login_form.tel.value.trim() == ""){
		alert("전화번호를 입력해 주세요.");
        document.login_form.tel.value = "";
		document.login_form.tel.focus();
		return false;
	} else if(!clause_check.checked) {
        alert("약관 동의를 체크해 주세요.");
        clause_check.focus();
        return false;
    }else {
		return true;
	}
};