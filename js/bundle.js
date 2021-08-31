"use strict";

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
  var followCursor = function followCursor(event) {
    var curX = event.clientX;
    var curY = event.clientY;
    var scroll_start = 0;
    mouse.style.transform = "translate(calc(" + curX + "px - 50vw),calc(" + curY + "px - 50vh))";
    var mouseprevious = "translate(calc(" + curX + "px - 50vw),calc(" + curY + "px - 50vh))";
    sessionStorage.setItem("mouseprevious", mouseprevious);
    setTimeout(function () {
      mouse.classList.add("inload");
    }, 1);
    sessionStorage.setItem("mouseLoad", 1);

    if ($('body').hasClass('page--single') === true) {
      var footerChange = $('#realated--content');
      var footerOffset = footerChange.offset();
      $(document).scroll(function () {
        scroll_start = $(this).scrollTop();

        if (scroll_start > footerOffset.top - curY) {
          $("#mouse .base--circle").removeClass('base--circle--dark');
          $("#mouse .base--circle").addClass('base--circle--white');
        } else {
          $("#mouse .base--circle").addClass('base--circle--dark');
          $("#mouse .base--circle").removeClass('base--circle--white');
        }
      });

      if (event.pageY < footerOffset.top) {
        $("#mouse .base--circle").addClass('base--circle--dark');
        $("#mouse .base--circle").removeClass('base--circle--white');
      } else {
        $("#mouse .base--circle").removeClass('base--circle--dark');
        $("#mouse .base--circle").addClass('base--circle--white');
      }
    } else if ($('body').hasClass('page--homepage') === true) {
      var contentChange = $('#svg__world');
      var contentOffset = contentChange.offset();
      $(document).scroll(function () {
        scroll_start = $(this).scrollTop();

        if (scroll_start > contentOffset.top - curY && scroll_start < contentOffset.top + contentChange.outerHeight() - curY) {
          $("#mouse .base--circle").addClass('base--circle--dark');
          $("#mouse .base--circle").removeClass('base--circle--white');
        } else {
          $("#mouse .base--circle").removeClass('base--circle--dark');
          $("#mouse .base--circle").addClass('base--circle--white');
        }
      });

      if (event.pageY > contentOffset.top && event.pageY < contentOffset.top + contentChange.outerHeight()) {
        $("#mouse .base--circle").addClass('base--circle--dark');
        $("#mouse .base--circle").removeClass('base--circle--white');
      } else {
        $("#mouse .base--circle").removeClass('base--circle--dark');
        $("#mouse .base--circle").addClass('base--circle--white');
      }
    } else if ($('body').hasClass('page--about') === true) {
      var contentChange = $('#about--introduction');
      var contentOffset = contentChange.offset();
      $(document).scroll(function () {
        scroll_start = $(this).scrollTop();

        if (scroll_start > contentOffset.top - curY && scroll_start < contentOffset.top + contentChange.outerHeight() - curY) {
          $("#mouse .base--circle").addClass('base--circle--dark');
          $("#mouse .base--circle").removeClass('base--circle--white');
        } else {
          $("#mouse .base--circle").removeClass('base--circle--dark');
          $("#mouse .base--circle").addClass('base--circle--white');
        }
      });

      if (event.pageY > contentOffset.top && event.pageY < contentOffset.top + contentChange.outerHeight()) {
        $("#mouse .base--circle").addClass('base--circle--dark');
        $("#mouse .base--circle").removeClass('base--circle--white');
      } else {
        $("#mouse .base--circle").removeClass('base--circle--dark');
        $("#mouse .base--circle").addClass('base--circle--white');
      }
    }

    if ($(".menu-burger").hasClass('active-menu') === true) {
      if (curX < window.innerWidth / 2) {
        console.log('lol');
        $("#mouse .base--circle").addClass('base--circle--dark');
        $("#mouse .base--circle").removeClass('base--circle--white');
      } else {
        $("#mouse .base--circle").removeClass('base--circle--dark');
        $("#mouse .base--circle").addClass('base--circle--white');
      }
    } else {
      $("#mouse .base--circle").addClass('base--circle--white');
    }
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
        var size = document.getElementById('mousecontainer-read').style.transform = 'translate(' + width / 2 + 'px,' + -width / 2 + 'px)';
      } else if (this.dataset.mouse === 'link-internal') {
        mouse.classList.add("mouse--link-internal");
        mouse.classList.remove('mouse--read');
        var width = document.getElementById('mousecontainer-link-internal').clientWidth;
        var size = document.getElementById('mousecontainer-link-internal').style.transform = 'translate(' + width / 2 + 'px,' + -width / 2 + 'px)';
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var rootconfig = {
  root: null,
  rootMargin: '0% 0px'
};
var observerElements = document.querySelectorAll('.scroll-reveal');

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

      tl.to($header.find('#logo #logo__93degres'), 0.1, {
        fill: "#ffffff"
      }, 0);
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
      tl.from($header, 1.5, {
        top: '-12.5%',
        ease: Quint.easeInOut
      }, '-=0.5');
      tl.fromTo($header.find('#logo'), 1.5, {
        y: '50vh',
        scale: '1.5'
      }, {
        y: 0,
        scale: '1.0001',
        force3D: false,
        ease: Quint.easeInOut
      }, '-=1.5');
      tl.from($header.find('#logo #logo__93degres'), 1.5, {
        fill: "#ffffff",
        ease: Expo.easeInOut
      }, '-=2');
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

      if (isblank) {
        e.preventDefault();
        window.open(url);
        return;
      } else {
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
        }, '-=1.1');
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
      $('.menu-burger').toggleClass('active-menu');
      $('.menu-burger--overlay').toggleClass('active-menu');
      $('body').toggleClass('noscroll');
      var tl = new TimelineLite();
      tl.fromTo($('.menu-burger--left'), 1, {
        x: "-100%"
      }, {
        x: "0",
        force3D: true,
        ease: Quart.easeOut
      }, 0);
      tl.staggerFromTo($('.menu-burger--content li'), 1, {
        x: -200
      }, {
        x: 0,
        ease: Expo.easeOut
      }, 0.05, 0.2);
      tl.fromTo($('.menu-burger--overlay'), 2, {
        alpha: 0
      }, {
        alpha: 0.75,
        ease: Quart.easeOut
      }, 0);
    });
    $(".close").on('click', function () {
      var tl = new TimelineLite();
      tl.to($('.menu-burger--left'), 0.5, {
        x: "-100%",
        ease: Expo.easeIn
      }, 0);
      tl.to($('.menu-burger--content li'), 0.25, {
        x: -100,
        ease: Expo.easeIn
      }, 0.15);
      tl.to($('.menu-burger--overlay'), 0.5, {
        alpha: 0,
        ease: Expo.easeIn,
        onComplete: function onComplete() {
          $('.menu-burger').removeClass('active-menu');
          $('.menu-burger--overlay').removeClass('active-menu');
        }
      }, 0);
      $('body').removeClass('noscroll');
    });
  };

  return {
    loader: loader
  };
}();

