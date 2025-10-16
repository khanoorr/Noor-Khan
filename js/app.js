
// File name: app.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  01. Loader & Loading Animation
//  02. Bootstrap Scroll Spy Plugin Settings
//  03. Lenis Scroll Plugin
//  04. Parallax
//  05. Scroll Animations
//  06. Smooth Scrolling
//  07. Swiper Slider
//  08. Contact Form
//  09. Modernizr SVG Fallback
//  10. Chrome Smooth Scroll
//  11. Images Moving Ban
//  12. Detecting Mobile/Desktop
//  13. PhotoSwipe Gallery Images Replace
//  14. Color Switch
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function() {

  "use strict";

  gsap.registerPlugin(ScrollTrigger);

  // --------------------------------------------- //
  // Loader & Loading Animation Start
  // --------------------------------------------- //
  const content = document.querySelector('body');
  const imgLoad = imagesLoaded(content);

  imgLoad.on('done', instance => {

    document.getElementById("loaderContent").classList.add("fade-out");
    setTimeout(() => {
      document.getElementById("loader").classList.add("loaded");
    }, 300);

    gsap.set(".animate-headline", {y: 50, opacity: 0});
    ScrollTrigger.batch(".animate-headline", {
      interval: 0.1,
      batchMax: 4,
      duration: 6,
      onEnter: batch => gsap.to(batch, {
        opacity: 1, 
        y: 0,
        ease: 'sine',
        stagger: {each: 0.15, grid: [1, 4]}, 
        overwrite: true
      }),
      onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
      onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
      onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
    });

  });
  // --------------------------------------------- //
  // Loader & Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Bootstrap Scroll Spy Plugin Settings Start
  // --------------------------------------------- //
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#menu',
    smoothScroll: true,
    rootMargin: '0px 0px -40%',
  });
  // --------------------------------------------- //
  // Bootstrap Scroll Spy Plugin Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Lenis Scroll Plugin Start
  // --------------------------------------------- //
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  // --------------------------------------------- //
  // Lenis Scroll Plugin End
  // --------------------------------------------- //

  // ------------------------------------------------------------------------------ //
  // Parallax (apply parallax effect to any element with a data-speed attribute) Start
  // ------------------------------------------------------------------------------ //
  gsap.to("[data-speed]", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0
    }
  });
  // --------------------------------------------- //
  // Parallax End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Scroll Animations Start
  // --------------------------------------------- //
  // Animation In Up
  const animateInUp = document.querySelectorAll(".animate-in-up");
  animateInUp.forEach((element) => {
    gsap.fromTo(element, {
      opacity: 0,
      y: 50,
      ease: 'sine',
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: element,
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Animation Rotation
  const animateRotation = document.querySelectorAll(".animate-rotation");
  animateRotation.forEach((section) => {
    var value = $(section).data("value");
    gsap.fromTo(section, {
      ease: 'sine',
      rotate: 0,
    }, {
      rotate: value,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Animation Cards Stack
  // Grid 2x
  gsap.set(".animate-card-2", {y: 100, opacity: 0});
  ScrollTrigger.batch(".animate-card-2", {
    interval: 0.1,
    batchMax: 2,
    duration: 6,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 2]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
  });

  // Grid 3x
  gsap.set(".animate-card-3", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-3", {
    interval: 0.1,
    batchMax: 3,
    duration: 3,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 3]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });

  // Grid 5x
  gsap.set(".animate-card-5", {y: 50, opacity: 0});
  ScrollTrigger.batch(".animate-card-5", {
    interval: 0.1,
    batchMax: 5,
    delay: 1000,
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: {each: 0.15, grid: [1, 5]}, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, {opacity: 1, y: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 50, overwrite: true})
  });

  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-2", {y: 0, opacity: 1}));
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-3", {y: 0, opacity: 1}));
  ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".animate-card-5", {y: 0, opacity: 1}));
  // --------------------------------------------- //
  // Scroll Animations End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Smooth Scrolling Start
  // --------------------------------------------- //
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
  // --------------------------------------------- //
  // Smooth Scrolling End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //
  const toolsSlider = document.querySelector("tools-slider");
  const testimonialsSlider = document.querySelector("testimonials-slider");

  if (!toolsSlider) {
    const swiper = new Swiper('.swiper-tools', {
      spaceBetween: 20,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
      grabCursor: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 2,
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  };

  if (!toolsSlider) {
    const swiper = new Swiper('.swiper-testimonials', {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: true,
      speed: 1000,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };
  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.form__reply').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.contact').find('.form__reply').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Modernizr SVG Fallback Start
  // --------------------------------------------- //
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };
  // --------------------------------------------- //
  // Modernizr SVG Fallback End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Chrome Smooth Scroll Start
  // --------------------------------------------- //
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };
  // --------------------------------------------- //
  // Chrome Smooth Scroll End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Images Moving Ban Start
  // --------------------------------------------- //
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });
  // --------------------------------------------- //
  // Images Moving Ban End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Detecting Mobile/Desktop Start
  // --------------------------------------------- //
  var isMobile = false;
  if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html').addClass('touch');
    isMobile = true;
  }
  else {
    $('html').addClass('no-touch');
    isMobile = false;
  }
  //IE, Edge
  var isIE = /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent);
  // --------------------------------------------- //
  // Detecting Mobile/Desktop End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // PhotoSwipe Gallery Images Replace Start
  // --------------------------------------------- //
  $('.gallery__link').each(function(){
    $(this)
    .append('<div class="picture"></div>')
    .children('.picture').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  });
  // --------------------------------------------- //
  // PhotoSwipe Gallery Images Replace End
  // --------------------------------------------- //

});

