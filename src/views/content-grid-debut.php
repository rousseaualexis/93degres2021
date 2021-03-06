<div class="grid__articles grid__articles--medium col-xs-16 col-xs-offset-1 col-sm-9 col-sm-offset-2 col-sm-pull-1" data-mouse="read" data-background="<?php echo get_field('background-color'); ?>" data-text="<?php echo get_field('text-color'); ?>" >
        <?php
            $thumbnail = get_field('thumbnail');
            $thumbnail_url = $thumbnail['sizes']['medium'];
            $id = get_the_id();
            $terms = get_the_terms( $id, 'category');
            $yearBegin = get_field('year_begin');
            $yearEnd = get_field('year_end');

            if (isset($terms)){
                foreach($terms as $term) {
                    if( $term->parent == 0 ){
                            $term_arr[$term->term_id] = $term->name;
                            $term_name = implode($term_arr);
                            $term_url = get_term_link($term);
                        }
                }}
        ?>  
        <a href="<?php the_permalink(); ?>">
            <div class="item__img-wrap image--16-9">
            <div class="item__img" style="background-image: url('<?php echo $thumbnail_url;?>');" title="<?php echo $thumbnail['alt']; ?>">
            </div></div>
                        


            <div class="categories"><span><?php echo $term_name . " — " . $yearBegin;
                        if(!empty($yearEnd)){ echo ' / ' . $yearEnd; }?></span></div>

            <span class="h3"><?php 


        $title = get_the_title();
        $title = strip_tags( $title, '<strong>' ); //ADD - strip tags before sending to template
        echo $title; ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?>
            
        </span>
        </a>
</div>
