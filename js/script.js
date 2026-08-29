/* ==========================================================================
   SCRIPT.JS — Lagos Transport Fest
   ========================================================================== */

$(function () {
  /* ---------------- AOS ---------------- */
  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
  });

  // Recalculate positions after layout settles (images, fonts, slick, etc.)
  function refreshAos() {
    if (typeof AOS !== "undefined") AOS.refresh();
  }

  $(window).on("load", refreshAos);
  setTimeout(refreshAos, 500);

  let aosRefreshTimer;
  $(window).on("scroll", function () {
    clearTimeout(aosRefreshTimer);
    aosRefreshTimer = setTimeout(refreshAos, 150);
  });

  /* ---------------- Footer year ---------------- */
  $("#year").text(new Date().getFullYear());

  /* ---------------- Nav: mobile toggle ---------------- */
  const $navToggle = $("#navToggle");
  const $mobileNav = $("#mobileNav");
  const $nav = $("#nav");

  function closeMobileNav() {
    $navToggle.removeClass("active").attr("aria-expanded", "false");
    $mobileNav.removeClass("open").attr("aria-hidden", "true");
    $nav.removeClass("menu-open");
    $("body").removeClass("nav-open");
  }

  $navToggle.on("click", function () {
    const open = !$(this).hasClass("active");
    $(this).toggleClass("active", open).attr("aria-expanded", open);
    $mobileNav.toggleClass("open", open).attr("aria-hidden", !open);
    $nav.toggleClass("menu-open", open);
    $("body").toggleClass("nav-open", open);
  });

  $mobileNav.find("a").on("click", closeMobileNav);

  $(window).on("resize", function () {
    if (window.innerWidth > 1024) closeMobileNav();
  });

  /* ---------------- Nav: scroll state + rail progress ---------------- */
  const $railFill = $(".nav-rail-fill");
  const $railNode = $(".nav-rail-node");

  function updateScrollUI() {
    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height() - $(window).height();
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    $railFill.css("width", progress + "%");
    $railNode.css("left", progress + "%");

    $nav.toggleClass("scrolled", scrollTop > 40);
    $("#backToTop").toggleClass("visible", scrollTop > 600);
  }

  $(window).on("scroll", updateScrollUI);
  updateScrollUI();

  /* ---------------- Odometer count-up on scroll into view ---------------- */
  const odometerEls = document.querySelectorAll(".odometer");
  const odometerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const final = el.getAttribute("data-odometer-final");
          el.innerHTML = final;
          odometerObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.6 },
  );

  odometerEls.forEach((el) => odometerObserver.observe(el));

  /* ---------------- Testimonial slider (slick) ---------------- */
  $(".testimonial-slider")
    .on("init setPosition reInit afterChange", refreshAos)
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 600,
      adaptiveHeight: true,
    });

  refreshAos();

  /* ---------------- Smooth in-page nav highlight ---------------- */
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
});
