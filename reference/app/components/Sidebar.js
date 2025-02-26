'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  // Split menu items into main and secondary sections
  const mainMenuItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/profile', label: 'Profile' },
    { href: '/security', label: 'Security' },
    { href: '/resume', label: 'Resume Builder' },
    { href: '/online-assessment', label: 'Online Assessment' },
  ];

  const secondaryMenuItems = [
    { href: '/manual-upload', label: 'Manual Upload' },
  ];

  return (
    <aside className={`bg-gray-800 text-white h-screen fixed transition-all duration-300 flex flex-col
      ${isOpen ? 'w-64' : 'w-16'}`}>
      {/* Top Section */}
      <div className="flex justify-center items-center p-4 border-b border-gray-700">
        {isOpen && <span className="text-sm"></span>}
        <button
          className={`text-white hover:text-gray-400 ${isOpen ? 'ml-auto' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '←' : '→'}
        </button>
      </div>
      
      {/* Main Navigation Menu */}
      <div className="flex-1 p-4 overflow-y-auto">
        <nav className="space-y-6">
          {/* Main Menu Items */}
          <ul className="space-y-3">
            {mainMenuItems.map((item) => (
              <li key={item.href} className="text-center">
                <Link 
                  href={item.href} 
                  className="hover:text-gray-400 block py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {isOpen ? item.label : '•'}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Section */}
          <div className={`py-4 ${isOpen ? 'space-y-2' : ''}`}>
            {isOpen ? (
              <>
                <Link 
                  href="/login" 
                  className="flex justify-center items-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 
                    text-white rounded-lg transition-colors text-sm"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="flex justify-center items-center w-full py-2 px-4 border border-gray-600 
                    hover:bg-gray-700 text-white rounded-lg transition-colors text-sm"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <Link 
                  href="/login" 
                  className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 
                    rounded-lg transition-colors"
                  title="Login"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 2v10h10V5H5z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/register" 
                  className="w-8 h-8 flex items-center justify-center border border-gray-600 
                    hover:bg-gray-700 rounded-lg transition-colors"
                  title="Register"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-700"></div>

          {/* Secondary Menu Items */}
          <ul className="space-y-3">
            {secondaryMenuItems.map((item) => (
              <li key={item.href} className="text-center">
                <Link 
                  href={item.href} 
                  className="hover:text-gray-400 block py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {isOpen ? item.label : '•'}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
