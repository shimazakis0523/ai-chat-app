import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // ユーザーメッセージを追加
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      // APIリクエスト
      const response = await fetch(
        "https://flask-openai-app-jrh3.onrender.com/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: input }),
        }
      );

      const data = await response.json();

      // AIの応答を追加
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      // エラーメッセージを表示
      const errorMessage: Message = {
        role: "assistant",
        content: "申し訳ありません。エラーが発生しました。",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
  };
} 