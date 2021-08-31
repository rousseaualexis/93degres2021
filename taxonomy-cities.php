<?php include'head.php'; ?>
<?php
    $global_term = 'cities';
?>
<body class="page--list">

<?php get_header(); ?>
<main> 
<div class="container">
    <div id="page--list__cover" class="row content">
        <div class="col-xs-20 col-xs-offset-2">
          <h1 class="h1"><?php echo the_archive_title(); ?></h1>
          <p><?php  the_archive_description( '<div class="taxonomy-description">', '</div>' ); ?></p>
        </div>
    </div>

    <div class="row content">
        <div id="content-grid" class="col-xs-24 col-xs-push-1">
            <?php 
                $terms = get_query_var($global_term);
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $args = array(
                    'post_type' => 'post',
                    'paged' => $paged,
                    'tax_query' => array(
                        array(
                            'taxonomy' => $global_term,
                            'field' => 'slug',
                            'terms' => $terms,
                        ),
                    ),
                 );
                $wp_query = new WP_Query($args);
                if($wp_query->have_posts()) {
                    while($wp_query->have_posts()) : $wp_query->the_post();
                        $i = 1;
                        if ( $i < 5 ) {
                            get_template_part('src/views/content-grid-debut');
                        }
                        else{
                            echo '</div><div>';get_template_part('src/views/content-grid');
                        }
                        $i++;
                    endwhile;
                 }
            ?>
        </div>
    </div>
<?php get_footer(); ?>
<?php include'end.php'; ?>  