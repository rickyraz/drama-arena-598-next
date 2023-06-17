import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Catatan from "@/components/Catatan";

function Acara() {
  return (
    <section className="bg-[#041F14] min-h-screen">
      <Catatan />
      <Filtering />
      <Nilai />
      <Nilai />
    </section>
  );
}

export default Acara;

function Filtering() {
  return (
    <div className="pt-9 px-6 ">
      <Select>
        <SelectTrigger className="w-[180px] h-12 border-[#CDFFEA] border text-white font-medium">
          <SelectValue
            placeholder="Tari Tradisional"
            defaultValue="tradisional"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function Nilai() {
  return (
    <div className="pt-9 px-6 ">
      <div className="border rounded-lg bg-[#D2FFEC]">
        <p className="font-semibold text-[#0FA383] py-3 ml-3 text-base">
          Tari Reog Ponorogo
        </p>
        <div>
          <div className="bg-[#83B5A0] aspect-[3/2] rounded-lg mx-3">
            gambar
          </div>
        </div>
        <div className="flex justify-center text-sm my-2 bg-[#BBF0DA]/60 mx-6 text-[#55BFA8]">
          klik disini untuk menilai acara
        </div>
      </div>
    </div>
  );
}
