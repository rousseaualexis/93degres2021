// ===================================== INITIAL ===================================== //
var tools = (function() { 
    /**
     * Check if device is desktop
     */

    var isDesktop = function() {
        return ($(window).width() >= 992);
    }
    /**
     * Check if device is tablet
     */
    var isTablet = function() {
        return ($(window).width() < 992 && $(window).width() >= 768);
    }

    /**
     * Check if device is smartphone
     */
    var isSmartphone = function() {
        return ($(window).width() < 768);
    }

    /**
     * Check if device is handheld
     */
    var isTabletOrSmart = function() {
        return (isTablet() || isSmartphone());
    }

    var scrollPos = {
        y:$(window).scrollTop(),
        x:0
    }

  return {
        isDesktop: isDesktop,
        isTablet: isTablet,
        isSmartphone: isSmartphone,
    }


})();

var $window = $(window);
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};



const pageContainer = document.querySelector(".body--page");
// Locomotive Scroll
    gsap.registerPlugin(ScrollTrigger);


/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});


const rootconfig = {
  root: null,
  rootMargin: '0% 0px',
};

const observerElements = document.querySelectorAll('.scroll-reveal');


const Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {

      //let revealText = document.querySelectorAll("[data-splitting=lines]");
      //let results = Splitting({ target: revealText, by: "lines" });
      const animEl = entry.target.querySelectorAll('.animate-in');
      gsap.set(animEl, {y:250, alpha: 0});
      const transEl = entry.target.querySelectorAll('.translate-in');
       gsap.set(transEl, {y:'200%'});
      //const h2El = entry.target.querySelectorAll('.h2-in');
       //gsap.set(h2El, {y:'200%'});
      const scaleEl = entry.target.querySelectorAll('.scale-in');
      const maskEl = entry.target.querySelectorAll('.mask-in');
      
      if (entry.intersectionRatio > 0) {
        //console.log(entry.target, 'in')
        gsap.to(animEl, { duration: 1.25,  alpha: 1, y:0 , delay: 0, ease: Quart.easeOut});
        gsap.to(transEl, {duration: 1.25, y:'0%', stagger: 0.1, delay: 0.2, ease:Expo.easeOut});
        gsap.to(scaleEl, { duration: 1, rotation: '-360deg', autoAlpha: 1,  y: 0, stagger: .2 });
        gsap.to(maskEl, {duration: 2, y:'-110%', stagger: 0.2, delay: 0.1, ease:Quart.Out});
        //gsap.to(h2El, {duration: 1.25, y:'0%', stagger: 0.03, delay: 0.2, ease:Quint.easeOut});
        Observer.unobserve(entry.target);
      }
    });
  }, 
  rootconfig
);

observerElements.forEach(el => {
  Observer.observe(el);
});


