import React from 'react';

const PersonalInfo = () => (
  <section className="bg-white text-black w-full">
    <div className="p-4">
      <h1 className="text-4xl text-right">
        Romina
      </h1>

      <div className="flex justify-between">
        <p className="flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        </p>
        <div className="bg-pink-500 w-24 h-24 rounded-full flex-2" />
      </div>
    </div>

    <div className="p-4">
      <h1 className="text-4xl">
        Mario
      </h1>

      <div className="flex justify-between">
        <div className="bg-blue-500 w-24 h-24 rounded-full flex-2" />
        <p className="flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        </p>
      </div>
    </div>
  </section>
);

export default PersonalInfo;
