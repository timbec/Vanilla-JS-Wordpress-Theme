<?php
/**
 * Enqueue scripts and styles.
 */
function wt_scripts() {
	wp_enqueue_style( 'writing-theme-pacifico', 'https://fonts.googleapis.com/css?family=Pacifico', '', null );
	wp_enqueue_style( 'writing-theme-montserrat', 'https://fonts.googleapis.com/css?family=Montserrat', '', null );
	wp_enqueue_style( 'writing-theme-style', get_stylesheet_uri() );


  wp_enqueue_script('writing-theme-general',
         get_template_directory_uri() . '/dist/scripts.js',
         array('wp-api', 'jquery'),
         time(),
         true );


  wp_localize_script( 'writing-theme-general', 'sitedata', array(
     'rest_url' => esc_url_raw( rest_url('wp/v2/' ) ),
  		)
	);

}
add_action( 'wp_enqueue_scripts', 'wt_scripts' );
