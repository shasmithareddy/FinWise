"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 25000 },
  { month: "Feb", value: 28000 },
  { month: "Mar", value: 32000 },
  { month: "Apr", value: 35000 },
  { month: "May", value: 40000 },
  { month: "Jun", value: 45000 },
];

export default function InvestmentChart() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">Investment Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
