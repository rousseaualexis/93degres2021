<?php
/*
Template Name: Homepage
*/
?>
<style>
  #homepage--cover--title .h1 strong{
    color: <?php echo get_field('background-color'); ?>;
  }
  #footer #list-destinations{
    background-color: <?php echo get_field('text-color'); ?>;
  }
</style>
<?php include'head.php'; ?>
<?php get_header(); ?>
<body class="page--homepage body--page">

<main> 
<div class="container">
        <section id="sectionPin">
      <div class="pin-wrap">
      </div>
  </section>
    <?php
    $args = array(
        'post_type' => array('post'),
        'posts_per_page' => 4
    );
    $myquery = new WP_Query( $args );
    if ($myquery->have_posts()) :
        $post = $posts[0]; $count=0;
        while ($myquery->have_posts()) : $myquery->the_post();
            $count++;
            if($count == 1) :
    ?>
            <div id="homepage--cover" class="content row">
                <?php
                    $id = get_the_id();
                    $terms = get_the_terms( $id,  'category');
                    $yearBegin = get_field('year_begin');
                    $yearEnd = get_field('year_end');
                    foreach($terms as $term) {

                        if( $term->parent == 0 ){
                            $term_arr[$term->term_id] = $term->name;
                            $term_name = implode($term_arr);
                            $flag = get_field('flag', $term);
                            $flag_url = $flag['sizes']['thumbnail'];
                            $term_url = get_term_link($term);
                        }
                    }

                ?>
                <div id="homepage--cover--title" class="col-xs-offset-2 col-xs-20">
                    <a href="<?php the_permalink(); ?>" class="h1 col-xs-24" data-lining>
                        <div class="h1" data-mouse="read" data-background="<?php echo get_field('background-color'); ?>">
                                <?php the_title(); ?>
                        </div>
                    </a>
                    <div class="categories"><img src="<?php  echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/><span><?php echo $term_name . " — " . $yearBegin;
                        if(!empty($yearEnd)){ echo ' / ' . $yearEnd; }?></span></div>
                </div>

                <?php 
                    $thumbnail = get_field( 'thumbnail' );
                ?>

                <a id="homepage--cover--image" class="item col-xs-24 col-sm-17" href="<?php the_permalink(); ?>" data-mouse="read" data-background="<?php echo get_field('background-color'); ?>"data-text="<?php echo get_field('text-color'); ?>"> 
                    <div class="item__img-wrap image--3-2">
                        <div class="item__img-intro img-parallax">
                            <div class="item__img" style="background-image: url('<?php echo $thumbnail['sizes']['large'];?>');" alt="<?php echo $thumbnail['alt']; ?>">
                            </div>
                        </div>
                    </div>
                </a>
                <h1 class="t--caption">93 Degrés, blog de voyage, aventure et photographie</h1>
            </div> 

            <div id="homepage--other-articles" class="content row">
    <?php

            else :

                get_template_part( 'src/views/homepage--content-grid' );
            endif;
        endwhile;
    endif;

    wp_reset_query();
    ?>      
<div id="homepage--more-articles" class="col-xs-20 col-xs-offset-2 col-md-16 col-md-offset-4">
                <a class="cta--rounded-square cta--rounded-square-white" href="<?php echo get_field('article_link', 2); ?>"><div class="cta--rounded-square__before"><?php echo file_get_contents(get_template_directory() . '/src/images/arrow.svg'); ?></div><span>Voir la suite</span></a>
            </div>
            
            </div>
    
    


            <div id="homepage--destinations" class="row scroll-reveal">
                    <span class="h4 col-xs-22 col-xs-offset-1 translate-in">Nos destinations préférées</span>
                    


                    <ul class="col-xs-24 ">
                      <?php  $destinations = get_field('destinations', 2);

foreach ($destinations as $destination) {
  ?><li class="menu__link homepage--destinations--names trigger-element">
                                <a href="<?php echo get_category_link( $destination->term_id ); ?> " class="h1" data-mouse="link-internal">
                                    
                                <?php echo $destination->name; ?>
                            
                                </a>
                                </li>
                                <?php } ?>

                    </ul>
                    <a class="cta--rounded-square cta--rounded-square-dark" href="<?php echo get_field('destinations_link', 2); ?>"><div class="cta--rounded-square__before"><?php echo file_get_contents(get_template_directory() . '/src/images/arrow.svg'); ?></div><span>En savoir plus</span></a>
                    <?php echo file_get_contents(get_template_directory() . '/src/images/world.svg'); ?>

            </div>

            
            <div id="about" class="row scroll-reveal">
                    <span class="h4 col-xs-22 col-xs-offset-1 col-sm-16 col-sm-offset-4 translate-in"> À propos </span>
                    <div class="h2 col-xs-24"> <span class="col-xs-22 col-xs-offset-1 col-sm-16 col-sm-offset-4" data-lining><?php echo get_field('about', 2); ?></span>
                    </div>
                    <a class="cta--rounded-square cta--rounded-square-white" href="<?php echo get_field('about_link', 2); ?>"><div class="cta--rounded-square__before"><?php echo file_get_contents(get_template_directory() . '/src/images/arrow.svg'); ?></div><span>En savoir plus</span></a>
                    
            </div>


 </div>

<?php include 'src/views/content-realated.php'; get_footer(); ?>
<?php include'script.php'; ?>
<?php include'end.php'; ?>  