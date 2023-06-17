import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";

function Index() {
  return (
    <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-40 border-b border-gray-200">
      <div className="flex justify-between items-center pt-1">
        <Image
          src="/logo/logo-wide.webp"
          alt="logo wide"
          width={239}
          height={86}
          className="ml-2"
        />
        <nav className="stroke-[#247865]">
          <SheetDemo />
        </nav>
      </div>
    </div>
  );
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-8 hover:bg-[#53AA97]/30">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent position="right" size="xl" className="text-lg ">
        <div className="pt-10 flex flex-col h-screen justify-between">
          <ul className="font-medium text-[#53AA97] [&>li]:py-5">
            <li>
              <Link href="/gontor-dua" className="text-[#469181]">
                Drama Arena 598
              </Link>
            </li>
            <Separator />
            <li>
              <Link href="/gontor-dua/penilaian/acara">Menilai Acara</Link>
            </li>
            <Separator />
            <li>
              <Link href="/gontor-dua/penilaian/properti-acara">
                Menilai Properti Acara
              </Link>
            </li>
            <Separator />
            <li>
              <Link href="/gontor-dua/terima-kasih">
                Informasi Lain & <br /> Terima Kasih
              </Link>
            </li>
            <Separator />
          </ul>
          <div className="flex justify-center py-12">
            <Image
              src="/logo/badge-logo.webp"
              width={141}
              height={220}
              alt="badge logo"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Index;

/*
<div className="grid gap-4 py-4 ">
          <p>ASDASDASD</p>
        </div>
*/
