// src/pages/DashboardHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

const DashboardHome = () => {
  const admin = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/admin-login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-4 text-center">
        👋 स्वागत आहे {admin?.email || 'Admin'}!
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-4">
        <Link
          to="/create-bill"
          className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl text-center text-lg shadow"
        >
          ➕ नवीन बिल तयार करा
        </Link>

        <Link
          to="/all-bills"
          className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl text-center text-lg shadow"
        >
          📋 सर्व बिले पहा
        </Link>

        <button
          onClick={handleLogout}
          className="col-span-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl text-lg shadow"
        >
          🚪 लॉगआउट
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;
