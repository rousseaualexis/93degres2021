<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$title = strip_tags(get_field('title'), '<br><em><strong>');
$small_description = strip_tags(get_field('small_description'), '<br><em><strong><a>');
$images = get_field('gallery');

$caption = get_field('caption');
if( $images ):
?>
<div class="acf--slider content row scroll-reveal">
	<ul class="main-carousel col-xs-24">
	        <!-- Slides -->
	    <?php foreach( $images as $image ): ?>
	        <li class="carousel-cell">
	        	<div class="lazyload-wrapper" >
	        	<img class="lazyload" data-srcset="<?php echo $image['sizes']['thumbnail']; ?>" data-lowsrc="<?php echo $image['sizes']['tiny']; ?>" src="<?php echo $image['sizes']['tiny']; ?>" width="<?php echo $image['width']; ?>" height="<?php echo $image['height']; ?>" alt="<?php echo $image['alt']; ?>">

	        <!--
	        	<img data-flickity-lazyload="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>"/>
	        	!-->
	        	<?php if($caption){?>
		<span class="t--caption"><?php echo $caption ?></span>
		<?php } else{} ?>
	        </div>
	    	</li>
	    	<?php if(is_admin()){?>
    			<img src="<?php echo $image['sizes']['medium']; ?>" alt="<?php echo $image['alt']; ?>"/>
    		<?php } ?>
	    <?php endforeach; ?>
	   <!-- <li class="slide--ghost"></li> !-->
	</ul>
</div>
<?php endif; ?>