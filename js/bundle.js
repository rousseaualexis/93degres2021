"use strict";

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
  var followCursor = function followCursor(event) {
    var curX = event.clientX;
    var curY = event.clientY;
    var scroll_start = 0;
    mouse.style.transform = "translate3d(calc(" + curX + "px - 50vw),calc(" + curY + "px - 50vh), 0)";
    var mouseprevious = "translate3d(calc(" + curX + "px - 50vw),calc(" + curY + "px - 50vh), 0)";
    sessionStorage.setItem("mouseprevious", mouseprevious);
    setTimeout(function () {
      mouse.classList.add("inload");
    }, 1);
    sessionStorage.setItem("mouseLoad", 1);
  };

  var mouseLoad = sessionStorage.getItem("mouseLoad", 1);
  var mouse = document.getElementById('mouse');
  var mouses = document.querySelectorAll('[data-mouse]');

  for (var me = 0; me < mouses.length; me++) {
    mouses.item(me).onmouseover = function () {
      var wordHover = this.getElementsByTagName('strong');

      for (var i = 0; i < wordHover.length; i++) {
        wordHover[i].style.color = this.dataset.background;
      }

      mouse.classList.add("hovert");
      var circles = document.getElementsByClassName('circle');

      for (var i = 0; i < circles.length; i++) {
        circles[i].style.background = this.dataset.background;
        mouse.getElementsByTagName('span')[i].style.color = this.dataset.text;
      }

      if (this.dataset.mouse === 'read') {
        mouse.classList.add("mouse--read");
        mouse.classList.remove('mouse--link-internal');
        var width = document.getElementById('mousecontainer-read').clientWidth;
        var size = document.getElementById('mousecontainer-read').style.transform = 'translate3d(' + width / 2 + 'px,' + -width / 2 + 'px' + ',0)';
      } else if (this.dataset.mouse === 'link-internal') {
        mouse.classList.add("mouse--link-internal");
        mouse.classList.remove('mouse--read');
        var width = document.getElementById('mousecontainer-link-internal').clientWidth;
        var size = document.getElementById('mousecontainer-link-internal').style.transform = 'translate3d(' + width / 2 + 'px,' + -width / 2 + 'px' + ',0)';
      }
    };

    mouses.item(me).onmouseout = function () {
      mouse.classList.remove("hovert");
      var wordHover = this.getElementsByTagName('strong');

      for (var i = 0; i < wordHover.length; i++) {
        wordHover[i].removeAttribute('style');
      }

      var circles = document.getElementsByClassName('circle');

      for (var i = 0; i < circles.length; i++) {
        circles[i].removeAttribute('style');
        mouse.getElementsByTagName('span')[i].removeAttribute('style');
      }
    };
  }

  document.body.onmousemove = followCursor;
}

function interval() {
  while (true) {
    setInterval(showImage, 1);
  }
}

function showImage() {
  var x = clientX;
  var y = clientY;
  var image = document.getElementsByClassName("list__place--image");
  image.style.left = x;
  image.style.top = y;
}
"use strict";

var tools = function () {
  var isDesktop = function isDesktop() {
    return $(window).width() >= 992;
  };

  var isTablet = function isTablet() {
    return $(window).width() < 992 && $(window).width() >= 768;
  };

  var isSmartphone = function isSmartphone() {
    return $(window).width() < 768;
  };

  var isTabletOrSmart = function isTabletOrSmart() {
    return isTablet() || isSmartphone();
  };

  var scrollPos = {
    y: $(window).scrollTop(),
    x: 0
  };
  return {
    isDesktop: isDesktop,
    isTablet: isTablet,
    isSmartphone: isSmartphone
  };
}();

var $window = $(window);

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

;
gsap.config({
  force3D: true
});
var pageContainer = document.querySelector(".body--page");
gsap.registerPlugin(ScrollTrigger);
var scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
  lerp: 0.2
});
scroller.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop: function scrollTop(value) {
    return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect: function getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});
var pinBoxes = document.querySelectorAll(".pin--wrap > *");
var pinWrap = document.querySelector(".pin--wrap");

