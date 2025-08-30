"use client";

export default function BudgetCard() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 text-center">
      <h2 className="text-lg font-semibold mb-2">Monthly Budget</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4">Target vs. Actual</p>

      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-8 border-green-500 flex items-center justify-center text-xl font-bold">
          72%
        </div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          ₹19,000 / ₹26,000 spent
        </p>
      </div>
    </div>
  );
}
