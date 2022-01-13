<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)


$title = strip_tags(get_field('title'), '<br><em><strong>');
$small_description = get_field('small_description');
$background_color = get_field('background_color');
$text_color = get_field('text_color');
$product = get_field('product')
?>

<div class="strate strate--destination-shop">
	<div class="fifty-left-col" style="background: <?php echo $background_color ?>">
		<div class="content">
			<h2 class="h1" style="color: <?php echo $text_color ?>"><?php echo $title ?></h2>
			<h3 class="h3" style="color: <?php echo $text_color ?>"><?php echo $small_description ?></h3>
			<a href="" class="small-link" style="color: <?php echo $text_color ?>">Discover</a>
		</div>
	</div>
	<div class="fifty-right-col">
		<div class="product-push"><?php //var_dump($product) ?></div>


		<?php

                
                $id = get_the_id($product);
                //var_dump($product);
				$thumbnail = get_field( 'thumbnail', $product );


            ?>  


				<a href="<?php the_permalink($product); ?>" data-mouse="read">link</a>
                           
                       <img src="<?php echo $thumbnail['sizes']['thumbnail'];?>');" alt="<?php echo $thumbnail['alt']; ?>"/>



            
                
            
                <h3 class="h3">
                    <?php $title = get_the_title($product);
  
            echo $title; ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?>
                </h3>


		<div class="background" style="background: <?php echo $background_color ?>"></div>
	</div>
</div>
<!--
<div class="acf--title content row scroll-reveal">
	<div class="col-xs-20 col-xs-offset-2 col-sm-13 col-sm-offset-9">
		<h2 class="h3"><?php echo $title; ?></h2>
	</div>
</div>!-->