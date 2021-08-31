<?php
$id = get_post_field( 'post_name', get_post() );
$location = get_site_url() . "/carte?adress=" . $id  . "/";
wp_redirect( $location, 301 );
exit;   
?>