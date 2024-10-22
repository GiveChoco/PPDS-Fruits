import React from 'react';
import DisplayData from '../components/api-service'; 
import { useNavigate } from 'react-router-dom'; // For navigation

export default function GrapesFoods() {

  const navigate = useNavigate(); // Use useNavigate hook

  const handleNavigation = () => {
    navigate("/"); // Navigate to the homepage ("/")
  };


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
        <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm"
            onClick={handleNavigation} // Attach the click handler
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Grapes Foods page
          </h1>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <DisplayData api_url="https://trackapi.nutritionix.com/v2/search/instant/?query=grapes" />
          </div>
        </div>
      </div>
    </div>
  )
}