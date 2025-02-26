"use client";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Create a client-side only version of the chart
const DynamicPieChart = dynamic(() => Promise.resolve(PieChart), {
  ssr: false,
});

export default function DashboardPage() {
  const [documentStats, setDocumentStats] = useState([
    { name: "Completed", value: 400 },
    { name: "In Progress", value: 300 },
    { name: "Pending", value: 200 },
    { name: "Failed", value: 100 }
  ]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
        <p className="text-gray-400 mb-8">Overview of uploaded documents</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Chart Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Document Statistics</h2>
            <div className="flex justify-center my-6">
              <DynamicPieChart width={400} height={400}>
                <Pie
                  data={documentStats}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {documentStats.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </DynamicPieChart>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {documentStats.map((stat, index) => (
                <div 
                  key={stat.name} 
                  className="bg-gray-700 p-4 rounded-lg"
                >
                  <h3 className="text-gray-300 text-sm">{stat.name}</h3>
                  <p className="text-2xl font-bold" style={{ color: COLORS[index] }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Card */}
          <div className="space-y-6">
            <Link href="/resume" className="block">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-750 transition-all duration-300 border border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Resume Builder</h2>
                  <span className="text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Resume Status</h3>
                      <p className="text-gray-400 text-sm">Last updated 2 days ago</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Completion</span>
                      <span className="text-white">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      5 Sections
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      12 Skills
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Additional Quick Actions Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span className="text-sm text-gray-300">Export PDF</span>
                </button>
                <button className="p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span className="text-sm text-gray-300">Edit Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
