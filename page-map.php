<?php
/*
Template Name: Map
*/
?>

        

<?php include'head.php';?>
<?php include'src/map/map-header.php' ?>
<style type="text/css">
	
	body{
		height: 100%;
	}


	a[href^="http://maps.google.com/maps"]{display:none !important}
a[href^="https://maps.google.com/maps"]{display:none !important}

.gmnoprint a, .gmnoprint span, .gm-style-cc {
    display:none;
}
.gmnoprint div {
    background:none !important;
}


</style>
<body class="page--map">
<main>

<script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyDJKoy-47CzNbgcsYUm-rZ8Fa0fRJ94aF8"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/src/markerclusterer.js"></script>
<div id="infosidebar" class="col-xs-12 col-md-8"></div>
<div id="sidebar" class="col-xs-12 col-md-8"></div>

<div class="acf-map col-xs-12 col-md-16">

<?php 
    $args = array('post_type'=> 'cpt_map', 
			'posts_per_page' => -1
    );
    $wp_query = new WP_Query($args);       
    while ( have_posts() ) : the_post();
    	 $location = get_field('google_maps');
          $thumbnail = get_field('thumbnail');
            $thumbnail_url = $thumbnail['sizes']['medium'];
            $id = get_the_id();
            $terms = get_the_terms( $id, 'maps' );
            if (isset($terms)){
                foreach($terms as $term) {
                    $icon = get_field('icon_place', $term);
                    $icon_url = $icon['sizes']['large'];
                    $term_url = get_term_link($term);
                    $term_name = $term->name;
                }}
            $cities = get_the_terms( $id, 'cities' );
            if (isset($cities)){
                foreach($cities as $city) {
                    $city_url = get_term_link($city);
                    $city_name = $city->name;
                }}

        ?>
    <div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>" data-img="<?php echo $icon_url; ?>" data-url="<?php the_permalink(); ?>" id="<?php echo get_post_field( 'post_name', get_post() ); ?>">
        <div class="place--info" >
            <div class="place--image" style="background-image: url('<?php  echo $thumbnail_url; ?>')"></div>
            <div class="place--text">
                <?php if (!empty($term_name)){ ?>
                <div class="place--category">
                <p class="t--caption"><?php echo $term_name; ?></p><div class="place--icon"><img src="<?php echo $icon_url ?>"/></div></div>
                <?php } ?>
                <p class="h4"><?php echo get_the_title(); ?></p>
                <?php if(!empty($city_name)){ echo "<p class='place--city t--caption'>" . $city_name . "</p>";} ?>
            </div>
        </div>
        <div class="place--description">
            <p class="place--adress t--caption">
            <?php /*print_r($location); */ echo $location['street_number'] . ' ' . $location['street_name'] . ', ' . $location['city'] . ' ' . $location['post_code'] . ', ' . $location['country_short']; ?>
            </p>
            <p class="place--paragraph">
            <?php echo get_field('description'); ?>
            </p>
            <a class="place--website t--caption" href="<?php echo get_field('website'); ?>"><?php echo get_field('website'); ?></a>
        </div>
    </div>
    <?php
    endwhile;
    wp_reset_postdata();
?>
</div>

<!--
<script type="text/javascript">
   var options = {
        center: new google.maps.LatLng(47.90296, 1.90925),
        zoom: 13,
        gestureHandling: 'greedy',
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    	disableDefaultUI: true
    };

    
    var map = new google.maps.Map(document.getElementById("map"), options);
    
    var cities = getCities();
    function getCities() {
return [
['01110 - HAUTEVILLE-LOMPNES',45.966667,5.6],
['01110 - HOSTIAZ',45.9,5.533333]
];
}


    var markers = [];
    for (var i = 0; i < cities.length; i++) {
        var markerOptions = {
            position: new google.maps.LatLng(cities[i][1], cities[i][2]),
            title: cities[i][0],
            city: cities[i]
        };
        var marker = new google.maps.Marker(markerOptions);
        markers.push(marker);
    }
    
    var markerClusterer = new MarkerClusterer(map, markers, {
        maxZoom: 9, // maxZoom set when clustering will stop
        imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'
    });

    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; ++i) {
        bounds.extend(this.markers[i].position);
    }
    map.fitBounds(bounds);
    
    var infoWindow = new google.maps.InfoWindow();
    
    google.maps.event.addListener(markerClusterer, 'clusterclick', function(cluster) {
        map.fitBounds(cluster.getBounds());
        if (map.getZoom() > 14) {
            map.setZoom(14);
        }
    });
!-->

</script>

<?php include'src/map/map-footer.php' ?>
<?php include'end.php' ?>