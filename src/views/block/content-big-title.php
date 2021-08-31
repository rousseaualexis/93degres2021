<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */

// get image field (array)
$title = strip_tags(get_field('title'), '<br><em><strong>');
?>
<div class="acf--big-title">
	    <span class="h2"><?php echo $title ?></span>
</div>