// Storage.jsx

import React from 'react';
import { storageItems } from '../storageItems.js';

const Storage = () => {
  // Function to handle selling the items
  const handleSell = (itemId) => {
    const item = storageItems.find(i => i.id === itemId);
    console.log(`Selling ${item.sellUnit} units of ${item.name} at ${item.sellUnitPrice} per unit.`);
    // Add more functionality here, like updating the inventory or sending data to a server
  };

  return (
    <div className="p-6 bg-white-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white-800 mb-8">Storage Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {storageItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-white-700">{item.name}</h2>
            <p className="text-md text-white-600 mb-2"><strong>Quantity:</strong> {item.quantity}</p>
            <p className="text-md text-white-600 mb-2"><strong>Location:</strong> {item.location}</p>
            <p className="text-md text-white-600 mb-2"><strong>Last Checked:</strong> {item.lastChecked}</p>
            <p className={`text-md font-semibold mb-2 ${item.status === 'In Stock' ? 'text-white-500' : 'text-red-500'}`}>
              <strong>Status:</strong> {item.status}
            </p>
            <p className="text-md text-white-700 mb-4"><strong>Description:</strong> {item.description}</p>

            {item.status === 'In Stock' && (
              <div className="mt-4">
                {/* Input field for Unit */}
                <div className="mb-4">
                  <label className="block text-white-700 mb-2">Units to Sell:</label>
                  <input
                    type="number"
                    placeholder="Enter unit quantity"
                    onChange={(e) => item.sellUnit = e.target.value}
                    className="w-full p-2 border border-white-300 rounded-lg"
                  />
                </div>

                {/* Input field for Unit Price */}
                <div className="mb-4">
                  <label className="block text-white-700 mb-2">Unit Price:</label>
                  <input
                    type="number"
                    placeholder="Enter unit price"
                    onChange={(e) => item.sellUnitPrice = e.target.value}
                    className="w-full p-2 border border-white-300 rounded-lg"
                  />
                </div>

                {/* Sell Button */}
                <button
                  onClick={() => handleSell(item.id)}
                  className="w-full py-2 px-4 bg-white-500 text-white rounded hover:bg-white-600"
                >
                  Sell
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storage;