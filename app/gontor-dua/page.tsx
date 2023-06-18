// import { Skeleton } from "@/components/ui/skeleton";
// import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import { generateSlides } from "@/lib/generate-slide";
import Index from "@/components/Header/Main";
import { ProfileForm } from "@/components/Form";
import { Balancer } from "react-wrap-balancer";

function GontorDua() {
  return (
    <>
      <Index />
      <section className="min-h-min bg-[#041F14]">
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
    <div className="px-6 pt-9">
      <h2 className="text-xl font-semibold text-[#0FA383]">Hasil Acara</h2>
      <div className="grid grid-flow-col grid-cols-5 grid-rows-2 place-items-stretch gap-3 pt-2">
        <div className="col-span-3 row-span-2 rounded-lg bg-[#D2FFED] py-8">
          <h3 className="flex justify-center font-semibold capitalize text-[#53AA97]">
            rata-rata acara
          </h3>
          <div className="flex items-center justify-center ">
            <Image src="./star.svg" alt="star" width={45} height={43} />
            <span className="ml-1 text-[45px] font-semibold text-[#0A3D32]">
              8.4
            </span>
          </div>
        </div>
        <div className="col-span-2 rounded-lg bg-[#D2FFED] pt-2">
          <h3 className="flex justify-center font-semibold capitalize text-[#53AA97]">
            Penonton
          </h3>
          <span className="-mt-[2px] flex justify-center text-[24px] font-semibold text-[#0A3D32]">
            56
          </span>
        </div>
        <div className="col-span-2 rounded-lg bg-[#D2FFED] pt-2">
          <h3 className="flex justify-center font-semibold capitalize text-[#53AA97]">
            Berbagi
          </h3>
          <span className="-mt-[2px] flex justify-center text-[24px] font-semibold text-[#0A3D32]">
            12
          </span>
        </div>
      </div>
    </div>
  );
}

// GK BISA DIPANGGIL ke loading.tsx
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
    <div className="px-6 pt-9">
      <h2 className=" text-xl font-semibold text-[#0FA383]">Hasil Acara</h2>
      <div className=" flex  pt-2">
        <div className="flex w-full flex-col rounded-lg bg-[#D2FFED] px-3 py-6 text-[22px]">
          <div className="flex w-full items-center justify-between text-[#0A3D32]">
            <div className="flex items-center">
              <span className="font-bold">1.</span>
              <p className="font-semibold">Reog Ponorogo </p>
            </div>
            <div className="flex items-center ">
              <Image src="./star.svg" alt="star" width={29.98} height={29.98} />
              <span className=" ml-1 font-semibold">9.5</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between text-[#0A3D32]">
            <div className="flex items-center">
              <span className="font-bold">2.</span>
              <p className="font-semibold">Topeng Ireng</p>
            </div>
            <div className="flex items-center ">
              <Image src="./star.svg" alt="star" width={29.98} height={29.98} />
              <span className=" ml-1 font-semibold">9.1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeliMerchendise() {
  return (
    <div className="px-6 pb-20 pt-9">
      <h2 className="text-xl font-semibold text-[#0FA383]">
        <Balancer>Pesan Merchendise/Rekaman Kaset DA 598</Balancer>
      </h2>
      <div className="mt-2 aspect-[3/2] w-full rounded-lg bg-white">sda</div>
      <div className="relative flex w-full  pt-3">
        <PopUpMerchendise />
      </div>
    </div>
  );
}

function PopUpMerchendise() {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="rounded-lg bg-[#F9C97B] hover:bg-[#e8b35e]">
          <span className="flex h-16 items-center justify-center  text-base font-semibold text-[#041F14]">
            Klik Disini untuk antri
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="pt-6">
          <DialogTitle className="text-center">
            <Balancer>Ingin Memesan Merchedice / Rekaman DA598 ?</Balancer>
          </DialogTitle>
          <DialogDescription className="text-center text-sm">
            <Balancer>
              Isi form untuk mengantri pembelian Merchendise atau Rekaman
            </Balancer>
          </DialogDescription>
          <ProfileForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

// eslint-disable-next-line no-undef
// export const AutoplayExample: React.FC = () => {
//   const options = {
//     type: "loop",
//     gap: "1rem",
//     autoplay: true,
//     pauseOnHover: false,
//     resetProgress: false,
//     height: "15rem",
//   };

//   return (
//     <div className="wrapper">
//       <h2 id="autoplay-example-heading">Autoplay</h2>
//       <Splide
//         options={options}
//         aria-labelledby="autoplay-example-heading"
//         hasTrack={false}
//       >
//         <div style={{ position: "relative" }}>
//           <SplideTrack>
//             {generateSlides().map((slide) => (
//               <SplideSlide key={slide.src}>
//                 {/*  fill={true} */}
//                 <Image
//                   src={slide.src}
//                   alt={slide.alt}
//                   width={500}
//                   height={500}
//                 />
//               </SplideSlide>
//             ))}
//           </SplideTrack>
//         </div>

//         <div className="splide__progress">
//           <div className="splide__progress__bar" />
//         </div>

//         <button className="splide__toggle">
//           <span className="splide__toggle__play">Play</span>
//           <span className="splide__toggle__pause">Pause</span>
//         </button>
//       </Splide>
//     </div>
//   );
// };

function DilihatOleh() {
  return (
    <div className="pt-9">
      <h2 className="px-6 text-xl font-semibold text-[#0FA383]">
        Dilihat Oleh
      </h2>
      <div className="flex -space-x-4 px-6 pt-2">
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
