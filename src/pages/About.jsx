import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="bg-aboutImage bg-no-repeat bg-cover bg-bottom min-h-aMin grid items-center px-2"></div>
      <div className="text-black max-w-lg md:max-w-2xl mt-6 mb-3 mx-auto font-interFamily">
        <h1 className="text-4xl font-extrabold text-center leading-10 ">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="text-lg text-center leading-6 font-normal mt-5 mb-5 md:text-left md:mt-7 md:mb-7">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="text-lg text-center leading-6 font-normal mt-5 mb-5 md:text-left md:mt-7 md:mb-7">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="md:px-0 px-2">
        <div className="px-5 py-14 bg-yellowTertiary max-w-4xl mx-auto my-3 rounded-md text-left md:text-center">
          <h2 className="text-black leading-7 mb-6 text-2xl font-bold ">
            Your destination is waiting. Your van is ready.
          </h2>
          <Link className="text-white mx-0 md:mx-auto bg-blackSecondary flex justify-center items-center w-buttonWidth h-buttonHeight rounded-md">
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
