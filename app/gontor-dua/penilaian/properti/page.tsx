/* eslint-disable no-redeclare */
import React from "react";
import Image from "next/image";
import Catatan from "@/components/Catatan";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

import Index from "@/components/Header/Main";

function Property() {
  return (
    <>
      <Index />
      <section className="min-h-screen bg-[#041F14] pb-20">
        <Catatan />
        <Nilai property="Background Panggung" />
        <Nilai property="Kebersihan" />
        <Nilai property="Makanan" />
      </section>
    </>
  );
}

export default Property;

interface Nilai {
  property: string;
}

function Nilai({ property }: Nilai) {
  return (
    <div className="px-6 pt-9 ">
      <div className="rounded-lg border bg-[#D2FFEC]">
        <p className="ml-3 py-3 text-base font-semibold text-[#0FA383]">
          {property}
        </p>
        <div>
          <ul className="mx-2 flex justify-between">
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
        <div className="flex justify-between px-3 pb-6 pt-3">
          <Button
            variant="default"
            className="bg-[#86E7BE] text-[#0D493C] hover:bg-[#41a27a]"
          >
            <MessageSquare className="h-4 w-4" />
            <p className="ml-1">Komentar</p>
          </Button>
          <Button variant="default" className="bg-[#F9C97B] hover:bg-[#e8b35e]">
            <p className="text-[#0D493C]">Kirim</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

type SliderProps = React.ComponentProps<typeof Slider>;

function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[2]}
      max={4}
      step={1}
      className={cn("w-[100%] px-3 py-3", className)}
      {...props}
    />
  );
}
