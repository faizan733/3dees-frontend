import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 👈 import this
import heroBg from '../assets/png/hero.png';

const Hero = () => {
  const navigate = useNavigate(); // 👈 initialize navigation

  const handleGetStarted = () => {
    navigate('/dashboard'); // 👈 navigate to dashboard route
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
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

          <button
            onClick={handleGetStarted} // 👈 add onClick
            className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold flex items-center gap-2 mx-auto"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
