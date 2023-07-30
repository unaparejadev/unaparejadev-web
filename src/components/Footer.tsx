import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer className="flex justify-between items-center bg-gray-400 w-full text-black px-8 py-4">
    <div>UnaParejaDev © 2023</div>
    <div className="flex flex-row gap-2">
      <Link href={"https://www.instagram.com/unaparejadev/"}>
        <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
      </Link>
      <Link href={"https://www.twitter.com/unaparejadev/"}>
        <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
      </Link>
      <Link href={"https://www.youtube.com/unaparejadev/"}>
        <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
      </Link>
    </div>
  </footer>
);

export default Footer;
