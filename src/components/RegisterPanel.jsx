"use client"

import React from "react"
import Link from "next/link"
import { handleRegister } from "@/function/StoredUser"
import { useRouter } from "next/navigation"

const RegisterPanel = () => {
    const [regUser , setRegUser] = React.useState('')
    const [regPass , setRegPass] = React.useState('')
    const router = useRouter()

    const handleRegSubmit = async (e) => {
        e.preventDefault();
        if (!regUser || !regPass) {
            return alert("Please fill in all fields")
        }
        const redirectUrl = await handleRegister(regUser , regPass)
        console.log('Redirect URL:', redirectUrl);
        if (redirectUrl) {
          router.push(redirectUrl)
        }
    }
  return (
    <div>
        <div className="bg-white p-8 rounded-xl shadow-lg md:w-96 w-80">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Register
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleRegSubmit}>
            <div>
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                onChange={(e) => setRegUser(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setRegPass(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white py-2 rounded-lg mt-4 hover:bg-gray-700 transition-colors"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/" className="text-gray-800 font-semibold">
              Login
            </Link>
          </p>
        </div>
    </div>
  )
}
export default RegisterPanel