if (pinWrap) {
  var pinWrapWidth = pinWrap.offsetWidth;
  var horizontalScrollLength = pinWrapWidth - window.innerWidth;
  gsap.to(".pin--wrap", {
    scrollTrigger: {
      scroller: pageContainer,
      scrub: true,
      trigger: "#section--pin",
      pin: true,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });
}

var rootconfig = {
  root: null,
  rootMargin: '0% 0px'
};

var site = function () {
  var init = function init() {
    onClick();

    window.onload = function () {
      window.scrollTo(0, 0);
      var mouseLoad = 1;
    };

    var mouseprevious = sessionStorage.getItem("mouseprevious");
    mouse.style.transform = mouseprevious;
  };

  var loader = function loader() {
    $("#mini-cart-container").css("display", 'none');

    if (sessionStorage.viewWebsite >= 1) {
      sessionStorage.viewWebsite = Number(sessionStorage.viewWebsite) + 1;
      var tl = new TimelineLite();
      tl.to($(".mask"), 1.75, {
        y: "-100%",
        ease: Expo.easeInOut
      }, 0);
      tl.to($(".mask3"), 1.75, {
        y: "-100%",
        ease: Expo.easeInOut
      }, 0);
      tl.to($(".mask2"), 1.5, {
        y: "-100%",
        ease: Expo.easeInOut
      }, '-=1.7');
    } else {
      sessionStorage.viewWebsite = 1;
      var $header = $('header');
      var tl = new TimelineLite();

      var vh = function vh(coef) {
        return window.innerHeight * (coef / 100);
      };

      if ($('body').hasClass('page--single') === true || $('body').hasClass('page--wc--single') === true) {
        var $text = $('body').data('text');
        tl.to($header.find('#logo #logo__93degres'), 0.1, {
          fill: $text
        }, 0);
      } else {
        tl.to($header.find('#logo #logo__93degres'), 0.1, {
          fill: "#000000"
        }, 0);
      }

      tl.to($header, 0, {
        zIndex: 2000
      }, 0);
      tl.fromTo($header.find('#logo #logo__93degres'), 1.5, {
        y: '400%'
      }, {
        y: '0%',
        force3D: false,
        ease: Expo.easeOut
      }, 0.2);
      tl.fromTo($header.find('#logo #logo__93degres'), 1.5, {
        scaleY: '2'
      }, {
        scaleY: '1.00001',
        ease: Quint.easeOut
      }, 0.2);
      tl.fromTo($header.find('#logo'), 1.5, {
        y: '50vh',
        scale: '1.5'
      }, {
        y: 0,
        scale: '1.0001',
        force3D: false,
        ease: Quint.easeInOut
      }, '-=0.5');
      tl.to($(".mask"), 1.75, {
        y: "-100%",
        ease: Expo.easeInOut
      }, '-=1.5');
      tl.to($(".mask3"), 1.75, {
        y: "-100%",
        ease: Expo.easeInOut
      }, '-=1.75');
      tl.to($(".mask2"), 1.5, {
        y: "-100%",
        ease: Expo.easeInOut
      }, '-=1.7');

      if ($('body').hasClass('page--single') === true || $('body').hasClass('page--wc--single') === true) {
        var $text = $('body').data('text');
        tl.to($header.find('#logo #logo__93degres'), 1.5, {
          fill: $text
        }, '-=0.9');
      } else {
        tl.to($header.find('#logo #logo__93degres'), 1.5, {
          fill: ""
        }, '-=0.9');
      }

      tl.to($header, 0, {
        zIndex: 101
      }, 2.5);
      tl.from($header.find('ul'), 1, {
        alpha: 0
      }, 2);
      tl.from($header.find('.burger'), 1, {
        alpha: 0
      }, 2);
      sessionStorage.viewWebsite = Number(sessionStorage.viewWebsite) + 1;
    }

    init();
  };

  var onClick = function onClick() {
    $("body").on("click", "a", function (e) {
      var url = $(this).attr('href');
      var isblank = this.target === '_blank';
      var isinternal = $(this).hasClass('js-internal-link');

      if (isblank) {
        e.preventDefault();
        window.open(url);
        return;
      } else if (isinternal) {} else {
        e.preventDefault();
        var $mask = $(".mask");
        var $mask2 = $(".mask2");
        var $mask3 = $(".mask3");
        var tl = new TimelineLite();
        tl.fromTo($mask, 1.1, {
          y: "100%"
        }, {
          y: 0,
          ease: Expo.easeOut
        }, 0.1);
        tl.fromTo($mask3, 1.1, {
          y: "100%"
        }, {
          y: 0,
          ease: Expo.easeOut
        }, '-=1');
        tl.fromTo($mask2, 1, {
          y: "100%"
        }, {
          y: 0,
          ease: Expo.easeInOut,
          onComplete: function onComplete() {
            window.location = url;
            window.scrollTo(0, 0);
          }
        }, '-=1.1');
      }
    });
    $(".burger").on('click', function () {
      $(".mouse-cursor .base--circle").css("border-color", '#ffffff');
      $('.menu-burger').toggleClass('active-menu');
      $('.menu--overlay').toggleClass('active-menu');
      $('body').toggleClass('noscroll');
      var tlBurgerOpen = gsap.timeline();
      tlBurgerOpen.fromTo($('.menu-burger--left'), {
        x: '-100%'
      }, {
        duration: 1,
        delay: 0.1,
        x: 0,
        ease: Quart.easeOut
      });
      tlBurgerOpen.fromTo($('.menu--overlay'), {
        alpha: 0
      }, {
        duration: 1,
        alpha: 0.75
      }, "<");
      var property = $('#test').css('display');
    });
    $(".close").on('click', function () {
      if ($('body').data('text')) {
        $(".mouse-cursor .base--circle").css("border-color", $('body').data('text'));
      } else {
        $(".mouse-cursor .base--circle").css("border-color", "");
      }

      var tlBurgerClose = gsap.timeline();
      tlBurgerClose.to($('.menu-burger--left'), {
        duration: 0.75,
        x: '-100%',
        ease: Quart.easeOut
      });
      tlBurgerClose.to($('.menu--overlay'), {
        duration: 0.75,
        alpha: 0,
        onComplete: function onComplete() {
          $('.menu-burger').removeClass('active-menu');
          $('.menu--overlay').removeClass('active-menu');
        }
      }, "<");
      $('body').removeClass('noscroll');
    });
  };

  return {
    loader: loader
  };
}();

var homepage = function () {
  var init = function init() {
    $("#homepage--cover--title .h1 .word").wrapInner('<div class="inside--animate"></div>');
    $("#homepage--cover--title .h1 .word").addClass('overflow--animate');
    $("#header").addClass('header--white');
    $('#header').removeClass('header--black');
    $('#homepage--cover--title br').remove();

    if (!isMobile() && $window.width() >= 768) {
      $("#homepage--destinations ul li:nth-child(1n)").attr('data-h', '0.3');
      $("#homepage--destinations ul li:nth-child(2n)").attr('data-h', '-0.15');
      $("#homepage--destinations ul li:nth-child(3n)").attr('data-h', '0.15');
      firstPost();
      Trigger();
    }
  };

  var firstPost = function firstPost() {
    var $el = $('#homepage--cover'),
        $text = $("#homepage--cover .h1"),
        $line = $("#homepage--cover .h1 .word"),
        $rule1 = $("#homepage--cover #homepage--cover--title .h1 > *");
    var tl = gsap.timeline();

    if (sessionStorage.viewWebsite > 1) {
      tl.from($el.find('.item__img'), {
        duration: 3,
        y: '50%',
        scaleY: 1.75,
        ease: Expo.easeInOut
      }, -.75);
      tl.from($rule1.find('.inside--animate'), {
        duration: 1.5,
        y: '200%',
        stagger: 0.2,
        ease: Expo.easeOut
      }, 1.75);
      tl.from($rule1.find('.inside--animate'), {
        duration: 1.65,
        scaleY: 2,
        stagger: 0.2,
        ease: Quint.easeOut
      }, '-=1.95');
    } else {
      tl.from($el.find('.item__img'), {
        duration: 3,
        y: '50%',
        scaleY: 1.75,
        ease: Expo.easeInOut
      }, 0.5);
      tl.from($rule1.find('.inside--animate'), {
        duration: 1.5,
        y: '200%',
        stagger: 0.2,
        ease: Expo.easeOut
      }, 2.25);
      tl.from($rule1.find('.inside--animate'), {
        duration: 1.65,
        scaleY: 2,
        stagger: 0.2,
        ease: Quint.easeOut
      }, '-=1.95');
    }

    tl.from($el.find('.categories'), {
      duration: 1.5,
      y: '150px',
      ease: Expo.easeOut
    }, '-=1.5');
  };

  var Trigger = function Trigger() {
    var childOne = document.querySelector(".homepage--destinations--names:nth-child(1)");
    var childTwo = document.querySelector(".homepage--destinations--names:nth-child(2)");
    var childThree = document.querySelector(".homepage--destinations--names:nth-child(3)");
    var tlDestinations = gsap.timeline({
      scrollTrigger: {
        trigger: "#homepage--destinations ul",
        scroller: pageContainer,
        scrub: true,
        pin: false,
        start: "top 100%"
      }
    });
    tlDestinations.fromTo(childOne, {
      x: '-10%'
    }, {
      x: '10%',
      ease: 'none'
    });
    tlDestinations.fromTo(childTwo, {
      x: '10%'
    }, {
      x: '-10%',
      ease: 'none'
    }, "<");
    tlDestinations.fromTo(childThree, {
      x: '-10%'
    }, {
      x: '10%',
      ease: 'none'
    }, "<");
  };

  return {
    init: init
  };
}();

var archive = function () {
  var init = function init() {
    top();
  };

  var top = function top() {};

  return {
    init: init
  };
}();

var single = function () {
  var results = Splitting();

  var init = function init() {
    $("#single--introduction__title .h1 .word").wrapInner('<div class="inside--animate"></div>');
    $("#single--introduction__title .h1 .word").addClass('overflow--animate');
    $("#single--introduction__title h1 .word").wrapInner('<div class="inside--animate"></div>');
    $("#single--introduction__title h1 .word").addClass('overflow--animate');
    $('#single--introduction__title .categories').wrapInner('<div class="overflow--animate"></div>');
    $('#single--introduction__text .h2 .word').wrapInner('<div class="inside--animate"></div>');
    $('#single--introduction__text .h2 .word').addClass('overflow--animate');
    $('#single--introduction__text .h2 .inside--animate').addClass('h2-in');
    introduction();
  };

  var introduction = function introduction() {
    var $el = $('#single--introduction__title'),
        $title = $("#single--introduction__title .h1 .overflow--animate > *");
    var tl = gsap.timeline();

    if (sessionStorage.viewWebsite > 1) {
      tl.from($title, {
        duration: 1.75,
        yPercent: 200,
        scaleY: 2,
        ease: Expo.easeOut,
        stagger: 0.05,
        delay: 0.85
      });
    } else {
      tl.from($title, {
        duration: 1.75,
        yPercent: 165,
        scaleY: 2,
        ease: Quint.easeOut,
        stagger: 0.05,
        delay: 2.1
      });
    }

    results[2].lines.forEach(function (line, index) {
      line.forEach(function (word) {
        tl.from($(word).find('.inside--animate'), {
          duration: 1.25,
          yPercent: 165,
          force3D: true,
          ease: Quint.easeOut,
          delay: index / 10
        }, '-=1.5');
      });
    });
    tl.from($el.find('.categories .word'), {
      duration: 1.25,
      yPercent: 100,
      force3D: true,
      ease: Quint.easeOut
    }, '-=1.5');
  };

  return {
    init: init
  };
}();

var list = function () {
  var init = function init() {
    $("#header").addClass('header--white');
    $('#header').removeClass('header--black');
    $('.page--list__cover .h1').wrap('<div class="overflow--animate"></div>');
    $('.page--list__cover p').wrap('<div class="overflow--animate"></div>');
    $('.page--list__cover .list__tags').wrap('<div class="overflow--animate"></div>');
    introduction();
  };

  var introduction = function introduction() {
    var $el = $('.page--list__cover'),
        $text = $("#single--introduction .h1"),
        $line = $("#single--introduction .h1 .line"),
        $rule1 = $("#single--introduction .h1 .overflow--animate:nth-child(1) > *"),
        $rule2 = $("#single--introduction .h1 .overflow--animate:nth-child(2) > *"),
        $rule3 = $("#single--introduction .h1 .overflow--animate:nth-child(3) > *");
    var tl = new TimelineLite();

    if (sessionStorage.viewWebsite > 1) {
      tl.from($el.find('.h1'), {
        duration: 1.5,
        scaleY: 2,
        y: '200%',
        ease: Expo.easeOut
      }, 0.75);
    } else {
      tl.from($el.find('.h1'), {
        duration: 1.5,
        scaleY: 2,
        y: '200%',
        ease: Expo.easeOut
      }, 2.1);
    }

    tl.from($el.find('p'), {
      duration: 1.5,
      scaleY: 2,
      y: '200%',
      ease: Expo.easeOut
    }, '-=1.3');
    tl.from($el.find('.list__tags > *'), {
      duration: 1.5,
      scaleY: 2,
      stagger: 0.1,
      y: '200%',
      ease: Expo.easeOut
    }, '-=1.3');
    tl.from($('#content-grid').find('.grid__articles'), {
      duration: 1.5,
      alpha: 0,
      stagger: 0.05,
      ease: Expo.easeOut
    }, '-=1.6');
  };

  return {
    init: init
  };
}();

var about = function () {
  var init = function init() {
    $("#header").addClass('header--black');
    $('#header').removeClass('header--white');
    $('#about--introduction .h1 > *').wrap('<div class="overflow--animate" data-v=""></div>');
    introduction();
  };

  var introduction = function introduction() {
    var $el = $('#about--introduction'),
        $rule1 = $("#about--introduction .h1");
    var tl = new TimelineLite();

    if (sessionStorage.viewWebsite > 1) {
      tl.from($rule1.find('.line'), {
        duration: 1.5,
        y: '200%',
        stagger: 0.15,
        ease: Expo.easeOut
      }, 0.75);
      tl.from($rule1.find('.line'), {
        duration: 1.65,
        scaleY: 2,
        stagger: 0.15,
        ease: Quint.easeOut
      }, '-=1.95');
    } else {
      tl.from($rule1, 1.5, {
        scaleY: 2,
        y: '200%',
        stagger: 0.2,
        ease: Expo.easeOut
      }, 2.1);
    }
  };

  var changeColor = function changeColor() {
    var scroll_start = 0;
    var headerHeight = $('#header').height();
    var contentChange = $('#about--introduction');
    var contentOffset = contentChange.offset();
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();

      if (contentChange.length) {
        if (scroll_start > contentOffset.top - headerHeight / 2 && scroll_start < contentOffset.top + contentChange.outerHeight() - headerHeight / 2) {
          $("#header").addClass('header--black');
          $('#header').removeClass('header--white');
        } else {
          $('#header').addClass('header--white');
          $('#header').removeClass('header--black');
        }
      }
    });
  };

  return {
    init: init
  };
}();

