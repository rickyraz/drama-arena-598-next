"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function RedirectWKWK() {
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      router.push("/gontor-dua");
    }, 1100);

    return () => {
      clearInterval(interval);
    };
  }, [router]);
  return (
    <div className="flex h-screen items-center justify-center overflow-x-hidden overflow-y-hidden bg-[#041F14] px-5 text-center text-[#D2FFEC]">
      <p>Afwan, Untuk Drama Arena 598 Kampus lain masih belum tersedia</p>
    </div>
  );
}

export default RedirectWKWK;
