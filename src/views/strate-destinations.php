<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$title = strip_tags(get_field('title'), '<br><em><strong>');
$background_color = get_field('background_color');
$text_color = get_field('text_color');
?>

<div class="strate strate-destination-shop">
	<div class="fifty-left-col" style="background: <?php echo $background_color ?>">
		<div class="content">
			<h2 class="h1" style="color= <?php echo $text_color ?>"><?php echo $title ?></h2>
			<h3 class="h3" style="color= <?php echo $text_color ?>">We are 93 degres, a duo of French art director, liking making photography and sharing it, la création et l'intégration de solutions professionnelles.</h3>
			<a href="" class="small-link" style="color= <?php echo $text_color ?>">Discover</a>
		</div>
	</div>
	<div class="fifty-right-col" >
		<div class="product-push"></div>
		<div class="background" style="background: <?php echo $background ?>">
	</div>
</div>



<div class="strate strate-destination">
    <span class="h4 col-xs-22 col-xs-offset-1">Nos destinations préférées</span>
                    


                    <ul class="col-xs-24 ">
                      <?php  $destinations = get_field('destinations', 2);

foreach ($destinations as $destination) {
  ?><li class="menu__link homepage--destinations--names">
                                <a href="<?php echo get_category_link( $destination->term_id ); ?> " class="h1" data-mouse="link-internal">
                                    
                                <?php echo $destination->name; ?>
                            
                                </a>
                                </li>
                                <?php } ?>

                    </ul>
                    <a class="cta--rounded-square cta--rounded-square-dark" href="<?php echo get_field('destinations_link', 2); ?>"><div class="cta--rounded-square__before"><?php echo file_get_contents(get_template_directory() . '/src/images/arrow.svg'); ?></div><span>En savoir plus</span></a>
                    <?php echo file_get_contents(get_template_directory() . '/src/images/world.svg'); ?>

            </div>

<!--
<div class="acf--title content row scroll-reveal">
	<div class="col-xs-20 col-xs-offset-2 col-sm-13 col-sm-offset-9">
		<h2 class="h3"><?php echo $title; ?></h2>
	</div>
</div>!-->