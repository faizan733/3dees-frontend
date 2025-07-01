import React from 'react';
import { Play } from 'lucide-react';
import videoThumb from '../assets/png/video-thumb.jpg'; // <-- your local video image

const VideoSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-aligned Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-2xl font-bold text-white mb-6 max-w-5xl">
            A free for all first person shooter game that happens between on chain BTC users
          </h2>
        </div>

        {/* Left-aligned Video Box */}
        <div className="relative max-w-4xl">
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <img 
              src={videoThumb} 
              alt="Game Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="bg-red-600 hover:bg-red-700 p-6 rounded-full transition-all duration-300 transform hover:scale-110">
                <Play size={48} className="text-white ml-1" />
              </button>
            </div>
          </div>

          {/* Video Controls */}
          {/* <div className="flex items-center mt-6 space-x-4">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm">001 / 003</span>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-white">⏮</button>
              <button className="text-gray-400 hover:text-white">⏸</button>
              <button className="text-gray-400 hover:text-white">⏭</button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
