"use client";
import { useState } from "react";
import axios from "axios";
import Link from 'next/link';

export default function AssessmentPage() {
  const [documents, setDocuments] = useState([]);

  async function fetchDocuments() {
    const response = await axios.get("https://api.digilocker.gov.in/docs", {
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_DIGILOCKER_API_KEY}` },
    });
    setDocuments(response.data);
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Document Management System</h1>
          <p className="text-gray-400 mb-6">View and manage your verified documents</p>
          <div className="flex justify-center space-x-4">
            <button 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => console.log("Fetch documents")}
            >
              Refresh Documents
            </button>
            <a 
              href="https://www.digilocker.gov.in/web/home"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg 
                hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 
                flex items-center space-x-2"
            >
              <span>Import from DigiLocker</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div key={doc.id} className="p-2 border">
              {doc.name}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {documents.length === 0 && (
          <div className="text-center py-12 bg-gray-800 rounded-lg">
            <div className="text-gray-400 mb-4">No documents found</div>
          </div>
        )}

        {/* Upload Button at bottom */}
        <div className="text-center mt-8">
          <Link 
            href="/manual-upload"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg 
              hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 
              inline-flex items-center space-x-2"
          >
            <span>Upload New Document</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
