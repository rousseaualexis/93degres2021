<div class="mouse-cursor" id="mouse">
        <div class="base--circle"></div>
        <div id="mousecontainer-read" class="mousecontainer">
            <div class="background--circle"><span>Voir</span><div class="circle"></div></div>
        </div>
        <div id="mousecontainer-link-internal" class="mousecontainer">
            <div class="background--circle"><span><?php echo file_get_contents(get_template_directory() . '/src/images/arrow.svg'); ?></span><div class="circle"></div></div>
        </div>
</div>

</main>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
    <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
    <script src="<?php bloginfo('template_url') ?>/js/vendor.min.js"></script>
    <script src="<?php bloginfo('template_url') ?>/js/bundle.min.js"></script>