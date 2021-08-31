<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$image_one = get_field('image_gauche');
$image_two = get_field('image_droite');
?>
<div class="acf--image-full-split content row scroll-reveal">
	<div class="col-xs-12">
		<div class="lazyload-wrapper" style="padding-bottom: calc(<?php echo $image_one['sizes']['medium-height']; ?> / <?php echo $image_one['sizes']['medium-width']; ?> * 100%)">
        	<img class="lazyload" data-srcset="<?php echo $image_one['sizes']['medium']; ?>" alt="<?php echo $image_one['alt']; ?>" style="z-index: 1"/>
        	<img src="<?php echo $image_one['sizes']['tiny']; ?>" alt="<?php echo $image_one['alt']; ?>" />
    	</div>
        <span class="t--caption"><?php the_field('caption'); ?></span>
	</div>
	<div class="col-xs-12">
		<div class="lazyload-wrapper" style="padding-bottom: calc(<?php echo $image_two['sizes']['medium-height']; ?> / <?php echo $image_two['sizes']['medium-width']; ?> * 100%)">
	        <img class="lazyload" data-srcset="<?php echo $image_two['sizes']['medium']; ?>" alt="<?php echo $image_two['alt']; ?>" style="z-index: 1"/>
	        <img src="<?php echo $image_two['sizes']['tiny']; ?>" alt="<?php echo $image_two['alt']; ?>" />
       	</div>
        <span class="t--caption"><?php the_field('caption'); ?></span>
	</div>
</div>