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
            <div id="homepage--cover">
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

              



                <?php 
                    $thumbnail = get_field( 'thumbnail' );
                ?>

                <a id="homepage--cover--image" class="item" href="<?php the_permalink(); ?>" data-mouse="read" data-background="<?php echo get_field('background-color'); ?>" data-text="<?php echo get_field('text-color'); ?>"> 
                                    <div id="homepage--cover--title" class="col-xs-offset-2 col-xs-20">
                        <p class="h1" data-mouse="read" data-background="<?php echo get_field('background-color'); ?>" data-text="<?php echo get_field('text-color'); ?>" data-splitting="words">
                                <?php the_title(); ?>
                        </p>
                    <!--
                    <div class="categories"><img src="<?php  echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/><span><?php echo $term_name . " — " . $yearBegin;
                        if(!empty($yearEnd)){ echo ' / ' . $yearEnd; }?></span></div>
                    !-->
                </div>
                            <div class="bgd__image" style="background-image: url('<?php echo $thumbnail['sizes']['large'];?>');" alt="<?php echo $thumbnail['alt']; ?>">
                            </div>
                </a>
                <h1 class="t--caption">93 Degrés, blog de voyage, aventure et photographie</h1>
            </div> 


<div class="strates">


<?php
    while ( have_posts() ) : the_post();
            the_content();
        endwhile; // End of the loop.
        wp_reset_postdata();
         ?>

</div>
             



            <div id="homepage--other-articles" class="strate">
                <div class="fifty-left-col">
                <?php
                        elseif($count == 2) :
                ?>
                    
                        <p class="h2"> Latest projects </p>
                        <a class="a--link t--small"> view more </a>
                        <?php get_template_part( 'src/views/homepage--content-grid' ); ?>
                    </div>
                    <div class="fifty-right-col">

                <?php      else : ?>
                    

                <?php
                            get_template_part( 'src/views/homepage--content-grid' );
                        endif;
                    endwhile;
                endif;

                wp_reset_query();
                ?>      
  
                </div>
            </div>



    


            <div id="homepage--destinations" class="strate">
                    <span class="h4 col-xs-22 col-xs-offset-1">Nos destinations préférées</span>
                    


                    <ul class="col-xs-24 ">
                      <?php  $destinations = get_field('destinations', 2);

foreach ($destinations as $destination) {
  ?><li class="menu__link homepage--destinations--names">
                                <a href="<?php echo get_category_link( $destination->term_id ); ?> " class="h1" data-mouse="link-internal">
                                    
                                <?php echo $destination->name; ?>
                            
                                </a>
                                </li>
                                <?php } ?>

                    </ul>
                    <a class="cta--rounded-square cta--rounded-square-dark" href="<?php echo get_field('destinations_link', 2); ?>"><div class="cta--rounded-square__before"><?php echo file_get_contents(get_template_directory() . '/src/images/arrow.svg'); ?></div><span>En savoir plus</span></a>
                    <?php echo file_get_contents(get_template_directory() . '/src/images/world.svg'); ?>

            </div>

            
            <div id="about">
                    <span class="h4 col-xs-22 col-xs-offset-1 col-sm-16 col-sm-offset-4"> À propos </span>
                    <div class="h2 col-xs-24"> <span class="col-xs-22 col-xs-offset-1 col-sm-16 col-sm-offset-4" data-line><?php echo get_field('about', 2); ?></span>
                    </div>
                    <a class="cta--rounded-square cta--rounded-square-white" href="<?php echo get_field('about_link', 2); ?>"><div class="cta--rounded-square__before"><?php echo file_get_contents(get_template_directory() . '/src/images/arrow.svg'); ?></div><span>En savoir plus</span></a>
                    
            </div>


  
<?php get_footer(); ?>
</main>
<?php include'script.php'; ?>
<?php include'end.php'; ?>  