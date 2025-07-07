// src/components/FeatureSection.jsx
import React from "react";
import featureImage from "../assets/png/feature.png"; // ✅ your image path

const FeatureSection = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-pixel tracking-wider">
          3DISBRC2.0
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 font-semibold leading-relaxed px-2">
          The flagship platform for trading between ORDI & 3D coins :<br />
          <span className="text-white">The premier 3D coin launcher</span>
        </p>

        {/* Three Columns with Responsive Gaps */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 sm:gap-12 md:gap-16">
          {/* Left Side Features */}
          <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 lg:gap-40 w-full lg:w-1/4 text-left order-1 lg:order-1">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-pixel mb-2 sm:mb-3 tracking-wide">LOW FEES</h3>
              <ul className="text-xs sm:text-sm leading-relaxed text-gray-300 space-y-1">
                <li>• Launch 3D coins with 0 fees</li>
                <li>• Trade ORDI with 3D coins 0 L1 fees</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-pixel mb-2 sm:mb-3 tracking-wide">NON CUSTODIAL</h3>
              <ul className="text-xs sm:text-sm leading-relaxed text-gray-300 space-y-1">
                <li>• Full non custodial</li>
                <li>• With BRC upgrade your assets</li>
                <li>• are never held by a 3rd party</li>
              </ul>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-2/4 flex justify-center order-2 lg:order-2">
            <img
              src={featureImage}
              alt="3D Coin Launcher UI"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-lg border border-gray-700 shadow-xl"
            />
          </div>

          {/* Right Side Features */}
          <div className="flex flex-col gap-8 sm:gap-16 md:gap-24 lg:gap-40 w-full lg:w-1/4 text-left order-3 lg:order-3">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-pixel mb-2 sm:mb-3 tracking-wide">FULL TRANSPARENT</h3>
              <ul className="text-xs sm:text-sm leading-relaxed text-gray-300 space-y-1">
                <li>• Trade launches all happen on BTC</li>
                <li>• L1 on chain using BRC2.0 upgrade</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-pixel mb-2 sm:mb-3 tracking-wide">SEAMLESS</h3>
              <ul className="text-xs sm:text-sm leading-relaxed text-gray-300 space-y-1">
                <li>• Trade with one click</li>
                <li>• instantaneously & without</li>
                <li>• worrying about mempool fees</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;