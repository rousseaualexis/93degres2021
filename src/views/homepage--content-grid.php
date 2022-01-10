
    <a href="<?php the_permalink(); ?>" class="item push-article" data-mouse="read" data-background="<?php echo get_field('background-color'); ?>" data-text="<?php echo get_field('text-color'); ?>">
            <?php

                $thumbnail = get_field('thumbnail');
                $thumbnail_url = $thumbnail['sizes']['medium'];
                $id = get_the_id();
                $terms = get_the_terms( $id,  'category');
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
            
                <div class="item__img-wrap">
                    <div class="item__img" style="background-image: url('<?php echo $thumbnail_url;?>');" alt="<?php echo $thumbnail['alt']; ?>"></div>
                </div>                            

            
                <div class="categories"><span><?php echo $term_name . " — " . $yearBegin;
                        if(!empty($yearEnd)){ echo ' / ' . $yearEnd; }?></span></div>
                <h3 class="h3">
                    <?php $title = get_the_title();
            $title = strip_tags( $title, '<strong>' ); //ADD - strip tags before sending to template
            echo $title; ?><?php if(!empty(get_field('subtitle'))){echo '<br><span>' . get_field('subtitle') . '</span>';}?>
                </h3>
                
    </a>
