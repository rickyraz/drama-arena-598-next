"use client";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { WhatsappShareButton } from "next-share";
import { TwitterShareButton } from "next-share";
import { FacebookShareButton } from "next-share";
import { LinkedinShareButton } from "next-share";
import { PinterestShareButton } from "next-share";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function WhatsAppShare() {
  return (
    <div className=" bg-white">
      <WhatsappShareButton
        url={"https://github.com/next-share"}
        title={"next-share is a social share buttons for your next React apps."}
        separator=":: "
        className="flex items-center justify-center"
      >
        <p className="mx-2 my-2">
          <Image
            src="/iconshare/wa.svg"
            alt="icon-wa"
            width={240}
            height={240}
          />
        </p>
      </WhatsappShareButton>
    </div>
  );
}

export function LinkedShare() {
  return (
    <div className=" bg-white">
      <LinkedinShareButton
        url={"https://github.com/next-share"}
        className="flex items-center justify-center"
      >
        <p className="mx-2 my-2">
          <Image
            src="/iconshare/link.svg"
            alt="icon-wa"
            width={240}
            height={240}
          />
        </p>
      </LinkedinShareButton>
    </div>
  );
}

export function FacebookShare() {
  return (
    <div className=" bg-white">
      <FacebookShareButton
        url={"https://github.com/next-share"}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#nextshare"}
        className="flex items-center justify-center"
      >
        <p className="mx-2 my-2">
          <Image
            src="/iconshare/fb.svg"
            alt="icon-wa"
            width={240}
            height={240}
          />
        </p>
      </FacebookShareButton>
    </div>
  );
}

export function TwitterShare() {
  return (
    <div className=" bg-white">
      <TwitterShareButton
        url={"https://github.com/next-share"}
        title={"next-share is a social share buttons for your next React apps."}
        className="flex items-center justify-center"
      >
        <p className="mx-2 my-2">
          <Image
            src="/iconshare/tw.svg"
            alt="icon-tw"
            width={240}
            height={240}
          />
        </p>
      </TwitterShareButton>
    </div>
  );
}

export function PinterestShare() {
  return (
    <div className=" bg-white">
      <PinterestShareButton
        url={"https://github.com/next-share"}
        media={"next-share is a social share buttons for your next React apps."}
        className="flex items-center justify-center"
      >
        <p className="mx-2 my-2">
          <Image
            src="/iconshare/pin.svg"
            alt="icon-wa"
            width={240}
            height={240}
          />
        </p>
      </PinterestShareButton>
    </div>
  );
}

export function CopyLink() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const currentPath = pathname;
    navigator.clipboard
      .writeText(currentPath)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Gagal menyalin ke papan klip:", error);
      });
  };
  return (
    <div className=" bg-white">
      <div className="flex items-center justify-center">
        <div className="mx-2 my-2">
          <CopyToClipboard text="copy">
            <button onClick={handleCopy}>
              <Image
                src="/iconshare/copy.svg"
                alt="icon-copy"
                width={240}
                height={240}
              />
            </button>
          </CopyToClipboard>
          {copied && <span style={{ color: "green" }}>Tersalin.</span>}
        </div>
      </div>
    </div>
  );
}
