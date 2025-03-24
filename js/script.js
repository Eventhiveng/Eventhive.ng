// $(window).on("load", function () {
//   $("#preloader").fadeOut(500, () => {
//     $(".main-container").fadeIn(500, () => {
//       AOS.init({
//         duration: 1000,
//       });
//     });
//   });
// });

$(function () {
  // Simulate loading delay for 1 second
  setTimeout(function () {
    // Fade out the preloader
    $("#preloader").fadeOut("500", function () {
      // Show the main content
      $(".main-container").fadeIn("500", function () {
        AOS.init({
          duration: 1000,
        });
      });
    });
  }, 500); // Delay of 1 second
});
$(document).ready(function () {
  const $hamburger = $(".hamburger");
  const $asideMenu = $(".aside-container");
  const $asideMenuLink = $(".aside-container a");
  const $highlightSlideOne = $(".highlight-slider-1");
  const $highlightSlideTwo = $(".highlight-slider-2");
  const $highlightSlideThree = $(".highlight-slider-3");

  const $attendeeSlideOne = $(".who-attends-slide-1");
  const $attendeeSlideTwo = $(".who-attends-slide-2");
  const $attendeeSlideThree = $(".who-attends-slide-3");

  const $testimonialSlide = $(".testimonial-slides");

  const $slides = $(
    ".who-attends-slide-1, .who-attends-slide-2, .who-attends-slide-3"
  );

  // Toggle Nav
  const toggleNav = () => {
    // Toggle hamburger and aside menu
    $hamburger.on("click", function () {
      $(this).toggleClass("open");
      $asideMenu.toggleClass("open");
    });

    // Close the aside menu when a link is clicked
    $asideMenuLink.on("click", function () {
      $asideMenu.removeClass("open");
      $hamburger.removeClass("open");
    });

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

  const highlightComp = () => {
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

    $highlightSlideOne.slick(highlightSettings1);
    $highlightSlideTwo.slick(highlightSettings2);
    $highlightSlideThree.slick(highlightSettings3);
  };

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

  const testimonialComp = () => {
    const testimonialSettings = {
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 4000,
      lazyLoad: "ondemand",
      arrows: false,
      cssEase: "linear",
      dots: true,
      fade: true,
    };

    $testimonialSlide.slick(testimonialSettings);
  };

  // let currentImageSrc = "/assets/section-img/trade.jpg"; // Track the current image

  // $(window).on("scroll", function () {
  //   let scrollTop = $(window).scrollTop();
  //   let windowHeight = $(window).height();

  //   $(".agenda-item").each(function () {
  //     const $item = $(this);
  //     const itemOffsetTop = $item.offset().top;
  //     const itemHeight = $item.outerHeight();
  //     const imageSrc = $item.data("image");

  //     // Check if the agenda item is within the viewport
  //     if (
  //       scrollTop >= itemOffsetTop - windowHeight / 1.3 &&
  //       scrollTop < itemOffsetTop + itemHeight - windowHeight / 1.3
  //     ) {
  //       if (imageSrc !== currentImageSrc) {
  //         // Only update if image is different
  //         currentImageSrc = imageSrc;
  //         $(".agenda-image img").fadeOut(200, function () {
  //           $(this).attr("src", currentImageSrc).fadeIn(200);
  //         });
  //       }
  //       return false; // Stop checking after finding the active item
  //     }
  //   });
  // });

  $(window).scroll(function () {
    $(".odometer").each(function () {
      let parent_section_postion = $(this).closest(".event-wrapper").position();
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

  // const countdownFunction = setInterval(function () {
  //   const now = new Date().getTime();
  //   const eventDate = new Date("March 27, 2025 00:00:00").getTime();

  //   // Calculate the time remaining
  //   const distance = eventDate - now;
  //   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Display countdown
  //   if (distance > 0) {
  //     $("#countdown-timer").html(
  //       days + "d " + hours + "h " + minutes + "m " + seconds + "s "
  //     );
  //   } else {
  //     $("#countdown-timer").html("Event is Live!");
  //   }

  //   // Stop the countdown if both events are live
  //   if (distance < 0) {
  //     clearInterval(countdownFunction);
  //   }
  // }, 1000);

  // Initialize functions
  toggleNav();
  // accordionFunc();
  highlightComp();
  attendeeComp();
  testimonialComp();
  // $(window).on("scroll", function () {
  //   AOS.refresh();
  // });
});
