import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Data.js'; // Import the products array

const BidProduct = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const [bidAmount, setBidAmount] = useState('');
  const [bids, setBids] = useState([]);

  useEffect(() => {
    // Load existing bids from local storage
    const storedBids = JSON.parse(localStorage.getItem(`bids_${id}`)) || [];
    setBids(storedBids);
  }, [id]);

  const handleBidSubmit = () => {
    const newBid = {
      username: loggedInUser.username,
      bidAmount,
      timestamp: new Date().toLocaleString()
    };

    // Add new bid at the top of the list
    const updatedBids = [newBid, ...bids];
    setBids(updatedBids);

    // Save the updated bids to local storage
    localStorage.setItem(`bids_${id}`, JSON.stringify(updatedBids));

    // Clear the input field
    setBidAmount('');
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6 bg-green-50 rounded-lg shadow-lg">
      <div className="flex">
        {/* Product Image */}
        <div className="w-1/3 p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-2/3 p-4">
          <h1 className="text-2xl font-bold text-green-800">{product.name}</h1>
          <p className="text-lg text-green-600 mb-4">{product.address}</p>
          <p className="text-md text-green-700"><strong>Description:</strong> {product.description}</p>
          <p className="text-md text-green-700"><strong>Current Bid:</strong> {product.currentBid}</p>
          <p className="text-md text-green-700"><strong>Base Price:</strong> {product.basePrice}</p>
          <p className="text-md text-green-700"><strong>Total Unit:</strong> {product.totalUnit}</p>
          <p className="text-md text-green-700"><strong>End Time:</strong> {product.endTime}</p>

          {/* Input for Bid Amount */}
          <div className="mt-6">
            <input
              type="number"
              placeholder="Enter your bid"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="w-full p-2 border border-green-300 rounded-lg"
            />
            <button
              onClick={handleBidSubmit}
              className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit Bid
            </button>
          </div>
        </div>
      </div>

      {/* Bids Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-green-800 mb-4">Bids</h2>
        <div className="border-t border-green-300">
          <div className="flex justify-between py-2 border-b border-green-200">
            <span className="font-semibold text-green-700">Bidder Name</span>
            <span className="font-semibold text-green-700">Bid Price</span>
            <span className="font-semibold text-green-700">Timestamp</span>
          </div>
          {bids.map((bid, index) => (
            <div key={index} className="flex justify-between py-2">
              <span className="text-green-700">{bid.username}</span>
              <span className="text-green-700">{bid.bidAmount}</span>
              <span className="text-green-700">{bid.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BidProduct;