var site = (function() { 
    var init = function() {

         onClick();

        
        window.onload = function () {
            window.scrollTo(0, 0);
            var mouseLoad = 1;  
        }
        var mouseprevious = sessionStorage.getItem("mouseprevious");
        mouse.style.transform = mouseprevious;
    }


/*
// PARALLAX IMAGES
  $(document).ready(function() {
  $(window).scroll(function() {
    parallaxScroll();
  });
  
  function parallaxScroll() {
    $(".img-parallax").each(function(){
      var scrollTop         = $(window).scrollTop(),
          containerHeight   = $(this).parent(".item__img-wrap").innerHeight(),
          windowHeight      = window.innerHeight,
          elementOffset     = $(this).parent(".item__img-wrap").offset().top,
          distance          = (elementOffset - scrollTop + containerHeight),
          superDistance     = (containerHeight + windowHeight),
          percent           = (distance / superDistance),
          actualPercent     = (percent * (0-25));
        console.log('windowHeight:' + windowHeight);
        //$(this).css("transform", `translateY(${(actualPercent + "%")})`);
      if(actualPercent >= (0-25) && actualPercent <= 0){

        $(this).css("transform", `translateY(${(actualPercent + "%")})`);
        //$(this).css("top",(actualPercent + "%"));
      }
    });
  }
});

*/

    // PRELOADER
  
    var loader = function() {
        // ANIMATION ONLY ONCE PER SESSION
        // Other Session


        if (sessionStorage.viewWebsite >= 1) {
            sessionStorage.viewWebsite = Number(sessionStorage.viewWebsite) + 1;
            var tl = new TimelineLite();
            tl.to($(".mask"), 1.75, {y:"-100%", ease:Expo.easeInOut}, 0);
            tl.to($(".mask3"), 1.75, {y:"-100%", ease:Expo.easeInOut}, 0);
            tl.to($(".mask2"), 1.5, {y:"-100%", ease:Expo.easeInOut}, '-=1.7');
                   
        }
        // First Session
        else {
            sessionStorage.viewWebsite = 1;
            var $header = $('header');
            var tl = new TimelineLite();
            const vh = (coef) => window.innerHeight * (coef/100)
            tl.to($header.find('#logo #logo__93degres'), 0.1, {fill:"#000000"}, 0);
            tl.to($header, 0, {zIndex:2000}, 0);
            tl.fromTo($header.find('#logo #logo__93degres'), 1.5, {y:'400%'},{y:'0%', force3D: false, ease:Expo.easeOut}, 0.2);
            tl.fromTo($header.find('#logo #logo__93degres'), 1.5, {scaleY: '2'}, {scaleY: '1.00001', ease:Quint.easeOut}, 0.2);
            tl.from($header, 1.5, {top:'-12.5%', ease:Quint.easeInOut}, '-=0.5');
            tl.fromTo($header.find('#logo'), 1.5, {y:'50vh', scale:'1.5'},{y: 0, scale:'1.0001', force3D: false, ease:Quint.easeInOut}, '-=1.5');     
            tl.to($(".mask"), 1.75, {y:"-100%", ease:Expo.easeInOut}, '-=1.5');
            tl.to($(".mask3"), 1.75, {y:"-100%", ease:Expo.easeInOut}, '-=1.75');
            tl.to($(".mask2"), 1.5, {y:"-100%", ease:Expo.easeInOut}, '-=1.7');
            tl.to($header, 0, {zIndex:101}, 2.5);
            tl.from($header.find('ul'), 1, {alpha: 0}, 2);
            tl.from($header.find('.burger'), 1, {alpha: 0}, 2);
            sessionStorage.viewWebsite = Number(sessionStorage.viewWebsite) + 1;
            
            


        }
        init();
    }



    var onClick = function() {
        $("body").on("click", "a", function(e){

            var url = $(this).attr('href');
            var isblank = this.target === '_blank';
            var isinternal = $(this).hasClass('js-internal-link');
            // check if the link has a hash
            if (isblank) {
                e.preventDefault();
                // if the link has only "#"
                window.open(url);
                return;
                }
            else if(isinternal){

            }
            else{  
                e.preventDefault();
                var $mask = $(".mask");
                var $mask2 = $(".mask2");
                var $mask3 = $(".mask3");

              
                var tl = new TimelineLite();
                tl.fromTo($mask, 1.1, {y: "100%"}, { y: 0, ease:Expo.easeOut}, 0.1);
                tl.fromTo($mask3, 1.1, {y: "100%"}, {y: 0, ease:Expo.easeOut}, '-=1.1');
                tl.fromTo($mask2, 1, {y: "100%"}, {y: 0, ease:Expo.easeInOut, onComplete:function(){window.location = url;  window.scrollTo(0, 0);}}, '-=1.1');
            }
        });


        $(".burger").on('click', function() {
            $('.menu-burger').toggleClass('active-menu');
            $('.menu-burger--overlay').toggleClass('active-menu');
            $('body').toggleClass('noscroll');
            var tl = new TimelineLite();
             //tl.to($('main'), 2, {x: "15%", ease:Expo.easeOut}, 0);
             //tl.to($('header'), 2, {x: "15%", ease:Expo.easeOut}, 0);
             tl.fromTo($('.menu-burger--left'), 1, {x: "-100%"}, {x: "0", force3D:true, ease:Quart.easeOut}, 0);
             tl.staggerFromTo($('.menu-burger--content li'), 1, {x:-200}, {x:0, ease:Expo.easeOut}, 0.05, 0.2);
             tl.fromTo($('.menu-burger--overlay'), 2, {alpha: 0},{alpha: 0.75, ease:Quart.easeOut}, 0);
               // tl.from(mask2, 1, {display: "none", y: "100%", ease:Expo.easeInOut, onComplete:function(){window.location = url;}}, 0.1);
        });
        $(".close").on('click', function() {
            
            
            var tl = new TimelineLite();
                tl.to($('.menu-burger--left'), 0.5, {x: "-100%", ease:Expo.easeIn}, 0);
                tl.to($('.menu-burger--content li'), 0.25, {x:-100, ease:Expo.easeIn}, 0.15);
                tl.to($('.menu-burger--overlay'), 0.5, {alpha: 0, ease:Expo.easeIn, onComplete:function(){
                    $('.menu-burger').removeClass('active-menu');
                    $('.menu-burger--overlay').removeClass('active-menu');
                    }

                }, 0);
                $('body').removeClass('noscroll');
               // tl.from(mask2, 1, {display: "none", y: "100%", ease:Expo.easeInOut, onComplete:function(){window.location = url;}}, 0.1);
        });

    }
    return {
        loader: loader
    }

})();


