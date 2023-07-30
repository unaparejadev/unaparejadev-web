import Image from "next/image";
import React from "react";

const Twitch = () => (
  <div className="p-8 flex flex-col gap-8">
    <div className="w-full flex items-center">
      <Image src="/twitch.svg" alt="twitch" width={50} height={50} />
      <h2 className="text-4xl">/UnaParejaDev</h2>
    </div>

    <div className="w-full flex justify-center">
      <div className="w-[600px] h-[300px] bg-gray-200 border-4 border-violet-800" />
    </div>
  </div>
);

export default Twitch;
