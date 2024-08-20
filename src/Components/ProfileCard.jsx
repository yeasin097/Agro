import React from 'react';
import { users } from '../UserData';

const ProfileCard = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
  const userTypeData = loggedInUser.usertype === 'wholesaler' ? users.wholesalers : users.retailers;
  const user = userTypeData.find(user => user.username === loggedInUser.username);

  if (!user) return <div>User not found</div>;

  return (
    <div className="flex justify-between bg-green-100 w-full p-6 rounded-lg shadow-lg">
      {/* Left Section - Profile Details */}
      <div className="w-1/3 bg-green-50 p-4 rounded-lg shadow-inner">
        <h2 className="text-green-800 font-bold text-lg mb-4">Profile Details</h2>
        <p className="text-green-700 text-sm"><strong>Username:</strong> {user.username}</p>
        <p className="text-green-700 text-sm"><strong>Fullname:</strong> {user.fullname}</p>
        <p className="text-green-700 text-sm"><strong>Mobile No:</strong> {user.mobileNo}</p>
        <p className="text-green-700 text-sm"><strong>Shop Address:</strong> {user.shopAddress}</p>
        <p className="text-green-700 text-sm"><strong>Certificate No:</strong> {user.certificateNo}</p>
      </div>

      {/* Mid Section - Storage Details */}
      <div className="w-1/3 bg-green-50 p-4 mx-4 rounded-lg shadow-inner">
        <h2 className="text-green-800 font-bold text-lg mb-4">Storage Details</h2>
        <p className="text-green-700 text-sm"><strong>Total Bought Items (in tons):</strong> {user.storage.totalBoughtItems}</p>
        <p className="text-green-700 text-sm"><strong>Total Sold Items (in tons):</strong> {user.storage.totalSoldItems}</p>
        <p className="text-green-700 text-sm"><strong>Total Reserved Items (in tons):</strong> {user.storage.totalReservedItems}</p>
        <p className="text-green-700 text-sm"><strong>Storage Free (in tons):</strong> {user.storage.storageFree}</p>
        <p className="text-green-700 text-sm"><strong>Last Transportation:</strong> {user.storage.lastTransportation}</p>
      </div>

      {/* Right Section - Financial Details */}
      <div className="w-1/3 bg-green-50 p-4 rounded-lg shadow-inner">
        <h2 className="text-green-800 font-bold text-lg mb-4">Financial Details</h2>
        <p className="text-green-700 text-sm"><strong>Total TK Invest:</strong> {user.financial.totalInvest}</p>
        <p className="text-green-700 text-sm"><strong>Total TK Reload:</strong> {user.financial.totalReload}</p>
        <p className="text-green-700 text-sm"><strong>Total Benefit:</strong> {user.financial.totalBenefit}</p>
        <p className="text-green-700 text-sm"><strong>Last 1 Month Benefit:</strong> {user.financial.lastMonthBenefit}</p>
        <p className="text-green-700 text-sm"><strong>Last 1 Year Benefit:</strong> {user.financial.lastYearBenefit}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
