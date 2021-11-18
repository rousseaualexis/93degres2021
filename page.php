<?php
/*
Template Name: Homepage
*/
?>

<?php include'head.php'; ?>
<style>
  #homepage--cover--title .h1 strong{
    color: <?php echo get_field('background-color'); ?>;
  }
  #footer #list-destinations{
    background-color: <?php echo get_field('text-color'); ?>;
  }
</style>

<?php get_header(); ?>


<body class="page--homepage">

<main class="body--page" >


<?php

/* Start the Loop */
while ( have_posts() ) :
	the_post();
			the_content();
	get_template_part( 'template-parts/content/content-page' );

	// If comments are open or there is at least one comment, load up the comment template.
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}
endwhile; // End of the loop.

get_footer(); ?>
</main>
<?php include'script.php'; ?>
<?php include'end.php'; ?>  