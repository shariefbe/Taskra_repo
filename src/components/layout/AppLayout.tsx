
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

const AppLayout = () => {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-50" style={{ overflow: 'visible' }}>
          <Navbar />
          <div className="flex" style={{ overflow: 'visible' }}>
            <Sidebar />
            <main className="flex-1 p-6" style={{ overflow: 'visible' }}>
              <Outlet />
            </main>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default AppLayout;
