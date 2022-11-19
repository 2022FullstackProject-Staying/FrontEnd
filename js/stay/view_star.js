window.onload = function () {
    let star_rating = document.querySelector(".view_star").innerText;
    let star_decimal = Number((star_rating%1) .toFixed(1));
    let star_point = Math.floor(star_rating)/2;
    star_width = 0;

    let back_star = "<span class='back_star_wrap'>"
    back_star += '<span class="bk-star fa fa-star"></span>';
    back_star += '<span class="bk-star fa fa-star"></span>';
    back_star += '<span class="bk-star fa fa-star"></span>';
    back_star += '<span class="bk-star fa fa-star"></span>';
    back_star += '<span class="bk-star fa fa-star"></span>';
    back_star += '</span>';
    
    let star = "<div class='front_star_wrap'>";
    for(let i=0; i<star_point; i++){
        star += '<span class="star fa fa-star"></span>';
        star_width += 0.2;
    }
    if(star_decimal != 0) {
        star += '<span class="last_star fa fa-star"></span>'
        star_width += (0.2 * star_decimal);
    }
    star += "</div>"

    document.querySelector(".view_star").innerHTML = star + back_star + star_rating;
    
    document.querySelector(".view_star").style.position = "relative";
    document.querySelector(".view_star").style.overflow = "hidden";
    document.querySelector(".view_star > .back_star_wrap").style.color = "#ccc";
    document.querySelector(".view_star > .back_star_wrap").style.marginRight = "10px";
    
    let w = document.querySelector(".view_star > .back_star_wrap").offsetWidth
    document.querySelector(".view_star > .front_star_wrap").style.position = "absolute";
    document.querySelector(".view_star > .front_star_wrap").style.color = "rgb(255, 204, 0)";
    document.querySelector(".view_star > .front_star_wrap").style.overflow = "hidden";
    document.querySelector(".view_star > .front_star_wrap").style.whiteSpace = "nowrap";
    document.querySelector(".view_star > .front_star_wrap").style.width = star_width * w + "px";
}