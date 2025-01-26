"use client";

import { useState } from "react";
import { useChat } from "@/hooks/useChat";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* 入力フォーム */}
      <div className="sticky top-0 z-10 bg-black border-b border-gray-800 w-full">
        <div className="max-w-5xl mx-auto p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 items-center">
              <div className="flex-1 flex">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="メッセージを入力..."
                  className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex-none">
                <button
                  type="submit"
                  className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors whitespace-nowrap"
                >
                  送信
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* チャットメッセージ表示エリア */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 mb-6 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "user" ? (
                <>
                  <div className="max-w-[70%] rounded-lg p-4 bg-gray-100 text-gray-900">
                    {message.content}
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">U</span>
                    </div>
                    <time className="text-xs text-gray-500 mt-1">
                      {new Date().toLocaleTimeString('ja-JP', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </time>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div className="max-w-[70%] rounded-lg p-4 bg-gray-800 text-gray-200">
                    {message.content}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 