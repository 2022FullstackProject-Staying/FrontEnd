
function frm_join_submit (){
    
    if(document.frm_join.name.value === "" || document.frm_join.name.value.length === 0){
        alert("이름을 입력해주세요");
        return false;
    }

    let rexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/;
    let result = rexp.test(document.frm_join.id.value);
    if(!result){
        alert("영문, 숫자를 혼합하여 6자~15자");
        document.frm_join.id.focus();
        return false;
    }

    rexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    result = rexp.test(document.frm_join.pwd.value);
    if(!result){
        alert("규칙에 맞는 비밀번호를 입력해주세요");
        document.frm_join.pwd.focus();
        document.frm_join.pwd.value = "";
        return false;
    }

    if(document.frm_join.pwd.value != document.frm_join.confirm_pwd.value){
        alert("비밀번호와 확인이 일치하지 않습니다.");
        document.frm_join.pwd.focus();
        return false;
    }

    rexp =  /^[0-9]{11}/;
    result = rexp.test(document.frm_join.phone.value);
    if(!result){
        alert("전화번호는 숫자만 입력해주세요");
        document.frm_join.phone.focus();
        return false;
    }
    
    if(document.frm_join.clause_check.checked == false) {
        alert("약관을 확인 후 동의해주세요");
        return false;
    }

    document.frm_join.submit();
}