import React, { useState } from "react";
import loginImage from '../Images/Login.jpg'

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "Farmer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("User registered successfully!");
  };

  return (
    <div className="flex max-w-4xl mx-auto my-20 bg-white rounded-lg shadow-lg">
      {/* Left Side */}
      <div
        className="w-1/2 p-8 bg-cover bg-center rounded-l-lg"
        style={{ backgroundImage: `url(${loginImage})`, objectFit: 'cover' }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">Join Us!</h1>
        <p className="text-white font-bold text-lg">
          Start your journey with Harvest Hope. Create an account and explore the culinary world!
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
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
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-red-500 text-white rounded-full font-bold hover:bg-red-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
