<div id="footer" class="content row" >
        <?php 
            $args = array(
            'depth'       => 0,
            'sort_column' => 'menu_order',
            'theme_location' => 'footer-menu',
            'menu_class'  => 'footer-list h2',
            'include'     => '',
            'exclude'     => '',
            'echo'        => true,
            'show_home'   => false,
            'link_before' => '',
            'link_after'  => ''
            );
            wp_nav_menu( $args ); ?>
    <div id="copyright">
        <p class="t--text"> ©93.Degrés – by Agathe & Alexis </p>
    </div>
    <div id="list-destinations-rotate">
        <div id="list-destinations" class="footer-carousel">
               
                <?php
                $term_args = array(
                    'taxonomy' => array('category','themes','cities'),
                    'hide_empty' => true,
                    'fields' => 'all',
                    'count' => true,
                );
                $term_query = new WP_Term_Query($term_args);
                foreach ( $term_query->terms as $term ) {
                    $term_link = sprintf( 
                        '<div class="flickity--list-element"><a class="h3" href="%1$s" data-mouse="link-internal"><strong><span>#</span> %2$s</strong></a></div>',
                        esc_url( get_category_link($term->term_id) ),
                        esc_html( $term->name )
                    );
                    echo sprintf( esc_html__( '%s', 'textdomain' ), $term_link );
                }   
            ?>
        </div>
    </div>
</div>

