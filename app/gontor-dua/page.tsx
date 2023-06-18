// import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Index from "@/components/Header/Main";

function GontorDua() {
  return (
    <>
      <Index />
      <section className="bg-[#041F14] min-h-min">
        <Hasil />
        <AcaraFavorit />
        <DilihatOleh />
        <BeliMerchendise />
      </section>
    </>
  );
}

export default GontorDua;

export function Hasil() {
  return (
    <div className="pt-9">
      <h2 className="font-semibold text-[#0FA383] px-6 text-xl">Hasil Acara</h2>
      <div className="grid grid-rows-2 grid-cols-5 grid-flow-col gap-3 px-6 place-items-stretch pt-2">
        <div className="bg-[#D2FFED] row-span-2 col-span-3 py-8 rounded-lg">
          <h3 className="flex justify-center capitalize font-semibold text-[#53AA97]">
            rata-rata acara
          </h3>
          <div className="flex justify-center items-center ">
            <Image src="./star.svg" alt="star" width={45} height={43} />
            <span className="text-[45px] font-semibold ml-1 text-[#0A3D32]">
              8.4
            </span>
          </div>
        </div>
        <div className="bg-[#D2FFED] col-span-2 rounded-lg pt-2">
          <h3 className="flex justify-center capitalize font-semibold text-[#53AA97]">
            Penonton
          </h3>
          <span className="flex justify-center text-[24px] font-semibold -mt-[2px] text-[#0A3D32]">
            56
          </span>
        </div>
        <div className="bg-[#D2FFED] col-span-2 rounded-lg pt-2">
          <h3 className="flex justify-center capitalize font-semibold text-[#53AA97]">
            Berbagi
          </h3>
          <span className="flex justify-center text-[24px] font-semibold -mt-[2px] text-[#0A3D32]">
            12
          </span>
        </div>
      </div>
    </div>
  );
}

// GK BISA DIPANGGIL ke loading.tsz
// Hasil.Skeleton = function HasilSkeleton() {
//   return (
//     <div className="p-4">
//       <div className="space-y-3">
//         <Skeleton className="h-5 w-2/5" />
//         <Skeleton className="h-4 w-4/5" />
//       </div>
//     </div>
//   );
// };

function AcaraFavorit() {
  return (
    <div className="pt-9">
      <h2 className="font-semibold text-[#0FA383] px-6 text-xl">Hasil Acara</h2>
      <div className=" flex  px-6  pt-2">
        <div className="bg-[#D2FFED] py-6 w-full rounded-lg flex flex-col px-3 text-[22px]">
          <div className="flex justify-between items-center text-[#0A3D32] w-full">
            <div className="flex items-center">
              <span className="font-bold">1.</span>
              <p className="font-semibold">Reog Ponorogo </p>
            </div>
            <div className="flex items-center ">
              <Image src="./star.svg" alt="star" width={29.98} height={29.98} />
              <span className=" font-semibold ml-1">9.5</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[#0A3D32] w-full">
            <div className="flex items-center">
              <span className="font-bold">2.</span>
              <p className="font-semibold">Topeng Ireng</p>
            </div>
            <div className="flex items-center ">
              <Image src="./star.svg" alt="star" width={29.98} height={29.98} />
              <span className=" font-semibold ml-1">9.1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeliMerchendise() {
  return (
    <div className="pt-9 pb-14">
      <h2 className="font-semibold text-[#0FA383] px-6 text-xl">
        Beli Merchendise / Rekaman Drama Arena 598
      </h2>
      <div className="flex px-6 pt-2 -space-x-3">
        <Button
          variant="default"
          className="h-16  w-full bg-[#F9C97B] hover:bg-[#e8b35e]"
        >
          <span className="text-[#041F14] text-sm">
            Klik Disini untuk antri
          </span>
        </Button>
      </div>
    </div>
  );
}

function DilihatOleh() {
  return (
    <div className="pt-9">
      <h2 className="font-semibold text-[#0FA383] px-6 text-xl">
        Dilihat Oleh
      </h2>
      <div className="flex px-6 pt-2 -space-x-4">
        <Image
          src="/circle.png"
          className=" rounded-full"
          alt="gamabr"
          width={45}
          height={45}
        />
        <Image
          src="/circle.png"
          className=" rounded-full"
          alt="gamabr"
          width={45}
          height={45}
        />
        <Image
          src="/circle.png"
          className=" rounded-full"
          alt="gamabr"
          width={45}
          height={45}
        />
        <Image
          src="/circle.png"
          className=" rounded-full"
          alt="gamabr"
          width={45}
          height={45}
        />
      </div>
    </div>
  );
}
