function stay_kind_search (obj) {
    let label = document.querySelector(".stay_type_condition label[for="+obj.value+"]");
    document.querySelector(".selected_option").innerText = label.innerText;
    document.querySelector("#selected").value = obj.value;
}


