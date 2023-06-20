import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import DynLink from "../DynLink";
import { LogoHeader, LogoSamping } from "../DynLogo";

function Index() {
  return (
    <div className="sticky top-0 z-10 border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="flex items-center justify-between py-2">
        <Link href="/gontor-dua">
          <LogoHeader />
        </Link>
        <nav className="stroke-[#247865]">
          <SideNav />
        </nav>
      </div>
    </div>
  );
}

export function SideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-8 hover:bg-[#53AA97]/30">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent position="right" size="xl" className="text-lg ">
        <div className="flex h-screen flex-col justify-between pt-3">
          <ul className="font-medium text-[#53AA97] ">
            <li>
              <DynLink href="/gontor-dua" link="Halaman Utama" />
            </li>
            <Separator />
            <li>
              <DynLink
                href="/gontor-dua/penilaian/acara"
                link="Menilai Acara"
              />
            </li>
            <Separator />
            <li>
              <DynLink
                href="/gontor-dua/penilaian/properti"
                link="Menilai Properti Acara"
              />
            </li>
            <Separator />
            <li>
              <DynLink href="/gontor-dua/akunku" link="Akunku" />
            </li>
            <Separator />
            <li>
              <DynLink href="/gontor-dua/terima-kasih" link="Terima Kasih" />
            </li>
          </ul>
          <div className="flex justify-center py-12">
            <LogoSamping />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Index;
