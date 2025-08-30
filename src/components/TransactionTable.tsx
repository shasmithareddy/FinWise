"use client";

export default function TransactionTable() {
  const transactions = [
    { date: "2025-08-01", description: "Groceries", amount: -2500 },
    { date: "2025-08-05", description: "Salary", amount: 40000 },
    { date: "2025-08-08", description: "Electricity Bill", amount: -1200 },
    { date: "2025-08-10", description: "Movie Night", amount: -800 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 dark:text-gray-300">
            <th className="py-2">Date</th>
            <th>Description</th>
            <th className="text-right">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-2">{t.date}</td>
              <td>{t.description}</td>
              <td
                className={`text-right ${
                  t.amount < 0 ? "text-red-500" : "text-green-600"
                }`}
              >
                {t.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
