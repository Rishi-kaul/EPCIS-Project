"use client";  // ✅ Add this line at the top

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo or Brand Name */}
        {/*<h1 className="text-lg font-bold">Citizen Identity System</h1>*/
}
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <nav className="ml-10">
          <ul className="flex space-x-6">     
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/register" className="hover:text-gray-300">Register</Link></li>
            <li><Link href="/login" className="hover:text-gray-300">Login</Link></li>
            <li><Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
            <li><Link href="/profile" className="hover:text-gray-300">Profile</Link></li>
            <li><Link href="/security" className="hover:text-gray-300">Security</Link></li>
            <li><Link href="/resume" className="hover:text-gray-300">Resume Builder</Link></li>
            <li><Link href="/assessment" className="hover:text-gray-300">Online Assessment</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
