"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface DynLink {
  href: string;
  link: string;
}

// eslint-disable-next-line no-redeclare
function DynLink({ href, link }: DynLink) {
  const pathname = usePathname();
  const hrefPath = href;
  return (
    <Link href={hrefPath} className="text-[#53AA97]">
      <p
        className={
          pathname == hrefPath
            ? "my-2 rounded-lg bg-[#53AA97]/30 py-4 pl-3 transition-all"
            : "my-2 py-4 transition-all"
        }
      >
        {link}
      </p>
    </Link>
  );
}

export default DynLink;
