$(function () {
  setTimeout(function () {
    $(".preloader").fadeOut("500", function () {
      $(".main-container").fadeIn("500", function () {
        AOS.init({
          duration: 800,
        });
      });
    });
  }, 1000);
});

$(document).ready(() => {
  const date = new Date().getFullYear();
  $(".year").html(date);

  // Nav
  $(".hamburger").on("click", function () {
    $(this).toggleClass("active");
    $(".aside-menu").toggleClass("active");
  });

  $(".aside-menu a, .cancel-menu").on("click", function () {
    $(".aside-menu").removeClass("active");
    $(".hamburger").removeClass("active");
  });

  $(document).on("click", function (event) {
    if (
      !$(".aside-menu").is(event.target) &&
      !$(".aside-menu").has(event.target).length &&
      !$(".hamburger").is(event.target) &&
      !$(".hamburger").has(event.target).length
    ) {
      $(".aside-menu").removeClass("active");
      $(".hamburger").removeClass("active");
    }
  });

  let lastScrollTop = 0;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() < lastScrollTop && $(window).scrollTop() > 200) {
      $("#navbar").addClass("sticky");
    } else {
      $("#navbar").removeClass("sticky");
    }
    lastScrollTop = $(window).scrollTop();
  });

  function getSlidesToShow() {
    return Math.ceil($(window).width() / 220);
  }

  // Companies come marquee (2 rows)
  const companyImg = (src) => `
    <div class="company-logo">
      <img src="${src}" alt="Lagos Tech Fest sponsor">
    </div>
  `;

  if (typeof companiesComeOne !== "undefined") {
    $(".companies-slide-1").html(companiesComeOne.map(companyImg).join(""));
    $(".companies-slide-2").html(companiesComeTwo.map(companyImg).join(""));

    const companySettings1 = {
      infinite: true,
      speed: 2500,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: getSlidesToShow(),
      slidesToScroll: 1,
      arrows: false,
      cssEase: "linear",
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable: false,
      variableWidth: true,
    };

    const companySettings2 = $.extend({}, companySettings1, {
      speed: 3500,
      rtl: true,
    });

    $(".companies-slide-1").slick(companySettings1);
    $(".companies-slide-2").slick(companySettings2);
  }

  // Partners marquee (sponsorSlide 1-3)
  const partnerImg = (src) => `
    <div class="partner-logo">
      <img src="${src}" alt="Lagos Tech Fest partner">
    </div>
  `;

  $(".partners-slide-1").html(sponsorSlideOne.map(partnerImg).join(""));
  $(".partners-slide-2").html(sponsorSlideTwo.map(partnerImg).join(""));
  $(".partners-slide-3").html(sponsorSlideThree.map(partnerImg).join(""));

  const partnerSettings1 = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
  };

  const partnerSettings2 = $.extend({}, partnerSettings1, {
    speed: 3000,
    rtl: true,
  });

  const partnerSettings3 = $.extend({}, partnerSettings1, {
    speed: 4500,
  });

  $(".partners-slide-1").slick(partnerSettings1);
  $(".partners-slide-2").slick(partnerSettings2);
  $(".partners-slide-3").slick(partnerSettings3);

  let resizeTimeout;
  $(window).on("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      const n = getSlidesToShow();
      $(".partners-slide-1, .partners-slide-2, .partners-slide-3").slick(
        "slickSetOption",
        "slidesToShow",
        n,
        true
      );
      if ($(".companies-slide-1").hasClass("slick-initialized")) {
        $(".companies-slide-1, .companies-slide-2").slick(
          "slickSetOption",
          "slidesToShow",
          n,
          true
        );
      }
    }, 200);
  });

  // Testimonials are a static grid — no swiper

  // Speakers
  speakers.forEach((speaker) => {
    $("#speakers-carousel-wrapper").append(`
      <div class="swiper-slide">
        <div class="speaker-box">
          <a href="${speaker.linkedIn || "#"}">
            <div class="image">
              <img src="${speaker.image}" alt="${speaker.name}">
            </div>
            <div class="speaker-info">
              <h3 class="name">${speaker.name}</h3>
              <p class="title">${speaker.title}</p>
              <p class="company">${speaker.company}</p>
            </div>
          </a>
        </div>
      </div>
    `);
  });

  speakers.forEach((speaker) => {
    $("#speakers-grid").append(`
      <div class="speaker-box">
        <a href="${speaker.linkedIn || "#"}">
          <div class="image">
            <img src="${speaker.image}" alt="${speaker.name}">
          </div>
          <div class="speaker-info">
            <h3 class="name">${speaker.name}</h3>
            <p class="title">${speaker.title}</p>
            <p class="company">${speaker.company}</p>
          </div>
        </a>
      </div>
    `);
  });

  new Swiper(".speakers-carousel", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    speed: 4000,
    spaceBetween: 20,
    navigation: {
      nextEl: ".speakers-next",
      prevEl: ".speakers-prev",
    },
    autoplay: { delay: 4000 },
    breakpoints: {
      0: { slidesPerView: 1, slidesPerGroup: 1 },
      576: { slidesPerView: 2, slidesPerGroup: 2 },
      992: { slidesPerView: 3, slidesPerGroup: 3 },
      1200: { slidesPerView: 4, slidesPerGroup: 4 },
    },
  });

  $("#view-all-speakers").click(function () {
    $(".speakers-modal").fadeIn();
  });

  $(".close, .speakers-modal-overlay").click(function (e) {
    if (
      e.target === this ||
      $(e.target).hasClass("close") ||
      $(e.target).hasClass("speakers-modal-overlay")
    ) {
      $(".speakers-modal").fadeOut();
    }
  });

  // Gallery highlight sliders (wait for inline gallery script to inject slides)
  function initGallerySliders() {
    if (!$(".highlight-slider-1").length || $(".highlight-slider-1").hasClass("slick-initialized")) {
      return false;
    }

    const highlightSettings1 = {
      infinite: true,
      speed: 4000,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 4,
      slidesToScroll: 1,
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
      speed: 5500,
    });

    $(".highlight-slider-1").slick(highlightSettings1);
    $(".highlight-slider-2").slick(highlightSettings2);
    $(".highlight-slider-3").slick(highlightSettings3);
    return true;
  }

  if (!initGallerySliders()) {
    const galleryPoll = setInterval(function () {
      if (initGallerySliders()) clearInterval(galleryPoll);
    }, 100);
    setTimeout(function () {
      clearInterval(galleryPoll);
    }, 3000);
  }

  // Countup
  $(window).scroll(function () {
    $(".odometer").each(function () {
      const $box = $(this).closest(".count-box");
      if (!$box.length) return;
      const top = $box.offset().top;
      if ($(window).scrollTop() > top - ($(window).height() - 200)) {
        if ($(this).data("status") == "yes") {
          $(this).html($(this).data("count"));
          $(this).data("status", "no");
        }
      }
    });
    AOS.refresh();
  });

  // Countdown — Feb 22, 2027
  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const eventDate = new Date("February 22, 2027 00:00:00").getTime();
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
});