var WCsingle = function () {
  var init = function init() {
    introduction();
  };

  var introduction = function introduction() {};

  return {
    init: init
  };
}();

var pagequatre = function () {
  var init = function init() {
    var pageContainer = document.querySelector(".body--page");
    gsap.registerPlugin(ScrollTrigger);
    var scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true,
      direction: horizontal
    });
    scroller.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(pageContainer, {
      scrollTop: function scrollTop(value) {
        return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: pageContainer.style.transform ? "transform" : "fixed"
    });
    var pinBoxes = document.querySelectorAll(".pin-wrap > *");
    var pinWrap = document.querySelector(".pin-wrap");
    var pinWrapWidth = pinWrap.offsetWidth;
    var horizontalScrollLength = pinWrapWidth - window.innerWidth;
    gsap.to(".pin-wrap", {
      scrollTrigger: {
        scroller: pageContainer,
        scrub: true,
        trigger: "#sectionPin",
        pin: true,
        start: "top top",
        end: pinWrapWidth
      },
      x: -horizontalScrollLength,
      force3D: true,
      ease: "none"
    });
    ScrollTrigger.addEventListener("refresh", function () {
      return scroller.update();
    });
    ScrollTrigger.refresh();
  };

  return {
    init: init
  };
}();

var markeeFooter = function markeeFooter() {
  var tickerSpeed = 1.25;
  var flickity = null;
  var isPaused = false;
  var slideshowEl = document.querySelector('.footer-carousel');

  var update = function update() {
    if (isPaused) return;

    if (flickity.slides) {
      flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
      flickity.selectedIndex = flickity.dragEndRestingSelect();
      flickity.updateSelectedSlide();
      flickity.settle(flickity.x);
    }

    window.requestAnimationFrame(update);
  };

  var pause = function pause() {
    isPaused = false;
  };

  var play = function play() {
    if (isPaused) {
      isPaused = false;
      window.requestAnimationFrame(update);
    }
  };

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
  slideshowEl.addEventListener('mouseenter', pause, false);
  slideshowEl.addEventListener('focusin', pause, false);
  slideshowEl.addEventListener('mouseleave', play, false);
  slideshowEl.addEventListener('focusout', play, false);
  flickity.on('dragStart', function () {
    isPaused = false;
  });
  update();
};

