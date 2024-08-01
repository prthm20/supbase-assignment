// pages/signin.js
import React from 'react';
import Link from 'next/link';
import { Avatar } from '@/components/ui/avatar'; // Import ShadCN Avatar component (assuming it exists)

const SignIn = () => {
  return (
      <div className="flex min-h-screen">
      
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-8">
        <div className="w-full max-w-sm">
        
          <h1 className="text-3xl font-bold mb-4 text-center">Welcome back</h1>
          <p className="text-center mb-8">Sign in to your account</p>

          <div className="space-y-4">
            <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800">
              Continue with GitHub
            </button>
            <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800">
              Continue with SSO
            </button>
          </div>

          <div className="my-8 text-center">or</div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <Link href="">
                Forgot Password?
              </Link>
              <button type="submit" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800">
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Don't have an account?{' '}
              <Link href="">
                sign Up Now
              </Link>
            </p>
            <p className="text-sm text-gray-600 mt-2">By continuing, you agree to our{' '}
              <a href="" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
              <a href="" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-gray-900 text-white flex flex-col justify-between p-8">
        <div className="flex justify-end">
          <a href="" className="text-gray-400 hover:underline">Documentation</a>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl mb-4">Where has @supabase been all my life? 😍</p>
            <div className="flex items-center justify-center">
            <img
        src={'https://randomuser.me/api/portraits/men/3.jpg'}
        alt={''}
        className="w-16 h-16 rounded-full mb-4 object-cover"
      />
              <p className="text-sm ml-4">@Elsolo244</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
