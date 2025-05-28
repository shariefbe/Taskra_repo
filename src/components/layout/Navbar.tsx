
import React, { useState } from 'react';
import { UserButton } from '@clerk/clerk-react';
import { Bell, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = useState(true); // Always open for testing
  const [pricingOpen, setPricingOpen] = useState(true); // Always open for testing

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 relative">
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <h1 className="text-xl font-bold text-blue-700">Taskra</h1>
            </Link>
            
            {/* Navigation Menu - Always Visible */}
            <nav className="flex items-center space-x-1">
              {/* Features Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  Features
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {/* Features Dropdown Content - Fixed Position */}
                <div className="fixed top-20 left-4 w-64 bg-red-500 border-4 border-red-700 rounded-md p-4 z-[9999] block shadow-2xl">
                  <h3 className="font-bold text-white mb-4">FEATURES DROPDOWN (TESTING - FIXED POSITION)</h3>
                  <div className="space-y-2">
                    <a href="/#features" className="flex flex-col items-start p-4 w-full hover:bg-red-400 rounded-md text-white">
                      <div className="font-medium">Smart Reminders</div>
                      <div className="text-sm mt-1">Get notified before deadlines with customizable alert timings.</div>
                    </a>
                    <a href="/#features" className="flex flex-col items-start p-4 w-full hover:bg-red-400 rounded-md text-white">
                      <div className="font-medium">Team Collaboration</div>
                      <div className="text-sm mt-1">Invite team members and assign compliance tasks.</div>
                    </a>
                    <a href="/#features" className="flex flex-col items-start p-4 w-full hover:bg-red-400 rounded-md text-white">
                      <div className="font-medium">Document Storage</div>
                      <div className="text-sm mt-1">Upload and store compliance documents securely.</div>
                    </a>
                    <a href="/#features" className="flex flex-col items-start p-4 w-full hover:bg-red-400 rounded-md text-white">
                      <div className="font-medium">All Features</div>
                      <div className="text-sm mt-1">Explore all the features Taskra has to offer.</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setPricingOpen(!pricingOpen)}
                >
                  Pricing
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {/* Pricing Dropdown Content - Fixed Position */}
                <div className="fixed top-20 right-4 w-64 bg-blue-500 border-4 border-blue-700 rounded-md p-4 z-[9999] block shadow-2xl">
                  <h3 className="font-bold text-white mb-4">PRICING DROPDOWN (TESTING - FIXED POSITION)</h3>
                  <div className="space-y-2">
                    <a href="/#pricing" className="flex flex-col items-start p-4 w-full hover:bg-blue-400 rounded-md text-white">
                      <div className="font-medium">Free</div>
                      <div className="text-sm mt-1">Perfect for individuals just getting started.</div>
                    </a>
                    <a href="/#pricing" className="flex flex-col items-start p-4 w-full hover:bg-blue-400 rounded-md text-white">
                      <div className="font-medium">Pro</div>
                      <div className="text-sm mt-1">For small businesses and teams.</div>
                    </a>
                    <a href="/#pricing" className="flex flex-col items-start p-4 w-full hover:bg-blue-400 rounded-md text-white">
                      <div className="font-medium">Consultant</div>
                      <div className="text-sm mt-1">For professionals managing multiple clients.</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Dashboard Link */}
              <Link 
                to="/dashboard" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                Dashboard
              </Link>

              {/* Resources Link */}
              <Link 
                to="#" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                Resources
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <UserButton />
          </div>
        </div>
      </header>

      {/* Large visual confirmation that dropdowns are working */}
      <div className="flex justify-center items-center pt-10">
        <div className="text-center p-8 bg-green-100 border-2 border-green-500 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">DROPDOWN TEST STATUS</h2>
          <p className="text-green-700">
            Look for the RED dropdown (Features) on the left and BLUE dropdown (Pricing) on the right.
            <br />
            They should be visible with fixed positioning at the top of the page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
