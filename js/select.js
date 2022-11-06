/*$(function() {
    $('.select1').click(function() {
        $('.best_guesthouse').show().siblings('div').hide();
        $('.select1').attr('font-weight', 'normal');
    })
});

$(function() {
    $('.select2').click(function() {
        $('.best_guesthouse').show().siblings('div').hide();
        $('.select2').attr('font-weight', 'bold');
    })
});




function change(){ 	
    var con1 = document.getElementsByName(".select1");
    var con2 = document.getElementsByClassName(".select2");

    con1.style.fontWeight = 'bold';
    
}; 
*/


$(document).ready(function(event) {
    $(".select1").click(function() {
        alert("Submit button is clicked!");
        event.preventDefault();
    });
});
