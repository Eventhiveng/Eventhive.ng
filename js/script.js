// Preloader
// window.addEventListener("load", function () {
//   const preloader = document.getElementById("preloader");
//   preloader.style.opacity = "0";
//   setTimeout(() => {
//     preloader.style.display = "none";
//   }, 500);
// });

$(window).on("load", function () {
  $("#preloader").fadeOut(500, () => {
    $("main").fadeIn(500, () => {
      AOS.init({
        duration: 1000,
      });
    });
  });
});

$(function () {
  // Simulate loading delay for 1 second
  setTimeout(function () {
    // Fade out the preloader
    $("#preloader").fadeOut("500", function () {
      // Show the main content
      $(".main-container").fadeIn("500", function () {
        AOS.init({
          duration: 800,
        });
      });
    });
  }, 1000); // Delay of 1 second
});

$(document).ready(function () {
  const $hamburger = $(".hamburger");
  const $asideMenu = $(".aside-container");
  const $navLinks = $("#nav .nav-links a");
  const $asideLinks = $("#aside .nav-links a");
  const $nav = $("#nav");

  // const $attendeeSlideOne = $(".who-attends-slide-1");
  // const $attendeeSlideTwo = $(".who-attends-slide-2");
  // const $attendeeSlideThree = $(".who-attends-slide-3");

  // const $highlightSlideOne = $(".highlight-slider-1");
  // const $highlightSlideTwo = $(".highlight-slider-2");
  // const $highlightSlideThree = $(".highlight-slider-3");

  // const $slides = $(
  //   ".who-attends-slide-1, .who-attends-slide-2, .who-attends-slide-3"
  // );

  // Handle navbar scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
      $nav.addClass("fixed");
      $("#nav .logo img").attr("src", "/assets/logo/naf-logo-dark.png");
    } else {
      $nav.removeClass("fixed");
      $("#nav .logo img").attr("src", "/assets/logo/naf-logo-white.png");
    }
  });

  // Handle active class for navigation links
  function setActiveLink($link) {
    // Remove active class from all links
    $navLinks.parent().removeClass("active");
    $asideLinks.parent().removeClass("active");

    // Add active class to clicked link's parent li
    $link.parent().addClass("active");

    // Find corresponding link in other menu and make it active
    const href = $link.attr("href");
    if (href) {
      if ($link.parent().parent().hasClass("aside-container")) {
        $navLinks.filter(`[href="${href}"]`).parent().addClass("active");
      } else {
        $asideLinks.filter(`[href="${href}"]`).parent().addClass("active");
      }
    }
  }

  // Handle click on main nav links
  $navLinks.on("click", function (e) {
    e.preventDefault();
    setActiveLink($(this));
    const href = $(this).attr("href");
    if (href) {
      window.location.href = href;
    }
  });

  // Handle click on aside nav links
  $asideLinks.on("click", function (e) {
    e.preventDefault();
    setActiveLink($(this));
    $asideMenu.removeClass("open");
    $hamburger.removeClass("open");
    const href = $(this).attr("href");
    if (href) {
      window.location.href = href;
    }
  });

  // Toggle Nav
  const toggleNav = () => {
    // Toggle hamburger and aside menu
    $hamburger.on("click", function () {
      $(this).toggleClass("open");
      $asideMenu.toggleClass("open");
    });

    // Close the aside menu when clicking outside
    $(document).on("click", function (event) {
      if (
        !$asideMenu.is(event.target) &&
        !$asideMenu.has(event.target).length &&
        !$hamburger.is(event.target) &&
        !$hamburger.has(event.target).length
      ) {
        $asideMenu.removeClass("open");
        $hamburger.removeClass("open");
      }
    });
  };

  // const attendeeComp = () => {
  //   // Function to calculate slidesToShow based on window width
  //   function getSlidesToShow() {
  //     return Math.ceil($(window).width() / 250);
  //   }

  //   const slickSettings1 = {
  //     infinite: true,
  //     speed: 2000,
  //     autoplay: true,
  //     autoplaySpeed: 10,
  //     slidesToShow: getSlidesToShow(),
  //     slidesToScroll: 1,
  //     lazyLoad: "ondemand",
  //     arrows: false,
  //     cssEase: "linear",
  //     pauseOnHover: false,
  //     pauseOnFocus: false,
  //     draggable: false,
  //   };

  //   const slickSettings2 = $.extend({}, slickSettings1, {
  //     speed: 3000,
  //     rtl: true,
  //   });

  //   const slickSettings3 = $.extend({}, slickSettings1, {
  //     speed: 6000,
  //   });

  //   $attendeeSlideOne.slick(slickSettings1);
  //   $attendeeSlideTwo.slick(slickSettings2);
  //   $attendeeSlideThree.slick(slickSettings3);

  //   // Throttle function to optimize resize event handling
  //   let resizeTimeout;
  //   $(window).on("resize", function () {
  //     clearTimeout(resizeTimeout);
  //     resizeTimeout = setTimeout(function () {
  //       const newSlidesToShow = getSlidesToShow();
  //       $slides.slick("slickSetOption", "slidesToShow", newSlidesToShow, true);
  //     }, 200); // Delay to prevent excessive updates during resizing
  //   });
  // };

  // const highlightComp = () => {
  //   const highlightSettings1 = {
  //     infinite: true,
  //     speed: 4000,
  //     autoplay: true,
  //     autoplaySpeed: 10,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     lazyLoad: "ondemand",
  //     arrows: false,
  //     cssEase: "linear",

  //     responsive: [
  //       {
  //         breakpoint: 991,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 767,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 567,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   };

  //   const highlightSettings2 = $.extend({}, highlightSettings1, {
  //     speed: 3000,
  //     rtl: true,
  //   });

  //   const highlightSettings3 = $.extend({}, highlightSettings1, {
  //     speed: 6000,
  //   });

  //   $highlightSlideOne.slick(highlightSettings1);
  //   $highlightSlideTwo.slick(highlightSettings2);
  //   $highlightSlideThree.slick(highlightSettings3);
  // };

  // const accordionFunc = () => {
  //   // Open the first accordion item by default and set the icon to minus
  //   $(".accordion-content").first().show();
  //   $(".accordion-header").first().find(".icon").text("-");

  //   $(".accordion-header").on("click", function () {
  //     const $icon = $(this).find(".icon");
  //     const $content = $(this).next(".accordion-content");

  //     // Toggle this section's visibility and icon
  //     $content.slideToggle(200, function () {
  //       $icon.text($content.is(":visible") ? "-" : "+");
  //     });

  //     // Hide other sections and set their icons to plus
  //     $(".accordion-content").not($content).slideUp(200);
  //     $(".accordion-header").not($(this)).find(".icon").text("+");
  //   });
  // };

  $(window).scroll(function () {
    $(".odometer").each(function () {
      let parent_section_postion = $(this).closest(".stat-card").position();
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
  });

  // Initialize all functions
  toggleNav();
  accordionFunc();
  attendeeComp();
  highlightComp();
});
