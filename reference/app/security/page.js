"use client";
import { useState } from "react";

export default function SecurityPage() {
  const [password, setPassword] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [message, setMessage] = useState("");
  const [currentSection, setCurrentSection] = useState("password");

  async function handleChangePassword(e) {
    e.preventDefault();
    const response = await fetch("/api/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) setMessage("Password updated successfully!");
    else setMessage("Error updating password.");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Security Settings</h1>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-700">
          <button
            onClick={() => setCurrentSection("password")}
            className={`pb-2 px-4 ${currentSection === "password" ? "border-b-2 border-blue-500" : ""}`}
          >
            Password
          </button>
          <button
            onClick={() => setCurrentSection("2fa")}
            className={`pb-2 px-4 ${currentSection === "2fa" ? "border-b-2 border-blue-500" : ""}`}
          >
            Two-Factor Auth
          </button>
          <button
            onClick={() => setCurrentSection("sessions")}
            className={`pb-2 px-4 ${currentSection === "sessions" ? "border-b-2 border-blue-500" : ""}`}
          >
            Active Sessions
          </button>
        </div>

        {/* Password Section */}
        {currentSection === "password" && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Update Password
              </button>
            </form>
          </div>
        )}

        {/* 2FA Section */}
        {currentSection === "2fa" && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Two-Factor Authentication</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Authenticator App</h3>
                  <p className="text-gray-400 text-sm">Use an authenticator app to generate codes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={twoFactorEnabled}
                    onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer 
                    peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
                    after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">SMS Authentication</h3>
                  <p className="text-gray-400 text-sm">Receive codes via text message</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer 
                    peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
                    after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Active Sessions Section */}
        {currentSection === "sessions" && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Active Sessions</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-700 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Current Session</h3>
                    <p className="text-gray-400 text-sm">Windows • Chrome • IP: 192.168.1.1</p>
                  </div>
                  <button className="text-red-500 hover:text-red-400">Terminate</button>
                </div>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Mobile Session</h3>
                    <p className="text-gray-400 text-sm">iOS • Safari • IP: 192.168.1.2</p>
                  </div>
                  <button className="text-red-500 hover:text-red-400">Terminate</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {message && (
          <div className="mt-4 p-4 bg-gray-800 rounded-lg text-center text-green-400">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
