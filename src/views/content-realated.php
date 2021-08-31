<div id="realated--content" class="content row">
	<span class="h2 col-xs-20 col-xs-offset-2"> Découvrez aussi </span>
	<div class="col-xs-24 col-xs-push-1">

	<?php
$related = get_posts( array( 'category__in' => wp_get_post_categories($post->ID), 'numberposts' => 2, 'post__not_in' => array($post->ID) ) );
if( $related){
	foreach( $related as $post ) {
	setup_postdata($post); 
	get_template_part( 'src/views/content-grid-debut' ); }
}
else{
    $args = array(
        'post_type' => array('post'),
        'posts_per_page' => 2,
        'post__not_in' => array($post->ID)
    );
    $myquery = new WP_Query( $args );
    if ($myquery->have_posts()) :
        $post = $posts[0]; $count=0;
        while ($myquery->have_posts()) : $myquery->the_post();
            $count++;
            get_template_part( 'src/views/content-grid-debut' );
  		endwhile;
  	endif;
  	wp_reset_query();
}
wp_reset_postdata(); ?>
</div>
</div>