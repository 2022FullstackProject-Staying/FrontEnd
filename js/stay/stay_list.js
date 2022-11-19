$(document).ready(function(){
    let stay_intro = document.querySelectorAll("div.stay_info_l > p:nth-child(2)");
    stay_intro.forEach(stay => {
        let text = stay.innerText;
        console.log(stay)
        if(text.length > 30){
            console.log(text.length )
            stay.innerText = text.slice(0, 30) + "...";
        }
    })
});
function stay_kind_search (obj) {
    let label = document.querySelector(".stay_type_condition label[for="+obj.value+"]");
    document.querySelector(".selected_option").innerText = label.innerText;
    document.querySelector("#selected").value = obj.value;
}
/*function fn_text_ellipsis(obj) {
    let stay_intro = obj.innerText;
    console.log(stay_intro)
    if(stay_intro.length > 30){
        console.log(stay_intro.length )
        obj.innerText = stay_intro.slice(0, 30) + "...";
    }
}*/

