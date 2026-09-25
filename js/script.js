$(function () {
  setTimeout(function () {
    $("#preloader").fadeOut(500, function () {
      $(".main-container").fadeIn(500, function () {
        AOS.init({ duration: 900, once: true, offset: 80 });
      });
    });
  }, 800);
});

$(document).ready(function () {
  const $hamburger = $(".hamburger");
  const $asideMenu = $(".aside-container");
  const $asideMenuLink = $(".aside-container a");

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

  const eventDate = new Date("2026-11-19T09:00:00+01:00");

  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      $("#countdown-timer").text("See you in Lagos");
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    $("#countdown-timer").text(
      `${days}d ${hours}h ${minutes}m ${seconds}s`,
    );
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  $(".year").text(new Date().getFullYear());

  const $highlightSlideOne = $(".highlight-slider-1");
  const $highlightSlideTwo = $(".highlight-slider-2");
  const $highlightSlideThree = $(".highlight-slider-3");

  const populateHighlightSlides = () => {
    if (!$highlightSlideOne.length) return;

    const TOTAL_HIGHLIGHT_IMAGES = 120;

    const shuffle = (array) => {
      const copy = array.slice();
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    const highlightImages = Array.from(
      { length: TOTAL_HIGHLIGHT_IMAGES },
      (_, index) => `assets/highlights/${index + 1}.jpg`,
    );

    const shuffledHighlights = shuffle(highlightImages);
    const slider1 = [];
    const slider2 = [];
    const slider3 = [];

    shuffledHighlights.forEach((imagePath, index) => {
      if (index % 3 === 0) slider1.push(imagePath);
      if (index % 3 === 1) slider2.push(imagePath);
      if (index % 3 === 2) slider3.push(imagePath);
    });

    const imageTag = (src) =>
      `<img src="${src}" alt="Eventhive event highlight" loading="lazy" />`;

    $highlightSlideOne.html(slider1.map(imageTag).join(""));
    $highlightSlideTwo.html(slider2.map(imageTag).join(""));
    $highlightSlideThree.html(slider3.map(imageTag).join(""));
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
  };

  populateHighlightSlides();
  highlightComp();

  $(window).on("scroll", function () {
    AOS.refresh();
  });
});
