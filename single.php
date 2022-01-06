<?php include'head.php'; ?>


<?php get_header(); ?>


<body class="page--single" data-background="<?php echo $bgdColor ?>" data-text="<?php echo $txtColor ?>">

<main class="container body--page" >

      <section id="section--pin">


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




        <div class="pin--wrap">
          <div class="single--introduction" style="background: <?php echo $bgdColor ?>">

          <div id="single--introduction__title" class="">
      <p class="h1" style="color: <?php echo $txtColor ?>" data-splitting="words"><?php
          $title = get_the_title();
          $title = strip_tags( $title, '<strong>' );
          echo $title; ?></p>
            <div class="small-description">
              <a href="<?php echo $term_url; ?>" class="categories" style="color: <?php echo $txtColor ?>"><!--<img src="<?php echo $flag_url;?>" alt="<?php echo$flag['alt'];?>"/ >!--><span data-splitting="words">
                    <?php echo $term_name . " · " . $yearBegin;
                        if(!empty($yearEnd)){ echo ' / ' . $yearEnd; }?></span></a>
                      <h1 class="h3" style="color: <?php echo $txtColor ?>" data-splitting="lines">A two week roadtrip in the American West</h1>
            </div>
          </div>
          <div id="single--introduction__image" >
            <div class="bgd__image" style="background-image: url('<?php echo $thumbnail_url;?>')"></div>
          </div>

      <div id="single--introduction__text" class="scroll-reveal">
        <p class="h2" data-splitting="words" style="color: <?php echo $txtColor ?>">Un grand week-end, c’est la durée parfaite pour
découvrir Copenhague façon “slow travel”. Se
promener doucement dans la ville, à notre rythme et le nez en l’air pour observer son architecture qui mélange tradition nordique et design contemporain. Un grand week-end, c’est la durée parfaite pour
découvrir Copenhague façon “slow travel”.<!--<?php echo strip_tags(get_field('intro'), '<br><em><strong>'); ?>!--></p>
      </div>
    </div>

   
 <?php
        while ( have_posts() ) : the_post();
            the_content();
        endwhile; // End of the loop.
        wp_reset_postdata();
         ?>

        </div>
        

</section>
    
  
  
<?php include 'src/views/content-realated.php'; get_footer(); ?>
</main>
<?php include'script.php'; ?>
<?php include'end.php'; ?>  