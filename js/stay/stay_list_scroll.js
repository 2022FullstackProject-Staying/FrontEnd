
$(window).scroll(function() {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height()-10)) {
        $(".stay_list_area").append(
            '<a class="stay_content" href="#"><div class="stay_image"><img src="' +
            '" alt=""></div><div class="stay_info"><div class="stay_info_l"><h2>' + 
            '</h2><p>' +
            '</p><p><span>' + 
            '</span><span>' + '</span></p></div></div></a>'+
            '<a class="stay_content" href="#"><div class="stay_image"><img src="' +
            '" alt=""></div><div class="stay_info"><div class="stay_info_l"><h2>' + 
            '</h2><p>' +
            '</p><p><span>' + 
            '</span><span>' + '</span></p></div></div></a>'+
            '<a class="stay_content" href="#"><div class="stay_image"><img src="' +
            '" alt=""></div><div class="stay_info"><div class="stay_info_l"><h2>' + 
            '</h2><p>' +
            '</p><p><span>' + 
            '</span><span>' + '</span></p></div></div></a>'
        );      
    }
 });

function append_stay (image_src, stay_name, stay_content, stay_star, stay_price){
    $(".stay_list_area").append(
        '<a class="stay_content" href="#"><div class="stay_image"><img src="' + image_src +
        '" alt=""></div><div class="stay_info"><div class="stay_info_l"><h2>' +  stay_name + 
        '</h2><p>' + stay_content +
        '</p><p><span>' + stay_star + 
        '</span><span>' + stay_price + '</span></p></div></div></a>'
    );
}