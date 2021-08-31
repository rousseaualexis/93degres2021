if( $('body').hasClass('page--map') === true ){ (function($) {

/*
*  new_map
*
*  This function will render a Google Map onto the selected jQuery element
*
*  @type    function
*  @date    8/11/2013
*  @since   4.3.0
*
*  @param   $el (jQuery element)
*  @return  n/a
*/
function getUrlVars() {
		    var vars = {};
		    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		        vars[key] = value;
		    });
		    return vars;
		}

		var number = getUrlVars()["adress"];
	


function new_map( $el ) {

				var styledMapType = new google.maps.StyledMapType(
			          [
						  {
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#212121"
						      }
						    ]
						  },
						  {
						    "elementType": "labels",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#757575"
						      }
						    ]
						  },
						  {
						    "elementType": "labels.text.stroke",
						    "stylers": [
						      {
						        "color": "#212121"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#757575"
						      },
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.country",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.country",
						    "elementType": "geometry.stroke",
						    "stylers": [
						      {
						        "visibility": "simplified"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.country",
						    "elementType": "labels.text",
						    "stylers": [
						      {
						        "visibility": "on"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.country",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#9e9e9e"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.locality",
						    "stylers": [
						      {
						        "visibility": "simplified"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.locality",
						    "elementType": "labels.text",
						    "stylers": [
						      {
						        "visibility": "on"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.locality",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#bdbdbd"
						      }
						    ]
						  },
						  {
						    "featureType": "administrative.province",
						    "elementType": "labels.text",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "poi",
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "color": "#292929"
						      }
						    ]
						  },
						  {
						    "featureType": "poi",
						    "elementType": "labels.text",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "poi",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#757575"
						      }
						    ]
						  },
						  {
						    "featureType": "poi.park",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#181818"
						      }
						    ]
						  },
						  {
						    "featureType": "poi.park",
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "saturation": -100
						      },
						      {
						        "lightness": -55
						      }
						    ]
						  },
						  {
						    "featureType": "poi.park",
						    "elementType": "labels.text.stroke",
						    "stylers": [
						      {
						        "color": "#1b1b1b"
						      },
						      {
						        "weight": 2
						      }
						    ]
						  },
						  {
						    "featureType": "road",
						    "elementType": "geometry.fill",
						    "stylers": [
						      {
						        "color": "#2c2c2c"
						      }
						    ]
						  },
						  {
						    "featureType": "road",
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "road",
						    "elementType": "labels.text",
						    "stylers": [
						      {
						        "visibility": "on"
						      }
						    ]
						  },
						  {
						    "featureType": "road",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#8a8a8a"
						      }
						    ]
						  },
						  {
						    "featureType": "road.arterial",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#373737"
						      }
						    ]
						  },
						  {
						    "featureType": "road.highway",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#3c3c3c"
						      }
						    ]
						  },
						  {
						    "featureType": "road.highway.controlled_access",
						    "elementType": "geometry.stroke",
						    "stylers": [
						      {
						        "visibility": "on"
						      }
						    ]
						  },
						  {
						    "featureType": "road.local",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#616161"
						      }
						    ]
						  },
						  {
						    "featureType": "transit",
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "transit",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#757575"
						      }
						    ]
						  },
						  {
						    "featureType": "transit.line",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "lightness": 45
						      },
						      {
						        "visibility": "on"
						      }
						    ]
						  },
						  {
						    "featureType": "transit.station.airport",
						    "stylers": [
						      {
						        "saturation": -100
						      },
						      {
						        "lightness": -40
						      }
						    ]
						  },
						  {
						    "featureType": "transit.station.airport",
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "transit.station.rail",
						    "stylers": [
						      {
						        "saturation": -100
						      },
						      {
						        "lightness": -40
						      }
						    ]
						  },
						  {
						    "featureType": "transit.station.rail",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "lightness": -45
						      },
						      {
						        "visibility": "simplified"
						      }
						    ]
						  },
						  {
						    "featureType": "transit.station.rail",
						    "elementType": "labels.icon",
						    "stylers": [
						      {
						        "visibility": "off"
						      }
						    ]
						  },
						  {
						    "featureType": "water",
						    "elementType": "geometry",
						    "stylers": [
						      {
						        "color": "#ababab"
						      }
						    ]
						  },
						  {
						    "featureType": "water",
						    "elementType": "labels.text.fill",
						    "stylers": [
						      {
						        "color": "#3d3d3d"
						      }
						    ]
						  }
						],
			            {name: 'Styled Map'});



		// var
		var $markers = $el.find('.marker');

		var worldLimit = {
		        north: 85,
		        south: -85,
		        west: -180,
		        east: 180,
		      };

		// vars
		var args = {
		    minZoom: 3,
		    maxZoom: 16,
		    zoom: 10,
		    center      : new google.maps.LatLng(46.8, 1.9),
		    gestureHandling: 'greedy',
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    disableDefaultUI: true,

		          restriction: {
		            latLngBounds: worldLimit,
		            strictBounds: false,
		          },
		};


		// create map               
		var map = new google.maps.Map( $el[0], args);
		map.mapTypes.set('styled_map', styledMapType);
		map.setMapTypeId('styled_map');



		// add a markers reference
		map.markers = [];


		// add markers
		$markers.each(function(){

		    add_marker( $(this), map);
		});


		// center map
		center_map( map );


