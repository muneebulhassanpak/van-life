import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="bg-heroImage bg-no-repeat bg-cover bg-center md:bg-bottom min-h-hMin grid items-center px-2">
      <div className="text-white max-w-lg md:max-w-2xl m-auto font-interFamily">
        <h1 className="text-4xl font-extrabold text-center leading-10 ">
          You got the travel plans, we got the travel vehicles
        </h1>
        <p className="text-lg text-center leading-6 font-normal mt-5 mb-5 md:text-left md:mt-8 md:mb-8">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="bg-orangePrimary text-white  flex justify-center items-center w-full h-[50px] font-bold rounded-md">
          Find your van
        </Link>
      </div>
    </section>
  );
};

export default Home;