window.onload = function () {
  window.addEventListener("pageshow", function () {
    site.loader();
    markeeFooter();
    $(document).ready(function () {
      $(this).scrollTop(1);
      $(this).scrollTop(0);
    });
  }, false);

  if ($('body').hasClass('page--homepage') === true) {
    homepage.init();
  }

  ;

  if ($('body').hasClass('page--single') === true) {
    single.init();
  }

  ;

  if ($('body').hasClass('page--wc--single') === true) {
    WCsingle.init();
  }

  ;

  if ($('body').hasClass('page--single') === true || $('body').hasClass('page--wc--single') === true) {
    var $background = $('body').data('background');
    var $text = $('body').data('text');
    $(".mask").css("background-color", $text);
    $(".mask2").css("background-color", '#ffffff');
    $(".mask3").css("background-color", $text);
    $("#header .menu-links a").css("color", $text);
    $(".text--link a").css("color", $text);
    $("#header .menu-links a").css("background", "");
    $("#footer .footer-carousel a").css("color", $text);
    $("#footer .footer-carousel").css("background-color", $background);
    $("#footer #list-destinations .flickity--list-element:after").css("background-color", $text);
    $("#header .burger span").css("background-color", $text);
    $("#header .menu-links a:after").css("background-color", $text);
    $(".c-scrollbar_thumb").css("background-color", $text);
    $(".menu-links--right .cart-contents").css("background-color", $text);
    $(".menu-links--right .cart-contents-count").css("color", $background);
    $(".mouse-cursor .base--circle").css("border-color", $text);
    $("#header #link--instagram svg").css("fill", $text);
    $("#header #logo #logo__93degres").css("fill", $text);
  }

  ;

  if ($('body').hasClass('page--about') === true) {
    about.init();
  }

  ;

  if ($('body').hasClass('page--archive') === true) {
    archive.init();
  }

  ;

  if ($('body').hasClass('page--list') === true) {
    list.init();
  }

  ;

  if ($('body').hasClass('page--404')) {
    pagequatre.init();
    alert('404');
  }

  ;
  ScrollTrigger.addEventListener("refresh", function () {
    return scroller.update();
  });
  ScrollTrigger.refresh();
};
"use strict";

