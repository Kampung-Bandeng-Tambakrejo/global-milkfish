"use client";

import React, { useEffect, useState } from "react";

export default function WelcomeScreen({ onEnter, animationClass }) {
  const [showTitle, setShowTitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 1500);
    const buttonTimer = setTimeout(() => setShowButton(true), 2600);
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen overflow-hidden ${animationClass}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-700 via-blue-900 to-gray-900 animate-ocean-wave"></div>
      {/* <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-md"></div> */}
      <div className="particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-32 h-32 rounded-full border-4 border-cyan-400/20 animate-spin-slow border-t-cyan-300"></div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-b from-cyan-400 to-blue-700 border-2 border-cyan-300 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.5)] select-none animate-logo-pulse overflow-hidden">
              <img
                src="Images\GambarLogoGlobalMilk.jpg"
                alt="Global Milkfish Logo"
                className="w-full h-full object-cover"
              />
            </div>
        </div>

        {showTitle && (
          <div className="mt-8 animate-fade-slide">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
              Global Milkfish
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mt-3 font-light">
              UMKM Kampung Bandeng Tambakrejo
            </p>
          </div>
        )}

        {showButton && (
          <button
            onClick={onEnter}
            className="mt-10 bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-3 px-10 rounded-full 
            transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-cyan-400/40 animate-fade-slide"
          >
            Jelajahi Rasa Laut Sekarang 🌊
          </button>
        )}
      </div>
    </div>
  );
}