var homepage = (function() {
    
    var init = function() {
        //color();
        $("#header").addClass('header--white');
        $('#header').removeClass('header--black');
        $('#homepage--cover--title br').remove();
        $('#homepage--cover--title text-line').wrap('<div class="overflow--animate"></div>');
        $('#homepage--cover--title .categories').wrap('<div class="overflow--animate categories__container"></div>');
        $('#homepage--destinations ul a').wrap('<div class="overflow--animate"></div>');
        $('#homepage--destinations .h4').wrap('<div class="overflow--animate"></div>');
        $('#about .h2 .line').wrap('<div class="overflow--animate"></div>');
        $('#about .h2 .line').addClass('translate-in');
        $('#about .h4').wrap('<div class="overflow--animate"></div>');
        $('#other_articles .categories').wrap('<div class="overflow--animate"></div>');
        $('#other_articles .h3').wrap('<div class="overflow--animate"></div>');
        
            if (!isMobile() && ($window.width() >= 768)) {
                //$("#homepage--cover #homepage--cover--image .item__img").attr('data-v', '0.1');
                //$("#homepage--other-articles .item__img").attr('data-v', '0.1');
                $("#homepage--destinations ul li:nth-child(1n)").attr('data-h', '0.3');
                $("#homepage--destinations ul li:nth-child(2n)").attr('data-h', '-0.15');
                $("#homepage--destinations ul li:nth-child(3n)").attr('data-h', '0.15');
                //$("<div/>").appendTo("#other_articles .item__img-wrap").addClass("item__img-mask mask-in");
                firstPost();
                var parallaxHoritzontal = function(){
                    const parallaxEls = document.querySelectorAll("[data-h]");
                    window.addEventListener("scroll", scrollHandler);
                    function scrollHandler() {
                        for (const parallaxEl of parallaxEls) {
                            var scrollTop     = $(window).scrollTop(),
                            elementOffset = $('#homepage--destinations').offset().top,
                            elementHeight = $('#homepage--destinations').height(),
                            distance = (elementOffset - scrollTop);
                            if ((scrollTop > (elementOffset - elementHeight)) && (scrollTop < (elementOffset + elementHeight))) {
                                const transformX = distance * parallaxEl.dataset.h;
                                parallaxEl.style.transform = `translate3d(${transformX}px,0,0)`;
                            }
                        }
                    } 
                }
                
                
                               
                            
                parallaxHoritzontal();
           
                changeColor();
 
            }
    }


    var firstPost = function(){
        var $el = $('#homepage--cover'),
            $text = $("#homepage--cover .h1"),
            $line = $("#homepage--cover .h1 .line"),
            $rule1 = $("#homepage--cover #homepage--cover--title .h1 > *");
            var tl = gsap.timeline();

            if (sessionStorage.viewWebsite > 1) {
                tl.from($el.find('.item__img'),{duration: 3, y:'50%', scaleY: 1.75, ease:Expo.easeInOut}, -.75);
                tl.from($rule1.find('.line'), {duration: 1.5, y:'200%', stagger: 0.2, ease:Expo.easeOut}, 1.75);
                tl.from($rule1.find('.line'), {duration: 1.65, scaleY: 2, stagger: 0.2, ease:Quint.easeOut}, '-=1.95');
            } 
            else {
                tl.from($el.find('.item__img'), {duration: 3, y:'50%', scaleY: 1.75, ease:Expo.easeInOut}, 0.5);
                tl.from($rule1.find('.line'), {duration: 1.5, y:'200%', stagger: 0.2, ease:Expo.easeOut}, 2.25);
                tl.from($rule1.find('.line'), {duration: 1.65, scaleY: 2, stagger: 0.2, ease:Quint.easeOut}, '-=1.95');
            }
                tl.from($el.find('.categories'), {duration: 1.5, y:'150px', ease:Expo.easeOut}, '-=1.5');
    }

    var changeColor = function(){
        var scroll_start = 0;
            var headerHeight = $('#header').height();
            var contentChange = $('#svg__world');
            var contentOffset = contentChange.offset();
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                if (contentChange.length){
                    if((scroll_start > (contentOffset.top - headerHeight/2)) && (scroll_start < (contentOffset.top + contentChange.height() - headerHeight/2))) {
                        $("#header").addClass('header--black');
                        $('#header').removeClass('header--white');
                        $('#header #logo #logo__93degres').css("fill","#000000");
                    }
                    else {
                        $('#header').addClass('header--white');
                        $('#header').removeClass('header--black');
                        $('#header #logo #logo__93degres').css("fill","#ffffff");
                    }


                }
           });
    }

    return {
        init: init
    }
})();


