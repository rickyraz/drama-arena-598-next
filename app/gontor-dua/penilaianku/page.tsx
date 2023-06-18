import React from "react";
import { Edit } from "lucide-react";
import Image from "next/image";
import Index from "@/components/Header/Main";

function Penilaianku() {
  return (
    <>
      <Index />
      <section className="bg-[#041F14] min-h-screen">
        <Penilai />
        <Nilaiku acara="Tari Reog Ponorogo" />
        <Nilaiku acara="Tari Topeng Ireng" />
      </section>
    </>
  );
}

export default Penilaianku;

function Penilai() {
  return (
    <div className="pt-9">
      <h2 className="font-semibold text-[#0FA383] px-6 text-xl">Penilaianku</h2>
    </div>
  );
}

interface Nilai {
  acara: string;
}

function Nilaiku({ acara }: Nilai) {
  return (
    <div className="pt-6 px-6 ">
      <div className="border rounded-lg bg-[#D2FFEC]">
        <div className="flex items-center justify-between px-3">
          <p className="font-semibold text-[#53AA97] py-3 text-base">{acara}</p>
          <Edit className="h-4 w-4 stroke-2" />
        </div>
        <div className="flex items-center px-3">
          <Image
            src="/star.svg"
            alt="star"
            width={29.98}
            height={29.98}
            className="stroke-[#07462B]"
          />
          <span className=" font-semibold ml-1 text-xl">9.1</span>
        </div>
        <p className="px-3 pt-3 line-clamp-3 text-sm mb-5 text-[#0D493C]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
          harum ipsa nihil voluptas, impedit exercitationem neque quidem odit
          adipisci corrupti consequuntur! Similique, quasi dolorum.
        </p>
      </div>
    </div>
  );
}