jQuery(function ($) {
  if (typeof wc_add_to_cart_params === 'undefined') {
    return false;
  }

  $(document).on('submit', 'form.cart', function (e) {
    var form = $(this),
        button = form.find('.single_add_to_cart_button');
    var formFields = form.find('input:not([name="product_id"]), select, button, textarea');
    var formData = [];
    formFields.each(function (i, field) {
      var fieldName = field.name,
          fieldValue = field.value;

      if (fieldName && fieldValue) {
        if (fieldName == 'add-to-cart') {
          fieldName = 'product_id';
          fieldValue = form.find('input[name=variation_id]').val() || fieldValue;
        }

        if ((field.type == 'checkbox' || field.type == 'radio') && field.checked == false) {
          return;
        }

        formData.push({
          name: fieldName,
          value: fieldValue
        });
      }
    });

    if (!formData.length) {
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
      success: function success(response) {
        if (!response) {
          return;
        }

        if (response.error & response.product_url) {
          window.location = response.product_url;
          return;
        }

        $(document.body).trigger('added_to_cart', [response.fragments, response.cart_hash, button]);
      },
      complete: function complete() {
        form.unblock();
      }
    });
    return false;
  });
});
$(".menu-cart").on('click', function () {
  $('.mini-cart-container').toggleClass('active-cart');
  $('.menu--overlay').toggleClass('active-cart');
  $('body').toggleClass('noscroll');
  console.log('lollo');
  var tlMiniCartOpen = gsap.timeline();
  tlMiniCartOpen.fromTo($('.mini-cart-container'), {
    x: "100%"
  }, {
    duration: 1,
    delay: 0.1,
    x: 0,
    ease: Quart.easeOut
  });
  tlMiniCartOpen.fromTo($('.menu--overlay'), {
    alpha: 0
  }, {
    duration: 1,
    alpha: 0.75
  }, "<");
});
$(".close").on('click', function () {
  if ($('body').data('text')) {
    $(".mouse-cursor .base--circle").css("border-color", $('body').data('text'));
  } else {
    $(".mouse-cursor .base--circle").css("border-color", "");
  }

  var tlMiniCartClose = gsap.timeline();
  tlMiniCartClose.to($('.mini-cart-container'), {
    duration: 0.75,
    x: "100%",
    ease: Quart.easeOut
  });
  tlMiniCartClose.to($('.menu--overlay'), {
    duration: 0.75,
    alpha: 0,
    onComplete: function onComplete() {
      $('.mini-cart-container').removeClass('active-cart');
      $('.menu--overlay').removeClass('active-cart');
    }
  }, "<");
  $('body').removeClass('noscroll');
});