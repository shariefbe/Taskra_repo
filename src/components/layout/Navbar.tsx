
import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-700">Taskra</h1>
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
