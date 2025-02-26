'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={`transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
        {children}
      </main>
    </div>
  );
} 