import React from "react";
import Image from "next/image";

function LaodingComponent() {
  return (
    <div className="flex h-screen items-center justify-center overflow-x-hidden overflow-y-hidden bg-[#041F14] px-5 text-center text-[#D2FFEC]">
      <div className="flex flex-col items-center">
        <Image
          src="/logo/logo-circle.webp"
          alt="logo-circle"
          width={60}
          height={60}
          className="animate-spin	"
        />
        <p className="pt-6">Loading...</p>
      </div>
    </div>
  );
}

export default LaodingComponent;
