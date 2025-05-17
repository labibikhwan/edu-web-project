"use client";

import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side login form */}
      <div className="flex flex-col justify-center items-start p-12 w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Masuk</h2>

        {/* Username login */}
        <button className="w-full max-w-xs border border-black rounded-lg px-6 py-2 mb-4 hover:bg-gray-100 transition">
          Masuk Dengan Username
        </button>

        {/* Google login */}
        <button className="w-full max-w-xs border border-black rounded-lg px-6 py-2 mb-4 flex items-center gap-2 hover:bg-gray-100 transition">
          <Image src="/google.svg" alt="Google" width={20} height={20} />
          Masuk Dengan Email
        </button>

        {/* Facebook login */}
        <button className="w-full max-w-xs border border-black rounded-lg px-6 py-2 flex items-center gap-2 hover:bg-gray-100 transition">
          <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
          Masuk Dengan Facebook
        </button>
      </div>

      {/* Right yellow background */}
      <div className="hidden lg:block w-1/2 bg-yellow-200"></div>
    </div>
  );
}
