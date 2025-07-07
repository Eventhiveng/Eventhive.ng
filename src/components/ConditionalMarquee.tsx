"use client";

import { usePathname } from "next/navigation";
import MarqueeBanner from "@/components/MarqueeBanner";

const ConditionalMarquee = () => {
  const pathname = usePathname();

  // Only show marquee on homepage
  if (pathname !== "/") {
    return null;
  }

  return <MarqueeBanner />;
};

export default ConditionalMarquee;
