"use client";
import Link from 'next/link';

export default function HomePage() {
  // Temporary notifications data
  const notifications = [
    {
      id: 1,
      title: "Document Verified",
      message: "Your passport has been successfully verified",
      time: "2 hours ago",
      type: "success"
    },
    {
      id: 2,
      title: "Security Alert",
      message: "New login detected from Chrome browser",
      time: "5 hours ago",
      type: "warning"
    },
    {
      id: 3,
      title: "Update Required",
      message: "Please update your profile information",
      time: "1 day ago",
      type: "info"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Citizen Identity System</h1>
          <p className="text-gray-400">Manage your identity, documents, and security all in one place.</p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Login Card */}
          <Link href="/login">
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Login</h2>
                  <p className="text-gray-400 text-sm">Access your account</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Register Card */}
          <Link href="/register">
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Register</h2>
                  <p className="text-gray-400 text-sm">Create a new account</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Notifications Section */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Latest Notifications</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
          </div>
          
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className="flex items-start space-x-4 p-4 bg-gray-750 rounded-lg"
              >
                <div className={`p-2 rounded-full ${
                  notification.type === 'success' ? 'bg-green-500/10' :
                  notification.type === 'warning' ? 'bg-yellow-500/10' :
                  'bg-blue-500/10'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${
                    notification.type === 'success' ? 'text-green-400' :
                    notification.type === 'warning' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {notification.type === 'success' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    ) : notification.type === 'warning' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-sm text-gray-400">{notification.time}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{notification.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
