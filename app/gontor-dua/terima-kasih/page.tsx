import React from "react";
import Index from "@/components/Header/Main";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Balancer } from "react-wrap-balancer";

function TerimaKasih() {
  return (
    <>
      <Index />
      <section className=" text-[#0A3D32]">
        <TextMain />
        <div className="px-6">
          <Text />
          <Informasi />
        </div>
      </section>
    </>
  );
}

export default TerimaKasih;

const TextMain: React.FC = () => {
  return (
    <div className="flex justify-end pr-6 pt-4">
      <h1 className="text-4xl font-semibold">
        TERIMA <br /> KASIH
      </h1>
    </div>
  );
};

const Text: React.FC = () => {
  return (
    <div className="pt-[12vh]">
      <p>
        terima kasih yang sebesar-besarnya kepada penonton, pembimbing, bapak
        pengasuh dan pimpinan pondok .<br /> <br /> Karena beliau semua lah
        tersempatnya pagelaran drama arena 598 ini dan{" "}
        <span className="font-semibold">sampai jumpa</span> lagi di{" "}
        <span className="font-bold">Panggung Gembira 699</span>
      </p>
    </div>
  );
};

const Informasi: React.FC = () => {
  return (
    <div className="pt-6">
      <h2 className=" text-xl font-semibold text-[#0FA383]">Informasi Lain</h2>
      <PopUpPanitia />
      <PopUpPembimbing />
    </div>
  );
};

function PopUpPanitia() {
  return (
    <Dialog>
      <DialogTrigger className="w-full pt-2">
        <div className="rounded-lg bg-[#041F14] hover:bg-[#041F14]">
          <span className="flex h-16 items-center justify-center  text-base font-semibold text-[#47E5C3]">
            Panitia Drama Arena 598
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="pt-6">
          <DialogTitle className="text-center">
            <Balancer>Panitia Drama Arena</Balancer>
          </DialogTitle>
          {/* disini table */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function PopUpPembimbing() {
  return (
    <Dialog>
      <DialogTrigger className="w-full pt-2">
        <div className="rounded-lg bg-[#041F14] hover:bg-[#041F14]">
          <span className="flex h-16 items-center justify-center  text-base font-semibold text-[#47E5C3]">
            Pembimbing Drama Arena 598
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="pt-6">
          <DialogTitle className="text-center">
            <Balancer>Pembimbing Drama Arena</Balancer>
          </DialogTitle>
          {/* disini table */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
