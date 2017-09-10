<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_API_DEMO
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
   <div id="page">

   		<header id="masthead" class="site-header">
            <div class="site-branding">
               <h1 class="site-title"><a href="/#/">Tim Beckett Writing Portfolio</a></h1>
               <p class="site-description">My Writing Portfolio</p>
            </div>
   		</header>

   	<nav id="mainNav" class="menu">
      	  <ul>
      	  </ul>
   	  </nav>

   		<div id="content">
