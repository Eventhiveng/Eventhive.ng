$(function () {
  // Simulate loading delay for 1 second
  setTimeout(function () {
    // Fade out the preloader
    $(".preloader").fadeOut("500", function () {
      // Show the main content
      $(".main-container").fadeIn("500", function () {
        AOS.init({
          duration: 800,
        });
      });
    });
  }, 1000); // Delay of 1 second
});
// Initialize AOS
$(document).ready(() => {
  const date = new Date().getFullYear();
  $(".year").html(date);

  // Nav
  // Toggle hamburger and aside menu
  $(".hamburger").on("click", function () {
    $(this).toggleClass("active");
    $(".aside-menu").toggleClass("active");
  });

  // Close the aside menu when a link is clicked
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
      // Scrolling up
      $("#navbar").addClass("sticky");
      // $logo.attr("src", "/assets/images/logo/tech-logo-icon-yellow.svg");
    } else {
      // Scrolling down
      $("#navbar").removeClass("sticky");
      // $logo.attr("src", "/assets/images/logo/tech-logo-icon.svg");
    }

    lastScrollTop = $(window).scrollTop();
  });

  // Marquee
  // const $marquee = $("#marquee");
  // let isDown = false;
  // let startX, scrollLeft;

  // $(".marquee-wrapper")
  //   .on("mousedown", function (e) {
  //     isDown = true;
  //     $(this).css("cursor", "grabbing");
  //     startX = e.pageX - $(this).offset().left;
  //     scrollLeft = $(this).scrollLeft();
  //     $marquee.css("animation-play-state", "paused"); // pause animation while dragging
  //   })
  //   .on("mouseleave mouseup", function () {
  //     isDown = false;
  //     $(this).css("cursor", "grab");
  //     $marquee.css("animation-play-state", "running"); // resume animation
  //   })
  //   .on("mousemove", function (e) {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - $(this).offset().left;
  //     const walk = (x - startX) * 2; // drag speed
  //     $(this).scrollLeft(scrollLeft - walk);
  //   });

  // Sponsor25 Marquee
  const spons25Img = (sponsor) => `
      <img src="${sponsor}" alt="eventhive">
    `;

  $(".sponsors-25-slide-1").html(attSlideOne.map(spons25Img).join(""));
  $(".sponsors-25-slide-2").html(attSlideTwo.map(spons25Img).join(""));
  $(".sponsors-25-slide-3").html(attSlideThree.map(spons25Img).join(""));

  function getSlidesToShow() {
    return Math.ceil($(window).width() / 250);
  }

  const sponsSettings1 = {
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

  const sponsSettings2 = $.extend({}, sponsSettings1, {
    speed: 3000,
    rtl: true,
  });

  const sponsSettings3 = $.extend({}, sponsSettings1, {
    speed: 6000,
  });

  $(".sponsors-25-slide-1").slick(sponsSettings1);
  $(".sponsors-25-slide-2").slick(sponsSettings2);
  $(".sponsors-25-slide-3").slick(sponsSettings3);

  const $sponsSlide = $(
    ".sponsors-25-slide-1, .sponsors-25-slide-2, .sponsors-25-slide-3"
  );

  // Throttle function to optimize resize event handling
  let resizeTimeout1;
  $(window).on("resize", function () {
    clearTimeout(resizeTimeout1);
    resizeTimeout1 = setTimeout(function () {
      const newSlidesToShow = getSlidesToShow();
      $sponsSlide.slick(
        "slickSetOption",
        "slidesToShow",
        newSlidesToShow,
        true
      );
    }, 200); // Delay to prevent excessive updates during resizing
  });

  // Testimonial
  var testimonialSwiper = new Swiper(".testimonial-swiper", {
    loop: true,
    effect: "fade",
    speed: 4000,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-pagination",
      clickable: true,
    },
  });

  // Generate speakers for carousel (only first 10 for example)
  // speakers.slice(0, 10).forEach((speaker) => {
  speakers.forEach((speaker) => {
    $("#speakers-carousel-wrapper").append(`
      <div class="swiper-slide">
         <div class="speaker-box">
          <a href="${speaker.linkedIn}">
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

  // Generate all speakers for modal
  speakers.forEach((speaker) => {
    $("#speakers-grid").append(`
      <div class="speaker-box">
        <a href="${speaker.linkedIn}">
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

  // Init Speaker Swiper
  const speakerSwiper = new Swiper(".speakers-carousel", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: false,
    speed: 4000,
    spaceBetween: 20,
    // pagination: { el: ".speakers-pagination", clickable: true },
    navigation: {
      nextEl: ".speakers-next",
      prevEl: ".speakers-prev",
    },
    autoplay: { delay: 4000 },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });

  // Open Modal
  $("#view-all-speakers").click(function () {
    $(".speakers-modal").fadeIn();
  });

  // Close Modal
  $(".close").click(function () {
    $(".speakers-modal").fadeOut();
  });

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

  // Attendees
  const sponsorImage = (sponsor) => `
      <img src="${sponsor}" alt="eventhive">
    `;

  $(".who-attends-slide-1").html(attSlideOne.map(sponsorImage).join(""));
  $(".who-attends-slide-2").html(attSlideTwo.map(sponsorImage).join(""));
  $(".who-attends-slide-3").html(attSlideThree.map(sponsorImage).join(""));

  // function getSlidesToShow() {
  //   return Math.ceil($(window).width() / 250);
  // }

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

  $(".who-attends-slide-1").slick(slickSettings1);
  $(".who-attends-slide-2").slick(slickSettings2);
  $(".who-attends-slide-3").slick(slickSettings3);

  const $slides = $(
    ".who-attends-slide-1, .who-attends-slide-2, .who-attends-slide-3"
  );

  // Throttle function to optimize resize event handling
  let resizeTimeout;
  $(window).on("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      const newSlidesToShow = getSlidesToShow();
      $slides.slick("slickSetOption", "slidesToShow", newSlidesToShow, true);
    }, 200); // Delay to prevent excessive updates during resizing
  });

  // Countup
  $(window).scroll(function () {
    $(".odometer").each(function () {
      let parent_section_postion = $(this).closest(".count-box").position();
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

  // Countdown
  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const eventDate = new Date("February 17, 2026 00:00:00").getTime();

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

  // $(window).on("scroll", function () {
  //   let scrolled = $(window).scrollTop();
  //   $(".bg-fixed").css(
  //     "background-position",
  //     "center " + scrolled * 0.005 + "px"
  //   );
  // });
});

// AOS.init({
//   duration: 800,
//   // offset: 100,
//   // once: true,
// });

// Initialize Jarallax
// jarallax(document.querySelectorAll(".jarallax"), {
//   speed: 0.5,
//   videoSrc: "assets/videos/hero.mp4",
// });

// Preloader

// window.addEventListener("load", function () {
//   const preloader = document.querySelector(".preloader");
//   preloader.classList.add("hidden");
//   setTimeout(() => {
//     preloader.style.display = "none";
//   }, 500);
// });

// // $(".slider").each(function (index) {
// //   const $this = $(this);

// //   // Add swiper class
// //   $this.addClass("swiper");

// //   // Wrap all images inside swiper-wrapper
// //   $this.children("img").wrapAll('<div class="swiper-wrapper"></div>');

// //   // Wrap each image in swiper-slide
// //   $this.find(".swiper-wrapper img").wrap("<div class='swiper-slide'></div>");

// //   // Init swiper for each slider
// //   new Swiper(this, {
// //     slidesPerView: 5,
// //     spaceBetween: 20,
// //     loop: true,
// //     speed: 5000,
// //     autoplay: {
// //       delay: 0,
// //       disableOnInteraction: false,
// //       reverseDirection: index === 1, // middle row goes right-to-left
// //     },
// //   });
// // });

// $(".slider").each(function () {
//   const $this = $(this);

//   // Add swiper class
//   $this.addClass("swiper");

//   // Wrap all children in swiper-wrapper
//   $this.children("img").wrapAll('<div class="swiper-wrapper"></div>');

//   // Add swiper-slide to each image's parent
//   $this.find(".swiper-wrapper img").wrap("<div class='swiper-slide'></div>");
// });

// const commonConfig = {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   loop: true,
//   speed: 5000,
//   allowTouchMove: true,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//   },
// };

// new Swiper(".highlight-slider-1", {
//   ...commonConfig,
//   autoplay: { ...commonConfig.autoplay, reverseDirection: false },
// });

// new Swiper(".highlight-slider-2", {
//   ...commonConfig,
//   autoplay: { ...commonConfig.autoplay, reverseDirection: true },
// });

// new Swiper(".highlight-slider-3", {
//   ...commonConfig,
//   autoplay: { ...commonConfig.autoplay, reverseDirection: false },
// });
