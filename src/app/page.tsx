"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">💰 FinWise</h1>
        <div className="space-x-6">
          <Link href="/transactions" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Transactions
          </Link>
          <Link href="/investments" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Investments
          </Link>
          <Link href="/advisor" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Advisor
          </Link>
          <Link href="/reports" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
            Reports
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Take Control of Your Finances
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Track your spending, grow your investments, chat with your AI advisor, 
          and view insightful reports — all in one place.
        </p>
      </header>

      {/* Feature Grid */}
      <main className="px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Transactions */}
          <Link
            href="/transactions"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <span className="text-4xl mb-4">💳</span>
            <h3 className="text-xl font-semibold mb-2">Transactions</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Track income and expenses with detailed transaction history.
            </p>
          </Link>

          {/* Investments */}
          <Link
            href="/investments"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <span className="text-4xl mb-4">📈</span>
            <h3 className="text-xl font-semibold mb-2">Investments</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Monitor your portfolio and analyze growth over time.
            </p>
          </Link>

          {/* Advisor */}
          <Link
            href="/advisor"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <span className="text-4xl mb-4">🤖</span>
            <h3 className="text-xl font-semibold mb-2">AI Advisor</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get smart recommendations and financial tips from AI.
            </p>
          </Link>

          {/* Reports */}
          <Link
            href="/reports"
            className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <span className="text-4xl mb-4">📊</span>
            <h3 className="text-xl font-semibold mb-2">Reports</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Visualize your progress with detailed charts and summaries.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
