"use client";

import React, { useEffect, useState } from "react";

export default function WelcomeScreen({ onEnter, animationClass }) {
  const [showTitle, setShowTitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 1200);
    const buttonTimer = setTimeout(() => setShowButton(true), 2200);
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen overflow-hidden ${animationClass}`}
    >
      {/* Background gradient animasi */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-gray-900 animate-gradient-move"></div>

      {/* Lapisan overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      {/* Logo intro */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-28 h-28 rounded-full border-4 border-cyan-400 flex items-center justify-center text-4xl font-bold text-cyan-300 animate-logo-pulse shadow-[0_0_30px_rgba(0,255,255,0.5)]">
          GM
        </div>

        {/* Judul dan tagline muncul setelah logo */}
        {showTitle && (
          <div className="mt-8 animate-fade-slide">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              Global Milkfish
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mt-3 font-light">
              UMKM Kampung Bandeng Tambakrejo
            </p>
          </div>
        )}

        {/* Tombol muncul terakhir */}
        {showButton && (
          <button
            onClick={onEnter}
            className="mt-10 bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-3 px-10 rounded-full 
            transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-cyan-400/40 animate-fade-slide"
          >
            Ayo Jelajahi Sekarang!!!
          </button>
        )}
      </div>
    </div>
  );
}
