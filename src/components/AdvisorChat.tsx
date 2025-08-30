"use client";

import { useState } from "react";

export default function AdvisorChat() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I help you with your finances today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Based on your expenses, consider saving 20% more this month." },
      ]);
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6 flex flex-col h-[400px]">
      <h2 className="text-lg font-semibold mb-2">AI Financial Advisor</h2>
      <div className="flex-1 overflow-y-auto space-y-2 mb-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-xs ${
              m.sender === "ai"
                ? "bg-gray-200 dark:bg-gray-700 self-start"
                : "bg-blue-500 text-white self-end"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2"
          placeholder="Ask your advisor..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
