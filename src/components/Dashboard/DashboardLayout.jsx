import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import CharacterCardList from './CharacterCardList';

const DashboardLayout = () => {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Header />
        <CharacterCardList />
      </div>
    </div>
  );
};

export default DashboardLayout;
