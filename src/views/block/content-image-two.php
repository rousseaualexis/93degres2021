<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

$image_one = get_field('image_one');
$caption_one = get_field('caption_one');
$image_two = get_field('image_two');
$caption_two = get_field('caption_two');


?>
<div class="acf--image-two content row scroll-reveal">
	<div class="col-xs-20 col-xs-offset-2 col-sm-6 col-sm-offset-9">
		<div class="lazyload-wrapper" style="padding-bottom: calc(<?php echo $image_one['sizes']['medium-height']; ?> / <?php echo $image_one['sizes']['medium-width']; ?> * 100%)">
        	<img class="lazyload" data-srcset="<?php echo $image_one['sizes']['medium']; ?>" alt="<?php echo $image_one['alt']; ?>" style="z-index: 1"/>
        	<img src="<?php echo $image_one['sizes']['tiny']; ?>" alt="<?php echo $image_one['alt']; ?>" />
        	
    	</div>
    	<?php if(is_admin()){?>
    			<img src="<?php echo $image_one['sizes']['medium']; ?>" alt="<?php echo $image_one['alt']; ?>"/>
    		<?php } ?>
        <?php if($caption_one){?>
		<span class="t--caption"><?php echo $caption_one ?></span>
		<?php } else{} ?>
	</div>
	<div class="col-xs-20 col-xs-offset-2 col-sm-6 col-sm-offset-1">
		<div class="lazyload-wrapper" style="padding-bottom: calc(<?php echo $image_two['sizes']['medium-height']; ?> / <?php echo $image_two['sizes']['medium-width']; ?> * 100%)">
	        <img class="lazyload" data-srcset="<?php echo $image_two['sizes']['medium']; ?>" alt="<?php echo $image_two['alt']; ?>" style="z-index: 1"/>
	        <img src="<?php echo $image_two['sizes']['tiny']; ?>" alt="<?php echo $image_two['alt']; ?>" />
	        
       	</div>
       	<?php if(is_admin()){?>
    			<img src="<?php echo $image_two['sizes']['medium']; ?>" alt="<?php echo $image_two['alt']; ?>"/>
    		<?php } ?>
        <?php if($caption_two){?>
		<span class="t--caption"><?php echo $caption_two ?></span>
		<?php } else{} ?>
	</div>
</div>