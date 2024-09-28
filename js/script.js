$(document).ready(function () {
  const $window = $(window);
  const $navbar = $("#navbar");
  const $hamburger = $(".hamburger-icons");
  const $aside = $("aside");
  const $sponsSlides = $(".spons-slide-1, .spons-slide-2");
  const year = new Date().getFullYear();

  // Set current year
  $(".year").html(year);

  // Initialize highlights slider
  $(".highlights-slider").slick({
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 10,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    arrows: false,
    cssEase: "linear",
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  });

  // Function to calculate slidesToShow based on window width
  function getSlidesToShow() {
    return Math.ceil($window.width() / 150);
  }

  // Initialize sponsor sliders
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

  $(".spons-slide-1").slick(slickSettings1);
  $(".spons-slide-2").slick(slickSettings2);

  // Throttle function to optimize resize event handling
  let resizeTimeout;
  $window.on("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      const newSlidesToShow = getSlidesToShow();
      $sponsSlides.slick(
        "slickSetOption",
        "slidesToShow",
        newSlidesToShow,
        true
      );
    }, 200); // Delay to prevent excessive updates during resizing
  });

  // Hamburger menu toggle
  $hamburger.on("click", function () {
    $(this).toggleClass("open");
    $aside.toggleClass("active");
  });

  $(document).on("click", function (event) {
    if (
      !$aside.is(event.target) &&
      !$aside.has(event.target).length &&
      !$hamburger.is(event.target) &&
      !$hamburger.has(event.target).length
    ) {
      $aside.removeClass("active");
      $hamburger.removeClass("open");
    }
  });

  // Sticky navbar functionality
  $window.on("scroll", function () {
    const scrollTop = $window.scrollTop();
    const windowHeight = $window.height();
    $navbar.toggleClass("sticky", scrollTop > 150);

    $(".odometer").each(function () {
      const $this = $(this);
      const $countupContainer = $this.closest(".countup-container");
      const parentSectionTop = $countupContainer.length
        ? $countupContainer.offset().top
        : 0;

      // Ensure parentSectionTop is valid
      if (parentSectionTop === 0) return;

      if (scrollTop > parentSectionTop - (windowHeight - 200)) {
        if ($this.data("status") === "yes") {
          const count = $this.data("count");

          if (typeof count === "number" || !isNaN(parseFloat(count))) {
            $this.html(count); // Update the HTML content
            $this.data("status", "no"); // Update the data attribute
          }
        }
      }
    });
  });
});
