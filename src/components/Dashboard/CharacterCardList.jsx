import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ✅ Trending Coin Images - Import as ES Modules
import trend1 from '../../assets/png/trend1.png';
import trend2 from '../../assets/png/trend2.png';
import trend3 from  '../../assets/png/trend3.png';
import trend4 from  '../../assets/png/trend4.png';


// ✅ Available Coin Images
import coin1 from '../../assets/png/coin1.png';
import coin2 from '../../assets/png/coin2.png';
import coin3 from '../../assets/png/coin3.png';
import coin4 from '../../assets/png/coin4.png';
import coin5 from '../../assets/png/coin5.png';
import coin6 from '../../assets/png/coin6.png';
import coin7 from '../../assets/png/coin7.png';
import coin8 from '../../assets/png/coin8.png';
import coin9 from '../../assets/png/coin9.png';

// ✅ Trending Coins
const trendingCoins = [
  { title: '3D Retro Computer', creator: 'user0235', marketCap: '$25.6 K', image: trend1 },
  { title: '3D Bear Sculpture', creator: 'user0235', marketCap: '$25.6 K', image: trend2 },
  { title: '3D House', creator: 'user0235', marketCap: '$25.6 K', image: trend3 },
  { title: '3D Coffee Machine', creator: 'user0235', marketCap: '$25.6 K', image: trend4 },
//   { title: '3D Extra Model 1', creator: 'user0235', marketCap: '$25.6 K', image: trend5 },
//   { title: '3D Extra Model 2', creator: 'user0235', marketCap: '$25.6 K', image: trend6 },
];

// ✅ Available Coins
const availableCoins = [
  { title: '3D Soldier', creator: 'user0235', marketCap: '$25.6 K', image: coin1 },
  { title: '3D Table', creator: 'user0235', marketCap: '$25.6 K', image: coin2 },
  { title: '3D Sword', creator: 'user0235', marketCap: '$25.6 K', image: coin3 },
  { title: '3D Gaming Model', creator: 'user0235', marketCap: '$25.6 K', image: coin4 },
  { title: '3D Car', creator: 'user0235', marketCap: '$25.6 K', image: coin5 },
  { title: '3D Lord Batista', creator: 'user0235', marketCap: '$25.6 K', image: coin6 },
  { title: '3D Game Console', creator: 'user0235', marketCap: '$25.6 K', image: coin7 },
  { title: '3D Mineral of Alexia', creator: 'user0235', marketCap: '$25.6 K', image: coin8 },
  { title: '3D Game Console', creator: 'user0235', marketCap: '$25.6 K', image: coin9 },
];

const CardItem = ({ title, creator, marketCap, image }) => (
  <div className="flex bg-black border border-red-500 rounded-lg p-4 gap-4 w-full max-w-[400px] min-h-[140px]">
    <div className="w-24 h-24 bg-gray-800 rounded-md flex items-center justify-center flex-shrink-0">
      <img src={image} alt={title} className="w-full h-full object-contain rounded-md" />
    </div>
    <div className="flex-1">
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-red-500 font-semibold mb-1">Market Cap : {marketCap}</p>
      <p className="text-sm text-gray-400 mb-1">Created by : {creator}</p>
      <p className="text-sm text-gray-400">Description :</p>
    </div>
  </div>
);

const DashboardContent = () => {
  const [trendingStartIndex, setTrendingStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrevious = () => {
    setTrendingStartIndex(prev =>
      prev === 0 ? Math.max(0, trendingCoins.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  const handleNext = () => {
    setTrendingStartIndex(prev =>
      prev + itemsPerPage >= trendingCoins.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleTrendingCoins = trendingCoins.slice(trendingStartIndex, trendingStartIndex + itemsPerPage);

  return (
    <div className="px-8 pb-16 bg-black min-h-screen">
      {/* Trending Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">Trending now</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center border border-gray-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center border border-gray-600 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleTrendingCoins.map((coin, idx) => (
            <div key={`trending-${trendingStartIndex + idx}`} className="w-full max-w-[400px]">
              <CardItem {...coin} />
            </div>
          ))}
        </div>
      </div>

      {/* Available Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">Available coins</h2>
          <div className="flex items-center gap-4">
        <select className="bg-black border border-red-500 text-white text-sm px-3 py-2 rounded-md focus:outline-none">
  <option>Sort : Featured</option>
  <option>Sort : Price</option>
  <option>Sort : Market Cap</option>
  <option>Sort : New</option>
</select>

          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {availableCoins.map((coin, idx) => (
            <div key={`available-${idx}`} className="max-w-[1200px]">
              <CardItem {...coin} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
