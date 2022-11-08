window.onload = function () {
    $(".stay_contents").click(stay_contents_work);

    function stay_contents_work(){
        let index = $(this).index();
        console.log(index);
        $(".stay_contents").css("z-index", 0);
        $(".stay_contents").eq(index).css("z-index", 10);
    }
}