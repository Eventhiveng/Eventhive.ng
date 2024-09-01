$(document).ready(function () {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    delay: 100,
    once: true,
  });

  // Highlight Slider One
  $(".slider-1").slick({
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
  });

  // Highlight Slider Two
  $(".slider-2").slick({
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 10,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    arrows: false,
    cssEase: "linear",
    rtl: true,

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
  });

  //  Testimonial Slider
  $(".testimonial-slide").slick({
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    arrows: false,
    dots: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let sts = Math.ceil($(window).width() / 150);

  // Previos Sponsors Slide
  $(".prev-sponsors-slide-1").slick({
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 10,
    slidesToShow: sts,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".prev-sponsors-slide-2").slick({
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 10,
    slidesToShow: sts,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    rtl: true,
  });

  $(window).on("resize", function () {
    let sts = Math.ceil($(window).width() / 150);

    $(".prev-sponsors-slide-1, .prev-sponsors-slide-2").slick(
      "slickSetOption",
      "slidesToShow",
      sts,
      true
    );
  });

  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("open");
    $("aside").toggleClass("active");
  });

  let lastScrollTop = 0;
  $(window).on(
    "scroll",
    _.throttle(function () {
      let currentScrollTop = $(window).scrollTop();
      let windowHeight = $(window).height();
      let delayTime = $(window).width() <= 768 ? 50 : 100;

      $(".speakers-box, .whats-new-box").each(function (i) {
        let boxTop = $(this).offset().top;
        if (currentScrollTop + windowHeight > boxTop + $(this).height() / 10) {
          setTimeout(() => {
            $(this).addClass("is-showing");
          }, delayTime * i);
        }
      });

      $(".scroll-top").toggleClass("show", currentScrollTop > 500);
      $("nav").toggleClass("sticky", currentScrollTop > 150);

      lastScrollTop = currentScrollTop;
    }, 200)
  );

  // $(window).on("scroll", function () {
  //   let wScroll = $(window).scrollTop();

  //   wScroll > 150
  //     ? $("nav").addClass("sticky")
  //     : $("nav").removeClass("sticky");

  //   wScroll > 500
  //     ? $(".scroll-top").addClass("show")
  //     : $(".scroll-top").removeClass("show");

  //   let delayTime;
  //   if ($(window).width() <= 768) {
  //     // For mobile screens (width 768px or less)
  //     delayTime = 50;
  //   } else {
  //     // For larger screens
  //     delayTime = 150;
  //   }

  //   $(".speakers-box").each(function (i) {
  //     let boxTop = $(this).offset().top;
  //     let windowBottom = wScroll + $(window).height();

  //     if (windowBottom > boxTop + $(this).height() / 10) {
  //       setTimeout(() => {
  //         $(this).addClass("is-showing");
  //       }, delayTime * i);
  //     }
  //   });

  //   $(".whats-new-box").each(function (i) {
  //     let boxTop = $(this).offset().top;
  //     let windowBottom = wScroll + $(window).height();

  //     if (windowBottom > boxTop + $(this).height() / 10) {
  //       setTimeout(() => {
  //         $(this).addClass("is-showing");
  //       }, delayTime * i);
  //     }
  //   });
  // });

  $(document).scroll(function () {
    $(".odometer").each(function () {
      let parent_section_postion = $(this).closest(".right").position();
      let parent_section_top = parent_section_postion.top;
      if (
        $(document).scrollTop() >
        parent_section_top - ($(window).height() - 200)
      ) {
        if ($(this).data("status") == "yes") {
          $(this).html($(this).data("count"));
          $(this).data("status", "no");
        }
      }
    });
  });

  $(".scroll-top").on("click", function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
