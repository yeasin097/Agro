import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userType: "Farmer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("User registered successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <label className="block mb-2">
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

        <label className="block mb-2">
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
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
