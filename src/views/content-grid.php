<div class="grid__articles col-xs-16 col-xs-offset-1 col-sm-6 col-sm-offset-1 scroll-reveal" data-mouse="read" data-background="<?php echo get_field('background-color'); ?>" data-text="<?php echo get_field('text-color'); ?>">
        <?php
            $thumbnail = get_field('thumbnail');
            $thumbnail_url = $thumbnail['sizes']['medium'];
            $id = get_the_id();
            $terms = get_the_terms( $id, 'category' );
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
        <a href="<?php the_permalink(); ?>">
            <div class="item__img-wrap">
            <div class="item__img img-parallax" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
            </div></div>
                        

            
            <div class="small--categories"><!--<img src="<?php echo $flag_url;?>" alt="<?php echo $flag['alt'];?>"/>!--><span><?php echo $term_name; ?> — <?php the_time('d.m.Y'); ?></span></div>
    
            <span class="h3"><?php 


        $title = get_the_title();
        $title = strip_tags( $title, '<strong>' ); //ADD - strip tags before sending to template
        echo $title; ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?></span>
        </a>
</div>