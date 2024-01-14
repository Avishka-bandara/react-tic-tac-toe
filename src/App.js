import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GameDashboard from './components/GameDashboard';
import GamePage from './components/GamePage';

const App = () => {
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleToggle = () => {
    setLogin(!isLogin);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful. Token:', data.token);
        setRedirectToDashboard(true);
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Signup successful');
        // You can also automatically log in the user after signup if needed
        handleLogin();
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  // useEffect to reset the redirection state when the component mounts
  useEffect(() => {
    setRedirectToDashboard(false);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 space-y-8 rounded shadow-md">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2 className="text-center text-4xl font-extrabold text-indigo-600">
                    {isLogin ? 'Log in to your account' : 'Create a new account'}
                  </h2>
                  {isLogin ? (
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="username"
                          required
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your username"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={handleLogin}
                          className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="username"
                          required
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your username"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={handleSignup}
                          className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  )}
                  <button
                    type="button"
                    onClick={handleToggle}
                    className="w-full flex mt-5 justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    {isLogin ? 'Create a new account' : 'Log in to your account'}
                  </button>
                </div>
              }
            />
            <Route path="/dashboard" element={<GameDashboard username={username} />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
            {redirectToDashboard && <Navigate to="/dashboard" />}
        </div>
      </div>
    </Router>
  );
};

export default App;
