"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { umkmData, globalImages } from '../../data/umkm';
import { FishIcon } from '../ui/Icons';
import { EmblaCarousel } from '../ui/Carousel'; 
export default function LandingContent({ onSelectUmkm }) {
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const popularProducts = umkmData.flatMap(umkm => 
    umkm.menu
      .filter(item => item.isPopular)
      .map(item => ({ ...item, umkmName: umkm.name, umkmId: umkm.id }))
  ).slice(0, 6); 

  const carouselOptions = { 
    loop: true,
    autoplay: { delay: 4000, stopOnInteraction: false }
  };

  return (
    <div>
      <header className="relative h-[60vh] md:h-[70vh] text-white overflow-hidden">
        <EmblaCarousel slides={globalImages} options={carouselOptions} />
        <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center text-center">
          <motion.div 
              className="relative p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Selamat Datang di kampung sentra bandeng Tambakrejo</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Sebuah inisiatif bersama untuk membawa cita rasa otentik dari Kampung Bandeng Tambakrejo ke panggung dunia.</p>
          </motion.div>
        </div>
      </header>

      <motion.section 
        className="py-16 md:py-24 px-6 md:px-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <FishIcon className="size-12 text-sky-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-sky-600">Tentang UMKM Tambakrejo</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Global Milkfish adalah etalase digital bagi para pelaku UMKM di Kampung Bandeng Tambakrejo. Kami berkomitmen untuk melestarikan resep tradisional sambil berinovasi, memastikan setiap produk yang Anda nikmati memiliki kualitas terbaik dan cerita yang kaya di baliknya.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24 px-6 md:px-8 bg-sky-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-sky-600">Produk Terpopuler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularProducts.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
                variants={cardVariants}
                whileHover={{ y: -6, shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                onClick={() => onSelectUmkm(umkmData.find(umkm => umkm.id === item.umkmId))}
              >
                <div className="relative h-40">
                  <img src={item.imageSrc} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-md truncate">{item.name}</h4>
                  <p className="text-sm text-gray-500 truncate">{item.umkmName}</p>
                  <p className="text-md font-semibold text-sky-600 mt-1">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            Temukan UMKM Favorit Anda
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {umkmData.map((umkm) => (
              <motion.div 
                key={umkm.id} 
                onClick={() => onSelectUmkm(umkm)}
                className="group bg-gray-50 rounded-lg shadow-md overflow-hidden cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={umkm.galleryImages[0]} alt={`Toko ${umkm.name}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold truncate">{umkm.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Oleh {umkm.owner}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="bg-sky-900 text-sky-100 text-center p-8">
        <p>&copy; 2025 UMKM Tambakrejo - Kampung Bandeng Tambakrejo. All rights reserved.</p>
      </footer>
    </div>
  );
};