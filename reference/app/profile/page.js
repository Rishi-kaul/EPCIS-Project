"use client";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  // Temporary user data
  const [user, setUser] = useState({
    name: "John Smith",
    email: "john.smith@example.com",
    bio: "Senior Software Engineer with 5+ years of experience in full-stack development. Passionate about creating scalable solutions and mentoring junior developers.",
    phone: "+1 (555) 123-4567",
    profilePicture: "https://ui-avatars.com/api/?name=John+Smith&background=0D8ABC&color=fff",
    location: "New York, NY",
    department: "Engineering",
    role: "Senior Developer",
    joinDate: "January 2022",
    skills: ["React", "Node.js", "Python", "AWS", "Docker"]
  });

  async function handleUpdateProfile(e) {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      alert("Profile updated successfully!");
    }, 500);
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-700 p-6">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative group">
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-white text-sm">Change Photo</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-blue-400">{user.role}</p>
              <p className="text-gray-400 text-sm">Member since {user.joinDate}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-400 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={user.location}
                  onChange={(e) => setUser({ ...user, location: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                value={user.bio}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Department Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  value={user.department}
                  onChange={(e) => setUser({ ...user, department: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
