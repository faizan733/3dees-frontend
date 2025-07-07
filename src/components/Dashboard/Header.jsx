import React from 'react';
import { Search } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="bg-black text-white px-6 py-6">
      {/* SIGN IN Button (Top Right) */}
      <div className="flex justify-end mb-4">
        <button className="bg-red-600 px-6 py-2 rounded-md font-semibold text-white text-sm">
          SIGN IN
        </button>
      </div>

      {/* Center Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-widest">
          CREATE A NEW 3D COIN
        </h1>
      </div>

      {/* Search Field + Button */}
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="relative w-full max-w-7xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-500 w-5 h-5" />
          <input
            type="text"
            placeholder=""
            className="w-full border border-red-600 bg-transparent text-white pl-10 pr-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <button className="bg-red-600 px-6 py-2 rounded-md font-semibold text-white">
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
