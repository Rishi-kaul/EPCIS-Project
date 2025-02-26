"use client";  // Ensures React hooks work correctly

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

export default function OnlineAssessment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Online Assessment</h1>
      <p className="text-lg text-gray-300">
        Welcome to the online assessment platform. Select an assessment to begin.
      </p>

      {/* Example Buttons for Assessment Categories */}
      <div className="mt-6 space-y-4">
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
          Start Technical Test
        </button>
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg">
          Start Aptitude Test
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg">
          Start Logical Reasoning Test
        </button>
      </div>
    </div>
  );
}
