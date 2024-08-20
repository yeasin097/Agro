import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { products } from '../Data.js'; // Import the products array

const Product = ({ product }) => {
  const navigate = useNavigate(); 

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser) {
    navigate('/login');
    return null;
  }


  const handleStartBidding = () => {
    navigate(`/bid-product/${product.id}`); // Navigate to the BidProduct page with the product ID
  };

  return (
    <div className="m-1 max-w-sm">
      <div className="rounded-lg border bg-green-50 px-4 pt-4 pb-6 shadow-lg">
        <div className="relative mx-auto w-full h-48">
          <img
            className="mx-auto h-full w-full object-cover rounded-lg border-2 border-green-500"
            src={product.image}
            alt={product.name}
            style={{ height: '180px', width: '280px' }}
          />
        </div>
        <h1 className="my-1 text-center text-lg font-bold leading-6 text-green-800">{product.name}</h1>
        <h3 className="text-center text-md font-semibold leading-5 text-green-600">{product.address}</h3>
        <p className="text-center text-xs leading-5 text-green-500 hover:text-green-700">
          {product.description}
        </p>
        <ul className="mt-2 divide-y rounded bg-green-100 py-1 px-2 text-green-700 shadow-sm hover:text-green-900 hover:shadow-md">
          <li className="flex items-center py-2 text-xs">
            <span>Status</span>
            <span className="ml-auto">
              <span className={`rounded-full py-1 px-2 text-xs font-medium ${product.isBidsRunning ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                {product.isBidsRunning ? 'Bids Running' : 'Bids Closed'}
              </span>
            </span>
          </li>
          <li className="flex items-center py-2 text-xs">
            <span>Current Bid:</span>
            <span className="ml-auto">{product.currentBid}</span>
          </li>
          <li className="flex items-center py-2 text-xs">
            <span>Base Price:</span>
            <span className="ml-auto">{product.basePrice}</span>
          </li>
          <li className="flex items-center py-2 text-xs">
            <span>Total Unit:</span>
            <span className="ml-auto">{product.totalUnit}</span>
          </li>
          <li className="flex items-center py-2 text-xs">
            <span>End Time:</span>
            <span className="ml-auto">{product.endTime}</span>
          </li>
        </ul>
        <div className="mt-4">
          <button
            className="w-full py-2 px-4 text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleStartBidding} // Trigger the navigation function
          >
            Start Bidding
          </button>
        </div>
      </div>
    </div>
  );
}

const ProductList = () => {
  return (
    <div className="flex flex-wrap justify-center bg-green-100 py-10">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
