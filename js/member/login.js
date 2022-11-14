function loginCheck(){
	if (document.login_form.id.value.trim() == "") {
		alert("아이디를 입력해 주세요.");
		document.login_form.id.value = "";
		document.login_form.id.focus();
		return false;
	} else if (document.login_form.pwd.value.trim() == "") {
		alert("비밀번호를 입력해주세요.");
		document.login_form.pwd.value = "";
		document.login_form.pwd.focus();
		return false;
	} else {
		return true;
	}
}