"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DynLogoProps {
  isDefault?: boolean;
  isCircle?: boolean;
  style?: ClassValue;
}

const DynLogo: React.FC<DynLogoProps> = ({ isDefault, style, isCircle }) => {
  let logo;

  if (isDefault) {
    logo = {
      srcLogo: "/logo/badge-logo.webp",
      width: 141,
      height: 220,
      style: "absolute top-6 left-6",
      alt: "logo-badge",
    };
  } else if (isCircle) {
    logo = {
      srcLogo: "/logo/logo-circle.webp",
      width: 120,
      height: 120,
      style: "",
      alt: "logo-circle",
    };
  } else {
    logo = {
      srcLogo: "/logo/logo-wide.webp",
      width: 239,
      height: 86,
      style: "ml-2",
      alt: "logo-wide",
    };
  }

  const mergedStyle = cn(logo.style, style);

  return (
    <div>
      <Image
        src={logo.srcLogo}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={mergedStyle}
        priority={true}
      />
    </div>
  );
};

// Contoh penggunaan
function LogoHeader() {
  const pathname = usePathname();
  const isDefaultLogo = pathname === "/gontor-dua/terima-kasih";

  return <DynLogo isDefault={isDefaultLogo} />;
}

function LogoSamping() {
  const pathname = usePathname();
  const isDefaultLogo = pathname !== "/gontor-dua/terima-kasih";
  const additionalStyle = "pb-[5vh]"; // Contoh tambahan style

  return <DynLogo style={additionalStyle} isCircle={!isDefaultLogo} />;
}

export { LogoHeader, LogoSamping };
