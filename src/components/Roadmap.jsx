import React from 'react';

const Roadmap = () => {
  const stages = [
    {
      stage: 'Stage 1',
      description:
        'Launch 3d platform allowing users to trade ORDI for 3d token assets on a bonding curve. Users can launch any 3d asset token with any ORDI amount starting from 0.',
    },
    {
      stage: 'Stage 2',
      description:
        'Launch AI game that can be played by any BTC address. Accumulated Rewards for the game from the platform will be distributed to the top players of the game each day in proportion to the amount of bitmaps the winners hold.',
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-left">
            ROADMAP
          </h2>
        </div>

        {/* Layout */}
        <div className="relative max-w-10xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16">

            {/* === STAGE 1 === */}
            <div className="flex flex-col lg:mt-8 lg:mb-40">
              <div className="flex justify-center items-center mb-6">
                <h3 className="text-2xl font-bold text-red-500 border-2 border-red-500 px-6 py-3 bg-black">
                  {stages[0].stage}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed text-lg">{stages[0].description}</p>
              </div>
            </div>

            {/* === STAGE 2 === */}
            <div className="flex flex-col lg:mt-40 lg:mb-8">
              <div className="flex justify-center items-center mb-6">
                <h3 className="text-2xl font-bold text-red-500 border-2 border-red-500 px-6 py-3 bg-black">
                  {stages[1].stage}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 leading-relaxed text-lg">{stages[1].description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