// --------------------------------------------- //
// Color Switch Start
// --------------------------------------------- //
const themeBtn = document.querySelector('.color-switcher');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('template.theme') ? theme = localStorage.getItem('template.theme') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  if(theme === "light"){
    themeBtn.innerHTML = `<em></em><i class="ph-bold ph-moon-stars"></i>`;
  } else {
    themeBtn.innerHTML = `<em></em><i class="ph-bold ph-sun"></i>`;
  }
  root.setAttribute('color-scheme', `${theme}`);
};

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  if(theme === 'dark'){
    theme = 'light';
  } else {
    theme = 'dark';
  }
  localStorage.setItem('template.theme', `${theme}`);
  loadTheme(theme);
});

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
});
// --------------------------------------------- //
// Color Switch End
// --------------------------------------------- //




/*County Code Spam Safe Code*/

// Country code validation rules (all 195 countries)
const countryValidationRules = {
  "+93": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "701234567" }, // Afghanistan
  "+358": { pattern: /^[0-9]{6,12}$/, maxLength: 12, example: "412345678" }, // Finland (Åland)
  "+355": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "661234567" }, // Albania
  "+213": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "551234567" }, // Algeria
  "+1684": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "6841234567" }, // American Samoa
  "+376": { pattern: /^[0-9]{6}$/, maxLength: 6, example: "312345" }, // Andorra
  "+244": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Angola
  "+1264": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Anguilla
  "+1268": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Antigua & Barbuda
  "+54": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "9112345678" }, // Argentina
  "+374": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "77123456" }, // Armenia
  "+297": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Aruba
  "+61": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "412345678" }, // Australia
  "+43": { pattern: /^[0-9]{10,12}$/, maxLength: 12, example: "66412345678" }, // Austria
  "+994": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "401234567" }, // Azerbaijan
  "+1242": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Bahamas
  "+973": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "36123456" }, // Bahrain
  "+880": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "1812345678" }, // Bangladesh
  "+1246": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Barbados
  "+375": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "291234567" }, // Belarus
  "+32": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "471234567" }, // Belgium
  "+501": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Belize
  "+229": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "90123456" }, // Benin
  "+1441": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Bermuda
  "+975": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "17123456" }, // Bhutan
  "+591": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "71234567" }, // Bolivia
  "+387": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "61123456" }, // Bosnia & Herzegovina
  "+267": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "7112345" }, // Botswana
  "+55": { pattern: /^[0-9]{10,11}$/, maxLength: 11, example: "11912345678" }, // Brazil
  "+246": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // British Indian Ocean Territory
  "+1284": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // British Virgin Islands
  "+673": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Brunei
  "+359": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "881234567" }, // Bulgaria
  "+226": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "70123456" }, // Burkina Faso
  "+257": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "79123456" }, // Burundi
  "+855": { pattern: /^[0-9]{8,9}$/, maxLength: 9, example: "912345678" }, // Cambodia
  "+237": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "712345678" }, // Cameroon
  "+1": { pattern: /^[2-9]\d{9}$/, maxLength: 10, example: "2015550123" }, // Canada/USA
  "+238": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Cape Verde
  "+1345": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Cayman Islands
  "+236": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "70123456" }, // Central African Republic
  "+235": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "90123456" }, // Chad
  "+56": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Chile
  "+86": { pattern: /^1[3-9]\d{9}$/, maxLength: 11, example: "13123456789" }, // China
  "+61": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "412345678" }, // Christmas Island
  "+61": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "412345678" }, // Cocos (Keeling) Islands
  "+57": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "3012345678" }, // Colombia
  "+269": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Comoros
  "+682": { pattern: /^[0-9]{5}$/, maxLength: 5, example: "12345" }, // Cook Islands
  "+506": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "81234567" }, // Costa Rica
  "+385": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Croatia
  "+53": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "51234567" }, // Cuba
  "+599": { pattern: /^[0-9]{7,8}$/, maxLength: 8, example: "95123456" }, // Curaçao
  "+357": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "96123456" }, // Cyprus
  "+420": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "601234567" }, // Czech Republic
  "+243": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "812345678" }, // DR Congo
  "+45": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "20123456" }, // Denmark
  "+253": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "77123456" }, // Djibouti
  "+1767": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Dominica
  "+1809": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "8091234567" }, // Dominican Republic (1-809)
  "+1829": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "8291234567" }, // Dominican Republic (1-829)
  "+1849": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "8491234567" }, // Dominican Republic (1-849)
  "+593": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "991234567" }, // Ecuador
  "+20": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "1012345678" }, // Egypt
  "+503": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "71234567" }, // El Salvador
  "+240": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "222123456" }, // Equatorial Guinea
  "+291": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Eritrea
  "+372": { pattern: /^[0-9]{7,8}$/, maxLength: 8, example: "50123456" }, // Estonia
  "+251": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "911234567" }, // Ethiopia
  "+500": { pattern: /^[0-9]{5}$/, maxLength: 5, example: "12345" }, // Falkland Islands
  "+298": { pattern: /^[0-9]{6}$/, maxLength: 6, example: "123456" }, // Faroe Islands
  "+679": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "7012345" }, // Fiji
  "+358": { pattern: /^[0-9]{6,12}$/, maxLength: 12, example: "412345678" }, // Finland
  "+33": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "612345678" }, // France
  "+594": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "694201234" }, // French Guiana
  "+689": { pattern: /^[0-9]{6}$/, maxLength: 6, example: "123456" }, // French Polynesia
  "+241": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "0612345" }, // Gabon
  "+220": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "3012345" }, // Gambia
  "+995": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "555123456" }, // Georgia
  "+49": { pattern: /^[0-9]{10,11}$/, maxLength: 11, example: "15123456789" }, // Germany
  "+233": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "201234567" }, // Ghana
  "+350": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "57123456" }, // Gibraltar
  "+30": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "6912345678" }, // Greece
  "+299": { pattern: /^[0-9]{6}$/, maxLength: 6, example: "123456" }, // Greenland
  "+1473": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Grenada
  "+590": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "690123456" }, // Guadeloupe
  "+1671": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Guam
  "+502": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "51234567" }, // Guatemala
  "+44": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "7912345678" }, // Guernsey
  "+224": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "60123456" }, // Guinea
  "+245": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Guinea-Bissau
  "+592": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Guyana
  "+509": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "34123456" }, // Haiti
  "+504": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "91234567" }, // Honduras
  "+852": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "51234567" }, // Hong Kong
  "+36": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "201234567" }, // Hungary
  "+354": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Iceland
  "+91": { pattern: /^[6-9]\d{9}$/, maxLength: 10, example: "9876543210" }, // India
  "+62": { pattern: /^[0-9]{9,12}$/, maxLength: 12, example: "81234567890" }, // Indonesia
  "+98": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "9123456789" }, // Iran
  "+964": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "7712345678" }, // Iraq
  "+353": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "851234567" }, // Ireland
  "+44": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "7912345678" }, // Isle of Man
  "+972": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "501234567" }, // Israel
  "+39": { pattern: /^[0-9]{9,10}$/, maxLength: 10, example: "3123456789" }, // Italy
  "+225": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "0123456789" }, // Ivory Coast
  "+1876": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Jamaica
  "+81": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "9012345678" }, // Japan
  "+44": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "7912345678" }, // Jersey
  "+962": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "791234567" }, // Jordan
  "+7": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "9123456789" }, // Kazakhstan
  "+254": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "712345678" }, // Kenya
  "+686": { pattern: /^[0-9]{5}$/, maxLength: 5, example: "12345" }, // Kiribati
  "+965": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "50123456" }, // Kuwait
  "+996": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "700123456" }, // Kyrgyzstan
  "+856": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "2023123456" }, // Laos
  "+371": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "21234567" }, // Latvia
  "+961": { pattern: /^[0-9]{7,8}$/, maxLength: 8, example: "71123456" }, // Lebanon
  "+266": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "50123456" }, // Lesotho
  "+231": { pattern: /^[0-9]{7,8}$/, maxLength: 8, example: "77123456" }, // Liberia
  "+218": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Libya
  "+423": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Liechtenstein
  "+370": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "61234567" }, // Lithuania
  "+352": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "621123456" }, // Luxembourg
  "+853": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "66123456" }, // Macau
  "+389": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "70123456" }, // Macedonia
  "+261": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "321234567" }, // Madagascar
  "+265": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "991234567" }, // Malawi
  "+60": { pattern: /^[0-9]{9,10}$/, maxLength: 10, example: "123456789" }, // Malaysia
  "+960": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "7712345" }, // Maldives
  "+223": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "70123456" }, // Mali
  "+356": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "96961234" }, // Malta
  "+692": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Marshall Islands
  "+596": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "696201234" }, // Martinique
  "+222": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "12345678" }, // Mauritania
  "+230": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "5123456" }, // Mauritius
  "+262": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "692123456" }, // Mayotte
  "+52": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "5512345678" }, // Mexico
  "+691": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Micronesia
  "+373": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "62123456" }, // Moldova
  "+377": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "61234567" }, // Monaco
  "+976": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "88123456" }, // Mongolia
  "+382": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "67654321" }, // Montenegro
  "+1664": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Montserrat
  "+212": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "650123456" }, // Morocco
  "+258": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "821234567" }, // Mozambique
  "+95": { pattern: /^[0-9]{8,10}$/, maxLength: 10, example: "92123456" }, // Myanmar
  "+264": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "811234567" }, // Namibia
  "+674": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Nauru
  "+977": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "9841234567" }, // Nepal
  "+31": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "612345678" }, // Netherlands
  "+687": { pattern: /^[0-9]{6}$/, maxLength: 6, example: "123456" }, // New Caledonia
  "+64": { pattern: /^[0-9]{9,10}$/, maxLength: 10, example: "211234567" }, // New Zealand
  "+505": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "81234567" }, // Nicaragua
  "+227": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "90123456" }, // Niger
  "+234": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "8021234567" }, // Nigeria
  "+683": { pattern: /^[0-9]{4}$/, maxLength: 4, example: "1234" }, // Niue
  "+672": { pattern: /^[0-9]{5}$/, maxLength: 5, example: "12345" }, // Norfolk Island
  "+850": { pattern: /^[0-9]{8,9}$/, maxLength: 9, example: "191234567" }, // North Korea
  "+1670": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Northern Mariana Islands
  "+47": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "41234567" }, // Norway
  "+968": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "92123456" }, // Oman
  "+92": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "3012345678" }, // Pakistan
  "+680": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Palau
  "+970": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "599123456" }, // Palestine
  "+507": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "61234567" }, // Panama
  "+675": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "70123456" }, // Papua New Guinea
  "+595": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "961234567" }, // Paraguay
  "+51": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Peru
  "+63": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "9123456789" }, // Philippines
  "+48": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "501234567" }, // Poland
  "+351": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Portugal
  "+1939": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "7871234567" }, // Puerto Rico
  "+974": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "33123456" }, // Qatar
  "+242": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "061234567" }, // Republic of the Congo
  "+40": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "712034567" }, // Romania
  "+7": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "9123456789" }, // Russia
  "+250": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "720123456" }, // Rwanda
  "+590": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "690123456" }, // Saint Barthélemy
  "+290": { pattern: /^[0-9]{4}$/, maxLength: 4, example: "1234" }, // Saint Helena
  "+1869": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Saint Kitts and Nevis
  "+1758": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Saint Lucia
  "+590": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "690123456" }, // Saint Martin
  "+508": { pattern: /^[0-9]{6}$/, maxLength: 6, example: "123456" }, // Saint Pierre and Miquelon
  "+1784": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Saint Vincent and the Grenadines
  "+685": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Samoa
  "+378": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "6666123456" }, // San Marino
  "+239": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // São Tomé and Príncipe
  "+966": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "501234567" }, // Saudi Arabia
  "+221": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "701234567" }, // Senegal
  "+381": { pattern: /^[0-9]{8,9}$/, maxLength: 9, example: "601234567" }, // Serbia
  "+248": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Seychelles
  "+232": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "25123456" }, // Sierra Leone
  "+65": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "81234567" }, // Singapore
  "+1721": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Sint Maarten
  "+421": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Slovakia
  "+386": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "31234567" }, // Slovenia
  "+677": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Solomon Islands
  "+252": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "71234567" }, // Somalia
  "+27": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "711234567" }, // South Africa
  "+82": { pattern: /^[0-9]{9,10}$/, maxLength: 10, example: "1023456789" }, // South Korea
  "+211": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "977123456" }, // South Sudan
  "+34": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "612345678" }, // Spain
  "+94": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "712345678" }, // Sri Lanka
  "+249": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Sudan
  "+597": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Suriname
  "+47": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "41234567" }, // Svalbard and Jan Mayen
  "+268": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "76123456" }, // Swaziland
  "+46": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "701234567" }, // Sweden
  "+41": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "781234567" }, // Switzerland
  "+963": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "944567890" }, // Syria
  "+886": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Taiwan
  "+992": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "917123456" }, // Tajikistan
  "+255": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "712345678" }, // Tanzania
  "+66": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "812345678" }, // Thailand
  "+670": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "12345678" }, // Timor-Leste
  "+228": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "90123456" }, // Togo
  "+690": { pattern: /^[0-9]{5}$/, maxLength: 5, example: "12345" }, // Tokelau
  "+676": { pattern: /^[0-9]{5}$/, maxLength: 5, example: "12345" }, // Tonga
  "+1868": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Trinidad and Tobago
  "+216": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "20123456" }, // Tunisia
  "+90": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "5012345678" }, // Turkey
  "+993": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "66123456" }, // Turkmenistan
  "+1649": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Turks and Caicos Islands
  "+688": { pattern: /^[0-9]{5}$/, maxLength: 5, example: "12345" }, // Tuvalu
  "+256": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "712345678" }, // Uganda
  "+380": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "501234567" }, // Ukraine
  "+971": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "501234567" }, // United Arab Emirates
  "+44": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "7912345678" }, // United Kingdom
  "+1": { pattern: /^[2-9]\d{9}$/, maxLength: 10, example: "2015550123" }, // United States
  "+598": { pattern: /^[0-9]{8}$/, maxLength: 8, example: "94231234" }, // Uruguay
  "+998": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "912345678" }, // Uzbekistan
  "+678": { pattern: /^[0-9]{7}$/, maxLength: 7, example: "1234567" }, // Vanuatu
  "+379": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "6666123456" }, // Vatican City
  "+58": { pattern: /^[0-9]{10}$/, maxLength: 10, example: "4123456789" }, // Venezuela
  "+84": { pattern: /^[0-9]{9,10}$/, maxLength: 10, example: "912345678" }, // Vietnam
  "+681": { pattern: /^[0-9]{6}$/, maxLength: 6, example: "123456" }, // Wallis and Futuna
  "+967": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "712345678" }, // Yemen
  "+260": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "955123456" }, // Zambia
  "+263": { pattern: /^[0-9]{9}$/, maxLength: 9, example: "712345678" }  // Zimbabwe
};

