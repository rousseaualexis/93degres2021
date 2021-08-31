<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */


$small_description = strip_tags(get_field('small_description'), '<br><em><strong><a>');
$paragraph = get_field('paragraph');

?>


<div class="acf--paragraph">
        <p class="t--text"><?php echo $paragraph; ?></p>
      </div>
