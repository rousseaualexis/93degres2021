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

//JS Change variation drop down to radio button
$(document).on('change', '.variation-radios input', function() {
  $('.variation-radios input:checked').each(function(index, element) {
    var $el = $(element);
    var thisName = $el.attr('name');
    var thisVal  = $el.attr('value');
    $('select[name="'+thisName+'"]').val(thisVal).trigger('change');
  });
});
$(document).on('woocommerce_update_variation_values', function() {
  $('.variation-radios input').each(function(index, element) {
    var $el = $(element);
    var thisName = $el.attr('name');
    var thisVal  = $el.attr('value');
    $el.removeAttr('disabled');
    if($('select[name="'+thisName+'"] option[value="'+thisVal+'"]').is(':disabled')) {
      $el.prop('disabled', true);
    }
  });
});



// CUSTOM MINI CART ON CLICK



        $(".menu-cart").on('click', function() {
            $('.mini-cart-container').toggleClass('active-cart');
            $('.menu--overlay').toggleClass('active-cart');
            $('body').toggleClass('noscroll');
            console.log('lollo')
            var tlMiniCartOpen = gsap.timeline();
             //tl.to($('main'), 2, {x: "15%", ease:Expo.easeOut}, 0);
             //tl.to($('header'), 2, {x: "15%", ease:Expo.easeOut}, 0);
             tlMiniCartOpen.fromTo($('.mini-cart-container'), {x: "100%"},{duration: 1, delay: 0.1, x: 0, ease:Quart.easeOut});
             tlMiniCartOpen.fromTo($('.menu--overlay'), {alpha: 0}, {duration: 1, alpha: 0.75}, "<");
               // tl.from(mask2, 1, {display: "none", y: "100%", ease:Expo.easeInOut, onComplete:function(){window.location = url;}}, 0.1);
        });
        $(".close").on('click', function() {
            //Check if body color attribute exist and apply to cursor border
            if($('body').data('text')){
                $(".mouse-cursor .base--circle").css("border-color", $('body').data('text'));
            }
            else{
                $(".mouse-cursor .base--circle").css("border-color", "");
            }
            
            var tlMiniCartClose = gsap.timeline()
                tlMiniCartClose.to($('.mini-cart-container'), {duration: 0.75, x: "100%", ease:Quart.easeOut});
                tlMiniCartClose.to($('.menu--overlay'), {duration: 0.75, alpha: 0, onComplete:function(){
                    $('.mini-cart-container').removeClass('active-cart');
                    $('.menu--overlay').removeClass('active-cart');
                    }

                }, "<");
                $('body').removeClass('noscroll');

               // tl.from(mask2, 1, {display: "none", y: "100%", ease:Expo.easeInOut, onComplete:function(){window.location = url;}}, 0.1);
        });