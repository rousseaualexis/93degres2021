<?php
/*
Template Name: Archives
*/
?>

<?php include'head.php'; ?>
<body class="page--list">
<?php get_header(); ?>

<main>
<div class="container">
    <div class="page--list__cover row content">
        <div class="col-xs-20 col-xs-offset-2">
            <h1 class="h1"><?php echo get_the_title(); ?></h1>
            <p><?php  the_archive_description( '<div class="taxonomy-description">', '</div>' ); ?></p>
            <?php 
            $this_category = get_category( $cat );
                    $child_categories= get_categories( array( 
                        'parent' => 0,
                        'taxonomy' => 'category',
                        'hide_empty' => 0));
                    if (count($child_categories) > 1){
            ?>
                <div class="list__tags">    
                    <?php
                        foreach ($child_categories as $category) {
                            
                            $category_link = sprintf('
                                <a href="%1$s" alt="%2$s">%3$s<span></span></a>',
                                esc_url( get_category_link( $category->term_id ) ),
                                esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ),
                                esc_html( $category->name ),
                               // esc_html( $category->category_count )
                            );
                            echo sprintf(esc_html__('%s', 'textdomain'), $category_link);
                        }
                    ?>
                </div>
             <?php } ?>
        </div>
    </div>

    <div class="content">
        <div id="content-grid" class="col-xs-24 col-xs-push-1">
            <?php 
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $title = get_the_archive_title();
                $args = array('post_type'=> 'post',
                              'paged' => $paged
                );
                $wp_query = new WP_Query($args); 
                if ( have_posts() ) :
                    $i= 0;     
                    while ( have_posts() ) : the_post();
                        if ( $i < 4 ) { get_template_part('src/views/content-grid-debut');}
                        else{echo '';get_template_part('src/views/content-grid');}
                        $i++;
                    endwhile;
                wp_reset_postdata();
                endif;
            ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>
<?php include'end.php' ?>