import React from "react";
import Index from "@/components/Header/Main";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
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
          <DialogTitle className="pb-3 text-center">
            <Balancer>Panitia Drama Arena</Balancer>
          </DialogTitle>
          <ListPanitia />
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
          <ListPembimbing />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ListPembimbing() {
  const panitiaData = [
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "Nabil Hafidz Al Khair",
      jabatan: "Ketua 1",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Muhammad Farid Wajiidi",
      jabatan: "ketua 2",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Noaf Rizkylah Akbar",
      jabatan: "ketua 3",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Azra Bey Fananie",
      jabatan: "Sekretaris 1",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Muhammad Fajrul Falah",
      jabatan: "Sekretaris 2",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "M. Shobirin Syahbudin",
      jabatan: "Sekretaris 3",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Ian Abi Zaky",
      jabatan: "Bendahara 1",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Leonel Dega Maulana",
      jabatan: "Bendahara 2",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Adhitya Kusumawardana I",
      jabatan: "Sponsorship 1",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Rayhan Julviar Zien",
      jabatan: "Sponsorship",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "Fernandy Baedy",
      jabatan: "Sponsorship",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Adam Hikmal Hakim",
      jabatan: "Persidangan 1",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Sendy Fauzan Aufar",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Farhan Fadlurrohman",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Ahmad Farrel Indi Akbar",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "M. Iqbal Masruri",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Riffat Amzar Isnandiwa",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Sa'dan Abdullah",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Edi Surono",
      jabatan: "Persidangan",
    },
  ];

  return (
    <ScrollArea className="h-96 w-full rounded-md border">
      <div className="space-y-3 pt-3">
        {panitiaData.map((panitia, index) => (
          <div className="flex items-center" key={index}>
            <Avatar className="h-9 w-9">
              <AvatarImage src={panitia.avatarSrc} alt="Avatar" />
              <AvatarFallback>{panitia.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{panitia.nama}</p>
              <p className="text-sm text-muted-foreground">{panitia.jabatan}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function ListPanitia() {
  const panitiaData = [
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "Nabil Hafidz Al Khair",
      jabatan: "Ketua 1",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Muhammad Farid Wajiidi",
      jabatan: "ketua 2",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Noaf Rizkylah Akbar",
      jabatan: "ketua 3",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Azra Bey Fananie",
      jabatan: "Sekretaris 1",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Muhammad Fajrul Falah",
      jabatan: "Sekretaris 2",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "M. Shobirin Syahbudin",
      jabatan: "Sekretaris 3",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Ian Abi Zaky",
      jabatan: "Bendahara 1",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Leonel Dega Maulana",
      jabatan: "Bendahara 2",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Adhitya Kusumawardana I",
      jabatan: "Sponsorship 1",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Rayhan Julviar Zien",
      jabatan: "Sponsorship",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "Fernandy Baedy",
      jabatan: "Sponsorship",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Adam Hikmal Hakim",
      jabatan: "Persidangan 1",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Sendy Fauzan Aufar",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Farhan Fadlurrohman",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Ahmad Farrel Indi Akbar",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "M. Iqbal Masruri",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Riffat Amzar Isnandiwa",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Sa'dan Abdullah",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Edi Surono",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Makarim Abdullah",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "M. Nabih Tazqiyaturridha",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "M. Fairuz Zidane",
      jabatan: "Persidangan",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Muhammad Riski",
      jabatan: "Elektro 1",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "M.Bizaqqadaram Hartono",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Muhammad Juanda",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "NH",
      nama: "Emir Fatih Shamid",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "MF",
      nama: "Muhammad Itsna Hadi",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "IN",
      nama: "Muhammad Falih Al Fatih",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/04.png",
      avatarFallback: "WK",
      nama: "Rakha Subhi Daniswara",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "M. Farrel Mahesa",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Muhammad Fadli Hidayat",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "Rejwa Mustafa Rafsanjani",
      jabatan: "Elektro",
    },
    {
      avatarSrc: "/avatars/02.png",
      avatarFallback: "SD",
      nama: "M. Farel Ardianta",
      jabatan: "Elektro",
    },
  ];

  return (
    <ScrollArea className="h-96 w-full rounded-md border">
      <div className="space-y-3 pt-3">
        {panitiaData.map((panitia, index) => (
          <div className="flex items-center" key={index}>
            <Avatar className="h-9 w-9">
              <AvatarImage src={panitia.avatarSrc} alt="Avatar" />
              <AvatarFallback>{panitia.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{panitia.nama}</p>
              <p className="text-sm text-muted-foreground">{panitia.jabatan}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
