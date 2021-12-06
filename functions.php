<?php


// Add scripts and stylesheets
function startwordpress_scripts() {
    wp_enqueue_style( 'blog', get_template_directory_uri() . '/style.css' );
 }

add_action( 'wp_enqueue_scripts', 'startwordpress_scripts' );


// Support Global name of the Website
add_theme_support( 'title-tag' );


add_action( 'wp_dashboard_setup', 'remove_draft_widget', 999 );

function remove_draft_widget(){
    remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
}


// REMOVE WP EMOJI
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/*
 * Modify TinyMCE editor to remove H1.
 */
add_filter('tiny_mce_before_init', 'tiny_mce_remove_unused_formats' );
function tiny_mce_remove_unused_formats($init) {
    // Add block format elements you want to show in dropdown
    $init['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Address=address;Pre=pre';
    return $init;
}


/*
 * -----------------------------------------------------------------------------
 * Advanced Custom Fields Modifications of the height of tge WYSIWIG
 * -----------------------------------------------------------------------------
*/

/*
function PREFIX_apply_acf_modifications() {
?>
  <style>
    .acf-editor-wrap iframe {
      min-height: 0;
    }
  </style>
  <script>
    (function($) {
      // (filter called before the tinyMCE instance is created)
      acf.add_filter('wysiwyg_tinymce_settings', function(mceInit, id, $field) {
        // enable autoresizing of the WYSIWYG editor
        mceInit.wp_autoresize_on = true;
        return mceInit;
      });
      // (action called when a WYSIWYG tinymce element has been initialized)
      acf.add_action('wysiwyg_tinymce_init', function(ed, id, mceInit, $field) {
        // reduce tinymce's min-height settings
        ed.settings.autoresize_min_height = 0;
        // reduce iframe's 'height' style to match tinymce settings
        $('.acf-editor-wrap iframe').css('height', '0');
      });
    })(jQuery)
  </script>
<?php
}
*/
/*
 * -----------------------------------------------------------------------------
 * WordPress hooks
 * -----------------------------------------------------------------------------
*/
add_action('acf/input/admin_footer', 'PREFIX_apply_acf_modifications');





// ADD STYLE TO TINY MCE
add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );
function my_toolbars( $toolbars )
{
    // Uncomment to view format of $toolbars
/*
    echo '< pre >';
        print_r($toolbars);
    echo '< /pre >';
    die;
    */

    // Add a new toolbar called "Very Simple"
    // - this toolbar has only 1 row of buttons
    $toolbars['Very Simple' ] = array();
    $toolbars['Very Simple' ][1] = array('bold' , 'italic' , 'underline', 'link' );
    $toolbars['Chapter' ] = array();
    $toolbars['Chapter' ][1] = array('bold' , 'italic' , 'underline', 'bloc');
    $toolbars['Title' ] = array();
    $toolbars['Title' ][1] = array('bold');
    $toolbars['Code'][2] = array('code');

    // Edit the "Full" toolbar and remove 'code'
    // - delet from array code from http://stackoverflow.com/questions/7225070/php-array-delete-by-value-not-key
    if( ($key = array_search('code' , $toolbars['Full' ][2])) !== false )
    {
        unset( $toolbars['Full' ][2][$key] );
    }

    // remove the 'Basic' toolbar completely
    //unset( $toolbars['Basic' ] );

    // return $toolbars - IMPORTANT!
    return $toolbars;
};


/**
* Safe Pasting for TinyMCE (automatically clean up MS Word HTML)
*/
function tinymce_paste_options($init) {
    $init['paste_auto_cleanup_on_paste'] = true;
    $init['paste_convert_headers_to_strong'] = true;
        $init['paste_as_text'] = true;

    // omit the pastetext button so that the user can't change it manually, current toolbar2 content as of 4.1.1 is "formatselect,underline,alignjustify,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help"
    $init["toolbar2"] = "formatselect,underline,alignjustify,forecolor,removeformat,charmap,outdent,indent,undo,redo,wp_help";

    return $init;
}
if( is_admin() ) add_filter('tiny_mce_before_init', 'tinymce_paste_options');