var archive = (function() {
    
    var init = function() {
        top();

    }

    var top = function(){     
        
    }


    return {
            init: init
    }
})();
var footer = (function() {
    
    var init = function() {
        $('#footer-name').wrap('<div class="overflow--animate"></div>');
    }
    return {
            init: init
    }
})();

var single = (function() {

  const results = Splitting();
    
    var init = function() {


        $("#single--introduction__title .h1 .word").wrapInner('<div class="inside--animate"></div>');
        $("#single--introduction__title .h1 .word").addClass('overflow--animate');

        $("#single--introduction__title h1 .word").wrapInner('<div class="inside--animate"></div>');
        $("#single--introduction__title h1 .word").addClass('overflow--animate');

        $('#single--introduction__title .categories').wrapInner('<div class="overflow--animate"></div>');


        $('#single--introduction__text .h2 .word').wrapInner('<div class="inside--animate"></div>');
        $('#single--introduction__text .h2 .word').addClass('overflow--animate');
        $('#single--introduction__text .h2 .inside--animate').addClass('h2-in');


        $("#single--introduction__thumbnail .item__img").attr('data-v', '0.1');
        $('#single--introduction .h1 > *').wrap('<div class="overflow--animate" data-v=""></div>');

        introduction();
        //changeColor();










scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});



////////////////////////////////////
////////////////////////////////////

  let pinBoxes = document.querySelectorAll(".pin--wrap > *");
  let pinWrap = document.querySelector(".pin--wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin--wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#section--pin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });




  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();













    }
    var introduction = function(){
 
        var $el = $('#single--introduction__title'),
            $title = $("#single--introduction__title .h1 .word .inside--animate > *");
            var tl = gsap.timeline();
            if (sessionStorage.viewWebsite > 1) {
                
                tl.from($title, {duration: 1.75, yPercent: 200, scaleY: 2, force3D:true, ease:Expo.easeOut, stagger: 0.03, delay: 0.85});

            } 
            else {
                tl.from($title, {duration: 1.75, yPercent: 165, scaleY: 2, force3D:true, ease:Quint.easeOut, stagger: 0.03, delay: 2.1});
                
            }  

                 
             results[2].lines.forEach((line, index) => {
    line.forEach((word) => {
      tl.from($(word).find('.inside--animate'), { duration: 1.25, yPercent: 165, force3D:true, ease:Quint.easeOut, delay: index / 10}, '-=1.5');
    })
  });

             tl.from($el.find('.categories .word'), {duration: 1.25, yPercent: 100, force3D:true, ease:Quint.easeOut}, '-=1.5');




                //tl.from($el.find('.small-description span'), {duration: 1.75, yPercent: 200, force3D:true, ease:Expo.easeOut, stagger: 0.03}, '-=2');
    }
/*
    var changeColor = function(){


            var scroll_start = 0;
            var headerHeight = $('#header').height();
            var footerChange = $('#realated--content');
            var footerOffset = footerChange.offset();
            $(document).scroll(function() { 

                scroll_start = $(this).scrollTop();
                if (footerChange.length){
                    //console.log(footerOffset.top);
                    if(scroll_start > (footerOffset.top - headerHeight/2)) {
                        $("#header").addClass('header--white');
                        $('#header').removeClass('header--black');

                        $('#header #logo #logo__93degres').css("fill","#ffffff");
                    }
                    else {
                        $('#header').addClass('header--black');
                        $('#header').removeClass('header--white');

                        $('#header #logo #logo__93degres').css("fill","#000000");
                    }


                }
           });
           
    }
*/


    return {
            init: init
        }
})();

