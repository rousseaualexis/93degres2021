<?php
/*
Template Name: Index
*/
?>
<?php include'head.php';?>
<body class="page--index">
<?php get_header(); ?>
<main>
<div class="container">
        <div id="page--list__cover" class="row content">
            <div class="col-xs-20 col-xs-offset-2">
                <!--<span class="h5">sur-titre à ajouter en acf</span>!-->  
                <h1 class="h1"><?php echo get_the_title(); ?></h1>
                <p><?php  the_archive_description( '<div class="taxonomy-description">', '</div>' ); ?></p>
            </div>
        </div>
        <div id="list__letter" class="row content">
            <div class="col-xs-20 col-xs-offset-2">
                <div class="list__tags"> 
                    <?php
                        $taxonomy = array('category', 'cities', 'themes');
                        $args = array(
                            'taxonomy' => $taxonomy,
                            'hide_empy' => false,
                        );
                        $categories = get_categories($args);
                        $curr_letter = '';
                        foreach( $categories as $category ) {
                            $this_letter = mb_substr($category->slug,0,1);
                            if ($this_letter != $curr_letter) {
                                echo !empty( $curr_letter ) ? '</div>' : null;
                                echo '<div class="row">';
                                echo '<span class="h1 col-sm-4"><strong>' . $this_letter . '</strong></span>';
                                $curr_letter = $this_letter;
                            }
                            $category_link = sprintf( 
                                ' <a href="%1$s" alt="%2$s">%3$s</a>',
                                esc_url( get_category_link( $category->term_id ) ),
                                esc_attr( sprintf( __( 'View all posts in %s', 'textdomain' ), $category->name ) ),
                                esc_html( $category->name )
                            );
                            echo sprintf( esc_html__( '%s', 'textdomain' ), $category_link );
                        } 
                    ?>
                </div>
            </div>
        </div>
</div>

<?php get_footer(); ?>
<?php include'end.php' ?>