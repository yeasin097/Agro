import React, { useState } from 'react';
import Product from "./Product";
import Storage from './Storage';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('allbids'); // Manage active tab state

  const renderContent = () => {
    switch (activeTab) {
      case 'allbids':
        return <Product/>;
      case 'mybids':
        return <Product/>;
      case 'storage':
        return <Storage/>;
      default:
        return <Product/>;
    }
  };

  return (
    <div>
      <nav className="bg-green-100 p-4">
        <div className="container marg flex justify-center items-center border-b-2 border-green-500">
          <button
            onClick={() => setActiveTab('allbids')}
            className={`m-auto py-2 px-4 rounded-t text-xl font-bold ${
              activeTab === 'allbids'
                ? 'bg-green-500 text-white'
                : 'bg-green-100 text-green-500'
            }`}
          >
            All Bids
          </button>
          <button
            onClick={() => setActiveTab('mybids')}
            className={`m-auto py-2 px-4 rounded-t text-xl font-bold ${
              activeTab === 'mybids'
                ? 'bg-green-500 text-white'
                : 'bg-green-100 text-green-500'
            }`}
          >
            My Bids
          </button>
          <button
            onClick={() => setActiveTab('storage')}
            className={`m-auto py-2 px-4 rounded-t text-xl font-bold ${
              activeTab === 'storage'
                ? 'bg-green-500 text-white'
                : 'bg-green-100 text-green-500'
            }`}
          >
            Inventory
          </button>
        </div>
      </nav>
      <div className="p-4">
        {renderContent()} {/* Render the appropriate component based on the active tab */}
      </div>
    </div>
  );
};

export default Navbar;
