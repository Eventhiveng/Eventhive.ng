// $(function () {
//   // Simulate loading delay for 1 second
//   setTimeout(function () {
//     // Fade out the preloader
//     $("#preloader").fadeOut("1000", function () {
//       // Show the main content
//       $(".main-container").fadeIn("500", function () {
//         AOS.init({
//           duration: 1000,
//         });
//       });
//     });
//   }, 1000); // Delay of 1 second
// });

$(document).ready(function () {
  $hamburger = $("#hamburgerMenu");
  $mobileNav = $(".mobile-menu");
  $testimonialSlide = $(".testimonial-slides");
  $attendeeSlideOne = $(".who-participates-slide-1");
  $attendeeSlideTwo = $(".who-participates-slide-2");
  $attendeeSlideThree = $(".who-participates-slide-3");
  $slides = $(
    ".who-participates-slide-1, .who-participates-slide-2, .who-participates-slide-3"
  );
  $highlightSlideOne = $(".highlight-slider-1");
  $highlightSlideTwo = $(".highlight-slider-2");
  $highlightSlideThree = $(".highlight-slider-3");

  // Simulate loading delay for 1 second
  setTimeout(function () {
    // Fade out the preloader
    $("#preloader").fadeOut("1000", function () {
      // Show the main content
      $(".main-container").fadeIn(function () {
        AOS.init({
          duration: 1000,
        });
      });
    });
  }, 1000); // Delay of 1 second

  $hamburger.on("click", function () {
    // Add pulse effect
    $(this).addClass("clicked");
    setTimeout(() => $(this).removeClass("clicked"), 300);

    // Toggle active state for both hamburger and menu
    $(this).toggleClass("active");
    $mobileNav.toggleClass("active");
  });

  // Close menu with close button
  $("#closeMenu").on("click", function () {
    $("#hamburgerMenu").removeClass("active");
    $mobileNav.removeClass("active");
  });

  // Close menu when clicking on links
  $("#navMobile a").on("click", function () {
    $("#hamburgerMenu").removeClass("active");
    $mobileNav.removeClass("active");
  });

  $(window).scroll(function () {
    $(".odometer").each(function () {
      let parent_section_postion = $(this).closest(".stat-item").position();
      let parent_section_top = parent_section_postion.top;
      if (
        $(window).scrollTop() >
        parent_section_top - ($(window).height() - 200)
      ) {
        if ($(this).data("status") == "yes") {
          $(this).html($(this).data("count") + "+");

          // Add + after the odometer
          if (!$(this).next(".plus-sign").length) {
            $(this).after('<span class="plus-sign">+</span>');
          }

          $(this).data("status", "no");
        }
      }
    });

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      AOS.refresh();
    }, 150);

    // Add fixed navbar functionality
    let lastScrollTop = 0;
    const navbar = $("#navbar");
    const scrollThreshold = 150;

    // $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop > scrollThreshold) {
      navbar.addClass("fixed-nav");
    } else {
      navbar.removeClass("fixed-nav");
    }

    lastScrollTop = scrollTop;
    // });
  });

  const accordionFunc = () => {
    // Open the first accordion item by default and set the icon to minus
    $(".accordion-content").first().show();
    $(".accordion-header").first().find(".icon").text("-");

    $(".accordion-header").on("click", function () {
      const $icon = $(this).find(".icon");
      const $content = $(this).next(".accordion-content");

      // Toggle this section's visibility and icon
      $content.slideToggle(200, function () {
        $icon.text($content.is(":visible") ? "-" : "+");
      });

      // Hide other sections and set their icons to plus
      $(".accordion-content").not($content).slideUp(200);
      $(".accordion-header").not($(this)).find(".icon").text("+");
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

  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const eventDate = new Date("October 23, 2025 00:00:00").getTime();

    // Calculate the time remaining
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display countdown
    if (distance > 0) {
      $("#countdown-timer").html(
        days + "d " + hours + "h " + minutes + "m " + seconds + "s "
      );
    } else {
      $("#countdown-timer").html("Event is Live!");
    }

    // Stop the countdown if both events are live
    if (distance < 0) {
      clearInterval(countdownFunction);
    }
  }, 1000);

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

  attendeeComp();
  testimonialComp();
  accordionFunc();
  highlightComp();

  // countdownFunction();
});
