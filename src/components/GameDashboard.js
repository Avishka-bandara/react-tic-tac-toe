import React from 'react';
import { Link } from 'react-router-dom';

const GameDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Game Dashboard</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
          {/* Start Game Block */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Start a New Game</h2>
            <Link to="/game">
              <button className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Start Game
              </button>
            </Link>
          </div>

          {/* View Scores Block */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">View Scores</h2>
            <ul>
              <li className="mb-2">
                <span className="text-gray-600">Player 1</span>
                <span className="text-green-500 font-bold ml-2">Score: 100</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-600">Player 2</span>
                <span className="text-green-500 font-bold ml-2">Score: 85</span>
              </li>
              {/* Add more scores as needed */}
            </ul>
          </div>

          {/* Chat Block */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Chat</h2>
            {/* Add your chat component here */}
          </div>

          {/* Game History Block */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Game History</h2>
            {/* Add your game history component here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
