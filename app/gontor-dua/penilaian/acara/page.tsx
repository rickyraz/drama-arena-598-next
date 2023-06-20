import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Catatan from "@/components/Catatan";
import Index from "@/components/Header/Main";

function Acara() {
  return (
    <>
      <Index />
      <section className="min-h-screen bg-[#041F14]">
        <Catatan />
        <Filtering />
        <Nilai />
        <Nilai />
      </section>
    </>
  );
}

export default Acara;

function Filtering() {
  return (
    <div className="px-6 pt-9 ">
      <Select>
        <SelectTrigger className="h-12 w-[180px] border border-[#CDFFEA] font-medium text-white">
          <SelectValue
            placeholder="Tari Tradisional"
            defaultValue="tradisional"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="modern">Modern</SelectItem>
          <SelectItem value="drama">Drama</SelectItem>
          <SelectItem value="drama-jenaka">Drama Jenaka</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function Nilai() {
  return (
    <div className="px-6 pt-9 ">
      <div className="rounded-lg border bg-[#D2FFEC]">
        <p className="ml-3 py-3 text-base font-semibold text-[#0FA383]">
          Tari Reog Ponorogo
        </p>
        <div>
          <div className="mx-3 aspect-[3/2] rounded-lg bg-[#83B5A0]">
            gambar
          </div>
        </div>
        <div className="mx-6 my-2 flex justify-center bg-[#BBF0DA]/60 text-sm text-[#55BFA8]">
          klik disini untuk menilai acara
        </div>
      </div>
    </div>
  );
}
