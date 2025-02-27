"use client";
import { useState } from "react";
import Link from 'next/link';

export default function DocumentsPage() {
  // Temporary documents data
  const [documents, setDocuments] = useState({
    digilocker: [
      {
        id: "d1",
        name: "Aadhar Card",
        fileName: "aadhar.pdf",
        type: "Identity Proof",
        source: "DigiLocker",
        lastVerified: "2024-02-15",
        fileSize: "2.3 MB",
        status: "verified",
        icon: "🆔"
      },
      {
        id: "d2",
        name: "PAN Card",
        fileName: "pan.pdf",
        type: "Identity Proof",
        source: "DigiLocker",
        lastVerified: "2024-02-15",
        fileSize: "1.1 MB",
        status: "verified",
        icon: "📄"
      },
      {
        id: "d3",
        name: "Driving License",
        fileName: "license.pdf",
        type: "Identity Proof",
        source: "DigiLocker",
        lastVerified: "2024-02-10",
        fileSize: "1.8 MB",
        status: "verified",
        icon: "🚗"
      }
    ],
    uploaded: [
      {
        id: "u1",
        name: "Resume",
        fileName: "resume.pdf",
        type: "Professional",
        source: "Manual Upload",
        uploadDate: "2024-02-01",
        fileSize: "534 KB",
        status: "pending",
        icon: "📝"
      },
      {
        id: "u2",
        name: "College Degree",
        fileName: "degree.pdf",
        type: "Educational",
        source: "Manual Upload",
        uploadDate: "2024-01-25",
        fileSize: "1.2 MB",
        status: "verified",
        icon: "🎓"
      },
      {
        id: "u3",
        name: "Work Experience",
        fileName: "experience.pdf",
        type: "Professional",
        source: "Manual Upload",
        uploadDate: "2024-01-20",
        fileSize: "892 KB",
        status: "processing",
        icon: "💼"
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">My Documents</h1>
          <p className="text-gray-400">Manage all your documents in one place</p>
        </div>

        {/* Document Actions */}
        <div className="flex justify-center space-x-4 mb-12">
          <Link 
            href="/manual-upload"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center space-x-2"
          >
            <span>Upload Document</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </Link>
          <a 
            href="https://www.digilocker.gov.in/web/home"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center space-x-2"
          >
            <span>DigiLocker</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </a>
        </div>

        {/* DigiLocker Documents */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <span className="mr-2">🔐</span> DigiLocker Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.digilocker.map((doc) => (
              <div key={doc.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{doc.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    doc.status === 'verified' ? 'bg-green-500/20 text-green-400' :
                    doc.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{doc.name}</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>File: {doc.fileName}</p>
                  <p>Size: {doc.fileSize}</p>
                  <p>Last Verified: {new Date(doc.lastVerified).toLocaleDateString()}</p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Uploaded Documents */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <span className="mr-2">📁</span> Uploaded Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.uploaded.map((doc) => (
              <div key={doc.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{doc.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    doc.status === 'verified' ? 'bg-green-500/20 text-green-400' :
                    doc.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{doc.name}</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>File: {doc.fileName}</p>
                  <p>Size: {doc.fileSize}</p>
                  <p>Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}</p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
