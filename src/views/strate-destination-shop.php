<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$title = strip_tags(get_field('title'), '<br><em><strong>');
$background = '#FDDAB6';
$text = '#F8461F';
?>

<div class="strate strate-destination-shop">
	<div class="fifty-left-col" style="background: <?php echo $background ?>">
		<div class="content">
			<h2 class="h1">Los Angeles</h2>
			<h3 class="h3">We are 93 degres, a duo of French art director, liking making photography and sharing it, la création et l'intégration de solutions professionnelles.</h3>
			<a href="" class="small-link">Discover</a>
		</div>
	</div>
	<div class="fifty-right-col" >
		<div class="product-push"></div>
		<div class="background" style="background: <?php echo $background ?>">
	</div>
</div>
<!--
<div class="acf--title content row scroll-reveal">
	<div class="col-xs-20 col-xs-offset-2 col-sm-13 col-sm-offset-9">
		<h2 class="h3"><?php echo $title; ?></h2>
	</div>
</div>!-->