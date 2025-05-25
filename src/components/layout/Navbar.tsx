
import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { Bell, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <h1 className="text-xl font-bold text-blue-700">Taskra</h1>
            </Link>
            
            {/* Navigation Menu - Always Visible */}
            <nav className="flex items-center space-x-1">
              {/* Features Dropdown */}
              <div className="relative">
                <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                  Features
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              {/* Pricing Dropdown */}
              <div className="relative">
                <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                  Pricing
                  <ChevronDown className="h-4 w-4" />
                </button>
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

      {/* TEMPORARY: Static dropdown content for testing - placed in center of page */}
      <div className="flex justify-center items-start pt-20 space-x-8">
        {/* Features Dropdown Content - Static for Testing */}
        <div className="w-64 bg-red-500 border-4 border-red-700 rounded-md p-4 static block">
          <h3 className="font-bold text-white mb-4">FEATURES DROPDOWN (TESTING)</h3>
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

        {/* Pricing Dropdown Content - Static for Testing */}
        <div className="w-64 bg-red-500 border-4 border-red-700 rounded-md p-4 static block">
          <h3 className="font-bold text-white mb-4">PRICING DROPDOWN (TESTING)</h3>
          <div className="space-y-2">
            <a href="/#pricing" className="flex flex-col items-start p-4 w-full hover:bg-red-400 rounded-md text-white">
              <div className="font-medium">Free</div>
              <div className="text-sm mt-1">Perfect for individuals just getting started.</div>
            </a>
            <a href="/#pricing" className="flex flex-col items-start p-4 w-full hover:bg-red-400 rounded-md text-white">
              <div className="font-medium">Pro</div>
              <div className="text-sm mt-1">For small businesses and teams.</div>
            </a>
            <a href="/#pricing" className="flex flex-col items-start p-4 w-full hover:bg-red-400 rounded-md text-white">
              <div className="font-medium">Consultant</div>
              <div className="text-sm mt-1">For professionals managing multiple clients.</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
