import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/png/hero.png'; // <-- update path if needed

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image using imported PNG */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-8">
          <span className="text-white">SWAP ORDI FOR </span>
          <span className="text-red-500">3DEES0RDI</span>
        </h1>

        <div className="mb-4 flex items-center justify-center gap-2">
          <ArrowRight className="text-red-500" size={20} />
          <p className="text-lg sm:text-xl text-white">
            3DEES are 100 3D tokens launched with any amount of ORDI
          </p>
        </div>

        <div className="mb-12 flex items-center justify-center gap-2">
          <ArrowRight className="text-red-500" size={20} />
          <p className="text-lg sm:text-xl text-white">
            Trade your ORDI for 3DEES
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            READY TO LAUNCH YOUR OWN 3DEE?
          </h2>

          <button className="bg-red-600  text-white px-8 py-4 rounded-lg text-xl font-bold  flex items-center gap-2 mx-auto">
            GET STARTED
            {/* <ArrowRight size={24} /> */}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;