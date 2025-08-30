"use client";

import { useState } from "react";

export default function AdvisorPage() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "advisor" }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "💡 Here's a financial tip: Track expenses regularly to save more!", sender: "advisor" },
      ]);
    }, 1000);
  };

  return (
    <div className="p-8 flex flex-col h-[80vh] space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">🤖 AI Advisor</h1>
      <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex space-x-2">
          <input
            type="text"
            placeholder="Ask me something..."
            className="flex-1 p-3 rounded-full border focus:ring-2 focus:ring-indigo-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
