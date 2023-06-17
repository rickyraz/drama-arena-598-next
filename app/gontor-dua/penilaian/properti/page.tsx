import React from "react";
import Image from "next/image";
import Catatan from "@/components/Catatan";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

function Property() {
  return (
    <div className="bg-[#041F14] min-h-screen">
      <Catatan />
      <Nilai />
    </div>
  );
}

export default Property;

function Nilai() {
  return (
    <div className="pt-9 px-6 ">
      <div className="border rounded-lg bg-[#D2FFEC]">
        <p className="font-semibold text-[#0FA383] py-3 ml-3 text-base">
          Panggung
        </p>
        <div>
          <ul className="flex justify-between mx-3">
            <li>
              <Image src="/emoji/xx.svg" alt="XD" width={32} height={32} />
            </li>
            <li>
              <Image src="/emoji/uwek.svg" alt="XD" width={32} height={32} />
            </li>
            <li>
              <Image src="/emoji/smile.svg" alt="XD" width={32} height={32} />
            </li>
            <li>
              <Image src="/emoji/admire.svg" alt="XD" width={32} height={32} />
            </li>
            <li>
              <Image src="/emoji/love.svg" alt="XD" width={32} height={32} />
            </li>
          </ul>
        </div>
        <SliderDemo />
        <div className="pt-3 px-3 pb-6 flex justify-between">
          <Button
            variant="default"
            className="bg-[#86E7BE] hover:bg-[#41a27a] text-[#0D493C]"
          >
            Komentar
          </Button>
          <Button variant="default">Kirim</Button>
        </div>
      </div>
    </div>
  );
}

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[3]}
      max={4}
      step={1}
      className={cn("w-[100%] px-3 py-3", className)}
      {...props}
    />
  );
}
