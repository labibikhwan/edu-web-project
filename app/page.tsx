"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-300 to-yellow-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <Link href="/">
         <Image src="/logo nama.svg"  alt="TemaniTumbuh Logo" width={300} height={120}/>
        </Link>


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
      <section className="mt-[80px] min-h-screen flex flex-col justify-center px-8 md:px-24">
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

      {/* Info Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-2">
          Mengapa kita harus memberikan perhatian penuh terhadap pertumbuhan si-buah hati?
        </h2>
        <p className="text-gray-700 mb-10">
          Pertumbuhan anak Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.
        </p>

        {/* Hook/Feature Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white h-32 rounded-md shadow"></div>
          <div className="bg-white h-32 rounded-md shadow"></div>
          <div className="bg-white h-32 rounded-md shadow"></div>
          <div className="bg-white h-32 rounded-md shadow"></div>
          <div className="bg-white h-32 rounded-md shadow flex items-center justify-center text-sm text-center px-2">
            hook dengan<br />permasalahan umum
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-6 py-10 text-sm">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="mb-4 md:mb-0 max-w-md">
            TemaniTumbuh hadir untuk menjadi pionir dalam membantu para orang tua membimbing dan mengawasi perkembangan anak, dari mana dan kapan saja.
          </p>
          <div className="grid grid-cols-2 gap-x-10">
            <div>
              <p>Tentang</p>
              <p>Tim Kami</p>
              <p>Artikel</p>
              <p>Kontak</p>
            </div>
            <div>
              <p>Materi</p>
              <p>Motorik Kasar</p>
              <p>Motorik Halus</p>
              <p>Kognitif</p>
              <p>Bahasa</p>
              <p>Sosial</p>
            </div>
          </div>
        </div>
        <p className="text-gray-400 mt-8">© 2025 TemaniTumbuh</p>
      </footer>
    </div>
  );
}
