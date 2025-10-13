// ========================================
// Nigeria Solar Forum - v2.0
// Updated: Slick Carousel + Odometer
// ========================================

// ========================================
// PRELOADER
// ========================================
// $(window).on("load", function () {
//   $("#preloader").addClass("fade-out");
//   setTimeout(() => $("#preloader").remove(), 500);
// });
$(window).on("load", function () {
  $("#preloader").fadeOut(500, () => {
    $(".main-container").fadeIn(500, () => {
      AOS.init({
        duration: 1000,
      });
    });
  });
});

// ========================================
// MAIN INITIALIZATION
// ========================================
$(document).ready(function () {
  const $attendeeSlideOne = $(".who-attends-slide-1");
  const $attendeeSlideTwo = $(".who-attends-slide-2");
  const $attendeeSlideThree = $(".who-attends-slide-3");
  const $slides = $(
    ".who-attends-slide-1, .who-attends-slide-2, .who-attends-slide-3"
  );
  // AOS.init({
  //   duration: 1000,
  // });

  // ========================================
  // NAVIGATION
  // ========================================

  // Mobile menu toggle
  $("#nav-toggle").on("click", function () {
    $("#aside.aside").toggleClass("active");
    $(this).toggleClass("active");
  });

  // Close menu on link click
  $(".aside-menu a, #nav-menu a").on("click", function () {
    $("#aside.aside").removeClass("active");
    $("#nav-toggle").removeClass("active");
  });

  // Consolidated scroll handler for performance
  // let scrollTimeout;
  $(window).on("scroll", function () {
    // Navbar scroll effect (runs every scroll)
    $(".navbar").toggleClass("scrolled", $(window).scrollTop() > 50);

    // Parallax effect (runs every scroll)
    const scrolled = $(window).scrollTop();
    $(".floating-elements").css("transform", `translateY(${scrolled * 0.5}px)`);

    $(".odometer").each(function () {
      let parent_section_postion = $(this).closest(".countup-item").position();
      let parent_section_top = parent_section_postion.top;
      if (
        $(window).scrollTop() >
        parent_section_top - ($(window).height() - 200)
      ) {
        if ($(this).data("status") == "yes") {
          $(this).html($(this).data("count"));
          $(this).data("status", "no");
        }
      }
    });

    AOS.refresh();
  });

  const attendeeComp = () => {
    // Function to calculate slidesToShow based on window width
    function getSlidesToShow() {
      return Math.ceil($(window).width() / 250);
    }

    const slickSettings1 = {
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 10,
      slidesToShow: getSlidesToShow(),
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      arrows: false,
      cssEase: "linear",
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable: false,
    };

    const slickSettings2 = $.extend({}, slickSettings1, {
      speed: 3000,
      rtl: true,
    });

    const slickSettings3 = $.extend({}, slickSettings1, {
      speed: 6000,
    });

    $attendeeSlideOne.slick(slickSettings1);
    $attendeeSlideTwo.slick(slickSettings2);
    $attendeeSlideThree.slick(slickSettings3);

    // Throttle function to optimize resize event handling
    let resizeTimeout;
    $(window).on("resize", function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        const newSlidesToShow = getSlidesToShow();
        $slides.slick("slickSetOption", "slidesToShow", newSlidesToShow, true);
      }, 200); // Delay to prevent excessive updates during resizing
    });
  };

  // Highlight
  const highlightSettings1 = {
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 10,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    arrows: false,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const highlightSettings2 = $.extend({}, highlightSettings1, {
    speed: 3000,
    rtl: true,
  });

  const highlightSettings3 = $.extend({}, highlightSettings1, {
    speed: 6000,
  });

  $(".highlight-slider-1").slick(highlightSettings1);
  $(".highlight-slider-2").slick(highlightSettings2);
  $(".highlight-slider-3").slick(highlightSettings3);

  attendeeComp();
});
