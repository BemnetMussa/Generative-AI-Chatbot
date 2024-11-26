import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-600 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-white">Log in</h2>
            <p className="mt-2 text-sm text-white/80">
              Enter your email and password to log in
            </p>
          </div>

          <button className="w-full bg-white text-gray-600 py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <img 
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Log in with Google
          </button>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-white/60 text-sm">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="mail@example.com"
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/40"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Min. 8 characters"
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/40"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="keepLoggedIn"
                className="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-600 focus:ring-0"
              />
              <label htmlFor="keepLoggedIn" className="ml-2 text-sm text-white/80">
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-white/80 text-center">
            Not registered yet?{' '}
            <Link to="/signup" className="text-white hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>



      <div className="w-1/2 bg-gray-900 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          Generative AI<br />Chatbot
        </h1>
      </div>
    </div>
  )
}

export default LoginPage;