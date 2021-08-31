<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

$image = get_field('image');
$caption = get_field('caption');

?>
<!--
<style>
.lazyload,
.lazyloading {
    opacity: 0; }

.loading,
.lazyload,
.lazyloaded,
.lazyload-wrapper{
  	transition: 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1s;
    transform: scale(1); }


</style>

<div class="acf--image-one">

	<div class="col-xs-20 col-xs-offset-2 col-sm-13 col-sm-offset-9" >
		<div class="lazyload-wrapper" style="padding-bottom: calc(<?php echo $image['sizes']['medium-height']; ?> / <?php echo $image['sizes']['medium-width']; ?> * 100%)">
    		<img class="lazyload" data-src="<?php echo $image['sizes']['medium']; ?>" alt="<?php echo $image['alt']; ?>" style="position: absolute; z-index: 1;"/>
    		<img src="<?php echo $image['sizes']['tiny']; ?>" alt="<?php echo $image['alt']; ?>" style="position: absolute;"/>
    	
		</div>	
		<?php if(is_admin()){?>
    			<img src="<?php echo $image['sizes']['medium']; ?>" alt="<?php echo $image['alt']; ?>"/>
    		<?php } ?>
		<?php if($caption){?>
		<span class="t--caption"><?php echo $caption ?></span>
		<?php } else{} ?>
	</div>

</div>
!-->


<div class="acf--image-one">

    		<img src="<?php echo $image['sizes']['medium']; ?>" alt="<?php echo $image['alt']; ?>"/>


</div>