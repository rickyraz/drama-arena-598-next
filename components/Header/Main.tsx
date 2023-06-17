"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";

function Index() {
  return (
    <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="flex justify-between items-center py-2">
        <Image
          src="/logo/logo-wide.webp"
          alt="logo wide"
          width={239}
          height={86}
          className="ml-2"
          priority={true}
        />
        <nav className="stroke-[#247865]">
          <SideNav />
        </nav>
      </div>
    </div>
  );
}

export function SideNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-8 hover:bg-[#53AA97]/30">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent position="right" size="xl" className="text-lg ">
        <div className="pt-10 flex flex-col h-screen justify-between">
          <ul className="font-medium text-[#53AA97] ">
            <li>
              <Link href="/gontor-dua" className="text-[#53AA97]">
                <p
                  className={
                    pathname == "/gontor-dua"
                      ? "py-4 my-2 pl-3 bg-[#53AA97]/10 rounded-lg"
                      : "py-4 my-2"
                  }
                >
                  Halaman Utama
                </p>
              </Link>
            </li>
            <Separator />
            <li>
              <Link href="/gontor-dua/penilaian/acara">
                <p
                  className={
                    pathname == "/gontor-dua/penilaian/acara"
                      ? "py-4 my-2 pl-3 bg-[#53AA97]/10 rounded-lg"
                      : "py-4 my-2"
                  }
                >
                  Menilai Acara
                </p>
              </Link>
            </li>
            <Separator />
            <li>
              <Link href="/gontor-dua/penilaian/properti">
                <p
                  className={
                    pathname == "/gontor-dua/penilaian/properti"
                      ? "py-4 my-2 pl-3 bg-[#53AA97]/10 rounded-lg"
                      : "py-4 my-2"
                  }
                >
                  Menilai Properti Acara
                </p>
              </Link>
            </li>
            <Separator />
            <li>
              <Link href="/gontor-dua/penilaianku">
                <p
                  className={
                    pathname == "/gontor-dua/penilaianku"
                      ? "py-4 my-2 pl-3 bg-[#53AA97]/10 rounded-lg"
                      : "py-4 my-2"
                  }
                >
                  Penilaianku
                </p>
              </Link>
            </li>
            <Separator />
            <li>
              <Link href="/gontor-dua/terima-kasih">
                {" "}
                <p
                  className={
                    pathname == "/gontor-dua/terima-kasih"
                      ? "py-4 my-2 pl-3 bg-[#53AA97]/10 rounded-lg"
                      : "py-4 my-2"
                  }
                >
                  Informasi Lain & <br /> Terima Kasih
                </p>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center py-12">
            <Image
              src="/logo/badge-logo.webp"
              width={141}
              height={220}
              alt="badge logo"
              priority={true}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Index;
