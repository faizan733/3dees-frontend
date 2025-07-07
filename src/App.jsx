// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Characters from './components/Characters';
// import MoreReasons from './components/MoreReasons';
// import VideoSection from './components/VideoSection';
// import Rewards from './components/Rewards';
// import Roadmap from './components/Roadmap';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />
//       <Hero />
//       <About />
//       <Characters />
//       <MoreReasons />
//       <VideoSection />
//       <Rewards />
//       <Roadmap />
//       <FAQ />
//       <Footer />
//     </div>
//   );
// }

// export default App;








import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Characters from './components/Characters';
import FeatureSection from './components/FeatureSection';

import MoreReasons from './components/MoreReasons';
import VideoSection from './components/VideoSection';
import Rewards from './components/Rewards';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import DashboardLayout from './components/Dashboard/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black text-white">
              <Header />
              <Hero />
              <About />
              <Characters />
                <FeatureSection />  
              <MoreReasons />
              <VideoSection />
              <Rewards />
              <Roadmap />
              <FAQ />
              <Footer />
            </div>
          }
        />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
