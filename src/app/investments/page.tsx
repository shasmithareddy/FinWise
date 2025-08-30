"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockInvestmentData = [
  { name: "Jan", value: 100000 },
  { name: "Feb", value: 105000 },
  { name: "Mar", value: 110000 },
  { name: "Apr", value: 125000 },
  { name: "May", value: 130000 },
  { name: "Jun", value: 145000 },
];

export default function InvestmentsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">📈 Investments</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Performance */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Portfolio Performance
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockInvestmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Holdings */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Current Holdings
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="font-semibold text-gray-900">Reliance</p>
                <p className="text-sm text-gray-500">Stock</p>
              </div>
              <p className="text-green-600 font-semibold">₹50,000 (+₹5,500)</p>
            </li>
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="font-semibold text-gray-900">Bitcoin</p>
                <p className="text-sm text-gray-500">Crypto</p>
              </div>
              <p className="text-green-600 font-semibold">₹15,000 (+₹3,000)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
