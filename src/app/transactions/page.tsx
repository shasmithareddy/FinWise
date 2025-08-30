"use client";

import { RefreshCw } from "lucide-react";

const mockTransactions = [
  { id: 1, date: "2023-10-25", description: "Grocery shopping", category: "Groceries", amount: -3500 },
  { id: 2, date: "2023-10-24", description: "Rent payment", category: "Housing", amount: -15000 },
  { id: 3, date: "2023-10-21", description: "Salary Deposit", category: "Income", amount: 65000 },
];

export default function TransactionsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">💳 Transactions</h1>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">Recent Transactions</h2>
        <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors shadow-md">
          <RefreshCw size={16} /> <span>Refresh</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockTransactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-500">{tx.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{tx.description}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.category === "Income"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tx.category}
                  </span>
                </td>
                <td
                  className={`px-6 py-4 text-sm font-medium ${
                    tx.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.amount > 0 ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
