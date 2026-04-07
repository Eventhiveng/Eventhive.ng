import { SampleNextArrow, SamplePrevArrow } from "./arrow";
import { DataStore } from "./types";
import { sortActiveEventsByOccurrence } from "./eventSort";
import { blogPageData } from "./blogData";

// const sts = () => Math.ceil(window.innerWidth / 150);

const blogPageDataByDateDesc = [...blogPageData].sort((a, b) =>
  b.createdAt.localeCompare(a.createdAt),
);

const data: DataStore = {
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
      title: "Finance",
      description:
        "Bringing together influential stakeholders for impactful networking and strategic discussions.Focused on driving financial inclusion and shaping transformative policies.Fostering sustainable economic growth and investment opportunities in Nigeria.",
    },
    {
      icon: "lucide:plane",
      title: "Aviation",
      description:
        "Creating a platform for stakeholders in Africa's aviation industry to exchange ideas, address regulatory and operational challenges, and explore innovations shaping the future of air travel and logistics.",
    },
    {
      icon: "fluent:communication-person-20-regular",
      title: "Telecoms",
      description:
        "Focusing on the transformative role of telecommunications in Africa’s digital economy, this sector facilitates dialogue on connectivity, infrastructure development, and the integration of emerging technologies to bridge the digital divide.",
    },
    {
      icon: "hugeicons:trade-up",
      title: "International Trade",
      description:
        "Exploring the opportunities and challenges of cross-border commerce in Africa, this sector connects trade experts, policy-makers, and business leaders to promote sustainable economic collaboration and growth.",
    },
    {
      icon: "fluent:people-money-20-regular",
      title: "PE/VC",
      description:
        "Showcasing Africa’s burgeoning investment landscape, this sector convenes investors, startups, and growth-focused enterprises to discuss funding strategies, market trends, and impactful investments.",
    },
    {
      icon: "solar:traffic-economy-linear",
      title: "Creative Economy",
      description:
        "Highlighting the potential of Africa’s vibrant creative industries, this sector connects innovators, artists, and entrepreneurs to promote sustainable growth, cultural exchange, and global recognition of African creativity.",
    },
    {
      icon: "mdi:car-insurance",
      title: "Insurance",
      description:
        "Focusing on advancements in risk management and protection, this sector brings together industry leaders to discuss innovative insurance solutions, policies, and strategies tailored to Africa's unique challenges.",
    },
  ],
  citiesData: [
    {
      city: "Lagos",
      cityImg: "/images/cities/lagos.jpg",
    },
    {
      city: "London",
      cityImg: "/images/cities/london.jpg",
    },
    {
      city: "Kigali",
      cityImg: "/images/cities/kigali.jpg",
    },
    {
      city: "Johannesburg",
      cityImg: "/images/cities/johannesburg.jpg",
    },
    {
      city: "Nairobi",
      cityImg: "/images/cities/nairobi.jpg",
    },
    {
      city: "New York",
      cityImg: "/images/cities/new-york.jpg",
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
    info: [],
  },
  counterData: [
    {
      imgLink: "/images/icons/icon1.png",
      number: 5,
      description: "Years",
    },
    {
      imgLink: "/images/icons/icon2.png",
      number: 12,
      description: "Sectors",
    },
    {
      imgLink: "/images/icons/icon3.png",
      number: 40,
      description: "Events",
    },
    {
      imgLink: "/images/icons/icon4.png",
      number: 300,
      description: "Clients",
    },
    {
      imgLink: "/images/icons/icon5.png",
      number: 450,
      description: "Speakers",
    },
    {
      imgLink: "/images/icons/icon6.png",
      number: 38000,
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
      autoplaySpeed: 0,
      slidesToShow: 5,
      slidesToScroll: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable: false,
      cssEase: "linear",
      rtl: true,
    },
    info: [
      "/images/brand/mastercard.png",
      "/images/brand/interswitch.png",
      "/images/brand/zoho.png",
      "/images/brand/moniepoint.png",
      "/images/brand/uber.png",
      "/images/brand/9psb.png",
      "/images/brand/cleva.png",
      "/images/brand/payaza.png",
      "/images/brand/financial-house.png",
      "/images/brand/addleshaw-goddard.png",
      "/images/brand/shortlet.png",
      "/images/brand/teltonika.png",
      "/images/brand/unicaf.png",
      "/images/brand/viathan.png",
      "/images/brand/palmpay.png",
      "/images/brand/hogan-lovells.png",
      "/images/brand/tetracore.png",
      "/images/brand/africa-data.png",
      "/images/brand/power-gas.png",
      "/images/brand/odoo.png",
      "/images/brand/flincap.png",
      "/images/brand/prodevs.png",
      "/images/brand/arca.png",
      "/images/brand/max.png",
      "/images/brand/anchor.png",
      "/images/brand/meristem.png",
      "/images/brand/yellowcard.png",
      "/images/brand/spiro.png",
      "/images/brand/seso.png",
      "/images/brand/flick.png",
      "/images/brand/fifthlab.png",
      "/images/brand/qoray.png",
      "/images/brand/cheqwa.png",
      "/images/brand/acuity.png",
      "/images/brand/zero-complex.png",
      "/images/brand/qwid.png",
      "/images/brand/kia.png",
      "/images/brand/centiiv.png",
      "/images/brand/platnova.png",
      "/images/brand/zap.png",
      "/images/brand/nigeria-gas-ass.png",
      "/images/brand/fintech-ngr.png",
      "/images/brand/novare.png",
      "/images/brand/james-hope-uni.png",
      "/images/brand/zone.png",
      "/images/brand/cutstruct.png",
      "/images/brand/inlaks.png",
      "/images/brand/instadeep.png",
      "/images/brand/scrella.png",
      "/images/brand/turaco.png",
      "/images/brand/abbey-mortgage.png",
      "/images/brand/vfd.png",
      "/images/brand/pocketfood.png",
    ],
  },
  slideTwoData: {
    useFor: "slidetwo",
    settings: {
      arrows: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 0,
      slidesToShow: 5,
      slidesToScroll: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable: false,
      cssEase: "linear",
    },
    info: [
      "/images/brand/pinnacle-prime.png",
      "/images/brand/upperlink.png",
      "/images/brand/premiabn.png",
      "/images/brand/polymath.png",
      "/images/brand/tiredc.png",
      "/images/brand/termii.png",
      "/images/brand/resiligent.png",
      "/images/brand/octo5.png",
      "/images/brand/tritek.png",
      "/images/brand/periwinkle.png",
      "/images/brand/chamsaccess.png",
      "/images/brand/africa-com.png",
      "/images/brand/facibus.png",
      "/images/brand/fez.png",
      "/images/brand/updc.png",
      "/images/brand/joe-etoniru.png",
      "/images/brand/bujeti.png",
      "/images/brand/flinx.png",
      "/images/brand/association-of-ldg.png",
      "/images/brand/majorwaves.png",
      "/images/brand/furex.png",
      "/images/brand/conerstone.png",
      "/images/brand/grid-crux.png",
      "/images/brand/buy-let-live.png",
      "/images/brand/wiredin.png",
      "/images/brand/urban-shelter.png",
      "/images/brand/finebricks.png",
      "/images/brand/crayon.png",
      "/images/brand/garamart.png",
      "/images/brand/bedrock.png",
      "/images/brand/regtech-africa.png",
      "/images/brand/funtay.png",
      "/images/brand/tech-gyant.png",
      "/images/brand/axia-africa.png",
      "/images/brand/techcabal.png",
      "/images/brand/financial-it.png",
      "/images/brand/zex.png",
      "/images/brand/coinpedia.png",
      "/images/brand/fintech-finance-news.png",
      "/images/brand/sendpulse.png",
      "/images/brand/benjamin-dada.png",
      "/images/brand/cryptonewsz.png",
      "/images/brand/emergency-response.png",
      "/images/brand/smart-money.png",
      "/images/brand/talking-drum.png",
      "/images/brand/bentp.png",
      "/images/brand/businessday.png",
      "/images/brand/nimbus.png",
      "/images/brand/fintech-review.png",
      "/images/brand/fintech-times.png",
      "/images/brand/e-dryv.png",
      "/images/brand/nairametrics.png",
      "/images/brand/noble-grounds.png",
      "/images/brand/choplyfe.png",
      "/images/brand/naija-startups.png",
    ],
  },
  galleryData: [
    {
      category: "NEBM",
      pictures: [
        "/images/gallery/nebm/1.jpg",
        "/images/gallery/nebm/2.jpg",
        "/images/gallery/nebm/3.jpg",
        "/images/gallery/nebm/4.jpg",
        "/images/gallery/nebm/5.jpg",
        "/images/gallery/nebm/6.jpg",
        "/images/gallery/nebm/7.jpg",
        "/images/gallery/nebm/8.jpg",
        "/images/gallery/nebm/9.jpg",
        "/images/gallery/nebm/10.jpg",
        "/images/gallery/nebm/11.jpg",
        "/images/gallery/nebm/12.jpg",
        "/images/gallery/nebm/13.jpg",
        "/images/gallery/nebm/14.jpg",
        "/images/gallery/nebm/15.jpg",
        "/images/gallery/nebm/16.jpg",
        "/images/gallery/nebm/17.jpg",
        "/images/gallery/nebm/18.jpg",
        "/images/gallery/nebm/19.jpg",
        "/images/gallery/nebm/20.jpg",
      ],
    },
    {
      category: "LTF",
      pictures: [
        "/images/gallery/ltf/1.jpg",
        "/images/gallery/ltf/2.jpg",
        "/images/gallery/ltf/3.jpg",
        "/images/gallery/ltf/4.jpg",
        "/images/gallery/ltf/5.jpg",
        "/images/gallery/ltf/6.jpg",
        "/images/gallery/ltf/7.jpg",
        "/images/gallery/ltf/8.jpg",
        "/images/gallery/ltf/9.jpg",
        "/images/gallery/ltf/10.jpg",
        "/images/gallery/ltf/11.jpg",
        "/images/gallery/ltf/12.jpg",
        "/images/gallery/ltf/13.jpg",
        "/images/gallery/ltf/14.jpg",
        "/images/gallery/ltf/15.jpg",
        "/images/gallery/ltf/16.jpg",
        "/images/gallery/ltf/17.jpg",
        "/images/gallery/ltf/18.jpg",
        "/images/gallery/ltf/19.jpg",
        "/images/gallery/ltf/20.jpg",
        "/images/gallery/ltf/21.jpg",
        "/images/gallery/ltf/22.jpg",
        "/images/gallery/ltf/23.jpg",
        "/images/gallery/ltf/24.jpg",
        "/images/gallery/ltf/25.jpg",
        "/images/gallery/ltf/26.jpg",
        "/images/gallery/ltf/27.jpg",
        "/images/gallery/ltf/28.jpg",
        "/images/gallery/ltf/29.jpg",
        "/images/gallery/ltf/30.jpg",
        "/images/gallery/ltf/31.jpg",
        "/images/gallery/ltf/32.jpg",
        "/images/gallery/ltf/33.jpg",
        "/images/gallery/ltf/34.jpg",
        "/images/gallery/ltf/35.jpg",
        "/images/gallery/ltf/36.jpg",
        "/images/gallery/ltf/37.jpg",
        "/images/gallery/ltf/38.jpg",
        "/images/gallery/ltf/39.jpg",
        "/images/gallery/ltf/40.jpg",
        "/images/gallery/ltf/41.jpg",
        "/images/gallery/ltf/42.jpg",
        "/images/gallery/ltf/43.jpg",
        "/images/gallery/ltf/44.jpg",
        "/images/gallery/ltf/45.jpg",
        "/images/gallery/ltf/46.jpg",
        "/images/gallery/ltf/47.jpg",
        "/images/gallery/ltf/48.jpg",
        "/images/gallery/ltf/49.jpg",
        "/images/gallery/ltf/50.jpg",
        "/images/gallery/ltf/51.jpg",
        "/images/gallery/ltf/52.jpg",
        "/images/gallery/ltf/53.jpg",
        "/images/gallery/ltf/54.jpg",
        "/images/gallery/ltf/55.jpg",
        "/images/gallery/ltf/56.jpg",
        "/images/gallery/ltf/57.jpg",
        "/images/gallery/ltf/58.jpg",
        "/images/gallery/ltf/59.jpg",
        "/images/gallery/ltf/60.jpg",
        "/images/gallery/ltf/61.jpg",
        "/images/gallery/ltf/62.jpg",
        "/images/gallery/ltf/63.jpg",
        "/images/gallery/ltf/64.jpg",
        "/images/gallery/ltf/65.jpg",
        "/images/gallery/ltf/66.jpg",
        "/images/gallery/ltf/67.jpg",
        "/images/gallery/ltf/68.jpg",
        "/images/gallery/ltf/69.jpg",
        "/images/gallery/ltf/70.jpg",
        "/images/gallery/ltf/71.jpg",
        "/images/gallery/ltf/72.jpg",
        "/images/gallery/ltf/73.jpg",
        "/images/gallery/ltf/74.jpg",
        "/images/gallery/ltf/75.jpg",
        "/images/gallery/ltf/76.jpg",
        "/images/gallery/ltf/77.jpg",
        "/images/gallery/ltf/78.jpg",
        "/images/gallery/ltf/79.jpg",
        "/images/gallery/ltf/80.jpg",
        "/images/gallery/ltf/81.jpg",
        "/images/gallery/ltf/82.jpg",
        "/images/gallery/ltf/83.jpg",
        "/images/gallery/ltf/84.jpg",
        "/images/gallery/ltf/85.jpg",
        "/images/gallery/ltf/86.jpg",
        "/images/gallery/ltf/87.jpg",
        "/images/gallery/ltf/88.jpg",
        "/images/gallery/ltf/89.jpg",
        "/images/gallery/ltf/90.jpg",
        "/images/gallery/ltf/91.jpg",
        "/images/gallery/ltf/92.jpg",
        "/images/gallery/ltf/img1.jpg",
        "/images/gallery/ltf/img2.jpg",
        "/images/gallery/ltf/img3.jpg",
        "/images/gallery/ltf/img4.jpg",
        "/images/gallery/ltf/img5.jpg",
        "/images/gallery/ltf/img6.jpg",
        "/images/gallery/ltf/img7.jpg",
        "/images/gallery/ltf/img8.jpg",
        "/images/gallery/ltf/img9.jpg",
        "/images/gallery/ltf/img10.jpg",
        "/images/gallery/ltf/img11.jpg",
        "/images/gallery/ltf/img12.jpg",
        "/images/gallery/ltf/img13.jpg",
        "/images/gallery/ltf/img14.jpg",
        "/images/gallery/ltf/img15.jpg",
        "/images/gallery/ltf/img16.jpg",
        "/images/gallery/ltf/img17.jpg",
        "/images/gallery/ltf/img18.jpg",
        "/images/gallery/ltf/img19.jpg",
        "/images/gallery/ltf/img20.jpg",
        "/images/gallery/ltf/img21.jpg",
        "/images/gallery/ltf/img22.jpg",
        "/images/gallery/ltf/img23.jpg",
        "/images/gallery/ltf/img24.jpg",
        "/images/gallery/ltf/img25.jpg",
        "/images/gallery/ltf/img26.jpg",
        "/images/gallery/ltf/img27.jpg",
        "/images/gallery/ltf/img28.jpg",
        "/images/gallery/ltf/img29.jpg",
        "/images/gallery/ltf/img30.jpg",
      ],
    },
    {
      category: "UK-NBF",
      pictures: [
        "/images/gallery/uk-nbf/1.jpg",
        "/images/gallery/uk-nbf/2.jpg",
        "/images/gallery/uk-nbf/3.jpg",
        "/images/gallery/uk-nbf/4.jpg",
        "/images/gallery/uk-nbf/5.jpg",
        "/images/gallery/uk-nbf/6.jpg",
        "/images/gallery/uk-nbf/7.jpg",
        "/images/gallery/uk-nbf/9.jpg",
        "/images/gallery/uk-nbf/10.jpg",
        "/images/gallery/uk-nbf/11.jpg",
        "/images/gallery/uk-nbf/12.jpg",
        "/images/gallery/uk-nbf/13.jpg",
        "/images/gallery/uk-nbf/14.jpg",
        "/images/gallery/uk-nbf/15.jpg",
        "/images/gallery/uk-nbf/16.jpg",
        "/images/gallery/uk-nbf/17.jpg",
        "/images/gallery/uk-nbf/18.jpg",
        "/images/gallery/uk-nbf/19.jpg",
        "/images/gallery/uk-nbf/20.jpg",
        "/images/gallery/uk-nbf/21.jpg",
        "/images/gallery/uk-nbf/22.jpg",
        "/images/gallery/uk-nbf/23.jpg",
        "/images/gallery/uk-nbf/24.jpg",
        "/images/gallery/uk-nbf/25.jpg",
        "/images/gallery/uk-nbf/26.jpg",
        "/images/gallery/uk-nbf/27.jpg",
        "/images/gallery/uk-nbf/28.jpg",
        "/images/gallery/uk-nbf/29.jpg",
        "/images/gallery/uk-nbf/30.jpg",
        "/images/gallery/uk-nbf/31.jpg",
        "/images/gallery/uk-nbf/32.jpg",
        "/images/gallery/uk-nbf/33.jpg",
      ],
    },
    {
      category: "NPO",
      pictures: [
        "/images/gallery/npo/6.jpg",
        "/images/gallery/npo/7.jpg",
        "/images/gallery/npo/9.jpg",
        "/images/gallery/npo/10.jpg",
        "/images/gallery/npo/11.jpg",
        "/images/gallery/npo/12.jpg",
        "/images/gallery/npo/13.jpg",
        "/images/gallery/npo/14.jpg",
        "/images/gallery/npo/15.jpg",
        "/images/gallery/npo/16.jpg",
        "/images/gallery/npo/17.jpg",
        "/images/gallery/npo/19.jpg",
        "/images/gallery/npo/20.jpg",
        "/images/gallery/npo/21.jpg",
        "/images/gallery/npo/22.jpg",
      ],
    },
    {
      category: "LREF",
      pictures: [
        "/images/gallery/lref/1.jpeg",
        "/images/gallery/lref/2.jpeg",
        "/images/gallery/lref/3.jpeg",
        "/images/gallery/lref/4.jpeg",
        "/images/gallery/lref/5.jpeg",
        "/images/gallery/lref/6.jpeg",
        "/images/gallery/lref/7.jpeg",
        "/images/gallery/lref/9.jpeg",
        "/images/gallery/lref/10.jpeg",
        "/images/gallery/lref/11.jpeg",
        "/images/gallery/lref/12.jpeg",
      ],
    },
    {
      category: "NOGO",
      pictures: [
        "/images/gallery/nogo/1.jpg",
        "/images/gallery/nogo/2.jpg",
        "/images/gallery/nogo/3.jpg",
        "/images/gallery/nogo/4.jpg",
        "/images/gallery/nogo/5.jpg",
        "/images/gallery/nogo/6.jpg",
        "/images/gallery/nogo/7.jpg",
        "/images/gallery/nogo/9.jpg",
        "/images/gallery/nogo/10.jpg",
        "/images/gallery/nogo/11.jpg",
        "/images/gallery/nogo/12.jpg",
        "/images/gallery/nogo/13.jpg",
        "/images/gallery/nogo/14.jpg",
        "/images/gallery/nogo/15.jpg",
        "/images/gallery/nogo/16.jpg",
        "/images/gallery/nogo/17.jpg",
        "/images/gallery/nogo/18.jpg",
        "/images/gallery/nogo/19.jpg",
        "/images/gallery/nogo/20.jpg",
        "/images/gallery/nogo/21.jpg",
        "/images/gallery/nogo/22.jpg",
        "/images/gallery/nogo/23.jpg",
        "/images/gallery/nogo/24.jpg",
        "/images/gallery/nogo/25.jpg",
        "/images/gallery/nogo/26.jpg",
        "/images/gallery/nogo/27.jpg",
      ],
    },

    {
      category: "NFF",
      pictures: [
        "/images/gallery/nff/1.jpg",
        "/images/gallery/nff/2.jpg",
        "/images/gallery/nff/3.jpg",
        "/images/gallery/nff/4.jpg",
        "/images/gallery/nff/5.jpg",
        "/images/gallery/nff/6.jpg",
        "/images/gallery/nff/7.jpg",
        "/images/gallery/nff/9.jpg",
        "/images/gallery/nff/10.jpg",
        "/images/gallery/nff/11.jpg",
        "/images/gallery/nff/12.jpg",
        "/images/gallery/nff/13.jpg",
        "/images/gallery/nff/14.jpg",
        "/images/gallery/nff/15.jpg",
        "/images/gallery/nff/16.jpg",
        "/images/gallery/nff/17.jpg",
        "/images/gallery/nff/18.jpg",
        "/images/gallery/nff/19.jpg",
        "/images/gallery/nff/20.jpg",
        "/images/gallery/nff/21.jpg",
        "/images/gallery/nff/22.jpg",
        "/images/gallery/nff/23.jpg",
        "/images/gallery/nff/24.jpg",
        "/images/gallery/nff/25.jpg",
        "/images/gallery/nff/26.jpg",
        "/images/gallery/nff/27.jpg",
        "/images/gallery/nff/28.jpg",
        "/images/gallery/nff/29.jpg",
        "/images/gallery/nff/30.jpg",
        "/images/gallery/nff/31.jpg",
        "/images/gallery/nff/32.jpg",
        "/images/gallery/nff/33.jpg",
        "/images/gallery/nff/34.jpg",
        "/images/gallery/nff/35.jpg",
        "/images/gallery/nff/36.jpg",
        "/images/gallery/nff/37.jpg",
        "/images/gallery/nff/38.jpg",
        "/images/gallery/nff/39.jpg",
        "/images/gallery/nff/40.jpg",
      ],
    },
    {
      category: "LTRF",
      pictures: [
        "/images/gallery/ltrf/1.jpg",
        "/images/gallery/ltrf/2.jpg",
        "/images/gallery/ltrf/3.jpg",
        "/images/gallery/ltrf/4.jpg",
        "/images/gallery/ltrf/5.jpg",
        "/images/gallery/ltrf/6.jpg",
        "/images/gallery/ltrf/7.jpg",
        "/images/gallery/ltrf/9.jpg",
        "/images/gallery/ltrf/10.jpg",
        "/images/gallery/ltrf/11.jpg",
        "/images/gallery/ltrf/12.jpg",
        "/images/gallery/ltrf/13.jpg",
        "/images/gallery/ltrf/14.jpg",
        "/images/gallery/ltrf/15.jpg",
        "/images/gallery/ltrf/16.jpg",
        "/images/gallery/ltrf/17.jpg",
        "/images/gallery/ltrf/18.jpg",
        "/images/gallery/ltrf/19.jpg",
        "/images/gallery/ltrf/20.jpg",
        "/images/gallery/ltrf/21.jpg",
        "/images/gallery/ltrf/22.jpg",
        "/images/gallery/ltrf/23.jpg",
        "/images/gallery/ltrf/24.jpg",
        "/images/gallery/ltrf/25.jpg",
        "/images/gallery/ltrf/26.jpg",
        "/images/gallery/ltrf/27.jpg",
        "/images/gallery/ltrf/28.jpg",
        "/images/gallery/ltrf/29.jpg",
        "/images/gallery/ltrf/30.jpg",
        "/images/gallery/ltrf/31.jpg",
        "/images/gallery/ltrf/32.jpg",
        "/images/gallery/ltrf/33.jpg",
        "/images/gallery/ltrf/34.jpg",
        "/images/gallery/ltrf/35.jpg",
        "/images/gallery/ltrf/36.jpg",
        "/images/gallery/ltrf/37.jpg",
        "/images/gallery/ltrf/38.jpg",
        "/images/gallery/ltrf/39.jpg",
        "/images/gallery/ltrf/40.jpg",
        "/images/gallery/ltrf/41.jpg",
        "/images/gallery/ltrf/42.jpg",
        "/images/gallery/ltrf/43.jpg",
        "/images/gallery/ltrf/44.jpg",
        "/images/gallery/ltrf/45.jpg",
        "/images/gallery/ltrf/46.jpg",
        "/images/gallery/ltrf/47.jpg",
        "/images/gallery/ltrf/48.jpg",
        "/images/gallery/ltrf/49.jpg",
        "/images/gallery/ltrf/50.jpg",
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
    info: [],
  },
  blogPageData,
  /* blogPageData: [
    {
      id: 1,
      imgLink: "/images/blog/blogcomp_7.jpg",
      title: "Celebrating 5 Years of Impact: Eventhive’s Journey of Growth!",
      author: "Jamiu Ijaodola",
      slug: "five-years-of-excellence",
      excerpt:
        "5 years of turning ideas into impact, building a brand that connects businesses with their customers, stakeholders, and opportunities. Eventhive turns 5 today, marking a milestone filled with resilience, innovation, and growth. Starting from humble beginnings, organizing student events straight out of university, we’ve grown to become a leading force in B2B2C events across Africa and beyond.",
      description: `
        <p>
          <b>5 years</b> of turning ideas into impact, building a brand that connects businesses with their customers, stakeholders, and opportunities. <b>Eventhive turns 5 today</b>, marking a milestone filled with resilience, innovation, and growth.
          Starting from humble beginnings, organizing student events straight out of university, we’ve grown to become a leading force in B2B2C events across Africa and beyond. Our mission has always been simple yet profound: empowering businesses to thrive through meaningful connections and impactful events.
          <br><br>
          <b>A Journey of Transformation</b>:
          <br>
          What started as a small idea has blossomed into a platform recognized for its ability to connect, inspire, and accelerate growth. Over the past 5 years, Eventhive has:
          <ol>
            <li>Expanded Across Borders: From Nigeria to the UK, and now extending to cities like Kigali and Johannesburg.</li>
            <li>Launched Flagship Events: Including the UK-Africa Business Outlook in London and the Nigeria Telecoms Forum, bringing together thousands of attendees and top industry players.</li>
            <li>Tripled Our Revenues: Welcoming over 30 new clients annually from diverse industries.</li>
            <li>Built Strategic Partnerships: Working with brands we once admired as students, like Shell, Interswitch and Quickteller, which are now part of our trusted network.</li>
            <li>Grown Our Team: With a presence in multiple countries, we’ve expanded our talented team of innovators and visionaries.</li>
          </ol>

          <br><br>
          <b>What We Stand For:</b>
          <br>
          At our core, Eventhive bridges businesses and their markets through expertly curated exhibitions, brand activations, thought leadership, and media visibility opportunities. Our events are designed to do more than connect; they inspire innovation and open doors to new possibilities via face-to-face events.
          <br><br>
          
        </p>
    
        <blockquote>
          From humble beginnings to becoming a trusted bridge for businesses across Africa and beyond, Eventhive’s journey over the last 5 years has been nothing short of transformative. We’ve grown not just in numbers but in impact, forging partnerships, creating opportunities, and driving innovation. As we step into the future, we remain committed to empowering businesses, fostering connections, and shaping the narrative of Africa’s growth through world-class events.
          <br>
          – The Eventhive Team
        </blockquote>
        <br><br>
        <div>
            <img src="/images/blog/b_details001.png" alt="">
        </div>
        <br><br>
        <div>
            <img src="/images/blog/b_details02.jpg" alt="">
        </div>
        <br><br>
        <div className="image-text">
            <img src="/images/blog/b_details03.jpg" alt="">
            <p>
            <b>Looking Ahead:</b>
            <br>
            As we enter this new chapter, we’re excited to double down on our global presence and impact. In the next year, we’re launching 5 new events across London, Lagos, and Kigali, creating spaces for professionals to network, businesses to grow, and investors to engage in Africa’s vibrant economic landscape.
            <br><br>
            <b>Gratitude:</b>
            To our clients, partners, and friends who have stood by us on this journey, thank you. Your trust fuels our commitment to delivering excellence. To our incredible team—your dedication and passion are unmatched. We couldn’t have done this without you.
            <br>
            Here’s to the next chapter of Eventhive: growing businesses, fostering innovation, and shaping the future of events in Africa and beyond.
            </p>
        </div>
      `,
    },
    {
      id: 2,
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
      id: 3,
      imgLink: "/images/blog/blogcomp_2.png",
      title:
        "Firm sets agenda for new leadership, charts discussions on future of Nigeria’s economy",
      author: "Adeola Badru - Vanguard",
      slug: "firm-sets-agenda-for-new-leadership",
      excerpt:
        "Nigeria’s leading B2B Event servicing company, Eventhive, has announced plans to host the maiden edition of the Nigeria Economic Breakfast Meeting, where it will set agenda for the new leadership and chart discussions on the future of Nigeria’s economy.",
      description: `
        <p>
          <b>Nigeria’s leading B2B Event servicing company, Eventhive</b>, has announced plans to host the maiden edition of the <b><a href="https://economy.eventhive.ng/">Nigeria Economic Breakfast Meeting</a></b>, where it will set agenda for the new leadership and chart discussions on the future of <b>Nigeria’s economy</b>.
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
            Speaking on why the event was launched, <b>CEO of Eventhive, Jamiu Ijaodola</b> disclosed that:
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
      id: 4,
      imgLink: "/images/blog/blogcomp_3.png",
      title: "Interswitch Group Headlines Nigeria Fintech Forum 2022",
      author: "Raji Adebayo - Independent",
      slug: "interswitch-headlines-nigeria-fintech-forum",
      excerpt:
        "Interswitch Group, Africa’s leading integrated payments and digital commerce company will headline the flagship edition of the Nigeria Fintech Forum, a one-day conference to be hosted by leading event servicing company, Eventhive",
      description: `
        <p>
          <b><a href="https://www.interswitchgroup.com/">Interswitch Group</a></b>, <b>Africa’s leading integrated payments and digital commerce company</b> will headline the <b>flagship edition</b> of the <b><a href="https://fintech.eventhive.ng/">Nigeria Fintech Forum</a></b>, a one-day conference to be hosted by <b>leading event servicing company, Eventhive</b>
          <br><br>
          The forum, which is billed to hold in Victoria Island, Lagos on the 3rd of August 2022, is expected to <b>draw public and private sector stakeholders from across Nigeria’s financial services industry</b> and will feature <b>keynote presentations, panel discussions, breakout sessions, exhibitions, and fireside chats.</b>
          <br><br>
          The focus of this year’s edition tagged, <b>“Building Partnership For Growth: Exploring The Intersection Of Banks, Telcos And Fintech Companies”</b> will provide a platform for participating stakeholders to explore topics essential to growing the financial sector.
          <br><br>
          These topics will include <b>ways to deepen digital transformation, strengthen financial inclusion strategies, aligning with the regulatory environment</b> among other key conversations targeted at positioning Nigeria’s fintech industry for further growth and development.
          <br><br>
          Speaking on why the event was launched, <b>Jamiu Ijaodola, CEO of Eventhive, organizers of the event</b>, disclosed that:
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
      id: 5,
      imgLink: "/images/blog/blogcomp_4.png",
      title:
        "SNG Lead 2022 Nigeria Oil & Gas Outlook Conference Holds August 31st In Lagos",
      author: "Raji Adebayo - Independent",
      slug: "sng-lead-nigeria-oil-gas-outlook",
      excerpt:
        "The 2022 edition of the Nigeria Oil & Gas Outlook, which is going to be hosted by Eventhive company is billed to hold in Lagos on August 31st and is going to be lead by Shell Nigeria Gas (SNG), which operates a growing world class gas transmission and distribution network in Nigeria.",
      description: `
        <p>
          The <b>2022 edition of the <a href="https://og.eventhive.ng/">Nigeria Oil & Gas Outlook</a></b>, which is going to be hosted by <b>Eventhive</b> company is billed to hold in Lagos on August 31st and is going to be lead by <b><a href="https://www.shell.com/">Shell Nigeria Gas (SNG)</a></b>, which operates a growing world class gas transmission and distribution network in <b>Nigeria</b>.
          <br><br>
          The <b><a href="https://og.eventhive.ng/">Nigeria Oil & Gas Outlook</a></b>, a one-day conference has been designed to gather public and private sector stakeholders across <b>Nigeria’s Oil & Gas industry</b>, which will feature <b>keynote presentations, panel discussion, breakout sessions, exhibitions, and fireside chats.</b>
          <br><br>
          The event, which is scheduled to hold at the <b>Civic Centre, Victoria Island, Lagos on August 31, 2022</b> with the theme: <b>“Energy as a Foundation for Nigeria’s shared Prosperity and Unity.”</b>
          <br><br>
          The focus of the event is to <b>provide an opportunity for participating stakeholders to explore essential topics across local content, PIA, gas market and Energy Transition</b>. The deliberation is targeted at positioning Nigeria’s energy industry for further growth and development.
          <br><br>
          Speaking on the event that was launched last year, the <b>CEO of Eventhive, Jamiu Ijaodola</b> said,
        </p>
  
        <blockquote>
            The event was designed to channel the interests of industry players within Nigeria’s energy ecosystem with keen focus on the oil & gas players.
            <br><br>
            The expected outcome of the conference and exhibition is to help industry stakeholders network, learn and define the future of the energy ecosystem towards implementing policies that promote growth in Nigeria and Africa at large.
        </blockquote>
      `,
    },
    {
      id: 6,
      imgLink: "/images/blog/blogcomp_5.jpg",
      title: "Mastercard Sponsors 4th Edition of the Lagos Tech Fest",
      author: "Mastercard",
      slug: "mastercard-sponsors-lagos-tech-fest",
      excerpt:
        "Africa’s	leading	B2B2C	event	servicing	company, Eventhive	has	announced	the	return	of	its	annual Lagos	Tech	Fest	in	2024.The	2024	edition	of	the	event	is	set	to	happen	on	the	15th	of	February,	2024	at	the	Landmark	Event	Center,	 Lagos.",
      description: `
        <p>
          Africa’s	leading	B2B2C	event	servicing	company, Eventhive	has	announced	the	return	of	its	annual	
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
          payment	advancements,	and	contribute	to financial	and	digital	inclusion	efforts—empowering	one	
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
  ], */
  eventPageData: [
    {
      banner: "/images/events/banner/economy.jpg",
      event: "Nigeria Economy Breakfast Meeting",
      eventDate: "January 29, 2026",
      eventMonth: "January",
      eventStatus: "active",
      slug: "nigeria-economy-breakfast",
      title: "Nigeria Economic Breakfast Meeting 2026",
      location: "Fourpoints by Sheraton, Victoria Island, Lagos",
      externalLink: "https://economy.eventhive.ng",
      pic1: "/images/events/event-pics/economy-1.jpg",
      pic2: "/images/events/event-pics/economy-2.jpg",
      pic3: "/images/events/event-pics/economy-3.jpg",
      majorDesc: `
        <p>
          As Nigeria enters 2026, its economy stands at a critical inflection point, defined by ongoing reforms, macroeconomic recalibration, and renewed investor optimism. According to the World Bank (October 2025), Nigeria’s economy expanded by 3.9% year-on-year in the first half of 2025, up from 3.5% the previous year, driven by growth in services, trade, and telecommunications.
        </p>
      `,
      minorDesc: `
        <p>
          However, challenges persist: high inflation, exchange rates, and energy constraints continue to test business resilience. Against this backdrop, the Nigeria Economic Breakfast Meeting (NEBM) returns in 2026 as the definitive business breakfast platform where CEOs, investors, policymakers, and development partners gather to set the tone for the business year, discussing Nigeria’s reform trajectory, investment outlook, and sectoral opportunities.
          <br><br>
          NEBM 2026 will serve as a one-stop engagement for all sectors — energy, manufacturing, finance, agriculture, trade, real estate, digital, and infrastructure — oﬀering participants insight, connection, and collaboration opportunities to navigate and shape Nigeria’s 2026 business environment.
        </p>
        <p>
          Beyond the discussions, the event provides an opportunity for cross-industry networking opportunities as week to bring together the most important players working across various sectors of the Nigerian economy.
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
      banner: "/images/events/banner/ntf.jpg",
      event: "Nigeria Telecoms Forum",
      eventMonth: "April",
      eventDate: "April 09, 2026",
      eventStatus: "active",
      slug: "nigeria-telecoms-forum",
      title: "Nigeria Telecoms Forum 2026",
      location: "Fourpoints by Sheraton, Victoria Island, Lagos",
      externalLink: "https://ntf.eventhive.ng",
      pic1: "/images/events/event-pics/telecoms-1.jpg",
      pic2: "/images/events/event-pics/telecoms-2.jpg",
      pic3: "/images/events/event-pics/telecoms-3.jpg",
      majorDesc: `
        <p>
          Following a successful inaugural edition in 2025, the Nigeria Telecoms Forum returns for its 2nd edition, continuing its role as the country’s foremost platform for dialogue, investment, and policy insight across the telecommunications ecosystem.
          <br><br>
          As Nigeria’s telecoms industry remains a vital contributor to national GDP and the digital economy, it faces a transformative decade shaped by 5G deployment, AI adoption, subsea connectivity, and the rapid growth of data infrastructure. At the same time, operators continue to grapple with persistent challenges — from forex volatility and energy costs to infrastructure gaps and evolving regulation.
        </p>
      `,
      minorDesc: `
        <p>
          Nigeria Telecoms Forum 2026 will gather senior telecom executives, policymakers, investors, and technology partners to examine how the sector can build resilient, intelligent, and sustainable networks for the future. Discussions will explore the intersection of connectivity, cloud computing, artificial intelligence, cybersecurity, and infrastructure finance, with a focus on actionable insights that can drive the next phase of telecom-led growth in Nigeria.
        </p>
        <p>
          The event will serve as a strategic convergence point for industry leaders, policymakers, investors, and innovators shaping the nation’s telecom and digital infrastructure agenda. Through curated sessions and forward-looking insights, the Forum will advance a collective vision for resilient, intelligent, and inclusive telecom growth, positioning Nigeria as a leader in Africa’s connected future.
        </p>
      
      `,
      whyParticipate: [
        "Engage with top executives in the telecoms industry and explore growth opportunities.",
        "Gain insights into innovative strategies and upcoming technologies.",
        "Network with stakeholders driving Nigeria’s digital revolution.",
        "Explore regulatory updates and their impact on the telecoms landscape.",
        "Access unparalleled opportunities for knowledge sharing and B2B transactions.",
      ],
    },
    {
      banner: "/images/events/banner/tech.jpg",
      event: "Lagos Tech Fest",
      eventMonth: "February",
      eventDate: "February 17-18, 2026",
      eventStatus: "active",
      slug: "lagos-tech-fest",
      title: "Lagos Tech Fest 2026",
      location: "Landmark Event Center, Victoria Island, Lagos",
      externalLink: "https://tech.eventhive.ng",
      pic1: "/images/events/event-pics/tech-1.jpg",
      pic2: "/images/events/event-pics/tech-2.jpg",
      pic3: "/images/events/event-pics/tech-3.jpg",
      majorDesc: `
        <p>
          Now in its 6th year, Lagos Tech Fest annually gathers to shape the future of Nigeria's tech ecosystem.
        </p>
      `,
      minorDesc: `
        <p>
         Convening enterprise tech leaders, emerging startups, innovators, investors, tech enthusiasts, global tech giants, new entrants and government representatives, this is where we define our tech ecosystem future, address key developments and uncover countless opportunities within the Nigerian and African tech market.
        </p>
        <p>
          Combining conferences, roundtables, industry party, pitch live, exhibitions and networking, the event annually creates a veritable platform that seeks to drive investments into the ecosystem.
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
      banner: "/images/events/banner/insurance.jpg",
      event: "Nigeria Insurance Forum",
      eventMonth: "April",
      eventDate: "10th of April, 2025",
      eventStatus: "inactive",
      slug: "nigeria-insurance-forum",
      title: "Nigeria Insurance Forum 2025",
      location: "Fourpoints by Sheraton, Victoria Island, Lagos",
      externalLink: "https://insurance.eventhive.ng",
      pic1: "/images/events/event-pics/insurance-1.jpg",
      pic2: "/images/events/event-pics/insurance-2.jpg",
      pic3: "/images/events/event-pics/insurance-3.jpg",
      majorDesc: `
        <p>
          The Nigeria Insurance Forum will gather leading insurers, brokers, and policymakers to discuss the future of Nigeria’s insurance industry. This event will provide an essential platform for dialogue on innovation, regulation, and economic impacts on the sector.
        </p>
      `,
      minorDesc: `
        <p>
          With Nigeria’s economy undergoing significant changes, the Nigeria Insurance Forum will focus on strategies to enhance industry growth and foster trust among stakeholders. Delegates will gain exclusive insights into new trends, risks, and opportunities. The event is slated for the 10th of April, 2024, at Eko Hotel, Lagos.
        </p>
        <p>
          Organized by Eventhive, this event is a must-attend for stakeholders seeking to drive impactful change in the insurance sector while leveraging high-level B2B networking opportunities.
        </p>
      `,
      whyParticipate: [
        "Connect with Nigeria’s leading insurance professionals and decision-makers.",
        "Discover strategies for navigating emerging risks and opportunities.",
        "Learn from insights provided by global insurance leaders and analysts.",
        "Gain exclusive access to regulatory updates and their implications.",
        "Position your business for success in Nigeria’s evolving insurance landscape.",
      ],
    },
    {
      banner: "/images/events/banner/uk.jpg",
      event: "UK-Africa Business Outlook",
      eventMonth: "March",
      eventDate: "March 26, 2026",
      eventStatus: "active",
      slug: "uk-africa-business-outlook",
      title: "UK-Africa Business Outlook 2026",
      location: "London, United Kingdom",
      externalLink: "https://uk.eventhive.ng",
      pic1: "/images/events/event-pics/uk-1.jpg",
      pic2: "/images/events/event-pics/uk-2.jpg",
      pic3: "/images/events/event-pics/uk-3.jpg",
      majorDesc: `
        <pAdvancing Investment, Partnership, and Growth Across the UK–Africa Corridor</p>
        <p>This year’s edition of the event will create a platform for partnerships and collaboration amongst Uk and Nigerian businesses. With investments at its core, The event will focus on those who are investing in the country’s future, highlighting the opportunities and obstacles that are impeding investments. Trade & Investments, Energy, Fintech and the Creative economy are expected to headline discussions at this year’s edition of the event scheduled to hold on the 18th of March, 2024 at the Addleshaw Goddard, London.</p>
      `,
      minorDesc: `
        <p>
          As Nigeria settles into a new leadership, Nigeria Economic Breakfast Meeting will set the agenda for the new leadership and chart discussions on the future of Nigeria’s economy. Delegates at the breakfast meeting will be exposed to unrivaled high level B2B networking and knowledge sharing opportunities. The event is scheduled to be held on the 31st of January, 2024 at the Four Points By Sheraton, Victoria Island, Lagos, Nigeria.
        </p>
        <p>
          Nigeria Economic Breakfast Meeting is organized by Eventhive, Nigeria’s leading B2B event servicing company with event portfolios across Oil & Gas, Power, Transport, Real Estate, Tech across Nigeria, UK and the USA.
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
      banner: "/images/events/banner/mining.jpg",
      event: "Africa Mining Investment Outlook",
      eventMonth: "March",
      eventDate: "28th of March, 2025",
      eventStatus: "inactive",
      slug: "africa-mining-investment-outlook",
      title: "Africa Mining Investment Outlook 2025",
      location: "London, United Kingdom",
      externalLink: "https://uk.eventhive.ng",
      pic1: "/images/events/event-pics/uk-1.png",
      pic2: "/images/events/event-pics/uk-2.png",
      pic3: "/images/events/event-pics/uk-3.png",
      majorDesc: `
        <p>
          The Africa Mining Investment Outlook serves as the leading platform for investors, policymakers, and operators in Africa’s mining sector. It aims to highlight key opportunities and challenges, fostering dialogue on sustainable mining practices and investment strategies.
        </p>
      `,
      minorDesc: `
        <p>
          As Africa continues to hold a significant share of global mineral resources, the Africa Mining Investment Outlook will focus on unlocking its potential. Delegates will access expert insights on investments, sustainability, and technology in the mining industry. The event is scheduled for the 20th of June, 2024, in Johannesburg, South Africa.
        </p>
        <p>
          Organized by Eventhive, this forum is designed to connect top decision-makers in Africa’s mining sector with investors and industry leaders from across the globe.
        </p>
      `,
      whyParticipate: [
        "Network with top investors, policymakers, and mining operators across Africa.",
        "Explore investment opportunities in Africa’s rich mineral sector.",
        "Gain insights into sustainable mining practices and innovations.",
        "Learn about regulatory frameworks impacting mining operations.",
        "Position your business as a key player in Africa’s resource economy.",
      ],
    },
    {
      banner: "/images/events/banner/af.jpg",
      event: "Africa Fintech Live",
      eventMonth: "May",
      eventDate: "May 07, 2026",
      eventStatus: "active",
      slug: "africa-fintech-live",
      title: "Africa Fintech Live 2026",
      location: "Sarit Expo Center, Nairobi, Kenya",
      externalLink: "https://af.eventhive.ng",
      pic1: "/images/events/event-pics/af-1.jpg",
      pic2: "/images/events/event-pics/af-2.jpg",
      pic3: "/images/events/event-pics/af-3.jpg",
      majorDesc: `
        <p>
          Driving Financial Innovation Across Africa
          <br><br>
          Join Africa's leading gathering of stakeholders working across various verticals of finance and banking, as they explore cutting-edge trends, innovations, and opportunities in fintech, driving progress across the continent's financial ecosystem.

        </p>
        `,
      minorDesc: `
        <p>
          Empowering Africa's fintech ecosystem
        </p>
        <p>
          Africa Fintech Live is the premier annual gathering that brings together the brightest minds and innovators from payments, telcos, banking, fintech, and e-commerce. Now in its second year, it’s the ultimate platform for collaboration, insights, and shaping the future of financial technology across the continent.
        </p>
      `,
      whyParticipate: [
        "Connect with Africa’s leading fintech innovators and decision-makers.",
        "Discover the latest trends shaping the future of fintech in Africa.",
        "Explore opportunities for partnerships and investments in the fintech sector.",
        "Learn from case studies and expert-led panel discussions on financial inclusion.",
        "Position your business as a key player in Africa’s financial technology revolution.",
      ],
    },
    {
      banner: "/images/events/banner/power.jpg",
      event: "Nigeria Power Outlook",
      eventMonth: "May",
      eventDate: "17th of May, 2025",
      eventStatus: "inactive",
      slug: "nigeria-power-outlook",
      title: "Nigeria Power Outlook 2025",
      location: "Civic Center, Victoria Island, Lagos",
      externalLink: "https://power.eventhive.ng",
      pic1: "/images/events/event-pics/power-1.png",
      pic2: "/images/events/event-pics/power-2.png",
      pic3: "/images/events/event-pics/power-3.png",
      majorDesc: `
        <p>
          Now in its 6th year, Nigeria Power Outlook is a high caliber Nigeria power-focused conference, exhibitions and networking platform. The event annually provides a veritable platform that convenes stakeholders, developers and investors in the power sector (on-grid and off-grid), representatives from state and federal government of Nigeria, Nigeria Electricity Regulatory Commission (NERC), Independent Power Producers (IPP), Distribution companies, Development partners, Renewable energy companies, amongst other stakeholders working within the power industry.
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
      banner: "/images/events/banner/lref.jpg",
      event: "Lagos Real Estate Fest",
      eventMonth: "May",
      eventDate: "May 27-28, 2026",
      eventStatus: "active",
      slug: "lagos-real-estate-fest",
      title: "Lagos Real Estate Fest 2026",
      location: "Landmark Event Center, Victoria Island, Lagos",
      externalLink: "https://re.eventhive.ng",
      pic1: "/images/events/event-pics/re-1.jpg",
      pic2: "/images/events/event-pics/re-2.jpg",
      pic3: "/images/events/event-pics/re-3.jpg",
      majorDesc: `
        <p>
          From property developers to architects, project financiers, investors, policy makers and regulators — this is where we unite Nigeria's real estate market.
          <br><br>
          Now in its 7th year, Lagos Real Estate Fest brings together key stakeholders to shape Nigeria's real estate market.
        </p>
      `,
      minorDesc: `
        <p>
          Convening property developers, architects, project financiers, investors, policy makers, regulators and industry leaders, this is where we define the future of Nigeria's real estate market, address key developments and uncover countless opportunities within the Nigerian and African real estate sectors.
        </p>
        <p>
          Combining conferences, exhibitions, networking and property showcases, the event annually creates a veritable platform that seeks to drive investments into the real estate sector.
        </p>
      `,
      whyParticipate: [
        "Email - Targeting a database of 7000+ key sector stakeholders drawn from various industries.",
        "Exhibition - Providing you with a rightly positioned booth to showcase your real estate offerings/solutions to industry stakeholders.",
        "Media Campaign - A carefully curated pre,on and post event media campaign targeting digital and physical media platforms.",
        "Branding - Embedding your brand logos and materials across our event showcase platforms.",
        "Thought Leadership - Strengthening your market position via carefully designed presentations/fireside chats during the event.",
      ],
    },
    {
      banner: "/images/events/banner/fintech.jpg",
      event: "Nigeria Fintech Forum",
      eventMonth: "July",
      eventDate: "July 30, 2026",
      eventStatus: "active",
      slug: "nigeria-fintech-forum",
      title: "Nigeria Fintech Forum 2026",
      location: "Lagos, Nigeria",
      externalLink: "https://fintech.eventhive.ng",
      pic1: "/images/events/event-pics/fintech-1.jpg",
      pic2: "/images/events/event-pics/fintech-2.jpg",
      pic3: "/images/events/event-pics/fintech-3.jpg",
      majorDesc: `
        <p>
         Drive your business growth at the leading gathering of Nigeria's fintech players
         <br><br>
         Nigeria Fintech Forum has become the gathering point for over 1,700 professionals and 450 companies, blending diverse expertise from payments, fintech, banking, e-commerce and retail industries.
        </p>
      `,
      minorDesc: `
        <p>
          As a hub of innovation, we harness the power of diverse ideas and solutions, creating a melting pot where the latest trends and forward-thinking strategies take shape.
        </p>
        <p>
          Nigeria Fintech Forum sets the agenda for the future of fintech, payments and banking.
          <br><br>
          Hosted in the FinTech capital of Africa, this is the leading fintech, payments and banking event uniting industry leaders at the top of their game.
        </p>
      `,
      whyParticipate: [
        "Network with the country’s leading fintech innovators and decision makers",
        "Explore new business opportunities in an environment conducive to transactions",
        "Learn from analysis of consultants from leading consultancy firms to guide or reinforce your strategy",
        "Learn about the country’s most promising investments projects",
        "Adapt your strategies to the latest economic and geopolitical trends",
      ],
    },
    {
      banner: "/images/events/banner/og.jpg",
      event: "Nigeria Oil and Gas Outlook",
      eventMonth: "August",
      eventDate: "August 27, 2026",
      eventStatus: "active",
      slug: "nigeria-oil-and-gas-outlook",
      title: "Nigeria Oil & Gas Outlook 2026",
      location: "Lagos, Nigeria",
      externalLink: "https://og.eventhive.ng",
      pic1: "/images/events/event-pics/og-1.jpg",
      pic2: "/images/events/event-pics/og-2.jpg",
      pic3: "/images/events/event-pics/og-3.jpg",
      majorDesc: `
        <p>
          Nigeria's oil and gas sector is witnessing significant shifts with IOCs divesting assets and a new wave of ambitious indigenous players stepping in. Are you in the room where the future is being shaped?
        </p>
      `,
      minorDesc: `
        <p>
          Over the past four years, Nigeria Oil & Gas Outlook has positioned itself as a foremost meeting place of industry leaders, innovators, and policymakers in Nigeria's Oil and Gas sector. With each annual edition, NOGO has solidified its role in shaping the future of Nigeria's oil and gas industry, fostering global investment and innovation.
        </p>
        <p>
          Nigeria Oil & Gas Outlook unites the country's government and energy companies with global operators and investors. Building on t h e momentum and success o f previous editions, Nigeria Oil & Gas Outlook offers unparalleled opportunities for financiers, project developers, international operators and service partners.
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
      banner: "/images/events/banner/us.jpg",
      event: "US-Nigeria Business Outlook",
      eventMonth: "September",
      eventDate: "25th of September, 2025",
      eventStatus: "inactive",
      slug: "us-nigeria-business-outlook",
      title: "US-Nigeria Business Outlook 2025",
      location: "New York, U.S.A",
      externalLink: "https://us.eventhive.ng",
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
      banner: "/images/events/banner/fb.jpg",
      event: "Fintech Without Borders Forum",
      eventMonth: "October",
      eventDate: "October 28, 2026",
      eventStatus: "active",
      slug: "fintech-without-borders-forum",
      title: "Fintech Without Borders Forum 2026",
      location: "Arbor, 255 Blackfriars Rd, London SE1 9AX, United Kingdom",
      externalLink: "https://fb.eventhive.ng",
      pic1: "/images/events/event-pics/fb-1.jpg",
      pic2: "/images/events/event-pics/fb-2.jpg",
      pic3: "/images/events/event-pics/fb-3.jpg",
      majorDesc: `
        <p>
          Meeting place for stakeholders working across various verticals of the borderless fintech ecosystem
          <br><br>
          Fintech Without Borders Forum is dedicated to showcasing the important role of borderless fintech in the global fintech ecosystem. The event annually focuses on important issues facing global cross-border payments landscape-best approaches in achieving faster, safer, more transparent cross-boder payments, global fintech infrastructure, FX liquidity challenges, Impact of fraud and compliance on cross- border payments, evolving border financial services and fintech industry in Africa, amongst focus discussions.
        </p>
      `,
      minorDesc: `
        <p>
         The event will provide an unrivaled opportunity for companies in cross-border payments, B2B payments, banks, consulting, technology providers, governments representatives to network, discover new partnerships and discuss the most relevant topics across the borderless fintech industry. Industry leaders will gather to share insights and best practices on developing more efficient cross-boder payment systems to support global economic activity.
         <br><br>
         Our mission is targeted at fostering growth and innovation in the cross-border payments space and help companies stay ahead of the curve.
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
      banner: "/images/events/banner/ae.jpg",
      event: "Africa Energy Investment Outlook",
      eventMonth: "October",
      eventDate: "October 29, 2026",
      eventStatus: "active",
      slug: "africa-energy-investment-outlook",
      title: "Africa Energy Investment Outlook 2025",
      location:
        "Charles Russell Speechlys, 5 Fleet Place, London, EC4M 7RD, United Kingdom",
      externalLink: "https://ae.eventhive.ng",
      pic1: "/images/events/event-pics/ae-1.jpg",
      pic2: "/images/events/event-pics/ae-2.jpg",
      pic3: "/images/events/event-pics/ae-3.jpg",
      majorDesc: `
        <p>
          Bringing African Energy Closer to the World
        </p>
      `,
      minorDesc: `
        <p>
          Focused on showcasing Africa's role in the global energy mix, Africa Energy Investment Outlook brings together top financers, investors, consultants and players across Africa and European energy markets. The event will address the dynamic landscape of the Africa Energy industry, focusing on four key themes:
          <br><br>
          -Energy Finance
          -Africa's Upstream Investment Landscape
          -Africa's LNG for Global Market
          -Renewable Energy
          Africa Energy Investment Outlook will present an unrivaled opportunity to engage key stakeholders in the African energy industry, and equally explore investment opportunities in the market. From an experienced energy executive, to investors, to government representatives, to advisors and consultants, the event offers a dynamic platform to learn, collaborate, network and do deals.
        </p>
      `,
      whyParticipate: [
        "Connect with investors and policymakers driving Africa’s energy transition.",
        "Explore opportunities in renewable energy and innovative technologies.",
        "Gain insights into sustainability and its impact on Africa’s energy landscape.",
        "Learn from case studies on successful energy projects across the continent.",
        "Position your business for growth in Africa’s energy sector.",
      ],
    },
    {
      banner: "/images/events/banner/atf.jpg",
      event: "Africa Tech Forum",
      eventMonth: "November",
      eventDate: "6th of November, 2025",
      eventStatus: "inactive",
      slug: "africa-tech-forum",
      title: "Africa Tech forum 2024",
      location: "Kigali Convention Center, Rwanda",
      externalLink: "https://atf.eventhive.ng",
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
          The Africa Tech Forum is organized by Eventhive, Nigeria’s leading B2B event servicing company with event portfolios across Oil & Gas, Power, Transport, Real Estate, Tech across Nigeria, UK and the USA
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
      banner: "/images/events/banner/transport.jpg",
      event: "Lagos Transport Fest",
      eventMonth: "December",
      eventDate: "December 10, 2026",
      eventStatus: "active",
      slug: "lagos-transport-fest",
      title: "Lagos Transport Fest 2026",
      location: "Lagos, Nigeria",
      externalLink: "https://transport.eventhive.ng",
      pic1: "/images/events/event-pics/transport-1.png",
      pic2: "/images/events/event-pics/transport-2.png",
      pic3: "/images/events/event-pics/transport-3.png",
      majorDesc: `
        <p>
          Now in its 7th year, Lagos Transport Fest is West Africa’s most important gathering of mobility leaders across Road, Rail and Ports. The event will once again host global businesses, private and public investment bodies, thought leaders, mobility stakeholders, end user community and policy makers. The event will lead high caliber public and private sector deliberations aimed at shaping the future of Nigeria’s Transport Sector.
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
      banner: "/images/events/banner/eventhive-banner-blue.png",
      event: "Nigeria Solar Forum",
      eventMonth: "March",
      eventDate: "March 12, 2026",
      eventStatus: "active",
      slug: "nigeria-solar-forum",
      title: "Nigeria Solar Forum 2026",
      location: "Oriental Hotel, Victoria Island, Lagos, Nigeria",
      externalLink: "https://solar.eventhive.ng",
      pic1: "/images/events/event-pics/solar-1.jpg",
      pic2: "/images/events/event-pics/solar-2.jpg",
      pic3: "/images/events/event-pics/solar-3.jpg",
      majorDesc: `
        <p>
         For years, Eventhive's Nigeria Power Outlook was the premier platform for shaping dialogue on Nigeria's energy sector, where policymakers, investors, and innovators met to address power challenges and unlock opportunities. Now, as Nigeria's energy priorities evolve, so does the platform. Reborn as the Nigeria Solar Forum, this event reflects the country's sharp focus on renewable energy, and specifically, on the solar revolution powering homes, industries, and communities nationwide.
        </p>
      `,
      minorDesc: `
        <p>
          The Nigeria Solar Forum is a strategy and solutions hub. Built on years of convening decision-makers at Nigeria Power Outlook, it provides both the market intelligence and the deal-making environment to accelerate Nigeria's clean energy transition. Nigeria has set ambitious targets: 30 GW by 2030, half from renewables, and over $9 billion projected in off-grid solar investment. This makes the country not just a market, but West Africa's most dynamic frontier for solar innovation and investment.
          <br><br>
          At the Forum, you'll engage with the entire solar value chain, from developers scaling commercial and industrial projects, to financiers driving bankable deals, to government agencies building enabling frameworks, and innovators redefining reliability through storage and digital solutions.
        </p>
      `,
      whyParticipate: [
        "Meet key stakeholders across Nigeria’s solar ecosystem",
        "Explore partnerships and project opportunities",
        "Learn from market insights and policy discussions",
        "Showcase solutions to decision makers",
      ],
    },
    {
      banner: "/images/events/banner/eventhive-banner-white.png",
      event: "Nigeria Banking Outlook",
      eventMonth: "April",
      eventDate: "April 30, 2026",
      eventStatus: "active",
      slug: "nigeria-banking-outlook",
      title: "Nigeria Banking Outlook 2026",
      location: "Fourpoints by Sheraton, Victoria Island, Lagos",
      externalLink: "https://banking.eventhive.ng",
      pic1: "/images/events/event-pics/banking-1.jpg",
      pic2: "/images/events/event-pics/banking-2.jpg",
      pic3: "/images/events/event-pics/banking-3.jpg",
      majorDesc: `
        <p>
          Nigeria’s financial services sector is entering a transformative phase led by recapitalisation reforms, rapid digitisation, and the increasing influence of AI, open banking, and fintech collaboration. Banks are navigating an environment of high interest rates, inflation, currency volatility, and shifting consumer expectations.
        </p>
      `,
      minorDesc: `
        <p>
          Returning for its second edition in 2026, the Nigeria Banking Outlook will convene CEOs, regulators, fintech leaders, investors, and analysts to explore strategies for stability, innovation, and growth in a redefined banking landscape. Discussions will focus on how institutions can adapt business models, strengthen risk management, and leverage technology to create more inclusive financial ecosystems.
          <br><br>
          The Nigeria Banking Outlook 2026 will provide a 360° view of the country’s financial future, from capital reform to digital transformation. By convening thought leaders and innovators, the event will advance a shared vision for a resilient, technology-driven, and inclusive banking system that underpins Nigeria’s economic growth.
        </p>
      `,
      whyParticipate: [
        "Access C-level banking and fintech stakeholders",
        "Understand regulatory and market trends",
        "Explore partnership and investment opportunities",
        "Strengthen market visibility through thought leadership",
      ],
    },
    {
      banner: "/images/events/banner/eventhive-banner-blue.png",
      event: "Crypto & DeFI Forum",
      eventMonth: "June",
      eventDate: "June 10, 2026",
      eventStatus: "active",
      slug: "crypto-defi-forum",
      title: "Crypto & DeFI Forum 2026",
      location: "Oriental Hotel, Victoria Island, Lagos",
      externalLink: "https://crypto.eventhive.ng",
      pic1: "/images/events/event-pics/crypto-2.jpg",
      pic2: "/images/events/event-pics/crypto-1.jpg",
      pic3: "/images/events/event-pics/crypto-3.jpg",
      majorDesc: `
        <p>
          Your front-row seat to Nigeria's crypto & DeFi meeting place.
          <br><br>
          Now in its 2nd edition, Crypto & DeFi Forum has established itself as Nigeria's premier platform for showcasing the latest innovations and disruptions in blockchain and cryptocurrency.
        </p>
      `,
      minorDesc: `
        <p>
          Experience how global innovators, policymakers, and digital assets executives are transforming blockchain from concept to impact - reshaping finance, for a more trusted digital economy.
          <br><br>
          This is where Nigeria's most influential voices in blockchain, Web3, and AI come together to drive innovation forward.
        </p>
      `,
      whyParticipate: [
        "Access unrivaled networking with the country’s leading business decision makers",
        "Explore new business opportunities in an environment conducive to transactions",
        "Learn from analysis of consultants from leading consultancy firms to guide or reinforce your strategy",
        "Learn about the country’s most promising investments projects",
        "Adapt your strategies to the latest economic and geopolitical trends",
      ],
    },
    {
      banner: "/images/events/banner/eventhive-banner-white.png",
      event: "Africa Energy Outlook",
      eventMonth: "June",
      eventDate: "June 24, 2026",
      eventStatus: "active",
      slug: "africa-energy-outlook",
      title: "Africa Energy Outlook 2026",
      location: "Johannesburg, South Africa",
      externalLink: "https://energy.eventhive.ng",
      pic1: "/images/events/event-pics/power-1.png",
      pic2: "/images/events/event-pics/power-2.png",
      pic3: "/images/events/event-pics/power-3.png",
      majorDesc: `
        <p>
          Africa Energy Outlook is a platform for stakeholders across power, renewables, gas, and infrastructure to evaluate investment priorities and policy directions shaping Africa’s energy transition.
        </p>
      `,
      minorDesc: `
        <p>
          Hosted in Johannesburg, the event supports cross-border collaboration, project development, and investor engagement.
        </p>
      `,
      whyParticipate: [
        "Engage with investors and policymakers",
        "Explore regional energy transition opportunities",
        "Build partnerships for projects and financing",
        "Gain insights on market and technology trends",
      ],
    },
    {
      banner: "/images/events/banner/eventhive-banner-blue.png",
      event: "Payments Live",
      eventMonth: "June",
      eventDate: "June 25, 2026",
      eventStatus: "active",
      slug: "payments-live",
      title: "Payments Live 2026",
      location: "Johannesburg, South Africa",
      externalLink: "https://paymentslive.co.za",
      pic1: "/images/events/event-pics/payments-1.jpg",
      pic2: "/images/events/event-pics/payments-2.jpg",
      pic3: "/images/events/event-pics/payments-3.jpg",
      majorDesc: `
        <p>
          Bringing Africa’s Payment Leaders Together Under One Roof
          <br><br>
          As part of Africa Tech Series, Payments Live annually gathers senior payments executives, merchants, fintechs and fraud leaders to shape Africa's payments future.
        </p>
      `,
      minorDesc: `
        <p>
          This is an unrivaled opportunity for leaders that oversee payments and fraud strategy, payments schemes, developing payments architecture and infrastructure to explore key trends and opportunities across Africa's payments ecosustem.
          <br><br>
          Payments Live is your gateway to new opportunities across Africa's payments market, an unmissable platform to learn, network and showcase your payments solutions.
        </p>
      `,
      whyParticipate: [
        "Network with senior payments, fintech, and fraud leaders shaping Africa's payments landscape",
        "Explore partnership and business opportunities across Africa’s payments ecosystem",
        "Gain actionable insights from industry experts and thought leaders on payments innovation",
        "Showcase your payments solutions to decision makers and leading merchants",
        "Stay ahead of trends in payments infrastructure, strategy, fraud, and regulation",
      ],
    },
    {
      banner: "/images/events/banner/eventhive-banner-white.png",
      event: "Nigeria Trade & Manufacturing Outlook",
      eventMonth: "August",
      eventDate: "August 12, 2026",
      eventStatus: "active",
      slug: "nigeria-trade-manufacturing-outlook",
      title: "Nigeria Trade & Manufacturing Outlook 2026",
      location: "Oriental Hotel, Victoria Island, Lagos, Nigeria",
      externalLink: "https://mnf.eventhive.ng",
      pic1: "/images/events/event-pics/manufacturing-1.jpg",
      pic2: "/images/events/event-pics/manufacturing-2.jpg",
      pic3: "/images/events/event-pics/manufacturing-3.jpg",
      majorDesc: `
        <p>
          Nigeria's manufacturing industry navigates a complex landscape of challenges and opportunities. Despite immense potential from a large domestic market and abundant resources, it faces hurdles like infrastructural deficits, inconsistent policies, and limited finance access. However, strategic initiatives such as the African Continental Free Trade Area (AfCFTA) present significant opportunities for manufacturers to expand globally.
        </p>
      `,
      minorDesc: `
        <p>
          The Nigeria Manufacturing and Trade Outlook event serves as a crucial platform to address these challenges, capitalize on opportunities, and drive industrial growth. Focusing on pivotal sectors like Automotive, Pharmaceuticals, Consumer Goods, and Chemicals & Petrochemicals, the summit connects local capabilities with global trade opportunities. 
          <br><br>
          Through expert-led sessions, panel discussions, and networking, attendees will gain insights into technological advancements, trade policies, sustainable practices, and regulatory frameworks to empower Nigerian manufacturers for both domestic and international success.
        </p>
      `,
      whyParticipate: [
        "Network with industry leaders and policymakers shaping Nigeria's manufacturing and trade landscape",
        "Explore investment and trade opportunities across key sectors",
        "Learn from expert-led sessions on technological advancements and regulatory frameworks",
        "Access a platform to showcase your solutions to decision makers and industry leaders",
        "Stay ahead of trends in manufacturing, trade, and investment",
      ],
    },
    {
      banner: "/images/events/banner/eventhive-banner-blue.png",
      event: "Nigeria PE/Venture Capital Outlook",
      eventMonth: "September",
      eventDate: "September 10, 2026",
      eventStatus: "active",
      slug: "nigeria-pe-vc-outlook",
      title: "Nigeria PE/Venture Capital Outlook 2026",
      location: "Oriental Hotel, Victoria Island, Lagos, Nigeria",
      externalLink: "https://capital.eventhive.ng",
      pic1: "/images/events/event-pics/capital-1.jpg",
      pic2: "/images/events/event-pics/capital-2.jpg",
      pic3: "/images/events/event-pics/capital-3.jpg",
      majorDesc: `
        <p>
          Nigeria's meeting place for private capital stakeholders
          <br><br>
          Dive into expert-led discussions, strategic networking, and deep insights at the premier event designed to drive private equity and venture capital growth across Nigeria’s most promising sectors.
        </p>
      `,
      minorDesc: `
        <p>
          Nigeria PE/VC Outlook is designed to provide critical insights into the evolving private equity and venture capital landscape in Nigeria. This event will bring together key stakeholders—from venture capitalists to fun d managers—to explore investment opportunities, address market challenges, and chart a course for sustainable growth.
          <br><br>
          Themed 'Strategic Capital, Sustainable Growth: Investing for Nigeria's Next Chapter', The event will feature expert analyses, interactive panel discussions, and networking, focusing on the sectors driving investment, the impact of regulatory changes, and the strategies for maximizing returns in Nigeria's dynamic market.
        </p>
      `,
      whyParticipate: [
        "Access unrivaled networking with the country’s leading business decision makers",
        "Explore new business opportunities in an environment conducive to transactions",
        "Learn from analysis of consultants from leading consultancy firms to guide or reinforce your strategy",
        "Learn about the country’s most promising investments projects",
        "Adapt your strategies to the latest economic and geopolitical trends",
      ],
    },
    {
      banner: "/images/events/banner/eventhive-banner-white.png",
      event: "Nigeria Aviation Forum",
      eventMonth: "September",
      eventDate: "September 24, 2026",
      eventStatus: "active",
      slug: "nigeria-aviation-forum",
      title: "Nigeria Aviation Forum 2026",
      location: "Oriental Hotel, Victoria Island, Lagos, Nigeria",
      externalLink: "https://aviation.eventhive.ng",
      pic1: "/images/events/event-pics/economy-1.jpg",
      pic2: "/images/events/event-pics/economy-2.jpg",
      pic3: "/images/events/event-pics/economy-3.jpg",
      majorDesc: `
        <p>
          Charting the Future: Innovation, Resilience & Sustainability in Nigeria's Aviation Sector
          <br><br>
          The Nigeria Aviation Forum is designed as a high-impact breakfast meeting that brings together key. stakeholders in Nigeria's aviation sector, including policymakers, airlines, regulators, investors, and technology innovators, to address the evolving challenges and opportunities shaping the industry. As air travel and logistics rapidly expand in West Africa, Nigeria's aviation industry sits at a crucial crossroads navigating post-pandemic recovery, infrastructural modernization, safety imperatives, environmental sustainability, and shifts in consumer behavior. This event offers a focused platform for expert insights, strategic networking, and collaborative solutions to propel the sector forward.
        </p>
      `,
      minorDesc: `
        <p>
          The Forum seeks to foster candid dialogue on overcoming operational hurdles, such as airport infrastructure gaps, regulatory bottlenecks, and high operating costs, while also spotlighting new investment opportunities, technological advancements, and regional integration. Through interactive discussions, participants will explore practical strategies to enhance safety standards, adopt green aviation practices, and build global competitiveness. The event also aims to support government reform efforts and private sector innovation, driving value across the aviation value chain and strengthening Nigeria's position as a regional aviation hub.
          <br><br>
          The Nigeria Aviation Forum will facilitate high-level connection and actionable takeaways. Its outcomes are intended to foster impactful partnerships, influence policy decisions, and accelerate sustainable growth in Nigeria's aviation ecosystem.
        </p>
      `,
      whyParticipate: [
        "Engage with key aviation stakeholders",
        "Explore partnerships and investment opportunities",
        "Understand regulatory and operational priorities",
        "Network with decision makers across the value chain",
      ],
    },
    {
      banner: "/images/events/banner/atf.jpg",
      event: "East Africa Tech Forum",
      eventMonth: "November",
      eventDate: "November 05, 2026",
      eventStatus: "active",
      slug: "east-africa-tech-forum",
      title: "East Africa Tech Forum 2026",
      location: "Nairobi, Kenya",
      externalLink: "https://ea.eventhive.ng",
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
          The Africa Tech Forum is organized by Eventhive, Nigeria’s leading B2B event servicing company with event portfolios across Oil & Gas, Power, Transport, Real Estate, Tech across Nigeria, UK and the USA
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
      banner: "/images/events/banner/eventhive-banner-blue.png",
      event: "Abuja Real Estate Fest",
      eventMonth: "November",
      eventDate: "November 19, 2026",
      eventStatus: "active",
      slug: "abuja-real-estate-fest",
      title: "Abuja Real Estate Fest 2026",
      location: "Abuja, Nigeria",
      externalLink: "https://are.eventhive.ng",
      pic1: "/images/events/event-pics/re-1.jpg",
      pic2: "/images/events/event-pics/re-2.jpg",
      pic3: "/images/events/event-pics/re-3.jpg",
      majorDesc: `
        <p>
          Building across Nigeria and Abuja's real estate market? Join us as we define the industry's future
        </p>
      `,
      minorDesc: `
        <p>
          Abuja Real Estate Fest is designed to provide a platform for key stakeholders to shape the future of Nigeria's real estate market, with a key spotlight on Abuja's real estate market. From property developers to architects, projects financiers, builders, policymakers and regulators, the event will define what's next for Nigeria's real estate market.
          <br><br>
          The event will feature conferences, exhibitions, networking, and property showcases, driving investment and uncovering opportunities in Nigeria and Africa's real estate sector.
        </p>
      `,
      whyParticipate: [
        "Network with leading property stakeholders",
        "Showcase projects and solutions to buyers and investors",
        "Access market insights and policy discussions",
        "Build partnerships for deal making and growth",
      ],
    },
  ],
};

data.blogPageData = blogPageDataByDateDesc;
data.blogData.info = data.blogPageData; // Keep carousel in sync with blog list order
data.eventData.info = sortActiveEventsByOccurrence(data.eventPageData);

export default data;
