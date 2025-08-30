"use client";

import { FileText } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">📊 Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Financial Health */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Financial Health Index</h2>
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg">
              82
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900">Excellent</p>
              <p className="text-sm text-gray-500">Strong financial position.</p>
            </div>
          </div>
        </div>

        {/* Generate Report */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Generate Report</h2>
            <p className="text-sm text-gray-600 mb-4">
              Create a monthly report of your finances with income, expenses, and insights.
            </p>
          </div>
          <button className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-md">
            <FileText size={20} /> <span>Generate PDF Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}
