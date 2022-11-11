$(function() {
    $('.icon1').click(function() {
        $('.best_guesthouse').show().siblings('div').hide();
        $('#houseIcon').attr('src', 'images/Home/themeIcons/house_select.png')
        $('#hotelIcon').attr('src', 'images/Home/themeIcons/hotel.png')
        $('#campingIcon').attr('src', 'images/Home/themeIcons/camping.png')
        $('#hanokIcon').attr('src', 'images/Home/themeIcons/hanok.png')
    })
});
$(function() {
    $('.icon2').click(function() {
        $('.best_hotel').show().siblings('div').hide();
        $('#houseIcon').attr('src', 'images/Home/themeIcons/house.png')
        $('#hotelIcon').attr('src', 'images/Home/themeIcons/hotel_select.png')
        $('#campingIcon').attr('src', 'images/Home/themeIcons/camping.png')
        $('#hanokIcon').attr('src', 'images/Home/themeIcons/hanok.png')
    })
});
$(function() {
    $('.icon3').click(function() {
        $('.best_camping').show().siblings('div').hide();
        $('#houseIcon').attr('src', 'images/Home/themeIcons/house.png')
        $('#hotelIcon').attr('src', 'images/Home/themeIcons/hotel.png')
        $('#campingIcon').attr('src', 'images/Home/themeIcons/camping_select.png')
        $('#hanokIcon').attr('src', 'images/Home/themeIcons/hanok.png')
    })
});
$(function() {
    $('.icon4').click(function() {
        $('.best_hanok').show().siblings('div').hide();
        $('#houseIcon').attr('src', 'images/Home/themeIcons/house.png')
        $('#hotelIcon').attr('src', 'images/Home/themeIcons/hotel.png')
        $('#campingIcon').attr('src', 'images/Home/themeIcons/camping.png')
        $('#hanokIcon').attr('src', 'images/Home/themeIcons/hanok_select.png')
    })
});