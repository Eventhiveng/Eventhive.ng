// const sts = Math.ceil(window.innerWidth / 150);

import { SampleNextArrow, SamplePrevArrow } from "./arrow";
import { BlogPageData, EventPageData } from "./types";

const data = {
  sectorData: [
    {
      icon: "fluent:vehicle-car-profile-ltr-20-regular",
      title: "Transport",
      description:
        "Providing essential networking opportunities between the most Knowledgeable and Influential private and public sector stakeholders within Nigeria's transport sector to network and discuss ideas on the future of transport.",
    },
    {
      icon: "hugeicons:nano-technology",
      title: "Technology",
      description:
        "Focused on addressing key economic and development issues in line with technology applications in Africa, and beyond, with a view to driving sustainable development.",
    },
    {
      icon: "mdi:energy-from-grid",
      title: "Power & Energy",
      description:
        "Bringing together the most Knowledgeable and Influential private and public sector stakeholders within Nigeria's Power sector to network and share ideas on the future of power and energy.",
    },
    {
      icon: "bi:houses",
      title: "Real Estate",
      description:
        "Expanding the real estate horizons by creating valuable avenues for networking amongst the most Knowledgeable and Influential private and public sector stakeholders within Nigeria's real estate sector.",
    },
    {
      icon: "mdi:gas",
      title: "Oil and Gas",
      description:
        "Opening the floor for important discussions and valuable ideas for the present and future of Nigeria's oil & gas sector. Bringing together the most Knowledgeable and Influential private and public sector stakeholders within the sector.",
    },
    {
      icon: "ion:business-outline",
      title: "Business",
      description:
        "Providing rare opportunites for networking opportunities, crucial discussions and brainstorming amongst the most Knowledgeable and Influential private and public sector stakeholders within Nigeria's growing business sector.",
    },
  ],
  eventData: {
    useFor: "event",
    settings: {
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      arrow: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

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
    },
    info: [] as EventPageData[],
  },

  counterData: [
    {
      imgLink: "/images/icons/icon1.png",
      number: 3,
      description: "Years",
    },
    {
      imgLink: "/images/icons/icon2.png",
      number: 6,
      description: "Sectors",
    },
    {
      imgLink: "/images/icons/icon3.png",
      number: 13,
      description: "Events",
    },
    {
      imgLink: "/images/icons/icon4.png",
      number: 100,
      description: "Clients",
    },
    {
      imgLink: "/images/icons/icon5.png",
      number: 300,
      description: "Speakers",
    },
    {
      imgLink: "/images/icons/icon6.png",
      number: 10000,
      description: "Attendees",
    },
  ],
  slideOneData: {
    useFor: "slideone",
    settings: {
      arrows: false,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 1500,
      // slidesToShow: sts,
      slidesToShow: 3,
      slidesToScroll: 1,
      // lazyLoad: "ondemand",
      cssEase: "linear",
      pauseOnHover: false,
      rtl: true,

      // responsive: [
      //   {
      //     breakpoint: 991,
      //     settings: {
      //       slidesToShow: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 767,
      //     settings: {
      //       slidesToShow: 1,
      //     },
      //   },
      // ],
    },
    info: [
      "/images/brand/234PARTS.png",
      "/images/brand/ADMONI.png",
      "/images/brand/AFRIDIGEST.png",
      "/images/brand/ALDG.png",
      "/images/brand/ALLON.png",
      "/images/brand/ALPHACRUX.png",
      "/images/brand/ANCHORIA.png",
      "/images/brand/AUTOCHEK.png",
      "/images/brand/AXXELA.png",
      "/images/brand/BOLT.png",
      "/images/brand/CARS45.png",
      "/images/brand/CECOM.png",
      "/images/brand/CELLULANT.png",
      "/images/brand/CLOUDFLEX-EDISCOVERY.png",
      "/images/brand/DPO.png",
      "/images/brand/FINANCIAL.png",
      "/images/brand/FLEX.png",
      "/images/brand/FNGR.png",
      "/images/brand/FRESHWORKS.png",
      "/images/brand/FTX.png",
      "/images/brand/FUNTAY.png",
      "/images/brand/GASCO.png",
      "/images/brand/GENESYS.png",
      "/images/brand/GIGM.png",
      "/images/brand/GREENKEY.png",
      "/images/brand/GREENVILLE.png",
      "/images/brand/HAWILTI.png",
      "/images/brand/I-INVEST.png",
      "/images/brand/IDPASS.png",
      "/images/brand/IFITNESS.png",
      "/images/brand/INTERSWITCH.png",
      "/images/brand/ITMB.png",
      "/images/brand/JET.png",
      "/images/brand/KOBO.png",
      "/images/brand/LAG-GOV.png",
      "/images/brand/LAG-INN.png",
      "/images/brand/LBSL.png",
      "/images/brand/LOGITRAK.png",
    ],
  },
  slideTwoData: {
    useFor: "slidetwo",
    settings: {
      arrows: false,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 1500,
      // slidesToShow: sts,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
      // lazyLoad: "ondemand",
      cssEase: "linear",

      // responsive: [
      //   {
      //     breakpoint: 991,
      //     settings: {
      //       slidesToShow: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 767,
      //     settings: {
      //       slidesToShow: 1,
      //     },
      //   },
      // ],
    },
    info: [
      "/images/brand/LS.png",
      "/images/brand/MAX.png",
      "/images/brand/MIGO.png",
      "/images/brand/MIKRO.png",
      "/images/brand/MULTIMODAL.png",
      "/images/brand/PARKWAY.png",
      "/images/brand/PENTHOUSE.png",
      "/images/brand/PIVO.png",
      "/images/brand/PLENTYWAKA.png",
      "/images/brand/POWERGAS.png",
      "/images/brand/PRIMERO.png",
      "/images/brand/PURIRIDE.png",
      "/images/brand/SCALEX.png",
      "/images/brand/SECURE-ID.png",
      "/images/brand/SESO.png",
      "/images/brand/SHELL.png",
      "/images/brand/SHUTTLERS.png",
      "/images/brand/STEARS.png",
      "/images/brand/STONETRUST.png",
      "/images/brand/STRONGMAS.png",
      "/images/brand/T40.png",
      "/images/brand/TEAMAPT.png",
      "/images/brand/TECHATIVE.png",
      "/images/brand/TECHNEXT.png",
      "/images/brand/TECHPOINT.png",
      "/images/brand/TECHUNCODE.png",
      "/images/brand/TEI.png",
      "/images/brand/TEMPLARS.png",
      "/images/brand/TERMII.png",
      "/images/brand/TPS.png",
      "/images/brand/TRADEGRID.png",
      "/images/brand/TRANSDAY.png",
      "/images/brand/TRAPEZE.png",
      "/images/brand/TREEPZ.png",
      "/images/brand/TROVE.png",
      "/images/brand/UBER.png",
      "/images/brand/VIATHAN.png",
      "/images/brand/YNAIJA.png",
      "/images/brand/ZITRA.png",
      "/images/brand/ZOHO.png",
    ],
  },
  galleryData: [
    {
      category: "NEBM",
      pictures: [
        "images/gallery/nebm/1.jpg",
        "images/gallery/nebm/2.jpg",
        "images/gallery/nebm/3.jpg",
        "images/gallery/nebm/4.jpg",
        "images/gallery/nebm/5.jpg",
        "images/gallery/nebm/6.jpg",
        "images/gallery/nebm/7.jpg",
        "images/gallery/nebm/8.jpg",
        "images/gallery/nebm/9.jpg",
        "images/gallery/nebm/10.jpg",
        "images/gallery/nebm/11.jpg",
        "images/gallery/nebm/12.jpg",
        "images/gallery/nebm/13.jpg",
        "images/gallery/nebm/14.jpg",
        "images/gallery/nebm/15.jpg",
        "images/gallery/nebm/16.jpg",
        "images/gallery/nebm/17.jpg",
        "images/gallery/nebm/18.jpg",
        "images/gallery/nebm/19.jpg",
        "images/gallery/nebm/20.jpg",
      ],
    },
    {
      category: "LTF",
      pictures: [
        "images/gallery/ltf/1.jpg",
        "images/gallery/ltf/2.jpg",
        "images/gallery/ltf/3.jpg",
        "images/gallery/ltf/4.jpg",
        "images/gallery/ltf/5.jpg",
        "images/gallery/ltf/6.jpg",
        "images/gallery/ltf/7.jpg",
        "images/gallery/ltf/8.jpg",
        "images/gallery/ltf/9.jpg",
        "images/gallery/ltf/10.jpg",
        "images/gallery/ltf/11.jpg",
        "images/gallery/ltf/12.jpg",
        "images/gallery/ltf/13.jpg",
        "images/gallery/ltf/14.jpg",
        "images/gallery/ltf/15.jpg",
        "images/gallery/ltf/16.jpg",
        "images/gallery/ltf/17.jpg",
        "images/gallery/ltf/18.jpg",
        "images/gallery/ltf/19.jpg",
        "images/gallery/ltf/20.jpg",
        "images/gallery/ltf/21.jpg",
        "images/gallery/ltf/22.jpg",
        "images/gallery/ltf/23.jpg",
        "images/gallery/ltf/24.jpg",
        "images/gallery/ltf/25.jpg",
        "images/gallery/ltf/26.jpg",
        "images/gallery/ltf/27.jpg",
        "images/gallery/ltf/28.jpg",
        "images/gallery/ltf/29.jpg",
        "images/gallery/ltf/30.jpg",
        "images/gallery/ltf/31.jpg",
        "images/gallery/ltf/32.jpg",
        "images/gallery/ltf/33.jpg",
        "images/gallery/ltf/34.jpg",
        "images/gallery/ltf/35.jpg",
        "images/gallery/ltf/36.jpg",
        "images/gallery/ltf/37.jpg",
        "images/gallery/ltf/38.jpg",
        "images/gallery/ltf/39.jpg",
        "images/gallery/ltf/40.jpg",
        "images/gallery/ltf/41.jpg",
        "images/gallery/ltf/42.jpg",
        "images/gallery/ltf/43.jpg",
        "images/gallery/ltf/44.jpg",
        "images/gallery/ltf/45.jpg",
        "images/gallery/ltf/46.jpg",
        "images/gallery/ltf/47.jpg",
        "images/gallery/ltf/48.jpg",
        "images/gallery/ltf/49.jpg",
        "images/gallery/ltf/50.jpg",
        "images/gallery/ltf/51.jpg",
        "images/gallery/ltf/52.jpg",
        "images/gallery/ltf/53.jpg",
        "images/gallery/ltf/54.jpg",
        "images/gallery/ltf/55.jpg",
        "images/gallery/ltf/56.jpg",
        "images/gallery/ltf/57.jpg",
        "images/gallery/ltf/58.jpg",
        "images/gallery/ltf/59.jpg",
        "images/gallery/ltf/60.jpg",
        "images/gallery/ltf/61.jpg",
        "images/gallery/ltf/62.jpg",
        "images/gallery/ltf/63.jpg",
        "images/gallery/ltf/64.jpg",
        "images/gallery/ltf/65.jpg",
        "images/gallery/ltf/66.jpg",
        "images/gallery/ltf/67.jpg",
        "images/gallery/ltf/68.jpg",
        "images/gallery/ltf/69.jpg",
        "images/gallery/ltf/70.jpg",
        "images/gallery/ltf/71.jpg",
        "images/gallery/ltf/72.jpg",
        "images/gallery/ltf/73.jpg",
        "images/gallery/ltf/74.jpg",
        "images/gallery/ltf/75.jpg",
        "images/gallery/ltf/76.jpg",
        "images/gallery/ltf/77.jpg",
        "images/gallery/ltf/78.jpg",
        "images/gallery/ltf/79.jpg",
        "images/gallery/ltf/80.jpg",
        "images/gallery/ltf/81.jpg",
        "images/gallery/ltf/82.jpg",
        "images/gallery/ltf/83.jpg",
        "images/gallery/ltf/84.jpg",
        "images/gallery/ltf/85.jpg",
        "images/gallery/ltf/86.jpg",
        "images/gallery/ltf/87.jpg",
        "images/gallery/ltf/88.jpg",
        "images/gallery/ltf/89.jpg",
        "images/gallery/ltf/90.jpg",
        "images/gallery/ltf/91.jpg",
        "images/gallery/ltf/92.jpg",
        "images/gallery/ltf/img1.jpg",
        "images/gallery/ltf/img2.jpg",
        "images/gallery/ltf/img3.jpg",
        "images/gallery/ltf/img4.jpg",
        "images/gallery/ltf/img5.jpg",
        "images/gallery/ltf/img6.jpg",
        "images/gallery/ltf/img7.jpg",
        "images/gallery/ltf/img8.jpg",
        "images/gallery/ltf/img9.jpg",
        "images/gallery/ltf/img10.jpg",
        "images/gallery/ltf/img11.jpg",
        "images/gallery/ltf/img12.jpg",
        "images/gallery/ltf/img13.jpg",
        "images/gallery/ltf/img14.jpg",
        "images/gallery/ltf/img15.jpg",
        "images/gallery/ltf/img16.jpg",
        "images/gallery/ltf/img17.jpg",
        "images/gallery/ltf/img18.jpg",
        "images/gallery/ltf/img19.jpg",
        "images/gallery/ltf/img20.jpg",
        "images/gallery/ltf/img21.jpg",
        "images/gallery/ltf/img22.jpg",
        "images/gallery/ltf/img23.jpg",
        "images/gallery/ltf/img24.jpg",
        "images/gallery/ltf/img25.jpg",
        "images/gallery/ltf/img26.jpg",
        "images/gallery/ltf/img27.jpg",
        "images/gallery/ltf/img28.jpg",
        "images/gallery/ltf/img29.jpg",
        "images/gallery/ltf/img30.jpg",
      ],
    },
    {
      category: "UK-NBF",
      pictures: [
        "images/gallery/uk-nbf/1.jpg",
        "images/gallery/uk-nbf/2.jpg",
        "images/gallery/uk-nbf/3.jpg",
        "images/gallery/uk-nbf/4.jpg",
        "images/gallery/uk-nbf/5.jpg",
        "images/gallery/uk-nbf/6.jpg",
        "images/gallery/uk-nbf/7.jpg",
        "images/gallery/uk-nbf/9.jpg",
        "images/gallery/uk-nbf/10.jpg",
        "images/gallery/uk-nbf/11.jpg",
        "images/gallery/uk-nbf/12.jpg",
        "images/gallery/uk-nbf/13.jpg",
        "images/gallery/uk-nbf/14.jpg",
        "images/gallery/uk-nbf/15.jpg",
        "images/gallery/uk-nbf/16.jpg",
        "images/gallery/uk-nbf/17.jpg",
        "images/gallery/uk-nbf/18.jpg",
        "images/gallery/uk-nbf/19.jpg",
        "images/gallery/uk-nbf/20.jpg",
        "images/gallery/uk-nbf/21.jpg",
        "images/gallery/uk-nbf/22.jpg",
        "images/gallery/uk-nbf/23.jpg",
        "images/gallery/uk-nbf/24.jpg",
        "images/gallery/uk-nbf/25.jpg",
        "images/gallery/uk-nbf/26.jpg",
        "images/gallery/uk-nbf/27.jpg",
        "images/gallery/uk-nbf/28.jpg",
        "images/gallery/uk-nbf/29.jpg",
        "images/gallery/uk-nbf/30.jpg",
        "images/gallery/uk-nbf/31.jpg",
        "images/gallery/uk-nbf/32.jpg",
        "images/gallery/uk-nbf/33.jpg",
      ],
    },
    {
      category: "NPO",
      pictures: [
        "images/gallery/npo/6.jpg",
        "images/gallery/npo/7.jpg",
        "images/gallery/npo/9.jpg",
        "images/gallery/npo/10.jpg",
        "images/gallery/npo/11.jpg",
        "images/gallery/npo/12.jpg",
        "images/gallery/npo/13.jpg",
        "images/gallery/npo/14.jpg",
        "images/gallery/npo/15.jpg",
        "images/gallery/npo/16.jpg",
        "images/gallery/npo/17.jpg",
        "images/gallery/npo/19.jpg",
        "images/gallery/npo/20.jpg",
        "images/gallery/npo/21.jpg",
        "images/gallery/npo/22.jpg",
      ],
    },
    {
      category: "LREF",
      pictures: [
        "images/gallery/lref/1.jpeg",
        "images/gallery/lref/2.jpeg",
        "images/gallery/lref/3.jpeg",
        "images/gallery/lref/4.jpeg",
        "images/gallery/lref/5.jpeg",
        "images/gallery/lref/6.jpeg",
        "images/gallery/lref/7.jpeg",
        "images/gallery/lref/9.jpeg",
        "images/gallery/lref/10.jpeg",
        "images/gallery/lref/11.jpeg",
        "images/gallery/lref/12.jpeg",
      ],
    },
    {
      category: "NOGO",
      pictures: [
        "images/gallery/nogo/1.jpg",
        "images/gallery/nogo/2.jpg",
        "images/gallery/nogo/3.jpg",
        "images/gallery/nogo/4.jpg",
        "images/gallery/nogo/5.jpg",
        "images/gallery/nogo/6.jpg",
        "images/gallery/nogo/7.jpg",
        "images/gallery/nogo/9.jpg",
        "images/gallery/nogo/10.jpg",
        "images/gallery/nogo/11.jpg",
        "images/gallery/nogo/12.jpg",
        "images/gallery/nogo/13.jpg",
        "images/gallery/nogo/14.jpg",
        "images/gallery/nogo/15.jpg",
        "images/gallery/nogo/16.jpg",
        "images/gallery/nogo/17.jpg",
        "images/gallery/nogo/18.jpg",
        "images/gallery/nogo/19.jpg",
        "images/gallery/nogo/20.jpg",
        "images/gallery/nogo/21.jpg",
        "images/gallery/nogo/22.jpg",
        "images/gallery/nogo/23.jpg",
        "images/gallery/nogo/24.jpg",
        "images/gallery/nogo/25.jpg",
        "images/gallery/nogo/26.jpg",
        "images/gallery/nogo/27.jpg",
      ],
    },

    {
      category: "NFF",
      pictures: [
        "images/gallery/nff/1.jpg",
        "images/gallery/nff/2.jpg",
        "images/gallery/nff/3.jpg",
        "images/gallery/nff/4.jpg",
        "images/gallery/nff/5.jpg",
        "images/gallery/nff/6.jpg",
        "images/gallery/nff/7.jpg",
        "images/gallery/nff/9.jpg",
        "images/gallery/nff/10.jpg",
        "images/gallery/nff/11.jpg",
        "images/gallery/nff/12.jpg",
        "images/gallery/nff/13.jpg",
        "images/gallery/nff/14.jpg",
        "images/gallery/nff/15.jpg",
        "images/gallery/nff/16.jpg",
        "images/gallery/nff/17.jpg",
        "images/gallery/nff/18.jpg",
        "images/gallery/nff/19.jpg",
        "images/gallery/nff/20.jpg",
        "images/gallery/nff/21.jpg",
        "images/gallery/nff/22.jpg",
        "images/gallery/nff/23.jpg",
        "images/gallery/nff/24.jpg",
        "images/gallery/nff/25.jpg",
        "images/gallery/nff/26.jpg",
        "images/gallery/nff/27.jpg",
        "images/gallery/nff/28.jpg",
        "images/gallery/nff/29.jpg",
        "images/gallery/nff/30.jpg",
        "images/gallery/nff/31.jpg",
        "images/gallery/nff/32.jpg",
        "images/gallery/nff/33.jpg",
        "images/gallery/nff/34.jpg",
        "images/gallery/nff/35.jpg",
        "images/gallery/nff/36.jpg",
        "images/gallery/nff/37.jpg",
        "images/gallery/nff/38.jpg",
        "images/gallery/nff/39.jpg",
        "images/gallery/nff/40.jpg",
      ],
    },
    {
      category: "LTRF",
      pictures: [
        "images/gallery/ltrf/1.jpg",
        "images/gallery/ltrf/2.jpg",
        "images/gallery/ltrf/3.jpg",
        "images/gallery/ltrf/4.jpg",
        "images/gallery/ltrf/5.jpg",
        "images/gallery/ltrf/6.jpg",
        "images/gallery/ltrf/7.jpg",
        "images/gallery/ltrf/9.jpg",
        "images/gallery/ltrf/10.jpg",
        "images/gallery/ltrf/11.jpg",
        "images/gallery/ltrf/12.jpg",
        "images/gallery/ltrf/13.jpg",
        "images/gallery/ltrf/14.jpg",
        "images/gallery/ltrf/15.jpg",
        "images/gallery/ltrf/16.jpg",
        "images/gallery/ltrf/17.jpg",
        "images/gallery/ltrf/18.jpg",
        "images/gallery/ltrf/19.jpg",
        "images/gallery/ltrf/20.jpg",
        "images/gallery/ltrf/21.jpg",
        "images/gallery/ltrf/22.jpg",
        "images/gallery/ltrf/23.jpg",
        "images/gallery/ltrf/24.jpg",
        "images/gallery/ltrf/25.jpg",
        "images/gallery/ltrf/26.jpg",
        "images/gallery/ltrf/27.jpg",
        "images/gallery/ltrf/28.jpg",
        "images/gallery/ltrf/29.jpg",
        "images/gallery/ltrf/30.jpg",
        "images/gallery/ltrf/31.jpg",
        "images/gallery/ltrf/32.jpg",
        "images/gallery/ltrf/33.jpg",
        "images/gallery/ltrf/34.jpg",
        "images/gallery/ltrf/35.jpg",
        "images/gallery/ltrf/36.jpg",
        "images/gallery/ltrf/37.jpg",
        "images/gallery/ltrf/38.jpg",
        "images/gallery/ltrf/39.jpg",
        "images/gallery/ltrf/40.jpg",
        "images/gallery/ltrf/41.jpg",
        "images/gallery/ltrf/42.jpg",
        "images/gallery/ltrf/43.jpg",
        "images/gallery/ltrf/44.jpg",
        "images/gallery/ltrf/45.jpg",
        "images/gallery/ltrf/46.jpg",
        "images/gallery/ltrf/47.jpg",
        "images/gallery/ltrf/48.jpg",
        "images/gallery/ltrf/49.jpg",
        "images/gallery/ltrf/50.jpg",
      ],
    },
  ],
  blogData: {
    useFor: "blog",
    settings: {
      arrows: false,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      dots: true,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
    info: [] as BlogPageData[],
  },
  blogPageData: [
    {
      id: 1,
      imgLink: "/images/blog/blogcomp_1.png",
      title: "A piece from the Founder - Eventhive turns 3years!",
      author: "Jamiu Ijaodola",
      slug: "a-piece-from-the-founder",
      excerpt:
        "3 years of leading efforts of the people behind Eventhive. Eventhive turns 3years old today. Graduating from university, with no certainty as to the next steps is definitely one reality every young people face. Trust me, I wasn’t exempted. Though, I found a path quite quickly, one that has led me to founding Eventhive.",
      description: `
        <p>
          <b>3 years</b> of leading efforts of the people behind <b>Eventhive</b>. <b>Eventhive turns 3years old today</b>. 
          <b>Graduating from university</b>, with no certainty as to the next steps is definitely one reality every young people face. Trust me, I wasn’t exempted. Though, I found a path quite quickly, one that has led me to founding <b>Eventhive</b>.
          <br><br>
          For one, <b>leading the efforts of the people behind Eventhive has been a combination of challenging and exciting experience</b>, but definitely one that I have constantly looked forward to exploring. <b>I appreciate our clients, team and friends</b> who have extended their very kind support since we kickstarted this journey of <b>developing Africa’s businesses via face-to-face events</b>.
          <br><br>
          Entrepreneurship tends to keep you on your toes at all time, especially when you are serving businesses across various sectors with their respective needs. <b>The most exciting and scary part of leading Eventhive</b> <em>is the anxiety that comes from waiting on responses from brands after pitching proposals</em>; <b>people working in the B2B space</b> have keen understanding of how this works.
          <br><br>
          Starting out from university, <b>hosting small-capacity student events</b>, I never imagined <b>hosting an event in London</b> or working with the category of <b>clients that have trusted us in the past 3 years</b>. Since registering <b>Eventhive in late 2019</b>, and getting <b>our first client, Max</b>, we have continued growing and tackling the challenges, head-on, one leap at a time.
          <br><br>
          In my few engagements with friends, when asked what makes me proud, my responses <b>are largely tied to the hardworking team who has driven the vision in the last 3 years, doing the most and staying consistent with our mission of helping businesses connect with their target market through our B2B2C events.</b> Thank you <b>Malik, Ezekiel, Tosin, Mustapha, Precious and Hussain.</b> You guys are the best 👏!
        </p>
    
        <blockquote>
            It will interest you to know that some of the companies we dreamt of working at while in the university are now our partners on a <b>B2B level</b>. A typical example is <b><a href="https://www.shell.com.ng/">Shell</a></b> with whom we have built a strong business relationship and partnership.
        </blockquote>

        <p>
            <b>As undergraduates</b>, we were paying our school fees through <b>Quickteller, now we work with Quickteller and Interswitch as partners,</b> helping them reach their target customers and stakeholders through our multiple sector-focused events. This is really an interesting experience for us, and we can’t wait to gain more territories.
        </p>
        <br><br>
        <div>
            <img src="/images/blog/b_details01.png" alt="">
        </div>
        <br><br>
        <p>
            <b>For us at Eventhive</b>, our mission is really simple. <b>We enable businesses to grow through connecting them with their customers, stakeholders, knowledge, ideas, and opportunities.</b> We make this happen through the <b>exhibition, brand awareness, media visibility and thought leadership opportunities</b> we provide to the clients that work with us, <b>through our multiple-sector events, across Nigeria, UK and Africa at large.</b> Businesses leverage on these opportunities to reach their market. <b>If you say we serve as the bridge between businesses and their market,</b> <em>then you aren’t wrong</em>.
            <br><br>
            <b>In the last 11 months, Eventhive</b> has experienced faster growth than we projected, some of them are listed below;
            <br><br>
            1. We <b>3x-ed our annual revenues,</b> welcoming over <b>20 new clients</b> across the sectors we operate in.
            <br><br>
            2. We launched our flagship London event, <b>UK-Nigeria Business Outlook</b> which held in <b>Westminster, London,</b> in partnership with <b>Shell</b>.
            <br><br>
            3. We doubled our client base with <b>thousands of attendees</b> across various countries, participating at our events.
            <br><br>
            4. We onboarded more people into our team, with presence now in <b>Zambia and UK</b>.
            <br><br>
            5. We launched 3 new events;
            <br>
            <b><a href="https://fintech.eventhive.ng/">Nigeria Fintech Forum</a></b>
            <br>
            <b><a href="https://uk.eventhive.ng/">UK-Nigeria Business Outlook</a></b>
            <br>
            <b><a href="https://us.eventhive.ng/">US-Nigeria Business Outlook</a></b>
            <br><br>
            6. We forged <b>new strategic partnerships</b> with various organizations, with keen interest in strengthening our grip across the business communities.
            <br><br>
        </p>
        <br><br>
        <div>
            <img src="/images/blog/b_details02.jpg" alt="">
        </div>
        <br><br>
        <div className="image-text">
            <img src="/images/blog/b_details03.jpg" alt="">
            <p>
                As we enter a new financial year, <b>Eventhive</b> will be doubling on its presence outside of Nigeria. <b>We are launching 5 new events: 2 in London, 2 in Lagos and 1 in Kigali.</b> We are particularly keen on strengthening our presence across these cities, helping individuals network with peer professionals and stakeholders, helping businesses reach their market through a combination of various services that we offer, <b>whilst contributing to accelerating investments in Africa via our various international and local events.</b>
                Finally, we are thankful for the <b>clients and stakeholders</b> that have trusted us this year. We look forward to surpassing your expectations <b>next year</b>.
                <br><br>
                <b>‘Jamiu</b>
            </p>
        </div>
      `,
    },
    {
      id: 2,
      imgLink: "/images/blog/blogcomp_2.png",
      title:
        "Firm sets agenda for new leadership, charts discussions on future of Nigeria’s economy",
      author: "Adeola Badru - Vanguard",
      slug: "firm-sets-agenda-for-new-leadership",
      excerpt:
        "Nigeria’s leading B2B Event servicing company, Eventhive.ng, has announced plans to host the maiden edition of the Nigeria Economic Breakfast Meeting, where it will set agenda for the new leadership and chart discussions on the future of Nigeria’s economy.",
      description: `
        <p>
          <b>Nigeria’s leading B2B Event servicing company, Eventhive.ng</b>, has announced plans to host the maiden edition of the <b><a href="https://economy.eventhive.ng/">Nigeria Economic Breakfast Meeting</a></b>, where it will set agenda for the new leadership and chart discussions on the future of <b>Nigeria’s economy</b>.
          <br><br>
          In a statement made available to Vanguard in Ibadan yesterday by the company, the <b><a href="https://economy.eventhive.ng/">Nigeria Economic Breakfast Meeting</a></b> will host <b>C-level executives across Nigeria</b>, providing them with an opportunity to access key insights, intelligence and data regarding the state of <b>Nigeria’s economy</b>, how it affects their businesses and how to navigate the situation.
          <br><br>
          The event, according to the statement, will highlight available opportunities whilst providing clear context of the economic situation in the country.
          <br><br>
          The statement reads:
        </p>
  
        <blockquote>
            As we prepare for the 2023 election, the <b><a href="https://economy.eventhive.ng/">Nigeria Economic Breakfast Meeting</a></b> will set the agenda for the new leadership and chart discussions on the future of <b>Nigeria’s economy</b>.
            <br><br>
            Delegates at the breakfast meeting will be exposed to unrivaled <b>high level B2B networking and knowledge sharing opportunities</b>.
            <br><br>
            The event is scheduled to be held on the <b>16th of January, 2023 at the Four Points By Sheraton, Victoria Island, Lagos, Nigeria</b>. The event holds H1 and H2 every year.
            <br><br>
            The theme of the breakfast meeting tagged: <b>‘2023 ELECTION; SETTING THE ECONOMIC AGENDA FOR THE NIGERIA WE WANT’</b> will draw attendees from the public, private sectors and development partners.
        </blockquote>

        <p>
            Speaking on why the event was launched, <b>CEO of Eventhive.ng, Jamiu Ijaodola</b> disclosed that:
        </p>

        <blockquote>
            Businesses have quite a lot of expectations from the <b>2023 election</b>, and it is important to provide a platform to lead conversations on ease of doing business and equally provide insights into the economy and how businesses should prepare themselves and retool their strategies.
            <br><br>
            This has spurred us into launching this event and providing an opportunity for C-level executives to meet, learn and network. 
            <br><br>
            Interested delegates can register to attend via <b><a href="https://economy.eventhive.ng/">economy.eventhive.ng</a></b>.
        </blockquote>
      `,
    },
    {
      id: 3,
      imgLink: "/images/blog/blogcomp_3.png",
      title: "Interswitch Group Headlines Nigeria Fintech Forum 2022",
      author: "Raji Adebayo - Independent",
      slug: "interswitch-headlines-nigeria-fintech-forum",
      excerpt:
        "Interswitch Group, Africa’s leading integrated payments and digital commerce company will headline the flagship edition of the Nigeria Fintech Forum, a one-day conference to be hosted by leading event servicing company, Eventhive.ng",
      description: `
        <p>
          <b><a href="https://www.interswitchgroup.com/">Interswitch Group</a></b>, <b>Africa’s leading integrated payments and digital commerce company</b> will headline the <b>flagship edition</b> of the <b><a href="https://fintech.eventhive.ng/">Nigeria Fintech Forum</a></b>, a one-day conference to be hosted by <b>leading event servicing company, Eventhive.ng</b>
          <br><br>
          The forum, which is billed to hold in Victoria Island, Lagos on the 3rd of August 2022, is expected to <b>draw public and private sector stakeholders from across Nigeria’s financial services industry</b> and will feature <b>keynote presentations, panel discussions, breakout sessions, exhibitions, and fireside chats.</b>
          <br><br>
          The focus of this year’s edition tagged, <b>“Building Partnership For Growth: Exploring The Intersection Of Banks, Telcos And Fintech Companies”</b> will provide a platform for participating stakeholders to explore topics essential to growing the financial sector.
          <br><br>
          These topics will include <b>ways to deepen digital transformation, strengthen financial inclusion strategies, aligning with the regulatory environment</b> among other key conversations targeted at positioning Nigeria’s fintech industry for further growth and development.
          <br><br>
          Speaking on why the event was launched, <b>Jamiu Ijaodola, CEO of Eventhive.ng, organizers of the event</b>, disclosed that:
        </p>
  
        <blockquote>
            The event was designed to channel the interests of industry players within <b>Nigeria’s financial ecosystem</b> with a keen focus on the fintech players as they are revolutionizing payments and other fintech offerings across the continent.
            <br><br>
            The event would combine conference and exhibitions, providing players with an <b>opportunity to share their brand story and equally showcase multiple solutions</b> that have been developed over the years.
        </blockquote>

        <p>
            Speaking on behalf of <b><a href="https://www.interswitchgroup.com/">Interswitch Group</a></b>, <b>the headline sponsor of the event, the Managing Director for Transaction Switching and Payment Processing (Interswitch Purepay), Akeem Lawal</b> restated Interswitch’s focus on supporting industry events such as the fintech forum, where critical issues, trends and analyses pertaining to the fintech industry are discussed.
            <br><br>
            According to him,
        </p>
        <blockquote>
            We at <b><a href="https://www.interswitchgroup.com/">Interswitch</a></b> remain committed to supporting and participating at platforms that share our vision to drive greater financial inclusion and prosperity across Nigeria and indeed, Africa.
        </blockquote>
      `,
    },
    {
      id: 4,
      imgLink: "/images/blog/blogcomp_4.png",
      title:
        "SNG Lead 2022 Nigeria Oil & Gas Outlook Conference Holds August 31st In Lagos",
      author: "Raji Adebayo - Independent",
      slug: "sng-lead-nigeria-oil-gas-outlook",
      excerpt:
        "The 2022 edition of the Nigeria Oil & Gas Outlook, which is going to be hosted by Eventhive.ng company is billed to hold in Lagos on August 31st and is going to be lead by Shell Nigeria Gas (SNG), which operates a growing world class gas transmission and distribution network in Nigeria.",
      description: `
        <p>
          The <b>2022 edition of the <a href="https://og.eventhive.ng/">Nigeria Oil & Gas Outlook</a></b>, which is going to be hosted by <b>Eventhive.ng</b> company is billed to hold in Lagos on August 31st and is going to be lead by <b><a href="https://www.shell.com/">Shell Nigeria Gas (SNG)</a></b>, which operates a growing world class gas transmission and distribution network in <b>Nigeria</b>.
          <br><br>
          The <b><a href="https://og.eventhive.ng/">Nigeria Oil & Gas Outlook</a></b>, a one-day conference has been designed to gather public and private sector stakeholders across <b>Nigeria’s Oil & Gas industry</b>, which will feature <b>keynote presentations, panel discussion, breakout sessions, exhibitions, and fireside chats.</b>
          <br><br>
          The event, which is scheduled to hold at the <b>Civic Centre, Victoria Island, Lagos on August 31, 2022</b> with the theme: <b>“Energy as a Foundation for Nigeria’s shared Prosperity and Unity.”</b>
          <br><br>
          The focus of the event is to <b>provide an opportunity for participating stakeholders to explore essential topics across local content, PIA, gas market and Energy Transition</b>. The deliberation is targeted at positioning Nigeria’s energy industry for further growth and development.
          <br><br>
          Speaking on the event that was launched last year, the <b>CEO of Eventhive.ng, Jamiu Ijaodola</b> said,
        </p>
  
        <blockquote>
            The event was designed to channel the interests of industry players within Nigeria’s energy ecosystem with keen focus on the oil & gas players.
            <br><br>
            The expected outcome of the conference and exhibition is to help industry stakeholders network, learn and define the future of the energy ecosystem towards implementing policies that promote growth in Nigeria and Africa at large.
        </blockquote>
      `,
    },
    {
      id: 5,
      imgLink: "/images/blog/blogcomp_5.jpg",
      title: "Mastercard Sponsors 4th Edition of the Lagos Tech Fest",
      author: "Mastercard",
      slug: "mastercard-sponsors-lagos-tech-fest",
      excerpt:
        "Africa’s	leading	B2B2C	event	servicing	company, Eventhive.ng	has	announced	the	return	of	its	annual Lagos	Tech	Fest	in	2024.The	2024	edition	of	the	event	is	set	to	happen	on	the	15th	of	February,	2024	at	the	Landmark	Event	Center,	 Lagos.",
      description: `
        <p>
          Africa’s	leading	B2B2C	event	servicing	company, Eventhive.ng	has	announced	the	return	of	its	annual	
          Lagos	Tech	Fest	in	2024.
        </p>
        <br>
        <p>
          The	2024	edition	of	the	event	is	set	to	happen	on	the	15th	of	February,	2024	at	the	Landmark	Event	
          Center,	 Lagos.	 The	 annual	 event	 now	 in	 its	 4th	 edition	 is	 a	 high	 caliber	 Nigeria	 tech-focused	
          conference,	exhibitions	and	networking	platform.	The	event	annually	provides	a	veritable	platform	
          for	 discussions	 and	 deal-making	 between	 leading	 tech	 stakeholders.	 The	 event	 addresses	 key	
          developments	in	the	African	tech	ecosystem	while	uncovering	the	countless	opportunities	within	the	
          Nigerian	and	African	tech	markets.
        </p>
        <br>
        <p>
          Lagos	 Tech	 Fest	 will	 bring	 together	 entrepreneurs,	 disruptors,	 innovators,	 investors,	 venture	
          capitalists,	and	 tech	enthusiasts	 to	explore	 opportunities	and	 navigate	 challenges	within	 the	 tech	
          ecosystem	focusing	on	areas	such	as	Fintech,	DeFi	&	Crypto, Forex,	Investment,	Edtech,	Payment	&	
          Banking,	 Insurtech,	 Healthtech,	 E-commerce,	 Funding	 &	 Exits,	 Government	 Policies,	 Digital	 ID	 &	
          Fraud	and	more.	
        </p>
        <br>
        <h3 className="black-sec">WHAT	IS	NEW	AT	LAGOS	TECH	FEST?</h3>
        <p>
          This	year’s	edition	is	holding	in	collaboration	with	Mastercard	as	a	Platinum	Partner	at	the	event,	
          signalling	 the	 company’s	 commitment	 to	 connect	 and	 power	 an	 inclusive,	 digital	 economy	 that	
          benefits	everyone	 through	innovations,	solutions,	and	especially,	partnerships	with	platforms	and	
          conferences	that	not	only	facilitate	knowledge	sharing,	but	also	fuel	the	growth	of	Nigeria’s	rapidly	
          growing	technology	landscape.
        </p>
        <br>
        <p>
        <p> Speaking	about	this	year’s	edition	of	the	event,	<b>Founder/CEO	of	Eventhive,	Jamiu	Ijaodola,</b>	said</p>	
        <blockquote>
          “Considering	 their	 leading	 position	 in	 the	 technology	 industry	 and	 their	 documented	 efforts	 to	
          fostering	its	growth,	we	are	delighted	 to	have	Mastercard	supporting	 the	4th	edition	of	 the	Lagos	
          Tech	Fest.	The	experience	of	attendees	and	partners	will	now	be	significantly	advanced,	as	we	are	
          introducing	new	activities	which	will	include	workshops,	an	executive	lounge,	an	after-party		and	an	
          expansive	exhibition	platform	offering	these	companies	and	founders	the	opportunity	to	showcase	
          their	capabilities	and	successes	in	front	of	key	companies,	to	scale	their	brands’	growth	and access	
          unrivaled	market	penetration.”
        </blockquote>
        <p>
          Speaking	about	their	participation,<b>	Folasade	Femi-Lawal,	the	Country	Manager,	West	Africa	at	
          Mastercard,</b>	 said,	 "This	 year,	 Mastercard	 proudly	 takes	 center	 stage	 as	 the	 Platinum	 Sponsor	 of	
          Lagos	Tech	Fest,	solidifying	our	commitment	to	spearheading	innovation	and	digital	transformation	
          in	 Africa's	 vibrant	 tech	 ecosystem.	 At	 the	 event,	 we	 aim	 to	 foster	 collaboration,	 showcase	 digital	
          payment	advancements,	and	contribute	to	financial	and	digital	inclusion	efforts—empowering	one	
          billion	people,	50	million	small	businesses,	with	a	focus	on	uplifting	25	million	women	entrepreneurs.	
          Our	 commitment	 extends	 beyond	 the	 event,	 as	 we	 contribute	 to	 propelling	 the	 Nigeria’s	 tech	
          landscape	to	new	heights.
        </p>
        <br>
        <p>
          Lagos	 Tech	 Fest	 annually	 hosts	 tech	 leaders	 from	 the	 African	 ecosystem	 and	 their	 international	
          counterparts,	 all	 in	 one	 place.	 The	 event	 provides	 an	 opportunity	 to	 network	 with	 key	 industry	
          leaders	 including	 tech	 corporates,	 startup	 founders,	 fintech,	 investors,	 regulators,	 and	 other	
          stakeholders	leading	the	charge	on	accelerating	investments	into	the	ecosystem.
          You can	book	your	pass	and	learn	more	about	the	event	here	<a className="text-pry" href="https://tech.eventhive.ng/">Lagos Tech Fest</a>
        </p>
      `,
    },
  ],
  eventPageData: [
    {
      imgLink: "/images/events/banner/economy.png",
      event: "Nigeria Economy Breakfast Meeting",
      date: "January",
      slug: "nigeria-economy-breakfast",
      title: "Nigeria Economic Breakfast Meeting 2024",
      location:
        "31st of January, 2024 | Fourpoints by Sheraton, Victoria Island, Lagos",
      extLink: "https://economy.eventhive.ng",
      logo: "/images/events/event-pics/economy.png",
      pic1: "/images/events/event-pics/economy-1.png",
      pic2: "/images/events/event-pics/economy-2.png",
      pic3: "/images/events/event-pics/economy-3.png",
      majorDesc: `
        <p>
          The Nigeria Economic Breakfast Meeting will host C-level executives across Nigeria, providing them with an opportunity to access key insights, intelligence and data regarding the state of Nigeria’s economy, how it affects their businesses and how to navigate the situation. The event will highlight available opportunities whilst providing clear context of the economic situation in the country.
        </p>
      `,
      minorDesc: `
        <p>
          As Nigeria settles into a new leadership, Nigeria Economic Breakfast Meeting will set the agenda for the new leadership and chart discussions on the future of Nigeria’s economy. Delegates at the breakfast meeting will be exposed to unrivaled high level B2B networking and knowledge sharing opportunities. The event is scheduled to be held on the 31st of January, 2024 at the Four Points By Sheraton, Victoria Island, Lagos, Nigeria.
        </p>
        <p>
          Nigeria Economic Breakfast Meeting is organized by Eventhive.ng, Nigeria’s leading B2B event servicing company with event portfolios across Oil & Gas, Power, Transport, Real Estate, Tech across Nigeria, UK and the USA.
        </p>
      `,
      whyParticipate: [
        "Access high-level networking with the country’s leading business decision makers",
        "Explore new business opportunities in an environment conducive to transactions",
        "Learn from analysis of consultants from leading consultancy firms to guide or reinforce your strategy",
        "Learn about the country’s most promising investments projects",
        "Adapt your strategies to the latest economic and geopolitical trends",
      ],
    },
    {
      imgLink: "/images/events/banner/tech.png",
      event: "Lagos Tech Fest",
      date: "February",
      slug: "lagos-tech-fest",
      title: "Lagos Tech Fest 2024",
      location:
        "15th of February, 2024 | Landmark Event Center, Victoria Island",
      extLink: "https://tech.eventhive.ng",
      logo: "/images/events/event-pics/tech.png",
      pic1: "/images/events/event-pics/tech-1.png",
      pic2: "/images/events/event-pics/tech-2.png",
      pic3: "/images/events/event-pics/tech-3.png",
      majorDesc: `
        <p>
          Does your work resonate with Nigeria's Tech Ecosystem? This is where you should be.
          </p>
      `,
      minorDesc: `
        <p>
          Now in its 4th year, Lagos Tech Fest annually gathers to shape the future of Nigeria's tech ecosystem. Convening emerging startups, innovators, investors, tech enthusiasts, global tech giants, new entrants, and government representatives, this is where we define our tech ecosystem, address key developments and uncover countless opportunities within the Nigerian, and African tech market.
        </p>
        <p>
          Combining conferences, exhibitions, and networking, the event annually creates a veritable platform that seeks to drive investments into the ecosystem.
        </p>
      `,
      whyParticipate: [
        "Brings together tech leaders from both the African ecosystem and international counterparts in one venue",
        "Offers a unique networking opportunity with key industry leaders, such as tech corporates, startup founders, fintech professionals.",
        "Opportunity to network with investors,regulators, and other stakeholders leading the charge on accelerating investments into the ecosystem.",
        "Focuses on accelerating investments into the African tech ecosystem, fostering growth and collaboration across the industry.",
      ],
    },
    {
      imgLink: "/images/events/banner/uk.png",
      event: "UK-Nigeria Business Outlook",
      date: "March",
      slug: "uk-nigeria-business-outlook",
      title: "UK-Nigeria Business Outlook 2024",
      location: "18th of March, 2024 | Addleshaw Goddard, London",
      extLink: "https://uk.eventhive.ng",
      logo: "/images/events/event-pics/uk.png",
      pic1: "/images/events/event-pics/uk-1.png",
      pic2: "/images/events/event-pics/uk-2.png",
      pic3: "/images/events/event-pics/uk-3.png",
      majorDesc: `
        <p>Nigeria and Africa at large, are confronted by multiple challenges which are tied to inability to attract and retain investments across their most important industries. Months into a new leadership, the country is witnessing implementation of a raft of reforms long sought by investors, bankers and business stakeholders to revive Africa’s biggest economy. In a bid to set the investment agenda for the new leadership, We are delighted to announce the return of the 3rd edition of the UK-Nigeria Business Outlook.</p>
        <p>This year’s edition of the event will create a platform for partnerships and collaboration amongst Uk and Nigerian businesses. With investments at its core, The event will focus on those who are investing in the country’s future, highlighting the opportunities and obstacles that are impeding investments. Trade & Investments, Energy, Fintech and the Creative economy are expected to headline discussions at this year’s edition of the event scheduled to hold on the 18th of March, 2024 at the Addleshaw Goddard, London.</p>
      `,
      minorDesc: `
        <p>
          As Nigeria settles into a new leadership, Nigeria Economic Breakfast Meeting will set the agenda for the new leadership and chart discussions on the future of Nigeria’s economy. Delegates at the breakfast meeting will be exposed to unrivaled high level B2B networking and knowledge sharing opportunities. The event is scheduled to be held on the 31st of January, 2024 at the Four Points By Sheraton, Victoria Island, Lagos, Nigeria.
        </p>
        <p>
          Nigeria Economic Breakfast Meeting is organized by Eventhive.ng, Nigeria’s leading B2B event servicing company with event portfolios across Oil & Gas, Power, Transport, Real Estate, Tech across Nigeria, UK and the USA.
        </p>
      `,
      whyParticipate: [
        "Extensive market understanding",
        "Strengthening fdi’s into nigeria",
        "Highlighting opportunity",
        "Diverse approach",
        "Unparalleled networking access",
      ],
    },
    {
      imgLink: "/images/events/banner/power.png",
      event: "Nigeria Power Outlook",
      date: "April",
      slug: "nigeria-power-outlook",
      title: "Nigeria Power Outlook 2024",
      location: "25th of April, 2024 | Civic Center, Victoria Island, Lagos",
      extLink: "https://power.eventhive.ng",
      logo: "/images/events/event-pics/power.png",
      pic1: "/images/events/event-pics/power-1.png",
      pic2: "/images/events/event-pics/power-2.png",
      pic3: "/images/events/event-pics/power-3.png",
      majorDesc: `
        <p>
          Now in its 5th year, Nigeria Power Outlook is a high caliber Nigeria power-focused conference, exhibitions and networking platform. The event annually provides a veritable platform that convenes stakeholders, developers and investors in the power sector (on-grid and off-grid), representatives from state and federal government of Nigeria, Nigeria Electricity Regulatory Commission (NERC), Independent Power Producers (IPP), Distribution companies, Development partners, Renewable energy companies, amongst other stakeholders working within the power industry.
        </p>
      `,
      minorDesc: `
        <p>
          Nigeria Power Outlook will harmonize public and private sector stakeholders to define the future of the power industry, debate and discuss key developments in the power industry, share knowledge and build collaborative approaches with the common objective to increase access, reliability and stability of power supply, market certainty and viability of the power sector.
        </p>
        <p>
          Nigeria Power Outlook will combine conference and exhibitions, beyond the conversations and networking, the event will provide a platform for companies working in the power value chain, to showcase their solutions, through available exhibition opportunities.
        </p>
      `,
      whyParticipate: [
        "Network with Industry Leaders in the Power and Energy Sector.",
        "Identify emerging opportunities in the Power value chain.",
        "Identify necessary regulatory tools and actions required to stimulate investment in the Power Industry.",
        "Share conversation with policy makers regarding innovation and Investment in the Power sector.",
        "Providing a global platform for debate and action to build Nigeria’s Power sector.",
        "Networking with policy-setting government figures at Federal and State Government levels.",
      ],
    },
    {
      imgLink: "/images/events/banner/lrf.jpeg",
      event: "Lagos Real Estate Fest",
      date: "June",
      slug: "lagos-real-estate-fest",
      title: "Lagos Real Estate Fest 2024",
      location: "27th of June, 2024 | Civic Center, Victoria Island, Lagos",
      extLink: "https://re.eventhive.ng",
      logo: "/images/events/event-pics/re.png",
      pic1: "/images/events/event-pics/re-1.png",
      pic2: "/images/events/event-pics/re-2.png",
      pic3: "/images/events/event-pics/re-3.png",
      majorDesc: `
        <p>
          Lagos Real Estate Fest is an annual gathering of the most influential and knowledgeable public and private sector stakeholders, within Nigeria's property ecosystem. The event, now in its 4th year, is West Africa’s leading marketplace for property stakeholders combining conferences and exhibitions.
        </p>
      `,
      minorDesc: `
        <p>
          Lagos Real Estate Fest is a property-focused forum that harmonizes stakeholders in the property industry for learning, knowledge transfer and peer-to-peer networking. Keynote and specialist session content will be unique to the conference as it is the result of public and private sector collaboration.
        </p>
        <p>
          Lagos Real Estate Fest puts strategy, policy and thought leadership at the heart of its sessions ensuring a delegate audience of key decision makers and c-suite directors. Join 500+ delegates from real estate, design, finance, developers,construction architecture and other property players to network, learn, transact and discuss opportunities and issues within Nigeria's real estate ecosystem.
        </p>
      `,
      whyParticipate: [
        "Email- Targeting a database of 7000+ key sector stakeholders drawn from various industries.",
        "Exhibition- Providing you with a rightly positioned booth to showcase your real estate offerings/solutions to industry stakeholders.",
        "Media Campaign- A carefully curated pre,on and post event media campaign targeting digital and physical media platforms.",
        "Branding- Embedding your brand logos and materials across our event showcase platforms.",
        "Thought Leadership- Strengthening your market position via carefully designed presentations/fireside chats during the event.",
      ],
    },
    {
      imgLink: "/images/events/banner/nff.png",
      event: "Nigeria Fintech Forum",
      date: "July",
      slug: "nigeria-fintech-forum",
      title: "Nigeria Fintech Forum 2024",
      location: "25th of July, 2024 | Civic Center, Victoria Island, Lagos",
      extLink: "https://fintech.eventhive.ng",
      logo: "/images/events/event-pics/fintech.png",
      pic1: "/images/events/event-pics/fintech-1.png",
      pic2: "/images/events/event-pics/fintech-2.png",
      pic3: "/images/events/event-pics/fintech-3.png",
      majorDesc: `
        <p>
          Nigeria Fintech Forum is a premium conference, exhibition and networking platform catering to public and private sector stakeholders across Nigeria’s financial technology industry. The forum featured presentations, keynote speeches, panel sessions, exhibitions and fireside chats.
        </p>
        <p>
          In the last few years, Nigeria’s fintech Industry has attracted significant attention from investors and stakeholders. In 2021 African fintechs raised up to $1.4 billion with Nigeria taking the center stage, raising almost $800 Million. At the intersection of these developments, is the need to constantly create engagements and exhibition platforms targeted at ensuring accelerated growth of the ecosystem.
        </p>
      `,
      minorDesc: `
        <p>
          From the accelerated rise in adoption of crypto across Africa, To the funding boom across the fintech ecosystem , to the launch of CBN’s digital currency, and the dominance of mobile money, the industry is positioned to take a center stage in Nigeria’s economy.
        </p>
        <p>
          Nigeria Fintech Forum is designed to bring together public and private sector stakeholders who are revolutionizing and changing the face of Nigeria’s financial industry. The event created an unrivaled platform to debate, examine and discuss issues and opportunities shaping the future of the industry.
        </p>
      `,
      whyParticipate: [
        "Telco’s, banks, fintechs; who will win the digital payments war in Nigeria?",
        "Neo banks- what next for the new challengers of Nigerian legacy banking?",
        "Nigeria’s future of payments; the role of digital currencies for a digital future.",
        "Future of banking; exploring the intersection of mobile banking, retail banking and digital banking.",
        "Deepening financial inclusion in Nigeria.",
        "Investing in Nigerian fintech; scaling for growth, what next?",
        "Examining best practices for fintech regulation in Nigeria.",
        "Shining light on adoption of crypto in Nigeria.",
      ],
    },
    {
      imgLink: "/images/events/banner/og.png",
      event: "Nigeria Oil and Gas Outlook",
      date: "August",
      slug: "nigeria-oil-and-gas-outlook",
      title: "Nigeria Oil & Gas Outlook 2024",
      location:
        "22nd of August, 2024 | Fourpoints by Sheraton, Victoria Island, Lagos",
      extLink: "https://og.eventhive.ng",
      logo: "/images/events/event-pics/og.png",
      pic1: "/images/events/event-pics/og-1.png",
      pic2: "/images/events/event-pics/og-2.png",
      pic3: "/images/events/event-pics/og-3.png",
      majorDesc: `
        <p>
          The Nigeria Oil & Gas Outlook Conference & Exhibition returned to Lagos for its second edition. Building on the successes recorded from the flagship edition of the event in 2021 which was the first energy event since the PIB became an Act, the event has grown to become a very important meeting place for Nigeria’s Oil & Gas stakeholders.
        </p>
        <p>
          Against the backdrop from the pandemic, the need to demonstrate longstanding commitment to investment in Nigeria’s energy industry has become extremely important, NOGO 2022 provided a premier platform to debate, discuss and examine very important challenges as the country works to close the gap of decline in production, oil theft, expand and promote exploration, reach fuel-independency via large scale investments in refining capacity, diversify her economy and ensure a just energy transition by developing its natural gas resources and other alternative energy resources.
        </p>
      `,
      minorDesc: `
        <p>
          Attendees at last year’s edition of the event benefited from a wide range of industry-advancing panel sessions, in-conversations, keynote sessions, presentations, unrivaled networking, investor/government/private sector deal rooms, as the event promoted opportunities in Nigeria’s Oil & Gas Industry.
        </p>
        <p>
          The event tackled topics spanning across Local content; Energy Transition; Gas Market; Petroleum Industry Act; Women in Energy amongst other latest developments aimed at strengthening the development of Africa’s largest producer of oil - Nigeria.
        </p>
      `,
      whyParticipate: [
        "Email- Targeting a database of 9000+ key sector stakeholders drawn from various industries.",
        "Exhibition- Providing you with a rightly positioned booth to showcase your oil & gas offerings/solutions to industry stakeholders.",
        "Media Campaign- A carefully curated pre, on and post event media campaign targeting digital and physical media platforms.",
        "Branding- Embedding your brand logos and materials across our event showcase platforms.",
        "Thought Leadership- Strengthening your market position via carefully designed presentations/fireside chats during the event.",
      ],
    },
    {
      imgLink: "/images/events/banner/us-nigeria.png",
      event: "US-Nigeria Business Outlook",
      date: "September",
      slug: "us-nigeria-business-outlook",
      title: "US-Nigeria Business Outlook 2024",
      location: "13th of September, 2024 | New York, U.S.A",
      extLink: "https://us.eventhive.ng",
      logo: "/images/events/event-pics/us.png",
      pic1: "/images/events/event-pics/us-1.png",
      pic2: "/images/events/event-pics/us-2.png",
      pic3: "/images/events/event-pics/us-3.png",
      majorDesc: `
        <p>
          The US-Nigeria Business Outlook is designed to bring together International business leaders, policy makers, regulators, investors, asset management coys, startups, entrepreneurs and government representatives from both the United States and Nigeria, leading discussions that impact the economic development of both countries.
        </p>
        <p>
          US-Nigeria Business Outlook explored new perspectives on US-Nigeria partnership for mutual growth and development.
        </p>
      `,
      minorDesc: `
        <p>
          US-Nigeria Business Outlook provided a platform for public-private dialogue, delivering high level meetings of CEO’s and investors with Nigerian Government Officials, to gain insight into the country’s economic development strategies. 
        </p>
        <p>
          The sessions provided exposure to a variety of key sectors, business environments and public/private investment opportunities. The event was a virtual event that offered an opportunity for fantastic networking, providing industry leaders with an opportunity to discuss business.
        </p>
      `,
      whyParticipate: [
        "Extensive market understanding",
        "Strengthening fdi’s into Nigeria",
        "Highlighting opportunity",
        "Diverse approach",
        "Unparalleled networking access",
      ],
    },
    {
      imgLink: "/images/events/banner/af-fin.png",
      event: "Africa Fintech Outlook",
      date: "October",
      slug: "africa-fintech-outlook",
      title: "Africa Fintech Outlook 2024",
      location: "To Be Determined | To Be Determined",
      extLink: "https://eventhive.ng",
      logo: "/images/events/event-pics/af-fin.png",
      pic1: "/images/events/event-pics/economy-1.png",
      pic2: "/images/events/event-pics/economy-2.png",
      pic3: "/images/events/event-pics/economy-3.png",
      majorDesc: `
        <p>
          The Africa Fintech Outlook event is a premier gathering of industry leaders, innovators, and policymakers shaping the future of financial technology across the continent. As Africa continues to emerge as a global leader in fintech, this event will explore the latest trends, challenges, and opportunities driving the sector's rapid growth. Participants will gain insights into how fintech is transforming traditional financial services, fostering financial inclusion, and creating new avenues for economic empowerment across diverse markets.
        </p>
      `,
      minorDesc: `
        <p>
          This event offers a unique platform for networking and knowledge-sharing among key stakeholders in the fintech ecosystem. From established financial institutions to disruptive startups, attendees will engage in meaningful discussions on the regulatory landscape, investment opportunities, and the role of technology in driving sustainable growth. With a lineup of expert speakers and thought-provoking panel sessions, the Africa Fintech Outlook is the ideal venue for staying ahead of the curve in this dynamic industry.
        </p>
        <p>
          Join us to connect with industry peers, gain actionable insights, and contribute to the future of fintech in Africa. Whether you are a fintech entrepreneur, investor, or policymaker, this event provides an unparalleled opportunity to shape the narrative around financial innovation and inclusion on the continent. Don't miss the chance to be part of Africa's fintech revolution.
        </p>
      `,
      whyParticipate: [
        "Connect with fintech leaders.",
        "Discover emerging fintech trends.",
        "Explore investment opportunities.",
        "Engage in thought-provoking discussions.",
        "Shape Africa's fintech future.",
      ],
    },
    {
      imgLink: "/images/events/banner/af-tech.png",
      event: "Africa Tech Forum",
      date: "November",
      slug: "africa-tech-forum",
      title: "Africa Tech forum 2024",
      location: "7th of November, 2024 | Kigali Convention Center, Rwanda",
      extLink: "https://atf.eventhive.ng",
      logo: "/images/events/event-pics/atf.png",
      pic1: "/images/events/event-pics/atf-1.jpg",
      pic2: "/images/events/event-pics/atf-2.jpg",
      pic3: "/images/events/event-pics/atf-3.jpg",
      majorDesc: `
        <p>
          As technology continues to grow across Africa, the Africa Tech Forum stands as a vital gathering place for startups, regulators, investors, enthusiasts, disruptors, and everyone working across various layers of the ecosystem. With a mission to foster collaboration, innovation, and growth, the forum is a beacon of progress in the ever-evolving landscape of African technology.
        </p>
      `,
      minorDesc: `
        <p>
          The Africa Tech Forum provides an unparalleled platform for startups to showcase their innovations and connect with key stakeholders. Entrepreneurs from diverse backgrounds come together to share their ideas, learn from industry leaders, and gain valuable insights that can propel their ventures to new heights. With access to mentorship, funding opportunities, and exposure to potential partners, startups find the resources they need to thrive in a competitive market.
        </p>
        <p>
          The Africa Tech Forum is organized by Eventhive.ng, Nigeria’s leading B2B event servicing company with event portfolios across Oil & Gas, Power, Transport, Real Estate, Tech across Nigeria, UK and the USA
        </p>
      `,
      whyParticipate: [
        "Connect with key industry players.",
        "Access funding opportunities.",
        "Stay ahead of the curve.",
        "Collaborate on innovative solutions.",
        "Enhance your brand's visibility.",
      ],
    },
    {
      imgLink: "/images/events/banner/lagtrans.png",
      event: "Lagos Transport Fest",
      date: "December",
      slug: "lagos-transport-fest",
      title: "Lagos Transport Fest 2024",
      location: "12th of December, 2024 | Civic Center, Victoria Island, Lagos",
      extLink: "https://transport.eventhive.ng",
      logo: "/images/events/event-pics/transport.png",
      pic1: "/images/events/event-pics/transport-1.png",
      pic2: "/images/events/event-pics/transport-2.png",
      pic3: "/images/events/event-pics/transport-3.png",
      majorDesc: `
        <p>
          Now in its 6th year, Lagos Transport Fest is West Africa’s most important gathering of mobility leaders across Road, Rail and Ports. The event will once again host global businesses, private and public investment bodies, thought leaders, mobility stakeholders, end user community and policy makers. The event will lead high caliber public and private sector deliberations aimed at shaping the future of Nigeria’s Transport Sector.
        </p>
      `,
      minorDesc: `
        <p>
          The event will combine conferences & exhibitions providing mobility companies with an opportunity to showcase their brand offerings to industry leaders at the event.
        </p>
        <p>
          Lagos Transport Fest will provide mobility stakeholders with an opportunity to drive discussions across Infrastructure deficits, congestion, multimodal interconnectivity, investments, policies and innovations. At the fore of the event is networking - facilitating deals and engagements between industry leaders across the transport industry.
        </p>
      `,
      whyParticipate: [
        "Access high-level networking with the country’s leading business decision makers",
        "Explore new business opportunities in an environment conducive to transactions",
        "Learn from analysis of consultants from leading consultancy firms to guide or reinforce your strategy",
        "Learn about the country’s most promising investments projects",
        "Adapt your strategies to the latest economic and geopolitical trends",
      ],
    },
    {
      imgLink: "/images/events/banner/business.png",
      event: "Nigeria Business Forum",
      date: "December",
      slug: "nigeria-business-forum",
      title: "Nigeria Business Forum 2024",
      location: "To Be Determined | To Be Determined",
      extLink: "https://eventhive.ng",
      logo: "/images/events/event-pics/business.png",
      pic1: "/images/events/event-pics/economy-1.png",
      pic2: "/images/events/event-pics/economy-2.png",
      pic3: "/images/events/event-pics/economy-3.png",
      majorDesc: `
        <p>
          The Nigeria Business Forum is a premier gathering of industry leaders, entrepreneurs, and policymakers dedicated to shaping the future of business in Nigeria. This forum provides a unique platform for insightful discussions, networking opportunities, and the exchange of ideas that drive economic growth and innovation. Attendees will have the opportunity to engage with top executives from various sectors, explore emerging trends, and gain valuable insights into the challenges and opportunities facing the Nigerian business landscape.
        </p>
      `,
      minorDesc: `
        <p>
          This year’s forum will feature keynote addresses from influential business leaders, panel discussions on critical economic issues, and breakout sessions that delve into specific industry challenges. Participants will gain firsthand knowledge of government policies, investment opportunities, and strategies for navigating the complex business environment in Nigeria. Whether you are an established business owner, an investor, or a startup founder, this forum offers the tools and connections needed to thrive in a competitive market.
        </p>
        <p>
          Beyond the formal sessions, the Nigeria Business Forum is designed to foster meaningful connections among attendees. Networking events, exhibitions, and informal gatherings will provide ample opportunities to build relationships with peers, potential partners, and investors. By participating in this event, you will be part of a dynamic community working together to shape the future of business in Nigeria and beyond.
        </p>
      `,
      whyParticipate: [
        "Exclusive networking with industry leaders",
        "Insightful discussions on economic trends",
        "Access to investment opportunities",
        "Strategies for navigating Nigerian markets",
        "Engage with top government policymakers",
      ],
    },
  ],
};

data.blogData.info = data.blogPageData;
data.eventData.info = data.eventPageData;

export default data;