var homepage = function () {
  var init = function init() {
    $("#header").addClass('header--white');
    $('#header').removeClass('header--black');
    $('#homepage--cover--title br').remove();
    $('#homepage--cover--title text-line').wrap('<div class="overflow--container"></div>');
    $('#homepage--cover--title .categories').wrap('<div class="overflow--container categories__container"></div>');
    $('#homepage--destinations ul a').wrap('<div class="overflow--container"></div>');
    $('#homepage--destinations .h4').wrap('<div class="overflow--container"></div>');
    $('#about .h2 .line').wrap('<div class="overflow--container"></div>');
    $('#about .h2 .line').addClass('translate-in');
    $('#about .h4').wrap('<div class="overflow--container"></div>');
    $('#other_articles .categories').wrap('<div class="overflow--container"></div>');
    $('#other_articles .h3').wrap('<div class="overflow--container"></div>');

    if (!isMobile() && $window.width() >= 768) {
      $("#homepage--destinations ul li:nth-child(1n)").attr('data-h', '0.3');
      $("#homepage--destinations ul li:nth-child(2n)").attr('data-h', '-0.15');
      $("#homepage--destinations ul li:nth-child(3n)").attr('data-h', '0.15');
      firstPost();

      var parallaxHoritzontal = function parallaxHoritzontal() {
        var parallaxEls = document.querySelectorAll("[data-h]");
        window.addEventListener("scroll", scrollHandler);

        function scrollHandler() {
          var _iterator = _createForOfIteratorHelper(parallaxEls),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var parallaxEl = _step.value;
              var scrollTop = $(window).scrollTop(),
                  elementOffset = $('#homepage--destinations').offset().top,
                  elementHeight = $('#homepage--destinations').height(),
                  distance = elementOffset - scrollTop;

              if (scrollTop > elementOffset - elementHeight && scrollTop < elementOffset + elementHeight) {
                var transformX = distance * parallaxEl.dataset.h;
                parallaxEl.style.transform = "translate3d(".concat(transformX, "px,0,0)");
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      };

      parallaxHoritzontal();
      changeColor();
    }
  };

  var firstPost = function firstPost() {
    var $el = $('#homepage--cover'),
        $text = $("#homepage--cover .h1"),
        $line = $("#homepage--cover .h1 .line"),
        $rule1 = $("#homepage--cover #homepage--cover--title .h1 > *");
    var tl = gsap.timeline();

    if (sessionStorage.viewWebsite > 1) {
      tl.from($el.find('.item__img'), {
        duration: 3,
        y: '50%',
        scaleY: 1.75,
        ease: Expo.easeInOut
      }, -.75);
      tl.from($rule1.find('.line'), {
        duration: 1.5,
        y: '200%',
        stagger: 0.2,
        ease: Expo.easeOut
      }, 1.75);
      tl.from($rule1.find('.line'), {
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
      tl.from($rule1.find('.line'), {
        duration: 1.5,
        y: '200%',
        stagger: 0.2,
        ease: Expo.easeOut
      }, 2.25);
      tl.from($rule1.find('.line'), {
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

  var changeColor = function changeColor() {
    var scroll_start = 0;
    var headerHeight = $('#header').height();
    var contentChange = $('#svg__world');
    var contentOffset = contentChange.offset();
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();

      if (contentChange.length) {
        if (scroll_start > contentOffset.top - headerHeight / 2 && scroll_start < contentOffset.top + contentChange.height() - headerHeight / 2) {
          $("#header").addClass('header--black');
          $('#header').removeClass('header--white');
          $('#header #logo #logo__93degres').css("fill", "#000000");
        } else {
          $('#header').addClass('header--white');
          $('#header').removeClass('header--black');
          $('#header #logo #logo__93degres').css("fill", "#ffffff");
        }
      }
    });
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

var footer = function () {
  var init = function init() {
    $('#footer-name').wrap('<div class="overflow--container"></div>');
  };

  return {
    init: init
  };
}();

var single = function () {
  var init = function init() {
    $("#single--introduction__text text-line").wrap('<div class="overflow--container"></div>');
    $("#single--introduction__text text-line").addClass('translate-in');
    $('#single--introduction .categories').wrap('<div class="overflow--container"></div>');
    $("#single--introduction__thumbnail .item__img").attr('data-v', '0.1');
    $('#single--introduction .h1 > *').wrap('<div class="overflow--container" data-v=""></div>');
    var pageContainer = document.querySelector(".body--page");
    gsap.registerPlugin(ScrollTrigger);
    var scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true
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
    ScrollTrigger.addEventListener("refresh", function () {
      return scroller.update();
    });
    ScrollTrigger.refresh();
  };

  var introduction = function introduction() {
    var $el = $('#single--introduction'),
        $text = $("#single--introduction .h1"),
        $line = $("#single--introduction .h1 .line"),
        $rule1 = $("#single--introduction .h1 .overflow--container:nth-child(1) > *"),
        $rule2 = $("#single--introduction .h1 .overflow--container:nth-child(2) > *"),
        $rule3 = $("#single--introduction .h1 .overflow--container:nth-child(3) > *");
    var tl = new TimelineLite();

    if (sessionStorage.viewWebsite > 1) {
      tl.from($rule1, 1.5, {
        scaleY: 2,
        y: '200%',
        ease: Expo.easeOut
      }, 0.75);
    } else {
      tl.from($rule1, 1.5, {
        scaleY: 2,
        y: '200%',
        ease: Expo.easeOut
      }, 2.1);
    }

    tl.from($rule2, 1.5, {
      scaleY: 2,
      y: '200%',
      ease: Expo.easeOut
    }, '-=1.3');
    tl.from($rule3, 1.5, {
      scaleY: 2,
      y: '200%',
      ease: Expo.easeOut
    }, '-=1.3');
    tl.from($el.find('#single--introduction__thumbnail .item__img'), 4, {
      scaleY: 1.75,
      y: '50%',
      ease: Expo.easeInOut
    }, '-=3.8');
    tl.from($el.find('.categories'), 1.5, {
      y: '200%',
      ease: Expo.easeOut
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
    $('.page--list__cover .h1').wrap('<div class="overflow--container"></div>');
    $('.page--list__cover p').wrap('<div class="overflow--container"></div>');
    $('.page--list__cover .list__tags').wrap('<div class="overflow--container"></div>');
    introduction();
  };

  var introduction = function introduction() {
    var $el = $('.page--list__cover'),
        $text = $("#single--introduction .h1"),
        $line = $("#single--introduction .h1 .line"),
        $rule1 = $("#single--introduction .h1 .overflow--container:nth-child(1) > *"),
        $rule2 = $("#single--introduction .h1 .overflow--container:nth-child(2) > *"),
        $rule3 = $("#single--introduction .h1 .overflow--container:nth-child(3) > *");
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
    $('#about--introduction .h1 > *').wrap('<div class="overflow--container" data-v=""></div>');
    introduction();
    changeColor();
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
          $('#header #logo #logo__93degres').css("fill", "#000000");
        } else {
          $('#header').addClass('header--white');
          $('#header').removeClass('header--black');
          $('#header #logo #logo__93degres').css("fill", "#ffffff");
        }
      }
    });
  };

  return {
    init: init
  };
}();

var map = function () {
  var init = function init() {
    $("#header").addClass('header--white');
    introduction();
  };

  var introduction = function introduction() {
    var $el = $('.acf-map');
    var tl = new TimelineLite();

    if (sessionStorage.viewWebsite > 1) {
      tl.fromTo($el, 1.5, {
        scale: 1.1
      }, {
        scale: 1.001,
        ease: Quart.easeOut
      }, 0.9);
    } else {
      tl.from($el, 1.5, {
        scale: 1.1
      }, {
        scale: 1.001,
        ease: Quart.easeOut
      }, 2.1);
    }
  };

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

var markeeFooter2 = function markeeFooter2() {
  var tickerSpeed = 1.25;
  var flickity = null;
  var isPaused = false;
  var slideshowEl = document.querySelector('.footer-carousel-2');

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

var markeeFooter3 = function markeeFooter3() {
  var tickerSpeed = 1.25;
  var flickity = null;
  var isPaused = false;
  var slideshowEl = document.querySelector('.footer-carousel-3');

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
    $(document).ready(function () {
      $(this).scrollTop(1);
      $(this).scrollTop(0);
    });
    footer.init();
  }, false);

  if (!$('body').hasClass('page--map')) {
    markeeFooter();
    markeeFooter2();
    markeeFooter3();
  }

  ;

  if ($('body').hasClass('page--homepage') === true) {
    homepage.init();
  }

  ;

  if ($('body').hasClass('page--single') === true) {
    single.init();
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
    console.log('hge');
  }

  ;

  if ($('body').hasClass('page--map')) {
    map.init();
  }

  ;
};
"use strict";

if ($('body').hasClass('page--map') === true) {
  (function ($) {
    function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
      });
      return vars;
    }

    var number = getUrlVars()["adress"];

    function new_map($el) {
      var styledMapType = new google.maps.StyledMapType([{
        "elementType": "geometry",
        "stylers": [{
          "color": "#212121"
        }]
      }, {
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }, {
          "visibility": "off"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{
          "visibility": "simplified"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }, {
        "featureType": "administrative.locality",
        "stylers": [{
          "visibility": "simplified"
        }]
      }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      }, {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [{
          "color": "#292929"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#181818"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [{
          "saturation": -100
        }, {
          "lightness": -55
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }, {
          "weight": 2
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [{
          "visibility": "on"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "lightness": 45
        }, {
          "visibility": "on"
        }]
      }, {
        "featureType": "transit.station.airport",
        "stylers": [{
          "saturation": -100
        }, {
          "lightness": -40
        }]
      }, {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit.station.rail",
        "stylers": [{
          "saturation": -100
        }, {
          "lightness": -40
        }]
      }, {
        "featureType": "transit.station.rail",
        "elementType": "geometry",
        "stylers": [{
          "lightness": -45
        }, {
          "visibility": "simplified"
        }]
      }, {
        "featureType": "transit.station.rail",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ababab"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }], {
        name: 'Styled Map'
      });
      var $markers = $el.find('.marker');
      var worldLimit = {
        north: 85,
        south: -85,
        west: -180,
        east: 180
      };
      var args = {
        minZoom: 3,
        maxZoom: 16,
        zoom: 10,
        center: new google.maps.LatLng(46.8, 1.9),
        gestureHandling: 'greedy',
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        restriction: {
          latLngBounds: worldLimit,
          strictBounds: false
        }
      };
      var map = new google.maps.Map($el[0], args);
      map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');
      map.markers = [];
      $markers.each(function () {
        add_marker($(this), map);
      });
      center_map(map);
      markerCluster(map.markers, map);
      return map;

      function add_marker($marker, map) {
        var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));
        var image = {
          url: $marker.attr('data-img'),
          scaledSize: new google.maps.Size(32, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32)
        };
        var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          icon: image
        });
        map.markers.push(marker);

        if ($marker.html()) {
          var animation = function animation() {
            var tl = new TimelineLite();
            tl.to($('#infosidebar'), 1, {
              x: "0",
              ease: Quart.easeOut
            }, 0);
            $('#infosidebar').scrollTop = 0;
            map.setZoom(16);
            map.setCenter(marker.getPosition());
          };

          $('#sidebar').append('<div class="sidebar__place" id="' + $marker.attr('id') + '"><div class="place--info">' + $marker.find('.place--info').html() + '</div></div>');

          if (number == $marker.attr('id') + '/') {
            map.setZoom(16);
            map.setCenter(marker.getPosition());
            var newurl = $marker.attr('data-url');
            window.history.replaceState('', 'New Page Title', newurl);
            $('#infosidebar').html('<div class="infosidebar--content" id="i' + number + '">' + $marker.html() + '</div>');
            animation();
          }

          $(document).on('click', '#' + $marker.attr('id'), function () {
            var newurl = $marker.attr('data-url');
            window.history.replaceState('', 'New Page Title', newurl);
            $('#infosidebar').html('<div class="infosidebar--content" id="i' + $marker.attr('id') + '">' + $marker.html() + '</div>');
            animation();
          });
          google.maps.event.addListener(marker, 'click', function () {
            if ($('#infosidebar > div').attr("id") != 'i' + $marker.attr('id')) {
              var newurl = $marker.attr('data-url');
              window.history.replaceState('', '', newurl);
              $('#infosidebar').html('<div class="infosidebar--content" id="i' + $marker.attr('id') + '">' + $marker.html() + '</div>');
              animation();
            }
          });
          google.maps.event.addListener(map, 'click', function (event) {
            var tl = new TimelineLite();
            tl.to($('#infosidebar'), 0.5, {
              x: "-101%",
              ease: Expo.easeIn,
              onComplete: function onComplete() {
                $('.infosidebar--content').removeAttr('id');
              }
            }, 0);
            $(document).on('click', '#' + $marker.attr('id'), function () {
              return false;
            });
          });
        }
      }
    }

    function markerCluster(markers, map) {
      var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'http://93degres.com/wp-content/themes/93degres2020/src/map/pin'
      });
    }

    function center_map(map) {
      var bounds = new google.maps.LatLngBounds();
      $.each(map.markers, function (i, marker) {
        var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
        bounds.extend(latlng);
      });

      if (map.markers.length == 1) {
        map.setCenter(bounds.getCenter());
        map.setZoom(16);
      } else if (number !== undefined) {} else {
        map.fitBounds(bounds);
      }
    }

    var map = null;
    $(document).ready(function () {
      $('.acf-map').each(function () {
        map = new_map($(this));
      });
    });
  })(jQuery);
}

;