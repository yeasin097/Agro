import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from '../Users.js'; // Adjust the path according to your file structure

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userType: "Farmer", // Default user type
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find user from the imported users array
    const userExists = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password &&
        user.usertype === formData.userType.toLowerCase()
    );

    if (userExists) {
      // Set loggedInUser in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(userExists));
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <label className="block mb-4">
          Username
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-lg"
          />
        </label>

        <label className="block mb-4">
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-lg"
          />
        </label>

        <label className="block mb-4">
          User Type
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-lg"
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
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
