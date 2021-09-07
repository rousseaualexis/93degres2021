<?php
/*
Template Name: About
*/
?>
<?php include'head.php'; ?>
<style>

  #single--content .acf--title .h3 strong{
    color: <?php echo get_field('background-color'); ?>;
  }
</style>
<body class="page--about">
<?php get_header(); ?>
<main>

<div class="container">
  <div id="about--introduction" class="content row">
      
      <div id="about--introduction__title" class="item col-xs-20 col-xs-offset-2" >
      <h1 class="h1" data-line><?php
          echo strip_tags(get_field('title'), '<br><em><strong><img>');
          ?></h1>
      </div>
  </div>
  <div id="about--content">
    <?php
        while ( have_posts() ) : the_post();
            the_content();
        endwhile; // End of the loop.
        wp_reset_postdata();
         ?>
  </div>
  <div>
  </div>
</div>
<?php get_footer(); ?>

<?php include'end.php'; ?>  