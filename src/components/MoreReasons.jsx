import React from 'react';
import { Trophy, Gamepad2, Coins } from 'lucide-react';

const MoreReasons = () => {
  const reasons = [
    {
      icon: Trophy,
      title: "Upon graduation of LP0.5%",
      description: "of the fees is reserved for in game rewards of phase 2"
    },
    {
      icon: Gamepad2,
      title: "Some 3DEES can be selected",
      description: "to become in game items in phase 2"
    },
    {
      icon: Coins,
      title: "Other fees 0.5 ORDI is take",
      description: "for each graduation pool"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-4xl font-bold text-white mb-16">
          MORE REASONS TO JOIN :
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            return (
              <div key={index} className="p-8 rounded-2xl border-none transition-all duration-300 hover:opacity-90" style={{backgroundColor: '#2D1B1B'}}>
                <div className="text-white text-left">
                  <p className="text-lg leading-relaxed font-medium">{reason.title}</p>
                  <p className="text-lg leading-relaxed font-medium mt-2">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MoreReasons;