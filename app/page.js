"use client";

import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import DetailContent from './components/detail/DetailContent';
import LandingContent from './components/landing/LandingContent';
export default function HomePage() {
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [selectedUmkm, setSelectedUmkm] = useState(null);
  const [animationClass, setAnimationClass] = useState('opacity-0');

  useEffect(()=>{
    const timer = setTimeout(()=> setAnimationClass ('opacity-100 transtion-opacity ease-in-out duration-1000'), 100);
    return ()=> clearTimeout(timer);
  } ,[]);

  const handleEnter = () => {
    setAnimationClass('opacity-0 transition-opacity duration 1000 ease-in-out');
    setTimeout(() => {
      setWelcomeVisible(false)
    }, 1000);
  }

  const handleSelectUmkm = (umkm) => {
    setSelectedUmkm(umkm);
    window.scrollTo({top:0, behavior:'smooth'})
  };

  const handleBack = () => {
    setSelectedUmkm(null);
  };

  if (welcomeVisible){
    return <WelcomeScreen onEnter={handleEnter} animationClass={animationClass}/>;
  }

  return  (
    <main className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <div className={`transition-all duration-500 ease-in-out ${selectedUmkm ? 'opacity-0 scale-95 h-0 overflow-hidden' : 'opacity-100 scale-100'}`}>
        <LandingContent onSelectUmkm={handleSelectUmkm}/>
      </div>

      {selectedUmkm && (
        <DetailContent umkm = {selectedUmkm} onBack={handleBack}/>
      )}
    </main>
  );
};
