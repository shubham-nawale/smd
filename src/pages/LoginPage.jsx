import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin-dashboard');
    }catch (err) {
        console.error("Login error:", err);
        if (err.code === 'auth/invalid-email') setError('अवैध ईमेल पत्ता');
        else if (err.code === 'auth/user-not-found') setError('वापरकर्ता आढळला नाही');
        else if (err.code === 'auth/wrong-password') setError('चुकीचा पासवर्ड');
        else setError('Login Failed. कृपया तपासा');
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-center font-bold text-pink-600">Admin Login</h2>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <input
          type="email"
          className="w-full border p-2 mb-4"
          placeholder="ईमेल"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full border p-2 mb-4"
          placeholder="पासवर्ड"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          लॉगिन करा
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
