import React from 'react';
import polkaDotImage from '../assets/png/dot.png'; // Update with your actual image path

// Polka Dots Component
const PolkaDots = () => {
  return (
    <div className="absolute right-5 top-0 w-34 h-34 mt-24">
      <img 
        src={polkaDotImage} 
        alt="Polka dots pattern" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned Heading */}
        <div className="mb-12 relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide text-left leading-snug">
            WHAT ARE <span className="text-red-500">3DEES</span> & WHAT PROBLEM CAN THEY SOLVE?
          </h2>
        </div>

        {/* Content with Polka Dots */}
        <div className="relative">
          {/* Bullet Points */}
          <div className="space-y-6 max-w-4xl relative z-10">
            <div className="flex items-start space-x-4">
              <div className="text-red-500 text-xl font-bold mt-1">▷</div>
              <p className="text-white text-lg font-medium">
                <span className="text-red-500 font-bold">3DEES</span> can be launched on a bonding curve with any amount of ORDI.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-red-500 text-xl font-bold mt-1">▷</div>
              <p className="text-white text-lg font-medium">
                Any launch will have to have a 3D file associated with it.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-red-500 text-xl font-bold mt-1">▷</div>
              <p className="text-white text-lg font-medium">
                The token supply will be 100 for each launch.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-red-500 text-xl font-bold mt-1">▷</div>
              <p className="text-white text-lg font-medium">
                Once the I.P reaches 20 ORDI, the LP is graduated to the main DEX.
              </p>
            </div>
          </div>

          {/* Polka Dots Pattern */}
          <PolkaDots />
        </div>
      </div>
    </section>
  );
};

export default About;