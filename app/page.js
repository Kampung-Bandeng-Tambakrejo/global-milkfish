"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import LandingContent from './components/landing/LandingContent';
import DetailContent from './components/detail/DetailContent';
import { umkmData } from './data/umkm'; 

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [selectedUmkm, setSelectedUmkm] = useState(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("global-milkfish-visited");
    const savedUmkmId = sessionStorage.getItem("global-milkfish-active-umkm");

    if (hasVisited === "true") {
      setWelcomeVisible(false);
    }

    if (savedUmkmId) {
      const foundUmkm = umkmData.find(u => u.id === parseInt(savedUmkmId));
      if (foundUmkm) {
        setSelectedUmkm(foundUmkm);
      }
    }

    setIsLoading(false);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("global-milkfish-visited", "true");
    
    setTimeout(() => {
      setWelcomeVisible(false);
    }, 300); 
  };

  const handleSelectUmkm = (umkm) => {
    sessionStorage.setItem("global-milkfish-active-umkm", umkm.id);
    
    setSelectedUmkm(umkm);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    sessionStorage.removeItem("global-milkfish-active-umkm");
    
    setSelectedUmkm(null);
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50" />; 
  }

  return (
    <main className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      <AnimatePresence>
        {welcomeVisible && (
          <motion.div
            key="welcome"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <WelcomeScreen onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      {!welcomeVisible && (
        <AnimatePresence mode="wait">
          {!selectedUmkm ? (
            <motion.div 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LandingContent onSelectUmkm={handleSelectUmkm} />
            </motion.div>
          ) : (
            <motion.div key="detail">
              <DetailContent umkm={selectedUmkm} onBack={handleBack} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </main>
  );
}