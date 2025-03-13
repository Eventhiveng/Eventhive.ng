// $(window).on("load", function () {
//   // Simulate loading delay
//   setTimeout(function () {
//     // Fade out the preloader
//     $("#preloader").fadeOut("500", function () {
//       // Show the main content
//       $("#main-container").fadeIn("500", function () {
//         AOS.init({
//           duration: 800,
//         });
//       });
//     });
//   }, 500);
// });
$(function () {
  // Simulate loading delay for 1 second
  setTimeout(function () {
    // Fade out the preloader
    $("#preloader").fadeOut("500", function () {
      // Show the main content
      $("#main-container").fadeIn("500", function () {
        AOS.init({
          duration: 800,
        });
      });
    });
  }, 1000); // Delay of 1 second
});
$(document).ready(function () {
  const $window = $(window);
  const $document = $(document);
  const $carouselContainer = $(".speakers-slider");
  const $imageRight = $(".image-right");
  const $imageLeft = $(".image-left .inner-image");
  const $first = $(".first");
  const $second = $(".second");
  const $third = $(".third");
  const $aboutSection = $("#about-section");
  const $scrollTop = $("#scroll-top");
  const $heroSection = $("#hero-section");
  const $whatsNewSection = $("#whats-new-section");
  const $box = $(".box");
  const $lightboxOverlay = $("#lightbox-overlay");
  const $allSpeakers = $("#all-speakers");
  const $dot = $("#scroll-top .line .dot");
  const $navbar = $("#nav");
  const $year = $(".year");
  const $partnersSlide1 = $(".partners-slide-1");
  const $partnersSlide2 = $(".partners-slide-2");
  const $logo = $("#nav-logo");
  const $asideMenu = $(".aside-menu");
  const $asideMenuLink = $(".aside-menu a");
  const $hamburger = $(".hamburger");
  const $testimonialSlide = $(".testimonial-slides");

  const date = new Date().getFullYear();
  $year.html(date);

  // Show modal automatically on page load
  $("#announcementModal").fadeIn();

  // Hide modal and show main content when clicking close
  $("#closeModal").click(function () {
    $("#announcementModal").fadeOut();
    // $("#mainContent").fadeIn();
  });

  // Generate speakers
  const generateSpeakers = () => {
    const speakerBox = (speaker) => `
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
    `;

    $carouselContainer.html(speakers.map(speakerBox).join(""));

    $("#view-all-speakers").on("click", function () {
      $allSpeakers.html(speakers.map(speakerBox).join(""));
      $lightboxOverlay.fadeIn();
    });

    $(".close-btn").on("click", function () {
      $lightboxOverlay.fadeOut();
    });

    // Initialize slick slider
    $carouselContainer.slick({
      speed: 4000,
      slidesToShow: 3,
      slidesToScroll: 3,
      lazyLoad: "ondemand",
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: "<button class='slick-prev slick-arrow'>&larr;</button>",
      nextArrow: "<button class='slick-next slick-arrow'>&rarr;</button>",
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    });
  };

  // Generate Sponsors
  const generateSponsors = () => {
    const sponsorImage = (sponsor) => `
      <img src="${sponsor}" alt="eventhive">
    `;

    $partnersSlide1.html(sponsorsSlideOne.map(sponsorImage).join(""));
    $partnersSlide2.html(sposnorsSlideTwo.map(sponsorImage).join(""));

    let sts = Math.ceil($(window).width() / 150);

    $partnersSlide1.slick({
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
      draggable: false,
    });

    $partnersSlide2.slick({
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
      draggable: false,
      rtl: true,
    });

    $(window).on("resize", function () {
      let sts = Math.ceil($(window).width() / 150);

      $($partnersSlide1, $partnersSlide2).slick(
        "slickSetOption",
        "slidesToShow",
        sts,
        true
      );
    });
  };

  // Toggle Nav
  const toggleNav = () => {
    // Toggle hamburger and aside menu
    $hamburger.on("click", function () {
      $(this).toggleClass("active");
      $asideMenu.toggleClass("active");
    });

    // Close the aside menu when a link is clicked
    $asideMenuLink.on("click", function () {
      $asideMenu.removeClass("active");
      $hamburger.removeClass("active");
    });

    $(document).on("click", function (event) {
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

  // Count Up Function
  const countUp = (scrollTop, windowHeight) => {
    $(".odometer").each(function () {
      const $this = $(this);
      const $eventContainer = $this.closest(".event-container");
      const parentSectionTop = $eventContainer.length
        ? $eventContainer.offset().top
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
  };

  // Scroll Window Function
  const scrollWindow = () => {
    $scrollTop.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 800);
    });

    $(document).on("scroll", function () {
      const scrollTop = $window.scrollTop();
      const scrollHeight = $document.height() - $window.height();
      const scrollPercentage = scrollTop / scrollHeight;

      // Move the dot based on the scroll percentage
      const lineHeight = 60;
      const dotPosition = scrollPercentage * lineHeight;
      $dot.css("transform", `translateY(-${dotPosition}px)`);
    });
  };

  // Rotate SVG Function
  const rotateSvg = (scrollTop, windowHeight) => {
    const heroSectionOffset = $heroSection.offset().top;
    const heroSectionHeight = $heroSection.outerHeight();

    if (
      scrollTop > heroSectionOffset - windowHeight &&
      scrollTop < heroSectionOffset + heroSectionHeight
    ) {
      const rotation = (scrollTop - heroSectionOffset) / 3;
      $(".circle-svg").css("transform", `rotate(${rotation}deg)`);
    }
  };

  // Testimonial
  const testimonialComp = () => {
    const testimonialSettings = {
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 4000,
      lazyLoad: "ondemand",
      arrows: false,
      cssEase: "linear",
      fade: true,
      pauseOnHover: false,
      pauseOnFocus: false,
    };

    $testimonialSlide.slick(testimonialSettings);
  };

  // Move Box Function
  const moveBox = () => {
    $box.on("mousemove", function (e) {
      const $this = $(this);
      const boxRect = $this[0].getBoundingClientRect();
      const centerX = boxRect.left + boxRect.width / 2;
      const centerY = boxRect.top + boxRect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      const rotateX = (mouseY / boxRect.height) * 15;
      const rotateY = -(mouseX / boxRect.width) * 15;
      $this.css("transform", `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    });

    $box.on("mouseleave", function () {
      $(this).css("transform", `rotateX(0deg) rotateY(0deg)`);
    });
  };

  // Parallax Picture Function
  const parallaxPic = (scrollTop, windowHeight) => {
    const aboutSectionOffset = $aboutSection.offset().top;
    const aboutSectionHeight = $aboutSection.outerHeight();

    // Define range for parallax effect
    const parallaxRange = 60;
    const smallRange = 80;
    const minY = -parallaxRange;
    const maxY = parallaxRange;

    const minSmallY = smallRange;
    const maxSmallY = -smallRange;

    const sectionTop = aboutSectionOffset - windowHeight;
    const sectionBottom = aboutSectionOffset + aboutSectionHeight;
    const sectionHeight = sectionBottom - sectionTop;

    let translateY = maxY;
    let smallY = maxSmallY;

    if (scrollTop > sectionTop && scrollTop < sectionBottom) {
      const scrollInSection = scrollTop - sectionTop;
      translateY = minY + (scrollInSection / sectionHeight) * (maxY - minY);
      smallY =
        minSmallY + (scrollInSection / sectionHeight) * (maxSmallY - minSmallY);
    }

    $imageRight.css("transform", `translateY(${translateY}px)`);
    $imageLeft.css("transform", `translateY(${smallY}px)`);
  };

  // Rotate Images
  const rotateImages = () => {
    let currentIndex1 = 0;
    let currentIndex2 = 0;

    // Function to change images in Box 1 with fade animation
    function changeImageBox1() {
      $("#box1 img").fadeOut(500, function () {
        // Fade out the current image
        $(this).attr("src", box1Images[currentIndex1]); // Change image source
        $(this).fadeIn(500); // Fade in the new image
      });
      currentIndex1 = (currentIndex1 + 1) % box1Images.length; // Update index
    }

    // Function to change images in Box 2 with fade animation
    function changeImageBox2() {
      $("#box2 img").fadeOut(500, function () {
        // Fade out the current image
        $(this).attr("src", box2Images[currentIndex2]); // Change image source
        $(this).fadeIn(500); // Fade in the new image
      });
      currentIndex2 = (currentIndex2 + 1) % box2Images.length; // Update index
    }

    // Initial image setup with immediate fade in
    $("#box1 img").attr("src", box1Images[0]).fadeIn(500).addClass("active");
    $("#box2 img").attr("src", box2Images[0]).fadeIn(500).addClass("active");

    // Change images in Box 1 every 2 seconds with fade animation
    setInterval(changeImageBox1, 2000);

    // Change images in Box 2 every 3.5 seconds with fade animation
    setInterval(changeImageBox2, 3500);
  };

  // Parallax Location
  const parallaxLocation = (scrollTop, windowHeight) => {
    const whatsNewSectionOffset = $whatsNewSection.offset().top;
    const whatsNewSectionHeight = $whatsNewSection.outerHeight();

    // Define range for parallax effect
    const parallaxRange = 80;
    // const smallRange = 80;
    const minY = -parallaxRange;
    const maxY = 0;

    const minSmallY = parallaxRange;
    const maxSmallY = 0;

    const minScale = 1;
    const maxScale = 1.2;

    const sectionTop = whatsNewSectionOffset - windowHeight;
    const sectionBottom = whatsNewSectionOffset + whatsNewSectionHeight;
    const sectionHeight = sectionBottom - sectionTop;

    let translateY = maxY;
    let smallY = maxSmallY;
    let scale = 1;

    if (scrollTop > sectionTop && scrollTop < sectionBottom) {
      const scrollInSection = scrollTop - sectionTop;
      translateY =
        minY + (scrollInSection / (sectionHeight / 2)) * (maxY - minY);
      smallY =
        minSmallY +
        (scrollInSection / (sectionHeight / 2)) * (maxSmallY - minSmallY);
      scale =
        minScale +
        (scrollInSection / sectionHeight / 1.5) * (maxScale - minScale);
    }

    $first.css("transform", `translateY(${translateY}px)`);
    $second.css("transform", `translate(-50%, -50%) scale(${scale})`);
    $third.css("transform", `translateY(${smallY}px)`);
  };

  // Sticky nav
  let lastScrollTop = 0;
  const stickyNav = (scrollTop) => {
    if (scrollTop < lastScrollTop && scrollTop > 200) {
      // Scrolling up
      $navbar.addClass("sticky");
      $logo.attr("src", "/assets/images/logo/lref-icon.png");
    } else {
      // Scrolling down
      $navbar.removeClass("sticky");
      $logo.attr("src", "/assets/images/logo/lref-icon.png");
    }

    lastScrollTop = scrollTop;
  };

  // Type Location
  const typeLocation = () => {
    const events = [
      "28th May, 2025 | Main Event | Landmark Event Centre, VI, Lagos",
      "27th May, 2025 | Pre-Event Happy Hour | Fourpoints by Sheraton, VI, Lagos",
      "27th May, 2025 | Nigeria's Real Estate Leadership Roundtable | Maison Fahrenheit Roof Top, VI, Lagos",
    ];

    let eventIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentEvent = "";

    const typeEffect = () => {
      // Determine the current event text to display
      currentEvent = events[eventIndex];

      // Update the text based on whether we are typing or deleting
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      // Display the part of the current event text up to the current character index
      $("#event-text").text(currentEvent.substring(0, charIndex));

      // Control the speed of typing and deleting
      let typingSpeed = isDeleting ? 20 : 100;

      // Once the full text is typed, start deleting after a pause
      if (!isDeleting && charIndex === currentEvent.length) {
        typingSpeed = 2000; // Pause before deleting
        isDeleting = true;
      }
      // Once the text is deleted, move to the next event
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        eventIndex = (eventIndex + 1) % events.length; // Loop back to the first event
        typingSpeed = 500; // Pause before typing the next event
      }

      setTimeout(typeEffect, typingSpeed);
    };

    // Start the typing effect
    typeEffect();
  };

  // Initialize all functions
  generateSpeakers();
  generateSponsors();
  scrollWindow();
  moveBox();
  rotateImages();
  toggleNav();
  testimonialComp();
  // typeLocation();
  $window.on("scroll", function () {
    const scrollTop = $window.scrollTop();
    const windowHeight = $window.height();
    countUp(scrollTop, windowHeight);
    rotateSvg(scrollTop, windowHeight);
    parallaxPic(scrollTop, windowHeight);
    parallaxLocation(scrollTop, windowHeight);
    stickyNav(scrollTop);

    AOS.refresh();
  });
});
