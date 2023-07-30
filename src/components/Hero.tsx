import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-l from-bittersweet-shimmer to-caribbean-current w-full h-full py-14 gap-6"
    >
      <div className="flex items-center">
        <Image
          src="/unaparejadev-logo.jpg"
          alt="logo-image"
          className="rounded-full"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col items-center justify-around w-2/4 gap-4">
        <h1 className="text-6xl">UnaParejaDev</h1>
        <div className="w-full">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
