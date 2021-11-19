/*
jQuery(function($){

    // global wc_add_to_cart_params //
    if ( typeof wc_add_to_cart_params === 'undefined' ) {
        return false;
    }
  
    $(document).on('submit', 'form.cart', function(e){
        
        var form = $(this),
            button = form.find('.single_add_to_cart_button');
        
        var formFields = form.find('input:not([name="product_id"]), select, button, textarea');

        // create the form data array
        var formData = [];
        formFields.each(function(i, field){

            // store them so you don't override the actual field's data
            var fieldName = field.name,
                fieldValue = field.value;

            if(fieldName && fieldValue){

                // set the correct product/variation id for single or variable products
                if(fieldName == 'add-to-cart'){
                    fieldName = 'product_id';
                    fieldValue = form.find('input[name=variation_id]').val() || fieldValue;
                }

                // if the fiels is a checkbox/radio and is not checked, skip it
                if((field.type == 'checkbox' || field.type == 'radio') && field.checked == false){
                    return;
                }

                // add the data to the array
                formData.push({
                    name: fieldName,
                    value: fieldValue
                });                
            }

        });

        if(!formData.length){
            return;
        }
        
        e.preventDefault();
        
        form.block({ 
            message: null, 
            overlayCSS: {
                background: "#ffffff",
                opacity: 0.6 
            }
        });

        $(document.body).trigger('adding_to_cart', [button, formData]);
  
        $.ajax({
            type: 'POST',
            url: woocommerce_params.wc_ajax_url.toString().replace('%%endpoint%%', 'add_to_cart'),
            data: formData,
            success: function(response){
                if(!response){
                    return;
                }

                if(response.error & response.product_url){
                    window.location = response.product_url;
                    return;
                }
                
                $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, button]);
            },
            complete: function(){
                form.unblock();
            }
        });
  
      return false;
  
    });
});
*/


        $(".menu-cart").on('click', function() {

            $("#mini-cart-container").css("display", 'block');
            $('body').toggleClass('noscroll');

            var tlMiniCartOpen = gsap.timeline();
             //tl.to($('main'), 2, {x: "15%", ease:Expo.easeOut}, 0);
             //tl.to($('header'), 2, {x: "15%", ease:Expo.easeOut}, 0);
             tlMiniCartOpen.fromTo($('.menu-burger--left'),  {xPercent: -100}, {duration: 1, xPercent: 0, ease:Expo.easeOut});
             tlMiniCartOpen.fromTo($('.menu-burger--overlay'), {alpha: 0}, {duration: 1, alpha: 0.75}, "<");
               // tl.from(mask2, 1, {display: "none", y: "100%", ease:Expo.easeInOut, onComplete:function(){window.location = url;}}, 0.1);
            var property = $('#test').css('display');
        });
        $(".close").on('click', function() {
            //Check if body color attribute exist and apply to cursor border
            if($('body').data('text')){
                $(".mouse-cursor .base--circle").css("border-color", $('body').data('text'));
            }
            else{
                $(".mouse-cursor .base--circle").css("border-color", "");
            }
            
            var tlBurgerClose = gsap.timeline()
                tlBurgerClose.to($('.menu-burger--left'), {duration: 0.75, xPercent: -100, ease:Expo.easeOut});
                tlBurgerClose.to($('.menu-burger--overlay'), {duration: 0.75, alpha: 0, onComplete:function(){
                    $('.menu-burger').removeClass('active-menu');
                    $('.menu-burger--overlay').removeClass('active-menu');
                    }

                }, "<");
                $('body').removeClass('noscroll');

               // tl.from(mask2, 1, {display: "none", y: "100%", ease:Expo.easeInOut, onComplete:function(){window.location = url;}}, 0.1);
        });