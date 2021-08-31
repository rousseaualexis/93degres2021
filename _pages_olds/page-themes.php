<?php
/*
Template Name: Themes
*/
?>
<?php include'head.php'; ?>
<body class="page--list">
<?php get_header(); ?>
<main> 
<div class="container">
    <div id="page--list__cover" class="row content">
        <div class="col-xs-20 col-xs-offset-2">
            <h1 class="h1"><?php echo get_the_title(); ?></h1>
            <p><?php  the_archive_description( '<div class="taxonomy-description">', '</div>' ); ?></p>


            <div class="list__tags">
            <?php
                        $taxonomy = 'themes';
                        $args = array(
                            'taxonomy' => $taxonomy,
                        );
                        $categories = get_categories($args);
                        foreach( $categories as $category ) {
                            $category_link = sprintf( 
                                '<a href="%1$s" alt="%2$s">%3$s<span>(%4$s)</span></a>',
                                esc_url( get_category_link( $category->term_id ) ),
                                esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ),
                                esc_html( $category->name ),
                                esc_html( $category->category_count )
                            );
                            echo sprintf( esc_html__( '%s', 'textdomain' ), $category_link );
                        } 
                    ?>   
            </div>
        </div>
    </div>

<div class="grid scroll-reveal col-xs-24 col-md-20 col-md-push-2">
    <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
        $args = array('post_type' => array('post'), 'tax_query' => array(
        array (
            'taxonomy' => 'cities',
        )
    ), 'posts_per_page' => 9, 'paged' => $paged );
        $wp_query = new WP_Query($args);
        while ( have_posts() ) : the_post();
            get_template_part('src/views/content-grid');
        endwhile;
        get_template_part('src/views/content-pagination');
        ?>    
</div>

<?php get_footer(); ?>
<?php include'end.php' ?>