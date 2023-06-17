import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center pt-20">
        <Link href="/gontor-dua" className="px-5 py-4 bg-orange-400">
          Gontor-Dua
        </Link>
      </div>
    </main>
  );
}

/*

<div className="flex-col">
        <Button variant="default">Default</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button variant="outline">outline</Button>
        <div className="pt-12"></div>
        <div>
          <p>asdasdsadasdasdasd</p>
          <p>ini huruf kecil</p>
        </div>
      </div>
*/
