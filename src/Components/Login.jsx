import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { users } from '../Users.js'; // Adjust the path according to your file structure
import loginImage from '../Images/Login.jpg'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userType: 'Farmer', // Default user type
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password &&
        user.usertype === formData.userType.toLowerCase()
    );

    if (userExists) {
      localStorage.setItem('loggedInUser', JSON.stringify(userExists));
      navigate('/home');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex max-w-4xl mx-auto my-20 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Left Side */}
      <div
        className="w-1/2 p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginImage})`, objectFit: 'cover' }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">Welcome Back!</h1>
        <p className="text-white text-lg">
          Indulge your taste buds at Harvest Hope, where every flavor tells a delicious story.
          Welcome to a culinary journey like no other!
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Harvest Hope</h2>
        <h3 className="text-xl mb-8">Login to Your Account</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 mb-4 text-center">
              {error}
            </div>
          )}

          <input
            type="text"
            name="username"
            placeholder="User name"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <label className="block mb-4">
            User Type
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Farmer">Farmer</option>
              <option value="Wholesaler">Wholesaler</option>
              <option value="Retailer">Retailer</option>
              <option value="Consumer">Consumer</option>
              <option value="Inspector">Inspector</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
          <button
            type="submit"
            className="w-full py-4 bg-red-500 text-white rounded-full font-bold hover:bg-red-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-red-500 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
