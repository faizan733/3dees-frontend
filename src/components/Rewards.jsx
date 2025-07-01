import React from 'react';
import model0101 from '../assets/png/3d model 0101.png';
import model0202 from '../assets/png/3d model 0202.png';
import model0303 from '../assets/png/3d model 0303.png';
import model0404 from '../assets/png/3d model 0404.png';

const Rewards = () => {
  const rewards = [
    {
      id: 1,
      name: "3D Model 01",
      image: model0101,
    },
    {
      id: 2,
      name: "3D Model 02",
      image: model0202,
    },
    {
      id: 3,
      name: "3D Model 03",
      image: model0303,
    },
    {
      id: 4,
      name: "3D Model 04",
      image: model0404,
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned heading stretching till grid width */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-2xl font-bold text-white text-left leading-snug max-w-full lg:max-w-6xl">
            The reward for the winners each day will include a portion of 3dees from the platform as well as accumulated ORDI from the launch pool
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="group relative transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={reward.image}
                  alt={reward.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{reward.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewards;