// DELETE CATEGORY MARK such as category:
// Remove the Category: prefix from category archive titles
// Return an alternate title, without prefix, for every type used in the get_the_archive_title().
add_filter('get_the_archive_title', function ($title) {
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    } elseif ( is_tag() ) {
        $title = single_tag_title( '', false );
    } elseif ( is_author() ) {
        $title = '<span class="vcard">' . get_the_author() . '</span>';
    } elseif ( is_year() ) {
        $title = get_the_date( _x( 'Y', 'yearly archives date format' ) );
    } elseif ( is_month() ) {
        $title = get_the_date( _x( 'F Y', 'monthly archives date format' ) );
    } elseif ( is_day() ) {
        $title = get_the_date( _x( 'F j, Y', 'daily archives date format' ) );
    } elseif ( is_tax( 'post_format' ) ) {
        if ( is_tax( 'post_format', 'post-format-aside' ) ) {
            $title = _x( 'Asides', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) {
            $title = _x( 'Galleries', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-image' ) ) {
            $title = _x( 'Images', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-video' ) ) {
            $title = _x( 'Videos', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-quote' ) ) {
            $title = _x( 'Quotes', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-link' ) ) {
            $title = _x( 'Links', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-status' ) ) {
            $title = _x( 'Statuses', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-audio' ) ) {
            $title = _x( 'Audio', 'post format archive title' );
        } elseif ( is_tax( 'post_format', 'post-format-chat' ) ) {
            $title = _x( 'Chats', 'post format archive title' );
        }
    } elseif ( is_post_type_archive() ) {
        $title = post_type_archive_title( '', false );
    } elseif ( is_tax() ) {
        $title = single_term_title( '', false );
    } else {
        $title = __( 'Archives' );
    }
    return $title;
});





//MENUS
function register_my_menus() {
  register_nav_menus(
    array(
      'burger-menu' => __( 'Burger Menu' ),
      'top-left-links' => __( 'Top Left links' ),
      'top-right-links' => __( 'Top Right links' ),
      'footer-menu' => __( 'Footer Menu' )

    )
  );
}
add_action( 'init', 'register_my_menus' );

// Toggle ACF menu Burger item
add_filter('wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2);

function my_wp_nav_menu_objects( $items, $args ) {

  if( $args->theme_location == 'burger-menu' ){
    
  	foreach( $items as $item ) {

  		if( !empty($item->url) ){

  			$small_link = get_field('small_link', $item);
  			$title = get_field('title', $item);

  			if( $small_link == true ) {
  				echo '<li class="small-link"><a href="' . $item->url . '"> ' . $item->title . '</a></li>';
  			}

  			elseif( $title == true ) {
  				echo '<li class="title-link"><a href="' . $item->url . '"> ' . $item->title . '</a></li>';
  			}

  			else{
  				$taxonomy = $item->object;
  				$term_id = $item->object_id;
  				$image_url= get_field('flag', $taxonomy.'_'.$term_id);
  				
  				if(!empty($image_url)){
  				echo '<li><a href="' . $item->url . '" class="h2"> ' . $item->title . '<img class="flag" src="'.$image_url['sizes']['thumbnail'].'" /></a></li>';
  				}
  				else{

            
  					echo '<li><a href="' . $item->url . '" class="h2"> ' . $item->title . '</a></li>';
  				}
                  
  				//echo '<img src="'.$image_size.'" />'; //replace large with size you wish

  			}

  		}

  		else{
  		   echo '<li class="title-link"><p class="t--text">' . $item->title . '</p></li>';
  		}

  	}
  }
  elseif( ($args->theme_location == 'top-left-links') || ($args->theme_location == 'top-right-links') ){
       foreach( $items as $item ) {
        echo '<li><a href="' . $item->url . '"> ' . $item->title . '</a></li>';
        }
  }
  else{
    return $items;
  }
}
function stf_redirect_to_post(){
global $wp_query;
// If there is one post on archive page
if( is_archive() && $wp_query->post_count == 1 ){
// Setup post data
the_post();
// Get permalink
$post_url = get_permalink();
// Redirect to post page
wp_redirect( $post_url );
}
} add_action('template_redirect', 'stf_redirect_to_post');

/*
// remove tags from admin
 function wpdocs_unregister_tags_for_posts() {
     unregister_taxonomy_for_object_type( 'post_tag', 'post' );
     //unregister_taxonomy_for_object_type( 'category', 'post' );
    }
    add_action( 'init', 'wpdocs_unregister_tags_for_posts' );

function delete_all_tags(){
  $tags = get_tags( array('number' => 0,'hide_empty' => false));
  foreach ( $tags as $tag ) {
             wp_delete_term( $tag->term_id, 'post_tag' );
  } 
}
add_action( 'wp_head', 'delete_all_tags' );
*/
//remove p tag ACF

function my_acf_add_local_field_groups() {
    remove_filter('acf_the_content', 'wpautop' );
    add_filter( 'acf_the_content', 'nl2br' );
}
add_action('acf/init', 'my_acf_add_local_field_groups');


// Rename category to Coutnry
function change_category_to_country() {
    global $wp_taxonomies;
    $labels = &$wp_taxonomies['category']->labels;
    $labels->name = 'Countries/Regions';
    $labels->singular_name = 'Country/Region';
    $labels->add_new = 'Add Country/Region';
    $labels->add_new_item = 'Add Country/Region';
    $labels->edit_item = 'Edit Country/Region';
    $labels->new_item = 'Country/Region';
    $labels->view_item = 'View Country/Region';
    $labels->search_items = 'Search Countries/Regions';
    $labels->not_found = 'No Countries/Regions found';
    $labels->not_found_in_trash = 'No Countries/Regions found in Trash';
    $labels->all_items = 'All Countries/Regions';
    $labels->menu_name = 'Countries/Regions';
    $labels->name_admin_bar = 'Countries/Regions';
}
add_action( 'init', 'change_category_to_country' );





//CREATE CUSTOM TAXONOMIES



function create_city_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
  $labels = array(
    'name' => _x( 'Cities', 'taxonomy general name' ),
    'singular_name' => _x( 'City', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Cities' ),
    'all_items' => __( 'All Cities' ),
    'parent_item' => __( 'Parent City' ),
    'parent_item_colon' => __( 'Parent City:' ),
    'edit_item' => __( 'Edit City' ), 
    'update_item' => __( 'Update City' ),
    'add_new_item' => __( 'Add New City' ),
    'new_item_name' => __( 'New City Name' ),
    'menu_name' => __( 'Cities' ),
  );    
 
// Now register the taxonomy
  register_taxonomy('cities',array('post', 'cpt_map'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_in_rest' => true,
    'show_admin_column' => true,
    'publicly_queryable' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'city' ),
  ));
}
//hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_city_taxonomy', 0 );


//create a custom taxonomy name it topics for your posts

function create_theme_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
  $labels = array(
    'name' => _x( 'Themes', 'taxonomy general name' ),
    'singular_name' => _x( 'Theme', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Themes' ),
    'all_items' => __( 'All Themes' ),
    'parent_item' => __( 'Parent Theme' ),
    'parent_item_colon' => __( 'Parent Theme:' ),
    'edit_item' => __( 'Edit Theme' ), 
    'update_item' => __( 'Update Theme' ),
    'add_new_item' => __( 'Add New Theme' ),
    'new_item_name' => __( 'New Theme Name' ),
    'menu_name' => __( 'Themes' ),
  );    
 
// Now register the taxonomy
  register_taxonomy('themes',array('post'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_in_rest' => true,
    'show_admin_column' => true,
    'publicly_queryable' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'theme' ),
  ));
}
//hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_theme_taxonomy', 0 );



add_action('init', 'custom_taxonomy_flush_rewrite');
function custom_taxonomy_flush_rewrite() {
    global $wp_rewrite;
    $wp_rewrite->flush_rules();
}

/*--------------------------------------------------------------------------------
    ACF Block
--------------------------------------------------------------------------------*/

function wds_gutenberg_assets() {
  wp_enqueue_style( 'wds-gutenberg-admin', get_stylesheet_directory_uri() . '/gutenberg.css', array(), '1.0.0' );
}
add_action( 'enqueue_block_assets', 'wds_gutenberg_assets' );




function remove_default_blocks($allowed_blocks){
    // Get widget blocks and registered by plugins blocks
    $registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

    // Disable Widgets Blocks
    unset($registered_blocks['core/calendar']);
    unset($registered_blocks['core/legacy-widget']);
    unset($registered_blocks['core/rss']);
    unset($registered_blocks['core/search']);
    unset($registered_blocks['core/tag-cloud']);
    unset($registered_blocks['core/latest-comments']);
    unset($registered_blocks['core/archives']);
    unset($registered_blocks['core/categories']);
    unset($registered_blocks['core/latest-posts']);
    unset($registered_blocks['core/shortcode']);

    // Disable WooCommerce Blocks
    unset($registered_blocks['woocommerce/handpicked-products']);
    unset($registered_blocks['woocommerce/product-best-sellers']);
    unset($registered_blocks['woocommerce/product-category']);
    unset($registered_blocks['woocommerce/product-new']);
    unset($registered_blocks['woocommerce/product-on-sale']);
    unset($registered_blocks['woocommerce/product-top-rated']);
    unset($registered_blocks['woocommerce/products-by-attribute']);
    unset($registered_blocks['woocommerce/featured-product']);

    // Now $registered_blocks contains only blocks registered by plugins, but we need keys only
    $registered_blocks = array_keys($registered_blocks);

    // Merge allowed core blocks with plugins blocks
    return array_merge(/*array(
        'core/image',
        'core/paragraph',
        'core/heading',
        'core/list'
    ), */$registered_blocks);
}

add_filter('allowed_block_types', 'remove_default_blocks');



add_action('acf/init', 'my_acf_init');
function my_acf_init() {
  //Register Google Map Api
  acf_update_setting('google_api_key', 'AIzaSyDJKoy-47CzNbgcsYUm-rZ8Fa0fRJ94aF8');
  
  // check function exists
  if( function_exists('acf_register_block') ) {
    
    
    // register Quote block
    acf_register_block(array(
      'name'        => 'big-title',
      'title'       => __('Big Title'),
      'description'   => __('A custom pig title block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-quote',
      'keywords'      => array( 'intro', 'quote', 'text' ),
    ));
    // register Image Full block
    acf_register_block(array(
      'name'        => 'image-full',
      'title'       => __('Image Full'),
      'description'   => __('A custom Image full block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'full', 'picture' ),
    ));
    // register Image Full Split block
    acf_register_block(array(
      'name'        => 'image-full-split',
      'title'       => __('Image Full Split'),
      'description'   => __('A custom Image full Split block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'full', 'picture', 'split' ),
    ));
    // register One Image block
    acf_register_block(array(
      'name'        => 'image-one',
      'title'       => __('One Image'),
      'description'   => __('A custom Image block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'one', 'one image' ),
    ));
    // register Two Image block
    acf_register_block(array(
      'name'        => 'image-two',
      'title'       => __('Two Image'),
      'description'   => __('A custom Image block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'two', 'two image' ),
    ));
    // register Paragraph block
    acf_register_block(array(
      'name'        => 'paragraph',
      'title'       => __('Paragraph'),
      'description'   => __('A custom paragraph block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'editor-alignleft',
      'keywords'      => array( 'paragraph', 'text' ),
    ));
    // register Title block
    acf_register_block(array(
      'name'        => 'title',
      'title'       => __('Title'),
      'description'   => __('A custom title block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'editor-bold',
      'keywords'      => array( 'paragraph', 'text' ),
    ));
    // register Separator block
    acf_register_block(array(
      'name'        => 'separator',
      'title'       => __('Separator'),
      'description'   => __('A custom Separator block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'separator'),
    ));
  }
}

 


add_filter('acf/settings/save_json', 'my_acf_json_save_point');
 
function my_acf_json_save_point( $path ) {
    
    // update path
    $path = get_stylesheet_directory() . '/acf-json';
    
    
    // return
    return $path;
    
}

add_filter('acf/settings/load_json', 'my_acf_json_load_point');

function my_acf_json_load_point( $paths ) {
    
    // remove original path (optional)
    unset($paths[0]);
    
    
    // append path
    $paths[] = get_stylesheet_directory() . '/acf-json';
    
    
    // return
    return $paths;
    
}

function my_acf_block_render_callback( $block ) {
  // convert name ("acf/testimonial") into path friendly slug ("testimonial")
  $slug = str_replace('acf/', '', $block['name']);
  
  // include a template part from within the "views/block" folder
  if( file_exists( get_theme_file_path("/src/views/block/content-{$slug}.php") ) ) {
    include( get_theme_file_path("/src/views/block/content-{$slug}.php") );
  }
}

//Don't use Scaled Images
add_filter( 'big_image_size_threshold', '__return_false' );


// ADD blury images lazy load
add_action( 'after_setup_theme', 'wp_blur_up_image_size' );
function wp_blur_up_image_size() {
    // Change 'tiny' to any unused name you like
    // 16px is the width/height of the new image however the image will keep its aspect ratio when cropping.
    // To disable keeping aspect ratio, change the fourth argument to true.
    add_image_size( 'tiny', 1, 1, false );
}






/* WOOCOMMERCE */
function mytheme_add_woocommerce_support() {
  add_theme_support( 'woocommerce' );
    /**
     * Hook: woocommerce_single_product_summary.
     *
     * @hooked woocommerce_template_single_title - 5
     * @hooked woocommerce_template_single_rating - 10
     * @hooked woocommerce_template_single_price - 10
     * @hooked woocommerce_template_single_excerpt - 50
     * @hooked woocommerce_template_single_add_to_cart - 30
     * @hooked woocommerce_template_single_meta - 40
     * @hooked woocommerce_template_single_sharing - 50
     * @hooked WC_Structured_Data::generate_product_data() - 60
     */
// --------------------- START - Rearrange Product Image, Product Summary, and 'Ask a Question' button -----------------------------------
// 2/7/2019

//remove_action('woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20);
//remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );


//add_action( 'woocommerce_before_single_product_summary', 'woocommerce_template_single_title', 10 );
//add_action('woocommerce_after_single_product_summary', 'woocommerce_show_product_images', 1);
add_action( 'woocommerce_single_product_summary', 'woocommerce_output_product_data_tabs', 60 );

//
}
add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );


// Remove all Woo Styles
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );



// * Filter with AJAX When Cart Contents Update
add_filter('add_to_cart_fragments', 'woocommerce_header_add_to_cart_fragment');

function woocommerce_header_add_to_cart_fragment( $fragments ) {
    global $woocommerce;

    ob_start();

    ?>
    <a class="cart-button js-internal-link" title="<?php _e( 'View your shopping cart' ); ?>"><?php echo WC()->cart->get_cart_contents_count(); ?></a>

    <?php

    $fragments['a.cart-button'] = ob_get_clean();

    return $fragments;

}


//* Append Cart Icon Particular Menu
 



function shuffle_variable_product_elements(){
    if ( is_product() ) {
        global $post;
        $product = wc_get_product( $post->ID );
        if ( $product->is_type( 'variable' ) ) {
            remove_action( 'woocommerce_single_variation', 'woocommerce_single_variation', 10 );
            add_action( 'woocommerce_before_variations_form', 'woocommerce_single_variation', 20 );

            remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
            add_action( 'woocommerce_before_variations_form', 'woocommerce_template_single_title', 10 );

            remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
            add_action( 'woocommerce_before_variations_form', 'woocommerce_template_single_excerpt', 30 );
        }
    }
}
add_action( 'woocommerce_before_single_product', 'shuffle_variable_product_elements' );


// Move variable description in global description
add_action( 'wp_footer', 'move_variation_description' );
function move_variation_description(){
    global $product;
    // Only on single product pages for variable products
    if ( ! ( is_product() && $product->is_type('variable') ) ) return;
    // jQuery code
    ?>
    <script type="text/javascript">
        jQuery(function($){
            a = '.woocommerce-variation-description', b = a+' p', c = 'input.variation_id',
            d = '#tab-description .product-post-content', de = $(d).html();

            // On load, adding a mandatory very small delay
            setTimeout(function(){
                // variation ID selected by default
                if( '' != $(c).val() && $(a).text() != '' )
                    $(d).html($(a).html());
            }, 300);

            // On live event (attribute select fields change)
            $('table.variations select').on( 'blur', function(){
                // variation ID is selected
                if( '' != $(c).val() && $(a).text() != '' ){
                    $(d).html($(a).html()); // We copy the variation description
                }
                // No variation ID selected
                else {
                    $(d).html($(a).html()); // We set back the variable product description
                }
                console.log($('input.variation_id').val()); // TEST: Selected variation ID … To be removed
            });
        });
    </script>
    <?php
}

//Hide choose an option from drop-down variable
add_filter( 'woocommerce_dropdown_variation_attribute_options_html', 'filter_dropdown_option_html', 12, 2 );
function filter_dropdown_option_html( $html, $args ) {
    $show_option_none_text = $args['show_option_none'] ? $args['show_option_none'] : __( 'Choose an option', 'woocommerce' );
    $show_option_none_html = '<option value="">' . esc_html( $show_option_none_text ) . '</option>';

    $html = str_replace($show_option_none_html, '', $html);

    return $html;
}



// Update mini-cart when add to cart ajax
add_filter( 'woocommerce_add_to_cart_fragments', function($fragments) {


    ob_start();

wc_get_template('woocommerce/cart/mini-cart.php');
$fragments['div.woocommerce-mini-cart'] = ob_get_clean();
     return $fragments;


} );

/*

//Change variations drop down to radio button
function variation_radio_buttons($html, $args) {
  $args = wp_parse_args(apply_filters('woocommerce_dropdown_variation_attribute_options_args', $args), array(
    'options'          => false,
    'attribute'        => false,
    'product'          => false,
    'selected'         => false,
    'name'             => '',
    'id'               => '',
    'class'            => '',
    'show_option_none' => __('Choose an option', 'woocommerce'),
  ));

  if(false === $args['selected'] && $args['attribute'] && $args['product'] instanceof WC_Product) {
    $selected_key     = 'attribute_'.sanitize_title($args['attribute']);
    $args['selected'] = isset($_REQUEST[$selected_key]) ? wc_clean(wp_unslash($_REQUEST[$selected_key])) : $args['product']->get_variation_default_attribute($args['attribute']);
  }

  $options               = $args['options'];
  $product               = $args['product'];
  $attribute             = $args['attribute'];
  $name                  = $args['name'] ? $args['name'] : 'attribute_'.sanitize_title($attribute);
  $id                    = $args['id'] ? $args['id'] : sanitize_title($attribute);
  $class                 = $args['class'];
  $show_option_none      = (bool)$args['show_option_none'];
  $show_option_none_text = $args['show_option_none'] ? $args['show_option_none'] : __('Choose an option', 'woocommerce');

  if(empty($options) && !empty($product) && !empty($attribute)) {
    $attributes = $product->get_variation_attributes();
    $options    = $attributes[$attribute];
  }

  $radios = '<div class="variation-radios">';

  if(!empty($options)) {
    if($product && taxonomy_exists($attribute)) {
      $terms = wc_get_product_terms($product->get_id(), $attribute, array(
        'fields' => 'all',
      ));

      foreach($terms as $term) {
        if(in_array($term->slug, $options, true)) {
          $id = $name.'-'.$term->slug;
          $radios .= '<input type="radio" id="'.esc_attr($id).'" name="'.esc_attr($name).'" value="'.esc_attr($term->slug).'" '.checked(sanitize_title($args['selected']), $term->slug, false).'><label for="'.esc_attr($id).'">'.esc_html(apply_filters('woocommerce_variation_option_name', $term->name)).'</label>';
        }
      }
    } else {
      foreach($options as $option) {
        $id = $name.'-'.$option;
        $checked    = sanitize_title($args['selected']) === $args['selected'] ? checked($args['selected'], sanitize_title($option), false) : checked($args['selected'], $option, false);
        $radios    .= '<input type="radio" id="'.esc_attr($id).'" name="'.esc_attr($name).'" value="'.esc_attr($option).'" id="'.sanitize_title($option).'" '.$checked.'><label for="'.esc_attr($id).'">'.esc_html(apply_filters('woocommerce_variation_option_name', $option)).'</label>';
      }
    }
  }

  $radios .= '</div>';
    
  return $html.$radios;
}
add_filter('woocommerce_dropdown_variation_attribute_options_html', 'variation_radio_buttons', 20, 2);

function variation_check($active, $variation) {
  if(!$variation->is_in_stock() && !$variation->backorders_allowed()) {
    return false;
  }
  return $active;
}
add_filter('woocommerce_variation_is_active', 'variation_check', 10, 2);

*/
