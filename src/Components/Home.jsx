import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import Product from "./Product";
import Navbar from './Navbar';

function Home() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    // Return null or a loading state while redirecting
    return null;
  }

  return (
    
    <div>
      <ProfileCard/>
      <Navbar/>
      {/* <Product/> */}
    </div>
  );
}

export default Home;
