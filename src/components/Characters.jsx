import React from 'react';
import { ExternalLink } from 'lucide-react';

import model01 from '../assets/png/3d model 01.png';
import model02 from '../assets/png/3d model 02.png'
import model03 from '../assets/png/3d model 03.png';
import model04 from '../assets/png/3d model 04.png';

const Characters = () => {
  const characters = [
    {
      id: 1,
      name: "3D Model 01",
      image: model01,
    },
    {
      id: 2,
      name: "3D Model 02",
      image: model02,
    },
    {
      id: 3,
      name: "3D Model 03",
      image: model03,
    },
    {
      id: 4,
      name: "3D Model 04",
      image: model04,
    }
  ];

  return (
    <section id="characters" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            CHARACTERS
          </h2>
    <button className="text-white border-b-2  transition-colors">
  SEE ALL
</button>


        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character) => (
            <div key={character.id} className="group relative">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{character.name}</h3>
                {/* <p className="text-gray-400 text-sm">{character.description}</p> */}
              </div>
              <div className="absolute "></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;
