import React from "react";
import { Link } from "react-router-dom";

const QuizResults = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">lrnr</h1>
        <div className="space-x-4">
          <Link to="/account" className="hover:underline">
            Account
          </Link>
          <Link to="/quiz-generator" className="hover:underline">
            Quiz Generation
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl font-bold text-green-700">lrnr</h2>
        <p className="text-lg mt-4">
          Questions Right:{" "}
          <span className="font-mono bg-gray-200 p-1 rounded">0111</span>
        </p>
        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          TRY ANOTHER QUIZ
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-6 text-center">
        <p className="mb-4">
          Embrace the power of our app and unlock the secrets of the universe,
          one quiz at a time. As I always say, 'Yesterday is history, tomorrow
          is a mystery, but today is a gift. That is why it is called the
          present.'
        </p>
        <div className="text-left">
          <h3 className="font-bold">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quiz-generator" className="hover:underline">
                Quiz Generator
              </Link>
            </li>
            <li>
              <Link to="/account" className="hover:underline">
                Account
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-6">
          Made by{" "}
          <a href="https://materializecss.com/" className="underline">
            Materialize
          </a>
        </p>
      </footer>
    </div>
  );
};

export default QuizResults;
