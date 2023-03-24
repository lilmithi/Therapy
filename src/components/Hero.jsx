import React from "react";

function Hero() {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-[#a8b9c3]">
      <img
        src="assets/images/therapist.jpeg"
        alt="hero pic"
        draggable="false"
        loading="lazy"
        className="w-full h-full absolute top-0 left-0 object-cover object-left lg:object-bottom"
      />
    </section>
  );
}

export default Hero;
