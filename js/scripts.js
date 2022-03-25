(function ($) {
  $(document).ready(function () {
    "use strict";

  
    // LOGO HOVER
    $(".logo-item").hover(
      function () {
        $(".logo-item").not(this).css({
          opacity: "0.3",
        });
      },
      function () {
        $(".logo-item").not(this).css({
          opacity: "1",
        });
      }
    );
  });
  // END DOCUMENT READY

  // // MASONRY
  // $(window).load(function () {
  //   $(".projects").isotope({
  //     itemSelector: ".projects li",
  //     percentPosition: true,
  //   });
  // });

  // // TESTIMONIALS SLIDER
  // var swiper = new Swiper(".testimonials-slider", {
  //   slidesPerView: 2,
  //   spaceBetween: 30,
  //   loop: true,
  //   navigation: {
  //     nextEl: ".button-next",
  //     prevEl: ".button-prev",
  //   },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 1,
  //       spaceBetween: 0,
  //     },
  //     768: {
  //       slidesPerView: 1,
  //       spaceBetween: 30,
  //     },
  //     1024: {
  //       slidesPerView: 1,
  //       spaceBetween: 30,
  //     },
  //   },
  // });

  // PROJECT SLIDER
  var swiper = new Swiper(".project-slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });

  
  // if ($(".slider-main")[0]) {
  //   mainslider.controller.control = slidercontent;
  //   slidercontent.controller.control = mainslider;
  // } else {
  // }

  // // DATA BACKGROUND IMAGE
  // var pageSection = $("*");
  // pageSection.each(function (indx) {
  //   if ($(this).attr("data-background")) {
  //     $(this).css("background", "url(" + $(this).data("background") + ")");
  //   }
  // });

  // // DATA BACKGROUND COLOR
  // var pageSection = $("*");
  // pageSection.each(function (indx) {
  //   if ($(this).attr("data-background")) {
  //     $(this).css("background", $(this).data("background"));
  //   }
  // });

  // // COUNTER
  // $(document).scroll(function () {
  //   $(".odometer").each(function () {
  //     var parent_section_postion = $(this).closest("section").position();
  //     var parent_section_top = parent_section_postion.top;
  //     if ($(document).scrollTop() > parent_section_top - 300) {
  //       if ($(this).data("status") == "yes") {
  //         $(this).html($(this).data("count"));
  //         $(this).data("status", "no");
  //       }
  //     }
  //   });
  // });

  // STICKY NAVBAR
  // $(window).on("scroll touchmove", function () {
  //   $(".navbar").toggleClass("sticky", $(document).scrollTop() > 0);
  // });

  // STICKY UP DOWN
  // var didScroll;
  // var lastScrollTop = 0;
  // var delta = 0;
  // var navbarHeight = $(".navbar").outerHeight();

  // $(window).scroll(function (event) {
  //   didScroll = true;
  // });

  // setInterval(function () {
  //   if (didScroll) {
  //     hasScrolled();
  //     didScroll = true;
  //   }
  // }, 0);

  // function hasScrolled() {
  //   var st = $(this).scrollTop();

  //   // Make sure they scroll more than delta
  //   if (Math.abs(lastScrollTop - st) <= delta) return;

  //   // If they scrolled down and are past the navbar, add class .nav-up.
  //   // This is necessary so you never see what is "behind" the navbar.
  //   if (st > lastScrollTop && st > navbarHeight) {
  //     // Scroll Down
  //     $(".navbar").addClass("nav-down");
  //     // $(".navbar").removeClass("nav-down").addClass("nav-up");
  //   } else {
  //     // Scroll Up
  //     if (st + $(window).height() < $(document).height()) {
  //       $(".navbar").removeClass("nav-up").addClass("nav-down");
  //     }
  //   }

  //   lastScrollTop = st;
  // }
})(jQuery);
