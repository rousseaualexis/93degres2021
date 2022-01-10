<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)

?>

<div class="strate strate--destinations">
  
                   
                    <ul>
                      <?php  $destinations = get_field('destinations', 2);

foreach ($destinations as $destination) {
  ?> 			<li class="">
                                <a href="<?php echo get_category_link( $destination->term_id ); ?> " class="h1" data-mouse="link-internal">

                               
                                
                                    
                                <?php echo $destination->name; ?>
                                
                              
                            
                                </a>
                                </li>
 							<?php $destination_image = get_field('image', $destination) ?>
                                <div class="destination-image item__img-wrap image--16-9">
            				<div class="item__img" style="background-image: url('<?php echo $destination_image['sizes']['large'];?>');"></div>
        						</div>
                        
                                <?php } ?>

                    </ul>
            </div>

<!--
<div class="acf--title content row scroll-reveal">
	<div class="col-xs-20 col-xs-offset-2 col-sm-13 col-sm-offset-9">
		<h2 class="h3"><?php echo $title; ?></h2>
	</div>
</div>!-->