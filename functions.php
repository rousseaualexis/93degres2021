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
  				$image_size = $image_url['sizes']['medium']; //replace "icoon" with the fieldname you give to the image
  				
  				if(!empty($image_url)){
  				echo '<li><a href="' . $item->url . '" class="h2" data-mouse="link-internal"> ' . $item->title . '<img class="flag" src="'.$image_size.'" /></a></li>';
  				}
  				else{
  					echo '<li><a href="' . $item->url . '" class="h2" data-mouse="link-internal"> ' . $item->title . '</a></li>';
  				}
                  
  				//echo '<img src="'.$image_size.'" />'; //replace large with size you wish

  			}

  		}

  		else{
  		   echo '<li class="title-link"><p>' . $item->title . '</p></li>';
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
function change_category_to_coutnry() {
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
add_action( 'init', 'change_category_to_coutnry' );





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




function my_acf_google_map_api( $api ){
  $api['key'] = 'AIzaSyDJKoy-47CzNbgcsYUm-rZ8Fa0fRJ94aF8';
  return $api;
}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');




//Create custom post type map and taxonomy
// REGISTER CUSTOM POST TYPES
// You can register more, just duplicate the register_post_type code inside of the function and change the values. You are set!
if ( ! function_exists( 'create_post_type' ) ) :

function create_post_type() {
  
  // You'll want to replace the values below with your own.
  register_post_type( 'cpt_map', // change the name
    array(
      'labels' => array(
        'name' => __( 'Places' ), // change the name
        'singular_name' => __( 'Place' ), // change the name
      ),
      'public' => true,
      'supports' => array ( 'title', 'custom-fields', 'thumbnail' ), // do you need all of these options?
      //'taxonomies' => array( 'category'), // do you need categories and tags?
      'hierarchical' => true,
      'rewrite' => array ( 'slug' => __( 'carte' ) ) // change the name
    )
  );

}
add_action( 'init', 'create_post_type' );

endif; // ####

function create_map_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
  $labels = array(
    'name' => _x( 'Categories Places', 'taxonomy general name' ),
    'singular_name' => _x( 'Category Place', 'taxonomy singular name' ),
    'search_items' =>  __( 'Search Categories Places' ),
    'all_items' => __( 'All Categories Places' ),
    'parent_item' => __( 'Parent Category Place' ),
    'parent_item_colon' => __( 'Parent Category Place:' ),
    'edit_item' => __( 'Edit Category Place' ), 
    'update_item' => __( 'Update Category Place' ),
    'add_new_item' => __( 'Add New Category Place' ),
    'new_item_name' => __( 'New Category Place Name' ),
    'menu_name' => __( 'Categories Places' ),
  );    
 
// Now register the taxonomy
  register_taxonomy('maps',array('cpt_map'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_in_rest' => true,
    'show_admin_column' => true,
    'publicly_queryable' => true,
    'query_var' => true,
    'rewrite' => array( 'slug' => 'map' ),
  ));
}
//hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'create_map_taxonomy', 0 );






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
    // register Deux tiers un tiers block
    acf_register_block(array(
      'name'        => 'image-deux-tiers-',
      'title'       => __('Image Deux Tiers'),
      'description'   => __('A custom image block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'deux tiers'),
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
    // register Three Image block
    acf_register_block(array(
      'name'        => 'image-three',
      'title'       => __('Three Image'),
      'description'   => __('A custom Image block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'image', 'three', 'three image' ),
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
    // register Slider block
    acf_register_block(array(
      'name'        => 'slider',
      'title'       => __('Slider'),
      'description'   => __('A custom Slider block.'),
      'render_callback' => 'my_acf_block_render_callback',
      'category'      => 'formatting',
      'icon'        => 'format-image',
      'keywords'      => array( 'Slider', 'Gallery' ),
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


add_action('wp_head', 'myplugin_ajaxurl');

function myplugin_ajaxurl() {

   echo '<script type="text/javascript">
           var ajaxurl = "' . admin_url('admin-ajax.php') . '";
         </script>';
}