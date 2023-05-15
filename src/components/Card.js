import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ img, name, types, onClick }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // return(   AOS.init({
    //   disable: true
    // });)
  }, []);

  return (
    <Link
      href={`/${name}`}
      className="bg-white cursor-pointer"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div
        className="flex justify-center py-4"
        data-aos="fade-down"
        data-aos-once="true"
      >
        <img className="w-[150px]" src={img} alt="pokemon" />
      </div>

      <div
        className="p-8"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <h2 className="text-2xl capitalize">{name}</h2>
        <div className="flex items-center gap-4 mt-8">
          <h2 className="text-lg">Type:</h2>
          {types.map((t) => (
            <span key={t.type.name} className="type capitalize">
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