// Phone number validation function
function validatePhoneNumber(input) {
  const countryCode = document.querySelector('select[name="country_code"]').value;
  const phoneNumber = input.value.replace(/\D/g, '');
  const rules = countryValidationRules[countryCode] || countryValidationRules["+1"]; // Default to US rules
  
  // Limit input length
  if (phoneNumber.length > rules.maxLength) {
    input.value = phoneNumber.slice(0, rules.maxLength);
    return;
  }
  
  // Validate pattern
  if (!rules.pattern.test(phoneNumber)) {
    input.setCustomValidity(`Please enter a valid phone number (Example: ${rules.example})`);
    input.reportValidity();
  } else {
    input.setCustomValidity('');
  }
}

// Update validation when country changes
document.querySelector('select[name="country_code"]').addEventListener('change', function() {
  const phoneInput = document.querySelector('input[name="Phone"]');
  validatePhoneNumber(phoneInput);
  
  // Update maxlength attribute
  const rules = countryValidationRules[this.value] || countryValidationRules["+1"];
  phoneInput.setAttribute('maxlength', rules.maxLength);
  phoneInput.setAttribute('pattern', rules.pattern.source);
  phoneInput.setAttribute('title', `Example: ${rules.example}`);
});

// Initial validation setup
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.querySelector('input[name="Phone"]');
  const countrySelect = document.querySelector('select[name="country_code"]');
  
  // Set initial validation rules
  const rules = countryValidationRules[countrySelect.value] || countryValidationRules["+1"];
  phoneInput.setAttribute('maxlength', rules.maxLength);
  phoneInput.setAttribute('pattern', rules.pattern.source);
  phoneInput.setAttribute('title', `Example: ${rules.example}`);
  
  phoneInput.addEventListener('input', function() {
    validatePhoneNumber(this);
  });
});


