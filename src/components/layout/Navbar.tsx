
import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { Bell, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <h1 className="text-xl font-bold text-blue-700">Taskra</h1>
          </Link>
          
          {/* Navigation Menu - Force Visible */}
          <nav className="flex items-center space-x-1">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors border-0 bg-transparent focus:outline-none">
                Features
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-64 z-[9999] bg-white shadow-xl border border-gray-200 rounded-md mt-1"
                sideOffset={4}
                align="start"
              >
                <DropdownMenuItem asChild className="focus:bg-gray-50">
                  <a href="/#features" className="flex flex-col items-start p-4 w-full">
                    <div className="font-medium text-gray-900">Smart Reminders</div>
                    <div className="text-sm text-gray-500 mt-1">Get notified before deadlines with customizable alert timings.</div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-gray-50">
                  <a href="/#features" className="flex flex-col items-start p-4 w-full">
                    <div className="font-medium text-gray-900">Team Collaboration</div>
                    <div className="text-sm text-gray-500 mt-1">Invite team members and assign compliance tasks.</div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-gray-50">
                  <a href="/#features" className="flex flex-col items-start p-4 w-full">
                    <div className="font-medium text-gray-900">Document Storage</div>
                    <div className="text-sm text-gray-500 mt-1">Upload and store compliance documents securely.</div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-gray-50">
                  <a href="/#features" className="flex flex-col items-start p-4 w-full">
                    <div className="font-medium text-gray-900">All Features</div>
                    <div className="text-sm text-gray-500 mt-1">Explore all the features Taskra has to offer.</div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Pricing Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors border-0 bg-transparent focus:outline-none">
                Pricing
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-64 z-[9999] bg-white shadow-xl border border-gray-200 rounded-md mt-1"
                sideOffset={4}
                align="start"
              >
                <DropdownMenuItem asChild className="focus:bg-gray-50">
                  <a href="/#pricing" className="flex flex-col items-start p-4 w-full">
                    <div className="font-medium text-gray-900">Free</div>
                    <div className="text-sm text-gray-500 mt-1">Perfect for individuals just getting started.</div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-gray-50">
                  <a href="/#pricing" className="flex flex-col items-start p-4 w-full">
                    <div className="font-medium text-gray-900">Pro</div>
                    <div className="text-sm text-gray-500 mt-1">For small businesses and teams.</div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-gray-50">
                  <a href="/#pricing" className="flex flex-col items-start p-4 w-full">
                    <div className="font-medium text-gray-900">Consultant</div>
                    <div className="text-sm text-gray-500 mt-1">For professionals managing multiple clients.</div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
  );
};

export default Navbar;
