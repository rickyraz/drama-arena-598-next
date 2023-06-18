"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function RedirectWKWK() {
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      router.push("/gontor-dua");
    }, 2200);

    return () => {
      clearInterval(interval);
    };
  }, [router]);
  return (
    <div className="h-screen flex justify-center items-center px-5 text-center overflow-x-hidden overflow-y-hidden bg-[#041F14] text-[#D2FFEC]">
      <p>Afwan, Untuk Drama Arena 598 Kampus lain masih belum tersedia</p>
    </div>
  );
}

export default RedirectWKWK;
