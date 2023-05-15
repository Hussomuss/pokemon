import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-64px)] grid place-items-center">
      <video
        src="/pokemon-4800.mp4"
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: "-1",
        }}
      />
      <div className="text-white text-2xl text-center bg-[#00000070] rounded-xl p-10">
        <h1 className="font-medium text-[30px] md:text-[50px] mb-4">
          The Pokedex Website!
        </h1>
        <p className="text-[20px] md:text-[24px]">
          Search the pokemon you want
        </p>
      </div>
    </div>
  );
};

export default Hero;
