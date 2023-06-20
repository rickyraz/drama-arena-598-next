"use client";
import React from "react";
import { Edit } from "lucide-react";
import Image from "next/image";
import Index from "@/components/Header/Main";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Balancer from "react-wrap-balancer";

function Penilaianku() {
  return (
    <>
      <Index />
      <section className="min-h-screen bg-[#041F14]">
        <Akunku />
        <Penilai />
        <EditNilai namaAcara="Tari Reog Ponorogo" />
        <Nilaiku acara="Tari Topeng Ireng" />
      </section>
    </>
  );
}

export default Penilaianku;

function Penilai() {
  return (
    <div className="pt-9">
      <h2 className="px-6 text-xl font-semibold text-[#0FA383]">Penilaian</h2>
    </div>
  );
}
const Akunku: React.FC = () => {
  return (
    <div className="px-6 pt-6">
      <h2 className=" text-xl font-semibold text-[#0FA383] ">Akun</h2>

      <div className="flex justify-between pt-1">
        <p className="font-semibold text-white">Nama:</p>
        <p className="text-white">ricky</p>
      </div>
      <div className="flex justify-between pt-1">
        <p className="font-semibold text-white">No Telp:</p>
        <p className="text-white">081902794798</p>
      </div>
      <div className="flex justify-between pt-1">
        <p className="font-semibold text-white">Email:</p>
        <p className="text-white">rickyraihan83@gmail.com</p>
      </div>
      <div className="flex justify-between pt-1">
        <p className="font-semibold text-white">Peranan:</p>
        <p className="text-white">Ustadz</p>
      </div>
    </div>
  );
};

type EditNilaiProps = {
  namaAcara: string;
};

// eslint-disable-next-line no-unused-vars
function EditNilai({ namaAcara }: EditNilaiProps) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Nilaiku acara={namaAcara} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="pt-6">
          <DialogTitle className="text-center">
            <Balancer>Edit Nilai {namaAcara}</Balancer>
          </DialogTitle>
          <div></div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

interface Nilai {
  acara: string;
}

function Nilaiku({ acara }: Nilai) {
  return (
    <div className="px-6 pt-6 text-left">
      <div className="rounded-lg border bg-[#D2FFEC]">
        <div className="flex items-center justify-between px-3">
          <p className="py-3 text-base font-semibold text-[#53AA97]">{acara}</p>
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
          <span className=" ml-1 text-xl font-semibold">9.1</span>
        </div>
        <p className="mb-5 line-clamp-3 px-3 pt-3 text-sm text-[#0D493C]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
          harum ipsa nihil voluptas, impedit exercitationem
        </p>
      </div>
    </div>
  );
}
