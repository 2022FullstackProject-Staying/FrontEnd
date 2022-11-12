$('input[type=radio][name=flexRadioDefault]').on('click', function() {

    var chkValue = $('input[type=radio][name=flexRadioDefault]:checked').val();

    if (chkValue == '1') {
        $('.pay1').css('display', 'block');
        $('.pay2').css('display', 'none');
    } else if (chkValue == '2') {
        $('.pay1').css('display', 'none');
        $('.pay2').css('display', 'block');
    }
});