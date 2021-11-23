<div class="menu-burger">

    <div class="menu-burger--left">
        <div class="close"><?php echo file_get_contents(get_template_directory() . '/src/images/cross.svg'); ?></div>
        <div class="menu-burger--content">
            
            <ul>
                <?php 
                $args = array(
                'depth'       => 0,
                'sort_column' => 'menu_order',
                'theme_location' => 'burger-menu',
                'menu_class'  => 'menu',
                'include'     => '',
                'exclude'     => '',
                'echo'        => true,
                'show_home'   => false,
                'link_before' => '',
                'link_after'  => ''
                );
                wp_nav_menu( $args ); ?>
            </ul>
            
        </div>
    </div>
    <div class="menu-burger--right close"></div>
   
</div>
<div class="menu--overlay close"></div>

    <header id="header">
        <div id="logo">
            <a href="<?php echo get_bloginfo( 'wpurl' );?>">
                <?php echo file_get_contents(get_template_directory() . '/src/images/logo.svg'); ?>
            </a>
        </div>

        
       
        <ul class="menu-links menu-links--left">
            <li class="burger"><span></span><span></span><span></span></li>
            
                <?php 
                $args = array(
                'depth'       => 0,
                'sort_column' => 'menu_order',
                'theme_location' => 'top-left-links',
                'menu_class'  => 'menu t-text',
                'include'     => '',
                'exclude'     => '',
                'echo'        => true,
                'show_home'   => false,
                'link_before' => '',
                'link_after'  => '',
                );
                wp_nav_menu( $args ); ?>

             <li id="link--instagram">
                <a href="https://www.instagram.com/93.degres/" target="_blank" rel="noopener">Suivez-nous <?php echo file_get_contents(get_template_directory() . '/src/images/logo--instagram.svg'); ?>
                </a>
            </li>
        </ul>

        <ul class="menu-cart">
            <a class="cart-button js-internal-link" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo WC()->cart->get_cart_contents_count(); ?></a>        
        </ul>
    </header>
 
