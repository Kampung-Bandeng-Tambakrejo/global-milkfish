"use client";

import React from 'react';

export default function WelcomeScreen({onEnter, animationClass}) {
    return(
        <div className={`fixed-inset-0 bg-gray-900 flex flex-col items-center justify-center text-white ${animationClass}`}>
            <div className="text-center animated-fade-in-down">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Global Milkfish</h1>
                <p className="text-xl md:text-2xl text-cyan-300 mt-2">UMKM Kampung Bandeng Tambakrejo</p>
            </div>
            <button onClick={onEnter} className="mt-12 bg-cyan500 hover:bg-cyan-400 text-white-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-pulse"> 
                Ayo Jelajahi Sekarang!!!
            </button>
        </div>
    );
}