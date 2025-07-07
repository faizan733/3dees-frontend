// import React from 'react';
// import polkaDotImage from '../assets/png/dot.png'; // Update with your actual image path

// // Polka Dots Component
// const PolkaDots = () => {
//   return (
//     <div className="absolute right-5 top-0 w-34 h-34 mt-24">
//       <img 
//         src={polkaDotImage} 
//         alt="Polka dots pattern" 
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-black relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Left-aligned Heading */}
//         <div className="mb-12 relative">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide text-left leading-snug">
//             WHAT ARE <span className="text-red-500">3DEES</span> & WHAT PROBLEM CAN THEY SOLVE?
//           </h2>
//         </div>

//         {/* Content with Polka Dots */}
//         <div className="relative">
//           {/* Bullet Points */}
//           <div className="space-y-6 max-w-4xl relative z-10">
//             <div className="flex items-start space-x-4">
//               <div className="text-red-500 text-xl font-bold mt-1">▷</div>
//               <p className="text-white text-lg font-medium">
//                 <span className="text-red-500 font-bold">3DEES</span> can be launched on a bonding curve with any amount of ORDI.
//               </p>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="text-red-500 text-xl font-bold mt-1">▷</div>
//               <p className="text-white text-lg font-medium">
//                 Any launch will have to have a 3D file associated with it.
//               </p>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="text-red-500 text-xl font-bold mt-1">▷</div>
//               <p className="text-white text-lg font-medium">
//                 The token supply will be 100 for each launch.
//               </p>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="text-red-500 text-xl font-bold mt-1">▷</div>
//               <p className="text-white text-lg font-medium">
//                 Once the I.P reaches 20 ORDI, the LP is graduated to the main DEX.
//               </p>
//             </div>
//           </div>

//           {/* Polka Dots Pattern */}
//           <PolkaDots />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
// import polkaDotImage from '../assets/png/dot.png'; // Adjust path if needed

const PolkaDots = () => {
  return (
    <div className="absolute right-5 top-0 w-32 h-32 mt-24">
      <img
        src={polkaDotImage}
        alt="Polka dots"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide text-center mb-16">
          WHAT ARE 3DEES? & WHAT PROBLEM CAN THEY SOLVE?
        </h2>

        {/* Grid Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT: WHAT ARE 3DEES */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-pixel mb-4">WHAT ARE 3DEES?</h3>
            {[
              "3DEES can be launched on a bonding curve with any amount of ORDI.",
              "Any launch will have to have a 3D file associated with it.",
              "The token supply will be 100 for each launch.",
              "Once the I.P reaches 25 ORDI the LP is graduated to main DEX.",
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="text-red-500 text-xl font-bold mt-1">▷</div>
                <p className="text-white text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: WHAT PROBLEM */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-pixel mb-4">WHAT PROBLEM CAN THEY SOLVE?</h3>
            {[
              "In-game rewards for web3 games come from token dilution. 3DEES solve this by creating a unique incentive mechanism for games.",
              "Upon any 3DEES LP graduation 1 ORDI as well as 0.5% of the graduated 3DEES supply is reserved for in-game rewards.",
              "The game is a free-for-all PVP lightweight browser game released by us.",
              "Game will be played once a day and the winners will get all the game rewards from our platform.",
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="text-red-500 text-xl font-bold mt-1">▷</div>
                <p className="text-white text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-red-600" />

          {/* Optional Dots */}
          {/* <PolkaDots /> */}
        </div>
      </div>
    </section>
  );
};

export default About;

