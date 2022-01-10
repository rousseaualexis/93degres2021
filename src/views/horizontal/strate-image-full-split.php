<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$image_one = get_field('image_one');
$image_two = get_field('image_two');
?>
<div class="acf--image-full-split">
	<div class="image--one" style="background-image: url('<?php echo $image_one['sizes']['medium']; ?>" alt="<?php echo $image_one['alt']; ?>')">
        <span class="t--caption"><?php the_field('caption'); ?></span>
	</div>
	<div class="image--two">
        <img class="lazyload" data-srcset="<?php echo $image_two['sizes']['medium']; ?>" alt="<?php echo $image_two['alt']; ?>" style="z-index: 1"/>
    	<span class="t--caption"><?php the_field('caption'); ?></span>
	</div>
</div>
