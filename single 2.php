<?php include'head.php'; ?>
<?php get_header(); ?>

<style>

  #single--content .acf--paragraph__paragraph p a, #single--introduction .h1, #footer #list-destinations .h3{
    color: <?php echo get_field('text-color'); ?>;
  }
  
  #footer #list-destinations, .mask, .flickity-button, .mask2{
    background-color: <?php echo get_field('background-color'); ?>;
  }

  .mask3, #footer #list-destinations .flickity--list-element:after{
    background-color: <?php echo get_field('text-color'); ?>;
  }


</style>
<body class="page--single">

<main class="container body--page">

      <section id="sectionPin" style="background-color: <?php echo get_field('background-color'); ?>;">


<?php $thumbnail = get_field('thumbnail');
    if ($thumbnail) :
    $thumbnail_url = $thumbnail['sizes']['large'];
    endif;
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




        <div class="pin-wrap">
           <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
        <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
        <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">


          <div id="single--introduction__title" class="" >
      <h1 class="h1" data-line><?php
          $title = get_the_title();
          $title = strip_tags( $title, '<strong>' );
          echo $title; ?></h1>
          <a href="<?php echo $term_url; ?>" class="categories"><img src="<?php echo $flag_url;?>" alt="<?php echo$flag['alt'];?>"/ ><span>
                    <?php echo $term_name . " — " . $yearBegin;
                        if(!empty($yearEnd)){ echo ' / ' . $yearEnd; }?></span></a>
      </div>
            <div id="single--introduction__thumbnail" class="item col-xs-24 col-sm-offset-9">
              <div class="item__img-wrap image--3-2">
                <div class="item__img" style="background-image: url('<?php echo $thumbnail_url;?>');" alt="<?php echo $thumbnail['alt']; ?>"></div>
              </div>     
            </div>
      <div id="single--introduction__text" class="item col-xs-22 col-xs-offset-1 scroll-reveal">
        <p class="h2" data-line><strong><?php echo strip_tags(get_field('intro'), '<br><em><strong>'); ?></strong></p>
      </div>


        </div>
</section>
      <section data-bgcolor="#e3857a" data-textcolor="#f1dba7"><img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        <h2 data-scroll data-scroll-speed="1" class="credit"><a href="https://thisisadvantage.com" target="_blank">Made by Advantage</a></h2>

  </section>

  <section id="single--content" class="hrz-container">
    <?php
        while ( have_posts() ) : the_post();
            the_content();
        endwhile; // End of the loop.
        wp_reset_postdata();
         ?>
  </section>

  
<?php include 'src/views/content-realated.php'; get_footer(); ?>
</main>


<?php include'script.php'; ?>

<script>
var galleryElems = document.querySelectorAll('.main-carousel');
if( galleryElems ){
  for ( var i=0, len = galleryElems.length; i < len; i++ ) {
    var galleryElem = galleryElems[i];
    new Flickity( galleryElem, {
      cellAlign: 'center',
      freeScroll: true,
      lazyLoad: 3,
      percentPosition: false
    });
  }
}
</script> 
<?php include'end.php'; ?>  