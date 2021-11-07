<!DOCTYPE html>
<html lang="fr" xml:lang="fr" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="description" content="<?php echo get_bloginfo( 'description' ); ?>" />
    <?php wp_head(); ?>
    
<link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('template_url') ?>/src/images/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('template_url') ?>/src/images/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('template_url') ?>/src/images/favicon-16x16.png" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.1/dist/locomotive-scroll.css"/>
<meta name="theme-color" content="#ffffff" />

<?php
  $bgdColor = get_field('background-color');
  $txtColor = get_field('text-color');
  if (($bgdColor && $txtColor) !=  null) :
  	?>
<style>

  .single--description > *{
    color: <?php echo $txtColor ?>;
  }
  
  .single--description{
    background: <?php echo $bgdColor ?>;
  }

.single--description .cta--rounded-square:before{
    background: <?php echo $txtColor ?> !important;
  }
 


</style>
<?php endif ?>
</head>

<div class="mask"></div>
<div class="mask3"></div>
<div class="mask2"></div>
