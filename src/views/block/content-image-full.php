<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$image = get_field('image');
$caption = get_field('caption')
?>
<div class="acf--image-full" style="padding-left: calc(<?php echo $image['sizes']['large-height']; ?> / <?php echo $image['sizes']['large-width']; ?> * 100%)">
		<img src="<?php echo $image['sizes']['large']; ?>" alt="<?php echo $image['alt']; ?>" style="position: absolute;"/>

		<!--
	
		<div class="lazyload-wrapper" style="padding-bottom: calc(<?php echo $image['sizes']['large-height']; ?> / <?php echo $image['sizes']['large-width']; ?> * 100%)">
    		<img class="lazyload" data-src="<?php echo $image['sizes']['large']; ?>" alt="<?php echo $image['alt']; ?>" style="position: absolute; z-index: 1;"/>
    		<img src="<?php echo $image['sizes']['tiny']; ?>" alt="<?php echo $image['alt']; ?>" style="position: absolute;"/>
    		<?php if(is_admin()){?>
    			<img class="lazyload" src="<?php echo $image['sizes']['large']; ?>" alt="<?php echo $image['alt']; ?>" style="position: absolute; z-index: 1;"/>

    		<?php } ?>
		</div>
        <?php if($caption){?>
		<span class="t--caption"><?php echo $caption ?></span>
		<?php } else{} ?>
	!-->
</div>