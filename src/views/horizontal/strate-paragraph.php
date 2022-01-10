<?php
/**
 * Block Name: Testimonial
 *
 * This is the template that displays the testimonial block.
 */


$small_description = strip_tags(get_field('small_description'), '<br><em><strong><a>');
$title = strip_tags(get_field('title'), '<br><em><strong><a>');
$relation = get_field('relation');
$paragraph = get_field('paragraph');

?>

<div class="acf--paragraph ">

<?php if($small_description){?>

		<p class="t--text"><?php echo $paragraph; ?></p>

	<div class="acf--paragraph__small-description ">
        <p class="t--caption"><?php echo $small_description; ?></p>
	</div>
<?php }
else if($title){?>
	<div class="acf--paragraph__title">
        <p class="h3"><?php echo $title; ?></p>
	</div>
	<div class="acf--paragraph__paragraph">
		<p class="t--text"><?php echo $paragraph; ?></p>
	</div>

<?php }
else if($relation){ ?>

<div class="acf--paragraph__paragraph">
		<p class="t--text"><?php echo $paragraph; ?></p>
	</div>

	<?php




// get selected people

	foreach( $relation as $r )
	{
			//var_dump($r);
			$id = get_the_id($r);
			$image = get_field('thumbnail', $r);
			$terms = get_the_terms( $id,  'category');
                $yearBegin = get_field('year_begin');
                $yearEnd = get_field('year_end');
                if (isset($terms)){
                    foreach($terms as $term) {
                        if( $term->parent == 0 ){
                            $term_arr[$term->term_id] = $term->name;
                            $term_name = implode($term_arr);
                            $flag = get_field('flag', $term);
                            $flag_url = $flag['sizes']['thumbnail'];
                            $term_url = get_term_link($term);
                        }
                    }}
?>

	<div class="acf--paragraph__realated">
		<span class="t--caption">À lire aussi</span>
		
        <a href="<?php the_permalink( $r->ID ); ?>">
	        <img class="thumbnail" src="<?php echo $image['sizes']['medium']; ?>"/>
	        <span class="t--caption"><?php echo $term_name . " — " . $yearBegin;
                        if(!empty($yearEnd)){ echo ' / ' . $yearEnd; }?></span>

			<p class="h4"><?php echo strip_tags(get_the_title( $r->ID ), '<em><strong>'); ?></p>
        </a>
	</div>

<?php }}

else{ ?>

	<div class="acf--paragraph__paragraph">
		<p class="t--text"><?php echo $paragraph; ?></p>
	</div>

<?php } ?>
	
</div>
