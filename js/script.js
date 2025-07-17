// AREF Website JavaScript
$(document).ready(function () {
  // Preloader
  //   setTimeout(function () {
  //     $("#preloader").fadeOut("500", function () {
  //       $("#main-container").fadeIn("500", function () {
  //         // Initialize AOS animations
  //         AOS.init({
  //           duration: 800,
  //           easing: "ease-in-out",
  //           once: true,
  //           mirror: false,
  //         });
  //       });
  //     });
  //   }, 1500);
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    // once: true,
    // mirror: false,
  });

  // Navigation scroll effect
  $(window).scroll(function () {
    if ($(window).scrollTop() > 180) {
      $("#nav").addClass("scrolled");
    } else {
      $("#nav").removeClass("scrolled");
    }
  });

  // Mobile menu toggle
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $("#aside-menu").toggleClass("active");
    $("body").toggleClass("menu-open");
  });

  // Close mobile menu when clicking on a link
  $("#aside-menu a").click(function () {
    $(".hamburger").removeClass("active");
    $("#aside-menu").removeClass("active");
    $("body").removeClass("menu-open");
  });

  $(document).on("click", function (event) {
    if (
      !$("#aside-menu").is(event.target) &&
      !$("#aside-menu").has(event.target).length &&
      !$(".hamburger").is(event.target) &&
      !$(".hamburger").has(event.target).length
    ) {
      //   console.log(event);
      $("#aside-menu").removeClass("active");
      $(".hamburger").removeClass("active");
    }
  });

  // Smooth scrolling for navigation links
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    var target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80,
        },
        1000
      );
    }
  });

  // Scroll to top button
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#scroll-top").addClass("visible");
    } else {
      $("#scroll-top").removeClass("visible");
    }
  });

  $("#scroll-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  // Animated counters for event numbers
  function animateCounter(element, target, duration = 2000, suffix = "+") {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(function () {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      element.text(Math.floor(start) + suffix);
    }, 16);
  }

  // Trigger counters when hero stats come into view
  let countersTriggered = false;
  $(window).scroll(function () {
    if (!countersTriggered) {
      const eventNumbers = $("#event-numbers-section");
      if (eventNumbers.length && isElementInViewport(eventNumbers[0])) {
        countersTriggered = true;

        // Animate the event numbers with proper selectors
        const numberCards = $(".event-number-stat");

        // 1000+ attendees
        animateCounter(numberCards.eq(0), 1000, 2000, "+");

        // 45% C-level
        animateCounter(numberCards.eq(1), 45, 2000, "%");

        // 30+ speakers
        animateCounter(numberCards.eq(2), 30, 2000, "+");

        // 30+ exhibitors
        animateCounter(numberCards.eq(3), 30, 2000, "+");
      }
    }
  });

  // Check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Throttled AOS refresh for scroll events
  const throttledAOSRefresh = throttle(() => {
    AOS.refresh();
  }, 250);

  // Parallax effect for hero section
  $(window).scroll(function () {
    const scrolled = $(window).scrollTop();
    const heroSection = $("#hero-section");
    const heroContent = $(".hero-content");

    if (heroSection.length) {
      const rate = scrolled * -0.5;
      heroContent.css("transform", `translateY(${rate}px)`);
    }

    // Refresh AOS on scroll to catch any new elements
    throttledAOSRefresh();
  });

  // Add hover effects to cards
  $(".about-feature, .partner-benefit, .contact-card, .speaker-card").hover(
    function () {
      $(this).addClass("animate-float");
    },
    function () {
      $(this).removeClass("animate-float");
    }
  );

  // Dynamic text animation for hero title
  const heroTitle = $(".hero-title");
  if (heroTitle.length) {
    // Hide the hero title initially for smooth animation
    heroTitle.css("opacity", "0");

    const originalHtml = heroTitle.html();

    // Check if we have the gradient span
    if (originalHtml.includes("text-gradient")) {
      // Handle the gradient span specially
      const beforeGradient = originalHtml.split(
        '<span class="text-gradient">'
      )[0];
      const gradientContent = originalHtml
        .split('<span class="text-gradient">')[1]
        .split("</span>")[0];
      const afterGradient = originalHtml.split("</span>")[1] || "";

      heroTitle.empty();

      let currentIndex = 0;

      // Animate the text before the gradient (trim to remove extra spaces)
      const beforeText = beforeGradient.trim();
      if (beforeText) {
        beforeText.split("").forEach((char, index) => {
          const span = $("<span>").text(char === " " ? "\u00A0" : char);
          span.css({
            "animation-delay": `${currentIndex * 0.1}s`,
            display: "inline-block",
            opacity: "0",
            "animation-fill-mode": "forwards",
          });
          span.addClass("fade-in-up");
          heroTitle.append(span);
          currentIndex++;
        });

        // Add exactly one space after the text before gradient
        const spaceSpan = $("<span>").text("\u00A0");
        spaceSpan.css({
          "animation-delay": `${currentIndex * 0.1}s`,
          display: "inline-block",
          opacity: "0",
          "animation-fill-mode": "forwards",
        });
        spaceSpan.addClass("fade-in-up");
        heroTitle.append(spaceSpan);
        currentIndex++;
      }

      // Animate each character of the gradient content with gradient class
      if (gradientContent.trim()) {
        gradientContent.split("").forEach((char, index) => {
          const span = $("<span>").text(char === " " ? "\u00A0" : char);
          span.addClass("text-gradient");
          span.css({
            "animation-delay": `${currentIndex * 0.1}s`,
            display: "inline-block",
            opacity: "0",
            "animation-fill-mode": "forwards",
          });
          span.addClass("fade-in-up");
          heroTitle.append(span);
          currentIndex++;
        });
      }

      // Animate the text after the gradient (if any)
      if (afterGradient.trim()) {
        afterGradient.split("").forEach((char, index) => {
          const span = $("<span>").text(char === " " ? "\u00A0" : char);
          span.css({
            "animation-delay": `${currentIndex * 0.1}s`,
            display: "inline-block",
            opacity: "0",
            "animation-fill-mode": "forwards",
          });
          span.addClass("fade-in-up");
          heroTitle.append(span);
          currentIndex++;
        });
      }
    } else {
      // Original logic for text without gradient
      const text = heroTitle.text();
      heroTitle.empty();

      // Split text into individual characters
      text.split("").forEach((char, index) => {
        const span = $("<span>").text(char === " " ? "\u00A0" : char);
        span.css({
          "animation-delay": `${index * 0.1}s`,
          display: "inline-block",
          opacity: "0",
          "animation-fill-mode": "forwards",
        });
        span.addClass("fade-in-up");
        heroTitle.append(span);
      });
    }

    // Show the hero title container and start the animation
    heroTitle.css("opacity", "1");
  }

  // Form submission for contact
  $('a[href^="mailto:"]').click(function () {
    // Track email clicks (analytics can be added here)
    // console.log("Email link clicked:", $(this).attr("href"));
  });

  // Add loading effect to buttons
  $(".btn").click(function () {
    const button = $(this);

    // Skip loading animation for gallery view more button
    if (button.hasClass("no-loading") || button.hasClass("gallery-view-more")) {
      return;
    }

    const originalText = button.text();

    // Add loading state
    button.addClass("loading");
    button.text("Loading...");

    // Reset after 2 seconds (simulated)
    setTimeout(() => {
      button.removeClass("loading");
      button.text(originalText);
    }, 2000);
  });

  // Intersection Observer for scroll animations
  if ("IntersectionObserver" in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }

  // Add ripple effect to buttons
  $(".btn").click(function (e) {
    const button = $(this);

    // Skip ripple effect for gallery view more button
    if (button.hasClass("gallery-view-more")) {
      return;
    }

    const ripple = $('<span class="ripple"></span>');

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.css({
      width: size,
      height: size,
      left: x,
      top: y,
      position: "absolute",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.3)",
      transform: "scale(0)",
      animation: "ripple 0.6s linear",
      pointerEvents: "none",
    });

    button.append(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });

  // Add CSS for ripple animation
  $("<style>")
    .prop("type", "text/css")
    .html(
      `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            .btn {
                position: relative;
                overflow: hidden;
            }
            .loading {
                pointer-events: none;
                opacity: 0.7;
            }
        `
    )
    .appendTo("head");

  // Keyboard navigation support
  $(document).keydown(function (e) {
    // ESC key closes mobile menu
    if (e.keyCode === 27) {
      $(".hamburger").removeClass("active");
      $("#aside-menu").removeClass("active");
      $("body").removeClass("menu-open");
    }
  });

  // Resize handler for responsive adjustments
  $(window).resize(function () {
    // Reset mobile menu on resize
    if ($(window).width() > 768) {
      $(".hamburger").removeClass("active");
      $("#aside-menu").removeClass("active");
      $("body").removeClass("menu-open");
    }
  });

  // Log page load time for performance monitoring
  $(window).on("load", function () {
    const loadTime = performance.now();
    // console.log("Page loaded in:", Math.round(loadTime), "ms");
  });

  // Set current year in footer
  const currentYear = new Date().getFullYear();
  $(".footer-bottom p").html(
    $(".footer-bottom p").html().replace("2025", currentYear)
  );

  // Add focus management for accessibility
  $(".btn, .nav-links a, .footer-social")
    .on("focus", function () {
      $(this).addClass("focus-visible");
    })
    .on("blur", function () {
      $(this).removeClass("focus-visible");
    });

  // Lazy loading for images (if needed)
  const lazyImages = document.querySelectorAll("img[data-src]");
  if (lazyImages.length > 0 && "IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }

  // Gallery View More functionality
  $(".gallery-view-more")
    .off("click")
    .on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const hiddenItems = $(".gallery-hidden");
      const button = $(this);

      //   console.log("Gallery button clicked");
      //   console.log("Hidden items count:", hiddenItems.length);
      //   console.log("Button current text:", button.text().trim());
      //   console.log(
      //     "Has gallery-shown class:",
      //     hiddenItems.hasClass("gallery-shown")
      //   );

      // Prevent the default button loading animation
      button.addClass("no-loading");

      if (hiddenItems.hasClass("gallery-shown")) {
        // Hide additional items
        // console.log("Hiding items");
        hiddenItems.slideUp(300, function () {
          $(this).removeClass("gallery-shown");
        });
        setTimeout(() => {
          button.text("View More");
          //   console.log("Button text changed to:", button.text().trim());
        }, 50);
      } else {
        // Show additional items
        // console.log("Showing items");
        hiddenItems.slideDown(300, function () {
          $(this).addClass("gallery-shown");
          // Reinitialize AOS for the newly shown items
          AOS.refresh();
        });
        setTimeout(() => {
          button.text("View Less");
          //   console.log("Button text changed to:", button.text().trim());
        }, 50);
      }
    });

  // Speakers section functionality
  let currentSpeakersCount = 0;
  const speakersPerLoad = 10; // Show 9 speakers initially, then 6 more each time

  function createSpeakerCard(speaker, index) {
    const delay = (index % speakersPerLoad) * 100; // Stagger animations

    return `
      <div class="speaker-card" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="speaker-image">
          <img src="${speaker.image}" alt="${speaker.name}" />
        </div>
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="speaker-title">${speaker.title}</p>
        <p class="speaker-company">${speaker.company}</p>
      </div>
    `;
  }

  function loadSpeakers(loadMore = false) {
    const speakersGrid = $("#speakers-grid");
    const loadMoreBtn = $("#load-more-speakers");
    const showLessBtn = $("#show-less-speakers");

    let speakersToLoad = loadMore ? 6 : speakersPerLoad;
    let startIndex = currentSpeakersCount;
    let endIndex = Math.min(startIndex + speakersToLoad, speakers.length);

    // Generate speaker cards
    for (let i = startIndex; i < endIndex; i++) {
      const speakerHtml = createSpeakerCard(speakers[i], i);
      speakersGrid.append(speakerHtml);
    }

    currentSpeakersCount = endIndex;

    // Show/hide buttons based on current state
    if (currentSpeakersCount < speakers.length) {
      loadMoreBtn.show();
      showLessBtn.hide();
    } else {
      loadMoreBtn.hide();
      showLessBtn.show();
    }

    // Refresh AOS animations for new elements
    AOS.refresh();
  }

  function showLessSpeakers() {
    const speakersGrid = $("#speakers-grid");
    const loadMoreBtn = $("#load-more-speakers");
    const showLessBtn = $("#show-less-speakers");

    // Clear all speakers
    speakersGrid.empty();

    // Reset counter
    currentSpeakersCount = 0;

    // Load initial speakers
    loadSpeakers();
  }

  // Load initial speakers
  loadSpeakers();

  // Load more speakers when button is clicked
  $("#load-more-speakers").click(function () {
    loadSpeakers(true);
  });

  // Show less speakers when button is clicked
  $("#show-less-speakers").click(function () {
    showLessSpeakers();
  });
});

// Additional utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Check if device supports touch
function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

// Add touch device class
if (isTouchDevice()) {
  $("body").addClass("touch-device");
}

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === "navigation") {
      //   console.log("Navigation timing:", entry);
    }
  }
});

if ("PerformanceObserver" in window) {
  perfObserver.observe({ entryTypes: ["navigation"] });
}
