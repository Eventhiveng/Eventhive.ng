$(document).ready(function () {
  const $window = $(window);
  const $odometer = $(".odometer");
  const $asideMenu = $("#aside .aside-container");
  const $asideMenuLink = $("#aside .aside-container a");
  const $hamburger = $(".hamburger");
  const $navbar = $("#nav");
  const $sections = $("section");
  const $navLinks = $(".nav-links a");
  const $slides = $(
    ".who-participates-slide-1, .who-participates-slide-2, .who-participates-slide-3"
  );

  window.scrollTo(0, 0);

  AOS.init({ duration: 1000 });
  $(".year").html(new Date().getFullYear());

  $(".has-submenu").on({
    mouseenter: function () {
      $(this).find(".submenu").fadeIn();
    },
    mouseleave: function () {
      $(this).find(".submenu").fadeOut();
    },
    click: function () {
      $(this).find(".submenu").fadeToggle();
    },
  });

  // Count Up Function
  const countUp = (scrollTop, windowHeight) => {
    $odometer.each(function () {
      const $this = $(this);
      const $eventContainer = $this.closest(".event-box");
      const parentSectionTop = $eventContainer.length
        ? $eventContainer.offset().top
        : 0;

      if (
        parentSectionTop &&
        scrollTop > parentSectionTop - (windowHeight - 200)
      ) {
        if ($this.data("status") === "yes") {
          const count = $this.data("count");
          if (!isNaN(parseFloat(count))) {
            $this.html(count).data("status", "no");
          }
        }
      }
    });
  };

  // Who Participates Slides
  const sliderComp = () => {
    const getSlidesToShow = () => Math.ceil($window.width() / 250);
    const slickBaseSettings = {
      infinite: true,
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

    $(".who-participates-slide-1").slick({ ...slickBaseSettings, speed: 2000 });
    $(".who-participates-slide-2").slick({
      ...slickBaseSettings,
      speed: 3000,
      rtl: true,
    });
    $(".who-participates-slide-3").slick({ ...slickBaseSettings, speed: 6000 });

    let resizeTimeout;
    $window.on("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        $slides.slick(
          "slickSetOption",
          "slidesToShow",
          getSlidesToShow(),
          true
        );
      }, 200);
    });
  };

  // Countdown Timer
  const eventDateNairobi = new Date("April 30, 2025 00:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDateNairobi - now;
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      $("#countdown-timer").html(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
      $("#countdown-timer").html("Event is Live!");
    }
  }, 1000);

  // Toggle Nav
  const toggleNav = () => {
    $hamburger.on("click", function () {
      $(this).toggleClass("active");
      $asideMenu.toggleClass("active");
    });

    $asideMenuLink.on("click", function () {
      $asideMenu.removeClass("active");
      $hamburger.removeClass("active");
    });

    $(document).on("click", (event) => {
      if (
        !$asideMenu.is(event.target) &&
        !$asideMenu.has(event.target).length &&
        !$hamburger.is(event.target) &&
        !$hamburger.has(event.target).length
      ) {
        $asideMenu.removeClass("active");
        $hamburger.removeClass("active");
      }
    });
  };

  // Sticky Nav & Active Link
  let lastScrollTop = 0;
  const handleScroll = () => {
    const scrollTop = $window.scrollTop();
    const windowHeight = $window.height();

    if (Math.abs(scrollTop - lastScrollTop) > 50) {
      countUp(scrollTop, windowHeight);
      scrollTop > 200
        ? $navbar.addClass("sticky")
        : $navbar.removeClass("sticky");

      let currentSection = "";
      $sections.each(function () {
        if (scrollTop >= $(this).offset().top) {
          currentSection = $(this).attr("id");
        }
      });

      $navLinks
        .removeClass("active")
        .filter(`[href="#${currentSection}"]`)
        .addClass("active");
      lastScrollTop = scrollTop;
    }
  };

  let scrollThrottle;
  $window.on("scroll", () => {
    if (!scrollThrottle) {
      scrollThrottle = requestAnimationFrame(() => {
        handleScroll();
        AOS.refresh();
        scrollThrottle = null;
      });
    }
  });

  toggleNav();
  sliderComp();
  $window.trigger("scroll");
});

// $(document).ready(function () {
//   const $window = $(window);
//   const $odometer = $(".odometer");
//   const $asideMenu = $("#aside .aside-container");
//   const $asideMenuLink = $("#aside .aside-container a");
//   const $hamburger = $(".hamburger");
//   const $navbar = $("#nav");
//   const $sections = $("section");
//   const $navLinks = $(".nav-links a");
//   const $slideOne = $(".who-participates-slide-1");
//   const $slideTwo = $(".who-participates-slide-2");
//   const $slideThree = $(".who-participates-slide-3");
//   const $slides = $(
//     ".who-participates-slide-1, .who-participates-slide-2, .who-participates-slide-3"
//   );

//   window.scrollTo(0, 0);

//   AOS.init({
//     duration: 1000,
//   });

//   const $year = $(".year");

//   $year.html(new Date().getFullYear());

//   $(".has-submenu")
//     .on("mouseenter", function () {
//       $(this).find(".submenu").fadeIn();
//     })
//     .on("mouseleave", function () {
//       $(this).find(".submenu").fadeOut();
//     })
//     .on("click", function () {
//       $(this).find(".submenu").fadeToggle();
//     });

//   // Count Up Function
//   const countUp = (scrollTop, windowHeight) => {
//     $odometer.each(function () {
//       const $this = $(this);
//       const $eventContainer = $this.closest(".event-box");
//       const parentSectionTop = $eventContainer.length
//         ? $eventContainer.offset().top
//         : 0;

//       // Ensure parentSectionTop is valid
//       if (parentSectionTop === 0) return;

