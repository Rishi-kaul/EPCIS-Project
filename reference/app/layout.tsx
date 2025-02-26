import { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './globals.css'; // Import your global styles

export const metadata: Metadata = {
  title: 'Citizen Identity System',
  description: 'A Citizen Identity and Access Management System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {/* <Navbar /> */}
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
