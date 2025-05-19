
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-blue-700">CompliMate</h1>
            <div className="flex items-center gap-4">
              <SignedIn>
                <Link to="/dashboard">
                  <Button variant="outline">Go to Dashboard</Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign up</Button>
                </Link>
              </SignedOut>
            </div>
          </div>
        </div>
      </header>
      
      <main>
        {/* Redesigned Hero section with floating elements */}
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute animate-pulse opacity-30 blur-3xl bg-blue-300 rounded-full h-56 w-56 -left-20 -top-20"></div>
            <div className="absolute animate-pulse delay-700 opacity-20 blur-3xl bg-indigo-400 rounded-full h-72 w-72 right-10 top-40"></div>
            <div className="absolute animate-pulse delay-1000 opacity-20 blur-3xl bg-blue-200 rounded-full h-64 w-64 left-1/3 bottom-0"></div>
            <div className="absolute animate-pulse delay-500 opacity-30 blur-3xl bg-cyan-200 rounded-full h-40 w-40 left-1/4 top-20"></div>
            <div className="absolute animate-pulse delay-300 opacity-30 blur-3xl bg-indigo-200 rounded-full h-24 w-24 right-1/4 top-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 animate-bounce">
                    Never miss deadlines again
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="block">Stay ahead with</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">smart compliance</span>
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl text-gray-600">
                  CompliMate helps business owners, freelancers, and small teams manage their compliance-related deadlines such as tax filings, regulatory submissions, license renewals, website expirations, and more.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button size="lg" className="group w-full sm:w-auto relative overflow-hidden transition-all">
                      <span className="relative z-10">Get started for free</span>
                      <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Log in
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-blue-${i*100} flex items-center justify-center text-xs text-white font-medium`}>
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Trusted by <span className="font-semibold">thousands</span> of businesses worldwide
                  </p>
                </div>
              </div>
              
              <div className="relative order-first md:order-last">
                <div className="relative z-10 bg-white rounded-lg shadow-xl p-2 border border-gray-100 transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                    alt="Calendar and planning"
                    className="rounded w-full h-auto object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-10 -left-10 z-0">
                  <div className="w-20 h-20 bg-blue-500 rounded-lg animate-float opacity-20"></div>
                </div>
                
                <div className="absolute -top-5 -right-5 z-0">
                  <div className="w-14 h-14 bg-indigo-500 rounded-full animate-float-delayed opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Stay compliant, save time
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                CompliMate helps you manage all your compliance deadlines in one place.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-gray-900">Smart Reminders</h3>
                  <p className="mt-2 text-gray-500">Get notified before deadlines with customizable alert timings.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-gray-900">Team Collaboration</h3>
                  <p className="mt-2 text-gray-500">Invite team members and assign compliance tasks.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-gray-900">Document Storage</h3>
                  <p className="mt-2 text-gray-500">Upload and store compliance documents securely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                Simple, transparent pricing
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Choose the plan that's right for your business.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {/* Free Plan */}
                <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                  <div className="p-6">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Free</h2>
                    <p className="mt-4 text-sm text-gray-500">For individuals just getting started.</p>
                    <p className="mt-8">
                      <span className="text-4xl font-bold text-gray-900">$0</span>
                      <span className="text-base font-medium text-gray-500">/mo</span>
                    </p>
                    <Link to="/signup" className="mt-8 block w-full">
                      <Button variant="outline" className="w-full">Start for free</Button>
                    </Link>
                  </div>
                  <div className="pt-6 pb-8 px-6">
                    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                    <ul className="mt-6 space-y-4">
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">5 reminders</span>
                      </li>
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">Email notifications</span>
                      </li>
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">Basic dashboard</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-blue-50">
                  <div className="p-6">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Pro</h2>
                    <p className="mt-4 text-sm text-gray-500">For small businesses and teams.</p>
                    <p className="mt-8">
                      <span className="text-4xl font-bold text-gray-900">$4.99</span>
                      <span className="text-base font-medium text-gray-500">/mo</span>
                    </p>
                    <Link to="/signup" className="mt-8 block w-full">
                      <Button className="w-full">Subscribe to Pro</Button>
                    </Link>
                  </div>
                  <div className="pt-6 pb-8 px-6">
                    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                    <ul className="mt-6 space-y-4">
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">50 reminders</span>
                      </li>
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">File uploads</span>
                      </li>
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">SMS/WhatsApp alerts</span>
                      </li>
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">Team management</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Consultant Plan */}
                <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                  <div className="p-6">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Consultant</h2>
                    <p className="mt-4 text-sm text-gray-500">For professionals managing multiple clients.</p>
                    <p className="mt-8">
                      <span className="text-4xl font-bold text-gray-900">$19.99</span>
                      <span className="text-base font-medium text-gray-500">/mo</span>
                    </p>
                    <Link to="/signup" className="mt-8 block w-full">
                      <Button variant="outline" className="w-full">Contact sales</Button>
                    </Link>
                  </div>
                  <div className="pt-6 pb-8 px-6">
                    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                    <ul className="mt-6 space-y-4">
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">Unlimited reminders</span>
                      </li>
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">Manage up to 10 clients</span>
                      </li>
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">Export options</span>
                      </li>
                      <li className="flex space-x-3">
                        <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500">Priority support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">© 2025 CompliMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
