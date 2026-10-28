$(function () {
  const refreshAos = function () {
    if (window.AOS) {
      AOS.refresh();
    }
  };

  const revealPage = function () {
    $("#preloader").fadeOut(500, function () {
      $(".main-container").fadeIn(500, function () {
        if (window.AOS) {
          AOS.init({
            duration: 800,
            once: true,
            offset: 40,
            easing: "ease-out-cubic",
            mirror: false,
          });
        }
        $(window).trigger("scroll");
        setTimeout(refreshAos, 200);
        setTimeout(refreshAos, 800);
        setTimeout(refreshAos, 1600);
      });
    });
  };

  setTimeout(revealPage, 600);
});

$(document).ready(function () {
  const $hamburger = $(".hamburger");
  const $asideMenu = $(".aside-container");
  const $asideMenuLink = $(".aside-container a");
  const $highlightSlideOne = $(".highlight-slider-1");
  const $highlightSlideTwo = $(".highlight-slider-2");
  const $highlightSlideThree = $(".highlight-slider-3");

  const $attendeeSlideOne = $(
    ".who-participates-slide-1, .who-attends-slide-1"
  ).first();
  const $attendeeSlideTwo = $(
    ".who-participates-slide-2, .who-attends-slide-2"
  ).first();
  const $attendeeSlideThree = $(
    ".who-participates-slide-3, .who-attends-slide-3"
  ).first();

  const $slides = $(
    ".who-participates-slide-1, .who-participates-slide-2, .who-participates-slide-3, .who-attends-slide-1, .who-attends-slide-2, .who-attends-slide-3"
  );

  $(".get-ticket-btn").click(function () {
    $("#ticket-popup").fadeIn();
  });

  $(".close-btn").click(function () {
    $("#ticket-popup").fadeOut();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".popup-content, .get-ticket-btn").length) {
      $("#ticket-popup").fadeOut();
    }
  });

  const toggleNav = () => {
    $hamburger.on("click", function () {
      $(this).toggleClass("open");
      $asideMenu.toggleClass("open");
    });

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

  const refreshAos = function () {
    if (window.AOS) {
      AOS.refresh();
    }
  };

  const highlightComp = () => {
    if (!$highlightSlideOne.length) return;

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
        { breakpoint: 991, settings: { slidesToShow: 3 } },
        { breakpoint: 767, settings: { slidesToShow: 2 } },
        { breakpoint: 567, settings: { slidesToShow: 1 } },
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
    refreshAos();
  };

  const attendeeComp = () => {
    if (!$attendeeSlideOne.length) return;

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
    refreshAos();

    let resizeTimeout;
    $(window).on("resize", function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        const newSlidesToShow = getSlidesToShow();
        $slides.slick("slickSetOption", "slidesToShow", newSlidesToShow, true);
        refreshAos();
      }, 200);
    });
  };

  const runStatCounts = function () {
    $(".stat-num").each(function () {
      const $el = $(this);
      if ($el.data("status") !== "yes") return;

      const $section = $el.closest("#counter, .key-stats");
      if (!$section.length) return;

      const parentTop = $section.offset().top;
      if ($(window).scrollTop() > parentTop - ($(window).height() - 200)) {
        const target = Number($el.data("count")) || 0;
        $({ n: 0 }).animate(
          { n: target },
          {
            duration: 1200,
            step: function (now) {
              $el.text(Math.floor(now));
            },
            complete: function () {
              $el.text(target);
            },
          }
        );
        $el.data("status", "no");
      }
    });
  };

  let aosScrollTick = false;
  $(window).on("scroll", function () {
    runStatCounts();
    if (!aosScrollTick) {
      aosScrollTick = true;
      window.requestAnimationFrame(function () {
        refreshAos();
        aosScrollTick = false;
      });
    }
  });

  setTimeout(function () {
    runStatCounts();
    $(".stat-num").each(function () {
      const $el = $(this);
      if ($el.data("status") === "yes") {
        $el.text($el.data("count"));
        $el.data("status", "no");
      }
    });
    refreshAos();
  }, 1800);

  $(window).on("load", refreshAos);

  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const eventDate = new Date("June 30, 2027 09:00:00").getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 0) {
      $("#countdown-timer").html(
        days + "d " + hours + "h " + minutes + "m " + seconds + "s "
      );
    } else {
      $("#countdown-timer").html("Event is Live!");
      clearInterval(countdownFunction);
    }
  }, 1000);

  $(".year").text(new Date().getFullYear());

  toggleNav();
  highlightComp();
  attendeeComp();
});
