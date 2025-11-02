/* global $, document, Rellax */
(function () {
  // Initialize Rellax for parallax effects
  let rellax;
  function initRellax() {
    if (typeof Rellax !== "undefined") {
      rellax = new Rellax(".rellax", {
        speed: -7,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      });
    }
  }

  // Initialize on DOM ready
  $(function () {
    initRellax();
  });
  // function setBackgrounds() {
  //   $("[data-bg]").each(function () {
  //     const url = $(this).attr("data-bg");
  //     if (url) $(this).css("background-image", `url("${url}")`);
  //   });
  // }

  function smoothScroll() {
    $('a[href^="#"]').on("click", function (e) {
      const target = $($(this).attr("href"));
      if (target.length) {
        e.preventDefault();
        window.scrollTo({ top: target.offset().top - 70, behavior: "smooth" });
      }
    });
  }

  // function mobileMenu() {
  //   const $toggle = $(".hamburger");
  //   const $nav = $(".site-nav");
  //   $toggle.on("click", function () {
  //     $nav.toggleClass("open");
  //   });
  //   $(".site-nav a").on("click", function () {
  //     $nav.removeClass("open");
  //   });
  // }
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

  $(window).on("scroll", function () {
    var wScroll = $(this).scrollTop();
    wScroll > 180
      ? $(".site-header-container").addClass("scrolled")
      : $(".site-header-container").removeClass("scrolled");
  });

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
  });

  // Parallax Background
  // $.stellar({
  //   responsive: true,
  // });

  // function animateCounters() {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return;
  //         $(entry.target)
  //           .find(".odometer[data-status='yes']")
  //           .each(function () {
  //             const $el = $(this);
  //             const target = parseInt($el.attr("data-count") || "0", 10);
  //             const step = Math.max(1, Math.floor(target / 80));
  //             let current = 0;
  //             $el.attr("data-status", "done");
  //             const timer = setInterval(function () {
  //               current = Math.min(target, current + step);
  //               $el.text(current.toString());
  //               if (current >= target) {
  //                 $el.text(target.toString());
  //                 clearInterval(timer);
  //               }
  //             }, 18);
  //           });
  //         observer.unobserve(entry.target);
  //       });
  //     },
  //     { threshold: 0.35 }
  //   );

  //   const $section = document.querySelector("#numbers");
  //   if ($section) observer.observe($section);
  // }

  function simpleSlider() {
    const $slides = $(".conversation-container .slide");
    if (!$slides.length) return;
    let i = 0;
    $slides.removeClass("active").eq(i).addClass("active");
    function show(index) {
      i = (index + $slides.length) % $slides.length;
      $slides
        .removeClass("active")
        .eq(i)
        .fadeIn(160)
        .addClass("active")
        .siblings(".slide")
        .hide();
    }
    $(".conversation-container .next").on("click", function () {
      show(i + 1);
    });
    $(".conversation-container .prev").on("click", function () {
      show(i - 1);
    });
    // auto-advance
    setInterval(function () {
      show(i + 1);
    }, 6000);
  }

  $(function () {
    // setBackgrounds();
    smoothScroll();
    // mobileMenu();
    // animateCounters();
    simpleSlider();
  });
})();