/*  Email Spam COde Detection COde*/
// Strict email validation function
function validateEmail(input) {
  const email = input.value.trim();
  const commonSpamDomains = [
    'mailinator.com', 'tempmail.com', '10minutemail.com',
    'guerrillamail.com', 'fakeinbox.com', 'trashmail.com',
    'yopmail.com', 'disposablemail.com'
  ];
  
  // Basic format check
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
  
  if (!emailRegex.test(email)) {
    input.setCustomValidity("Please enter a valid email (e.g.: name@domain.com)");
    return;
  }

  // Disposable email check
  const domain = email.split('@')[1].toLowerCase();
  if (commonSpamDomains.some(spam => domain.includes(spam))) {
    input.setCustomValidity("Disposable/temporary emails are not allowed");
    return;
  }

  // Additional checks
  const suspiciousPatterns = [
    /^[0-9]+@/,              // Starts with numbers
    /\.xyz$/,                // Suspicious TLDs
    /\.top$/, 
    /\.gq$/,
    /\.info$/,
    /\.biz$/,
    /\.online$/,
    /\.click$/,
    /[0-9]{5,}@/,           // Many numbers in username
    /[a-z0-9]{20,}@/i       // Very long username
  ];

  if (suspiciousPatterns.some(pattern => pattern.test(email))) {
    input.setCustomValidity("This email appears suspicious");
    return;
  }

  // Valid email
  input.setCustomValidity("");
}




