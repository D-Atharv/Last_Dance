"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="relative p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-200">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Enter the secret key to unlock your world.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 bg-black/20 border border-white/30 rounded-lg text-gray-100 placeholder-gray-400 focus:ring focus:ring-gray-400/30 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-400 text-white py-3 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        </form>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-gray-300 text-2xl">🔑</span>
          </div>
        </div>
      </div>
    </div>
  );
}