var list = (function() {
    
    var init = function() {
        $("#header").addClass('header--white');
        $('#header').removeClass('header--black');
        $('.page--list__cover .h1').wrap('<div class="overflow--animate"></div>');
        $('.page--list__cover p').wrap('<div class="overflow--animate"></div>');
        $('.page--list__cover .list__tags').wrap('<div class="overflow--animate"></div>');

        introduction();


    }
    var introduction = function(){

        var $el = $('.page--list__cover'),
            $text = $("#single--introduction .h1"),
            $line = $("#single--introduction .h1 .line"),
            $rule1 = $("#single--introduction .h1 .overflow--animate:nth-child(1) > *"),
            $rule2 = $("#single--introduction .h1 .overflow--animate:nth-child(2) > *"),
            $rule3 = $("#single--introduction .h1 .overflow--animate:nth-child(3) > *");

            var tl = new TimelineLite();
            if (sessionStorage.viewWebsite > 1) {
                
                tl.from($el.find('.h1'),{duration: 1.5, scaleY: 2, y:'200%', ease:Expo.easeOut}, 0.75);
            } 
            else {
                tl.from($el.find('.h1'),{duration: 1.5, scaleY: 2, y:'200%', ease:Expo.easeOut}, 2.1);
                
            }   
                tl.from($el.find('p'),{duration: 1.5,scaleY: 2, y:'200%', ease:Expo.easeOut}, '-=1.3')
                tl.from($el.find('.list__tags > *'),{duration: 1.5, scaleY: 2, stagger: 0.1, y:'200%', ease:Expo.easeOut}, '-=1.3')
                tl.from($('#content-grid').find('.grid__articles'),{duration: 1.5, alpha: 0,stagger: 0.05, ease:Expo.easeOut}, '-=1.6');
    }


    return {
            init: init
        }
})();


var about = (function() {
    
    var init = function() {
        $("#header").addClass('header--black');
        $('#header').removeClass('header--white');
        $('#about--introduction .h1 > *').wrap('<div class="overflow--animate" data-v=""></div>');

        introduction();
        changeColor();


    }
    var introduction = function(){

        var $el = $('#about--introduction'),
            $rule1 = $("#about--introduction .h1");

            var tl = new TimelineLite();
            if (sessionStorage.viewWebsite > 1) {
                tl.from($rule1.find('.line'), {duration: 1.5, y:'200%', stagger: 0.15, ease:Expo.easeOut}, 0.75);
                tl.from($rule1.find('.line'), {duration: 1.65, scaleY: 2, stagger: 0.15, ease:Quint.easeOut}, '-=1.95');
                //tl.from($rule1, 1.5, {scaleY: 2, y:'200%', stagger: 0.2, ease:Expo.easeOut}, 0.9);
            } 
            else {
                tl.from($rule1, 1.5, {scaleY: 2, y:'200%', stagger: 0.2, ease:Expo.easeOut}, 2.1);
                
            }   
    }
    var changeColor = function(){
        var scroll_start = 0;
            var headerHeight = $('#header').height();
            var contentChange = $('#about--introduction');
            var contentOffset = contentChange.offset();
            $(document).scroll(function() { 
                scroll_start = $(this).scrollTop();
                if (contentChange.length){
                    if((scroll_start > (contentOffset.top - headerHeight/2)) && (scroll_start < (contentOffset.top + contentChange.outerHeight() - headerHeight/2))) {
                        $("#header").addClass('header--black');
                        $('#header').removeClass('header--white');

                        $('#header #logo #logo__93degres').css("fill","#000000");
                    }
                    else {
                        $('#header').addClass('header--white');
                        $('#header').removeClass('header--black');

                        $('#header #logo #logo__93degres').css("fill","#ffffff");
                    }


                }
           });
    }


    return {
            init: init
        }
})();


var WCsingle = (function() {
    
    var init = function() {
        
        introduction();

    }
    var introduction = function(){

    
    }

    return {
            init: init
        }
})();


var pagequatre = (function() {
    
    var init = function() {
           


const pageContainer = document.querySelector(".body--page");
// Locomotive Scroll
    gsap.registerPlugin(ScrollTrigger);


/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
  direction: horizontal,
});


scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});



