 /* $(function() {
    $('#menu > div').mouseover(function() {
        $(this).css("font-weight", "bold");
    });
    $('#menu > div').mouseleave(function() {
        $(this).css("font-weight", "normal");
    });
});*/
$(function() {
    $('#detail').click(function() {
        $('#click_detail').show().siblings('div').hide();
        $('#menu > div').css("font-weight", "normal");
        $('#detail').css("font-weight", "bold");
        //$('#detail').css("color", "#48a9ed");
    })

    $('#review').click(function() {
        $('#click_review').show().siblings('div').hide();
        $('#menu > div').css("font-weight", "normal");
        $('#review').css("font-weight", "bold");
    })

    var className = document.getElementsByClassName("amenitie");
    $(".amenitie").click(function() {
        if($(this).children().css("display") == "none") {
            $(this).children().show();
        }else {
            $(this).children().hide();
        }
        /*$(this).children().show();
        if($(this).children().style.display == "block") {
            $(this).children().hide();
        }*/
    })
});

function place_click(stay_name, lat, lng) {
    $('#click_place').show().siblings('div').hide();
    $('#menu > div').css("font-weight", "normal");
    $('#place').css("font-weight", "bold");
    show_map(stay_name, lat, lng);
}

function show_map(stay_name, lat, lng) {
    var mapContainer = document.getElementById('map');
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lng),
        level: 3
    };

	var map = new kakao.maps.Map(mapContainer, mapOption); 
	
	var position =  new kakao.maps.LatLng(lat, lng);
	
	var marker = new kakao.maps.Marker({
	    map: map, 
	    position: position
	});
	
	marker.setMap(map);
	
	var geocoder = new kakao.maps.services.Geocoder();
	
	var overlay = new kakao.maps.CustomOverlay({
	    content: "",
	    map: map,
	    position: marker.getPosition()       
	});

	    
    searchDetailAddrFromCoords(position, function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var detailAddr = !!result[0].road_address ? '<div>' + result[0].road_address.address_name + '</div>' : '';
            
        	var content = '<div class="info_wrap">' + 
            '    <div class="info_content">' + 
            '        <div class="info_title">' + 
            			stay_name + 
            '        </div>' + 
            '        <div class="info_body">' + 
            			detailAddr +
            '        </div>' + 
            '    </div>' +    
            '</div>';

            overlay.setContent(content);
            overlay.setMap(map);
        }   
    });


	function searchDetailAddrFromCoords(coords, callback) {
	    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
	}
}