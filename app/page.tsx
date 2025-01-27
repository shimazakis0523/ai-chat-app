import { auth } from "@/auth";
import { SignIn } from "@/components/auth-components";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-8">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            Let&apos;s Start Chat
          </h1>
          <p className="text-xl text-gray-400">
            GPT-4搭載の高性能AIチャットで、あなたのビジネスをサポートします
          </p>
        </div>

        {/* 特徴セクション */}
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="space-y-4 mx-auto w-4/5">
            <h3 className="text-xl font-medium text-white">GPT-4搭載の高精度応答</h3>
            <p className="text-gray-400">
              最新のGPT-4モデルを活用し、より正確で詳細な応答を提供。ビジネスの意思決定から技術的な質問まで、幅広くサポートします。
            </p>
          </div>
          <div className="space-y-4 mx-auto w-4/5">
            <h3 className="text-xl font-medium text-white">NTTDATA関係者は無料</h3>
            <p className="text-gray-400">
              NTTDATA関係者の方は、すべての機能を無料でご利用いただけます。社内のナレッジベースとしてお使いください。
            </p>
          </div>
        </div>

        {/* チャットのスクリーンショット */}
        <div className="w-4/5 mx-auto">
          <div className="relative w-full aspect-[1200/800] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.3)]">
            <Image
              src="/chat-screenshot.png"
              alt="AIチャットのデモ画面"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ボタンセクション */}
        <div className="text-center w-full">
          <div className="mb-8 mx-auto max-w-2xl">
            {session ? (
              <Link 
                href="/chat"
                className="inline-block w-full py-10 text-3xl rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition-all duration-300 transform hover:scale-105"
              >
                Start Chat with AI
              </Link>
            ) : (
              <div className="w-1/2 mx-auto">
                <SignIn className="w-full py-10 text-3xl rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition-all duration-300 transform hover:scale-105">
                  Get Started
                </SignIn>
              </div>
            )}
          </div>
          {!session && (
            <p className="text-xl text-gray-400">GitHubアカウントで簡単ログイン</p>
          )}
        </div>
      </div>
    </div>
  );
}
