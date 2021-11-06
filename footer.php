<div id="footer" class="content row" >

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

    <div class="col-xs-18 col-xs-offset-3" >
        <span id="footer-name" class="h1 scroll-reveal" data-line>Quatre-vingt treize Degrés</span>
    </div>
    <div class="col-xs-11 col-xs-offset-1">
        <?php 
            $args = array(
            'depth'       => 0,
            'sort_column' => 'menu_order',
            'theme_location' => 'footer-menu',
            'menu_class'  => 'menu',
            'include'     => '',
            'exclude'     => '',
            'echo'        => true,
            'show_home'   => false,
            'link_before' => '',
            'link_after'  => ''
            );
            wp_nav_menu( $args ); ?>
    </div>
    <div id="copyright" class="col-xs-11 t--text">
        <p> ©93.Degrés – by Alexis & Agathe</p>
    </div>
</div>

