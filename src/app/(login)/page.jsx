"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { login } from "@/actions/auth";

export default function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleLoginDataSubmit = async (e) => {
    e.preventDefault()
    if (!username || !password)
      return;
    const redirectUrl = await login(username, password);
    if (redirectUrl) {
      router.push(redirectUrl);
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-800">
        <div className="bg-white p-8 rounded-xl shadow-lg md:w-96 w-80">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Log In
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleLoginDataSubmit}>
            <div>
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white py-2 rounded-lg mt-4 hover:bg-gray-700 transition-colors"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-gray-800 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
