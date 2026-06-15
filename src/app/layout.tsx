import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Nunito } from "next/font/google";
// import "./globals.css";
import "../styles/app.scss";
import Nav from "@/components/Nav";
import ScrollTop from "@/components/ScrollTop";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import PreloaderManager from "@/components/PreloaderManager";
import ClientOnly from "@/components/ClientOnly";
import ConditionalMarquee from "@/components/ConditionalMarquee";
import AOSInit from "@/components/AOSInit";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "Eventhive - Africa's leading B2B2C event servicing company",
    template: "%s | Eventhive",
  },
  description:
    "Africa's leading B2B2C event servicing company with event portfolios across various sectors in Lagos, London, Johannesburg, Kigali, Nairobi and Abuja",
  keywords: [
    "B2B events Africa",
    "B2C events Africa",
    "business conferences Africa",
    "corporate event organizer",
    "event management company Africa",
    "professional networking events",
    "industry conferences",
    "executive summits Africa",
    "trade events and exhibitions",
    "business events Lagos",
    "business events Johannesburg",
    "business events Nairobi",
    "business events Kigali",
    "business events London",
    "business events Abuja",
    "event portfolio management",
    "corporate conferences Africa",
    "thought leadership events",
    "eventhive",
    "Africa business events",
  ],
  authors: [{ name: "Eventhive Team" }],
  creator: "Eventhive",
  publisher: "Eventhive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eventhive.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eventhive - Africa's leading B2B2C event servicing company",
    description:
      "Africa's leading B2B2C event servicing company with event portfolios across various sectors in Lagos, London, Johannesburg, Kigali, Nairobi and Abuja.",
    url: "https://eventhive.ng",
    siteName: "Eventhive",
    images: [
      {
        url: "/logo/logo.svg",
        // url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eventhive - Africa's leading B2B2C event servicing company",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventhive - Africa's leading B2B2C event servicing company",
    description:
      "Africa's leading B2B2C event servicing company with event portfolios across various sectors in Lagos, London, Johannesburg, Kigali, Nairobi and Abuja",
    images: ["/logo/logo.svg"],
    // images: ["/images/twitter-image.jpg"],
    creator: "@eventhive_ng",
    site: "@eventhive_ng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code",
  //   // yandex: 'your-yandex-verification-code',
  //   // yahoo: 'your-yahoo-verification-code',
  // },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* <link rel="icon" href="/logo/logo.svg" type="image/svg+xml" /> */}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffa600" />
        <meta name="color-scheme" content="light" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Eventhive",
              url: "https://eventhive.ng",
              // logo: "https://eventhive.ng/logo/logo.svg",
              logo: "https://eventhive.ng/favicon.ico",
              sameAs: [
                "https://www.facebook.com/eventhive.ng",
                "https://x.com/eventhive_ng",
                "https://www.instagram.com/eventhive.ng/",
                "https://www.linkedin.com/company/eventhive-nigeria/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2349028112744",
                contactType: "customer service",
                email: "malik@eventhive.ng",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
              },
              description:
                "Africa's leading B2B2C event servicing company with event portfolios across various sectors in Lagos, London, Johannesburg, Kigali, Nairobi and Abuja",
            }),
          }}
        />
      </head>

      <body className="antialiased" suppressHydrationWarning={true}>
        {/* <HydrationFix /> */}
        <AOSInit />
        <Preloader />
        <PreloaderManager />
        <ClientOnly>
          <CustomCursor />
          <ScrollTop />
          <ConditionalMarquee />
        </ClientOnly>
        <div className="main-content">
          <Nav />
          <div className="animate-content">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
