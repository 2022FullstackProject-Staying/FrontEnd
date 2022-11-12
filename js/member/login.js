window.onload = function () {
    $(".login").click(stay_contents_work);

    function stay_contents_work(){
        let index = $(this).index();
        console.log(index);
        $(".login").css("z-index", 0);
        $(".login").find("h2").removeClass("target");
        $(".login").eq(index).css("z-index", 10);
        $(".login").eq(index).find("h2").addClass("target");
    }

}