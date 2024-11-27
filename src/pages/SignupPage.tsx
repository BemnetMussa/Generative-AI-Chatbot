import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Make sure email and password are not empty
        if (!name || !email || !password) {
            setError('Email and password are required');
            return;
        }

        const signupData = { name, email, password };

        try {
            const response = await fetch('http://localhost:5000/api/users/signup', 
                { method: 'POST', headers: { 'Content-Type': 'application/json',}, body: JSON.stringify(signupData), });

            const data = await response.json();

            if (response.ok) {
                // Redirect to login page if signup is successful
                navigate('/login');
            } else {
                // Show the error message from the server
                setError(data.message || 'Something went wrong');
            }
            
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-blue-600 p-8 flex items-center justify-center">
                <form onSubmit={registerUser} className="w-full max-w-md space-y-6">
                <div>
                    <h2 className="text-3xl font-bold text-white">Sign up</h2>
                    <p className="mt-2 text-sm text-white/80">
                    Enter your email and password to create an account
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

                <div className="space-y-4">
                    <div>
                        <label htmlFor="Name" className="block text-sm font-medium text-white/80 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="mail@example.com"
                            className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/40"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Min. 8 characters"
                            className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-white/40"
                        />
                    </div>

                    {/* using catches will be implemented after the project is almost done */ }
                    {/* <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="keepLoggedIn"
                            className="w-4 h-4 rounded border-white/20 bg-white/10 text-blue-600 focus:ring-0"
                        />
                        <label htmlFor="keepLoggedIn" className="ml-2 text-sm text-white/80">
                            Keep me logged in
                        </label>
                    </div> */}
    "
                    <button type="submit" className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-900 transition-colors">
                        Sign up
                    </button>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <p className="text-sm text-white/80 text-center">
                    Already have an account{' '}
                    <Link to="/login" className="text-white hover:underline">
                    Login
                    </Link>
                </p>
                </form>
            </div>

            <div className="w-1/2 bg-gray-900 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-white">
                Generative AI<br />Chatbot
                </h1>
            </div>
        </div>
    );
    };

    export default SignupPage;