////////////////////////////////////
////////////////////////////////////

  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });




  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();





    }
    return {
            init: init
        }
})();

var markeeFooter = function(){
        //
        //   Variables
        //
        //////////////////////////////////////////////////////////////////////

        // Play with this value to change the speed
        let tickerSpeed = 1.25;
        let flickity = null;
        let isPaused = false;
        const slideshowEl = document.querySelector('.footer-carousel');


        //
        //   Functions
        //
        //////////////////////////////////////////////////////////////////////

        const update = () => {
          if (isPaused) return;
          if (flickity.slides) {
            flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
            flickity.selectedIndex = flickity.dragEndRestingSelect();
            flickity.updateSelectedSlide();
            flickity.settle(flickity.x);
          }
          window.requestAnimationFrame(update);
        };

        const pause = () => {
          isPaused = false;
        };

        const play = () => {
          if (isPaused) {
            isPaused = false;
            window.requestAnimationFrame(update);
          }
        };


        //
        //   Create Flickity
        //
        //////////////////////////////////////////////////////////////////////

        flickity = new Flickity(slideshowEl, {
          autoPlay: false,
          prevNextButtons: false,
          pageDots: false,
          draggable: true,
          wrapAround: true,
          selectedAttraction: 0.015,
          friction: 0.25
        });
        flickity.x = 0;


        //
        //   Add Event Listeners
        //
        //////////////////////////////////////////////////////////////////////

        slideshowEl.addEventListener('mouseenter', pause, false);
        slideshowEl.addEventListener('focusin', pause, false);
        slideshowEl.addEventListener('mouseleave', play, false);
        slideshowEl.addEventListener('focusout', play, false);

        flickity.on('dragStart', () => {
          isPaused = false;
        });


        //
        //   Start Ticker
        //
        //////////////////////////////////////////////////////////////////////

        update();

}





// Launch site
window.onload = function(){
    window.addEventListener("pageshow", function() {
        site.loader();
        markeeFooter();

    $(document).ready(function(){
    $(this).scrollTop(1);
    $(this).scrollTop(0);
});
        footer.init();
    }, false);

    
    /*
    function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (!isMobile()) { */
  
    

    if( $('body').hasClass('page--homepage') === true ) {
        homepage.init();
    };

    //CHange color on page with ACF color fields
    if( $('body').hasClass('page--single') === true || $('body').hasClass('page--wc--single') === true ){
        var $background = $('body').data('background');
        var $text = $('body').data('text');
        $(".mask").css("background-color",$text);
        $(".mask2").css("background-color",'#ffffff');
        $(".mask3").css("background-color",$text);
        $("#header .menu-links a").css("color",$text);
        $(".text--link a").css("color",$text);
        $("#footer .footer-carousel a").css("color",$text);
        $("#footer-name").css("color",$text);

        //$("#footer").css("background-color",$background);
        $(".footer-carousel").css("background-color",$background);


        $("#footer #list-destinations .flickity--list-element:after").css("background-color",$text);
        $("#header .burger span").css("background-color",$text);
        $("#header .menu-links a:after").css("background-color",$text);
        $(".c-scrollbar_thumb").css("background-color",$text);


        $(".mouse-cursor .base--circle").css("border-color", $text);

        $("#header #link--instagram svg").css("fill",$text);
        $("#header #logo #logo__93degres").css("fill",$text);



    };

    if( $('body').hasClass('page--single') === true ){
        single.init();
    };

    if( $('body').hasClass('page--wc--single') === true ){
        WCsingle.init();
    };


    if( $('body').hasClass('page--about') === true ){
        about.init();
    };

    if( $('body').hasClass('page--archive') === true ){
        archive.init();
    };
    if( $('body').hasClass('page--list') === true ){
        list.init();
    };
    if( $('body').hasClass('page--404')){
        pagequatre.init();
        alert('404');
    };
     
    
    /*


    if( $('body').hasClass('page--destinations') === true ){
        setTimeout(function(){
            allDestinations.init();
        }, 200);
    };

    if( $('body').hasClass('destinations') === true ){
        setTimeout(function(){
            destinations.init();
        }, 200);
    };
    
    if( $('body').hasClass('about') === true ){
        setTimeout(function(){
            about.init();
        }, 200);
    };
    */

}

