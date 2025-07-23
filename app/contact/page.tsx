"use client";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 gap-12">
      <h1 className="text-5xl font-orbitron text-white tracking-widest animate-pulse orbitron-regular">
        Contacto
      </h1>

      <div className="flex flex-wrap gap-8 orbitron-regular">
        <a
          href="https://github.com/santiskrr"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-10 py-4 text-lg font-rajdhani font-bold text-white uppercase tracking-wide rounded-xl overflow-hidden bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-lg shadow-pink-500/40 transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] before:absolute before:inset-0 before:rounded-xl before:border before:border-white/20 before:backdrop-blur-sm"
        >
          <span className="relative z-10"> <FaGithub className="inline-block mr-2" /> GitHub</span>
        </a>

        <a
          href="https://www.instagram.com/santiskrr?igsh=MXdicjJ1d2drbGJ4"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-10 py-4 text-lg font-rajdhani font-bold text-white uppercase tracking-wide rounded-xl overflow-hidden bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 shadow-lg shadow-purple-500/40 transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] before:absolute before:inset-0 before:rounded-xl before:border before:border-white/20 before:backdrop-blur-sm"
        >
          <span className="relative z-10"><FaInstagram className="inline-block mr-2" /> Instagram</span>
        </a>
      </div>
    </main>
  );
}
