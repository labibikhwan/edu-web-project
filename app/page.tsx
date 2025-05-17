"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="text-yellow-500 font-bold text-lg">TemaniTumbuh</div>

        <div
          className={`flex-col lg:flex lg:flex-row gap-8 text-sm font-medium text-black cursor-pointer ${
            isMenuOpen ? "flex" : "hidden"
          } lg:static absolute top-16 bg-white lg:bg-transparent p-4 lg:p-0 w-full lg:w-auto shadow-md lg:shadow-none`}
        >
          <a href="#">motorik kasar</a>
          <a href="#">motorik halus</a>
          <a href="#">kognitif</a>
          <a href="#">bahasa</a>
          <a href="#">sosial</a>
        </div>

        <div className="flex gap-2 items-center">
          <div className="hidden lg:flex items-center border rounded-full px-3 py-1 text-sm">
            <Image src="/search.svg" alt="search" width={20} height={20} />
            <span className="ml-1">cari</span>
          </div>
          <Link href="/login">
            <button className="hidden lg:block border rounded-full px-4 py-1 text-sm cursor-pointer">
              masuk
            </button>
          </Link>

          <button className="hidden lg:block bg-black text-white rounded-full px-4 py-1 text-sm cursor-pointer">
            daftar
          </button>
          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-r from-yellow-300 to-white flex flex-col justify-center px-8 md:px-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
          Awasi tumbuh kembang <br /> si-buah hati
        </h1>
        <p className="text-gray-600 mb-6 max-w-md">
          mari kita bersama membangun generasi emas bangsa dengan memantau tumbuh kembang anak
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition duration-300">
          DAFTAR SEKARANG
        </button>
      </section>
    </div>
  );
}
