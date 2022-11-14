window.onload = function ( ) {
    document.querySelector(".map").addEventListener("click", open);
    document.querySelector(".btn_map_close").addEventListener("click", close);
    document.querySelector(".map_bg").addEventListener("click", close);
}

function open() {
    document.querySelector(".map_modal_wrap").classList.remove("hidden");
    document.body.style.overflow = "hidden";
}
function close() {
    document.querySelector(".map_modal_wrap").classList.add("hidden");
    document.body.style.overflow = "auto";
}