/*
		var infowindow = new google.maps.InfoWindow({
		content     : '',
		maxWidth: 300
		});
*/
		// add marker cluster
		markerCluster( map.markers, map )

		// return
		return map;


/*
*  add_marker
*
*  This function will add a marker to the selected Google Map
*
*  @type    function
*  @date    8/11/2013
*  @since   4.3.0
*
*  @param   $marker (jQuery element)
*  @param   map (Google Map object)
*  @return  n/a
*/
		


function add_marker( $marker, map ) {

	var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
	
var image = {
    url: $marker.attr('data-img'),
    // This marker is 20 pixels wide by 32 pixels high.
    scaledSize: new google.maps.Size(32, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };


// create marker
var marker = new google.maps.Marker({
    position    : latlng,
    map         : map,
    icon        : image
});


// add to array
map.markers.push( marker );



if( $marker.html() )
{


// shirt


    // Ajout des place dans la sidebar
	$('#sidebar').append('<div class="sidebar__place" id="'+$marker.attr('id')+'"><div class="place--info">'+$marker.find('.place--info').html()+'</div></div>');

	function animation(){


    		//console.log(number);

    	//$('#infosidebar').empty()
    	var tl = new TimelineLite();
        tl.to($('#infosidebar'), 1, {x: "0", ease:Quart.easeOut}, 0);
        $('#infosidebar').scrollTop = 0;
        map.setZoom(16);
		map.setCenter(marker.getPosition());

	}
	//console.log(number);
	//console.log($marker.find('.place--info').attr('data-id'))
	//console.log($marker.attr('id'));

	if(number == $marker.attr('id') + '/'){

		map.setZoom(16);
		map.setCenter(marker.getPosition());
    	var newurl = $marker.attr('data-url');
    	window.history.replaceState('', 'New Page Title', newurl);
		$('#infosidebar').html('<div class="infosidebar--content" id="i'+number+'">'+$marker.html()+'</div>');
		animation();
	}
	
    // show info window when sidebar element is clicked & close other markers
    $(document).on('click', '#'+$marker.attr('id'), function(){
    	var newurl = $marker.attr('data-url');
    	window.history.replaceState('', 'New Page Title', newurl);
    	$('#infosidebar').html('<div class="infosidebar--content" id="i'+$marker.attr('id')+'">'+$marker.html()+'</div>');
    	animation();
		//TO DELETE AT THE END
		//infowindow.setContent($marker.html());
        //infowindow.open(map, marker);
    });

    // show info window when marker is clicked & close other markers
    google.maps.event.addListener(marker, 'click', function() {
    	
        //swap content of that singular infowindow
        
        //window.location.href = marker.url;
        //Si le même id est clique que celui ouvert, ne rien faire
        if ($('#infosidebar > div').attr("id") != 'i'+$marker.attr('id') ){
        	var newurl = $marker.attr('data-url');
    		window.history.replaceState('', '', newurl);
    		$('#infosidebar').html('<div class="infosidebar--content" id="i'+$marker.attr('id')+'">'+$marker.html()+'</div>');
        	animation();
    	}
			//TO DELETE AT THE END
			//infowindow.setContent($marker.html());
	        //infowindow.open(map, marker);
			//tl.to($('main'), 2, {x: "15%", ease:Expo.easeOut}, 0);
			//tl.to($('header'), 2, {x: "15%", ease:Expo.easeOut}, 0);
    });

    // close info window when map is clicked
     google.maps.event.addListener(map, 'click', function(event) {

        //if (infowindow) {
			var tl = new TimelineLite();
			tl.to($('#infosidebar'), 0.5, {x: "-101%", ease:Expo.easeIn, onComplete:function(){
     			$('.infosidebar--content').removeAttr('id')                    }

                }, 0);
			$(document).on('click', '#'+$marker.attr('id'), function(){return false;});
			 //setTimeout(function(){ $('#infosidebar').empty(); }, 750);
	       
            //TO DELETE AT THE END
            //infowindow.close();
        //}
    }); 
  

}



/*
// var
var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );
var image = {
    url: 'http://93degres.com/wp-content/themes/93degres2020/src/map/pin1.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(53, 53),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 53)
  };

// create marker
var marker = new google.maps.Marker({
    position    : latlng,
    map         : map,
    icon        : image
});


 var infowindow = new google.maps.InfoWindow({
          content: $marker.html()
        });

// add to array
map.markers.push( marker );

// if marker contains HTML, add it to an infoWindow
if( $marker.html() )
{       	
	$('#listdata').append('<div class= "linkage" id="p'+index+'">'+$marker.html()+'</div>'); // change html here if you want but eave id intact!!
     
    $(document).on('click', '#p'+index, function(){
        infowindow.open(map, marker);
        setTimeout(function () { infowindow.close(); }, 3000);

		map.setZoom(16);
          map.setCenter(marker.getPosition());
    });
  
    // create info window
    var infowindow = new google.maps.InfoWindow({
        content     : $marker.html(),
    });   


    // show info window when marker is clicked
    google.maps.event.addListener(marker, 'click', function() {
 			infowindow.open( map, marker );
			map.setZoom(16);
          map.setCenter(marker.getPosition());
    });
}

*/
}

}	

function markerCluster( markers, map ) {
    var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'http://93degres.com/wp-content/themes/93degres2020/src/map/pin'});
    //console.log( markers );
}
/*
*  center_map
*
*  This function will center the map, showing all markers attached to this map
*
*  @type    function
*  @date    8/11/2013
*  @since   4.3.0
*  @param   map (Google Map object)
*  @return  n/a
*/

function center_map( map ) {

// vars
var bounds = new google.maps.LatLngBounds();

// loop through all markers and create bounds
$.each( map.markers, function( i, marker ){

    var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

    bounds.extend( latlng );

});

// only 1 marker?
if( map.markers.length == 1 )
{
    // set center of map
    map.setCenter( bounds.getCenter() );
    map.setZoom( 16 );
}
else if (number !== undefined)
{

}
else
{
    // fit to bounds
    map.fitBounds( bounds );
}

}



/*
*  document ready
*
*  This function will render each map when the document is ready (page has loaded)
*
*  @type    function
*  @date    8/11/2013
*  @since   5.0.0
*
*  @param   n/a
*  @return  n/a
*/
// global var
var map = null;

$(document).ready(function(){






$('.acf-map').each(function(){

    // create map
    map = new_map( $(this) );

});


});

})(jQuery);

};