

<div class="mouse-cursor" id="mouse">
        <div class="base--circle"></div>
        <div id="mousecontainer-read" class="mousecontainer">
            <div class="background--circle"><span>Voir</span><div class="circle"></div></div>
        </div>
        <div id="mousecontainer-link-internal" class="mousecontainer">
            <div class="background--circle"><span><?php echo file_get_contents(get_template_directory() . '/src/images/arrow.svg'); ?></span><div class="circle"></div></div>
        </div>
</div> 





    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>
    <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
    <script src="<?php bloginfo('template_url') ?>/js/vendor.min.js"></script>
    <script src="<?php bloginfo('template_url') ?>/js/bundle.min.js"></script>


<script>!function(e,a,t,n,g,c,o){e.GoogleAnalyticsObject=g,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,c=a.createElement(t),o=a.getElementsByTagName(t)[0],c.async=1,c.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(c,o)}(window,document,"script",0,"ga"),ga("create","UA-102693713-1","auto"),ga("send","pageview");</script>
<?php wp_footer(); ?>
    

</body>
</html>