/* JS code after form submited*/  

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successMessage = form.querySelector('.form__reply');
  const submitBtn = form.querySelector('button[type="submit"]');

  // 1. Check for successful submission
  if (window.location.search.includes('success=true')) {
    showSuccessMessage();
    history.replaceState(null, '', window.location.pathname);
    return;
  }

  // 2. Handle form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="ph-bold ph-circle-notch ph-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest' // Add this header
        }
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        showSuccessMessage();
        form.reset();
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      // More user-friendly error message
      alert(`Message not sent. Please:\n1. Check your internet connection\n2. Try again later\nOr contact me directly at +91 78086 14106`);
    } finally {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });

  function showSuccessMessage() {
    // Hide form elements
    Array.from(form.elements).forEach(el => {
      if (el.tagName !== 'BUTTON' && !el.classList.contains('form__reply')) {
        el.style.opacity = '0';
        el.style.height = '0';
        el.style.padding = '0';
        el.style.margin = '0';
        el.style.border = 'none';
      }
    });

    // Update message
    successMessage.innerHTML = `
      <i class="ph-bold ph-check-circle reply__icon"></i>
      <p class="reply__title">Thank You!</p>
      <span class="reply__text">
        I've received your message and will respond within <strong>24 hours</strong>.<br>
        <span class="urgent-contact">
          For urgent inquiries: <a href="https://wa.me/917808614106">WhatsApp +91 78086 14106</a>
        </span>
      </span>
    `;
    
    // Animate display
    successMessage.style.display = 'block';
    successMessage.style.animation = 'fadeIn 0.4s ease-out';
    successMessage.scrollIntoView({ behavior: 'smooth' });
  }
}


// avatar image js code toggle pink to blue (LIGHT TO DARK AVATAK IMAGES)
// Theme toggle logic
document.addEventListener("DOMContentLoaded", function () {
  const switcher = document.getElementById("color-switcher");
  const root = document.documentElement;

  // Optional: Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    root.classList.add("dark");
  }

  // On button click, toggle the theme
  switcher.addEventListener("click", function () {
    root.classList.toggle("dark");

    // Optional: Save preference
    if (root.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