//       if (scrollTop > parentSectionTop - (windowHeight - 200)) {
//         if ($this.data("status") === "yes") {
//           const count = $this.data("count");

//           if (typeof count === "number" || !isNaN(parseFloat(count))) {
//             $this.html(count); // Update the HTML content
//             $this.data("status", "no"); // Update the data attribute
//           }
//         }
//       }
//     });
//   };

//   // Who participates slides
//   const sliderComp = () => {
//     // Function to calculate slidesToShow based on window width
//     function getSlidesToShow() {
//       return Math.ceil($window.width() / 250);
//     }

//     const slickSettings1 = {
//       infinite: true,
//       speed: 2000,
//       autoplay: true,
//       autoplaySpeed: 10,
//       slidesToShow: getSlidesToShow(),
//       slidesToScroll: 1,
//       lazyLoad: "ondemand",
//       arrows: false,
//       cssEase: "linear",
//       pauseOnHover: false,
//       pauseOnFocus: false,
//       draggable: false,
//     };

//     const slickSettings2 = $.extend({}, slickSettings1, {
//       speed: 3000,
//       rtl: true,
//     });

//     const slickSettings3 = $.extend({}, slickSettings1, {
//       speed: 6000,
//     });

//     $slideOne.slick(slickSettings1);
//     $slideTwo.slick(slickSettings2);
//     $slideThree.slick(slickSettings3);

//     // Throttle function to optimize resize event handling
//     let resizeTimeout;
//     $window.on("resize", function () {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(function () {
//         const newSlidesToShow = getSlidesToShow();
//         $slides.slick("slickSetOption", "slidesToShow", newSlidesToShow, true);
//       }, 200); // Delay to prevent excessive updates during resizing
//     });
//   };

//   const eventDateNairobi = new Date("April 30, 2025 00:00:00").getTime();

//   const countdownFunction = setInterval(function () {
//     const now = new Date().getTime();

//     // Calculate the time remaining for Nairobi
//     const distanceNairobi = eventDateNairobi - now;
//     const daysNairobi = Math.floor(distanceNairobi / (1000 * 60 * 60 * 24));
//     const hoursNairobi = Math.floor(
//       (distanceNairobi % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutesNairobi = Math.floor(
//       (distanceNairobi % (1000 * 60 * 60)) / (1000 * 60)
//     );
//     const secondsNairobi = Math.floor((distanceNairobi % (1000 * 60)) / 1000);

//     // Display countdown for Nairobi
//     if (distanceNairobi > 0) {
//       $("#countdown-timer").html(
//         daysNairobi +
//           "d " +
//           hoursNairobi +
//           "h " +
//           minutesNairobi +
//           "m " +
//           secondsNairobi +
//           "s "
//       );
//     } else {
//       $("#countdown-timer").html("Event is Live!");
//     }

//     // Stop the countdown if both events are live
//     if (distanceNairobi < 0) {
//       clearInterval(countdownFunction);
//     }
//   }, 1000);

//   // Toggle Nav
//   const toggleNav = () => {
//     // Toggle hamburger and aside menu
//     $hamburger.on("click", function () {
//       $(this).toggleClass("active");
//       $asideMenu.toggleClass("active");
//     });

//     // Close the aside menu when a link is clicked
//     $asideMenuLink.on("click", function () {
//       $asideMenu.removeClass("active");
//       $hamburger.removeClass("active");
//     });

//     $(document).on("click", function (event) {
//       if (
//         !$asideMenu.is(event.target) &&
//         !$asideMenu.has(event.target).length &&
//         !$hamburger.is(event.target) &&
//         !$hamburger.has(event.target).length
//       ) {
//         $asideMenu.removeClass("active");
//         $hamburger.removeClass("active");
//       }
//     });
//   };

//   // Sticky nav
//   const stickyNav = (scrollTop) => {
//     scrollTop > 200
//       ? $navbar.addClass("sticky")
//       : $navbar.removeClass("sticky");
//   };

//   const activeNav = (scrollTop) => {
//     let current = ""; // Track the currently visible section

//     // Loop through each section and check if it's in the current view
//     $sections.each(function () {
//       const sectionTop = $(this).offset().top;
//       // const sectionHeight = $(this).outerHeight();
//       const sectionID = $(this).attr("id");

//       // Check if the current scroll position is within this section
//       if (scrollTop >= sectionTop) {
//         current = sectionID; // Set the ID of the current section
//       }
//     });

//     // Loop through each nav link and add 'active' class to the one corresponding to the current section
//     $navLinks.each(function () {
//       $(this).removeClass("active"); // Remove active class from all links

//       // Get the href attribute and check if it matches the current section ID
//       const target = $(this).attr("href").substring(1); // Remove the '#' from href to get the ID
//       if (target === current) {
//         $(this).addClass("active"); // Add active class to the matching nav link
//       }
//     });
//   };

//   // Initialize functions
//   // $window.on("scroll", function () {
//   //   const scrollTop = $window.scrollTop();
//   //   const windowHeight = $window.height();
//   //   countUp(scrollTop, windowHeight);
//   //   stickyNav(scrollTop);
//   //   activeNav(scrollTop);
//   //   AOS.refresh();
//   // });
//   let scrollThrottle;
//   $window.on("scroll", function () {
//     if (!scrollThrottle) {
//       scrollThrottle = setTimeout(function () {
//         const scrollTop = $window.scrollTop();
//         const windowHeight = $window.height();
//         countUp(scrollTop, windowHeight);
//         stickyNav(scrollTop);
//         activeNav(scrollTop);
//         AOS.refresh();
//         scrollThrottle = null; // Clear the throttle
//       }, 100); // Adjust the time as necessary
//     }
//   });
//   toggleNav();
//   sliderComp();
//   $(window).trigger("scroll");
// });
