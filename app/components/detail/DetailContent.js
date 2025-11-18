"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, WhatsAppIcon, ArrowLeftIcon } from '../ui/Icons';
import { EmblaCarousel } from '../ui/Carousel'; // Import carousel baru

export default function DetailContent({ umkm, onBack }) {

    if (!umkm) {
        return null;
    }

    const carouselOptions = { loop: true };

    return (
        <motion.div 
            className="max-w-5xl mx-auto p-4 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
             <button onClick={onBack} className="flex items-center gap-2 text-sky-600 font-semibold mb-6 hover:text-sky-800 transition-colors">
                <ArrowLeftIcon />
                Kembali ke Daftar
            </button>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Gambar Toko (Diganti Carousel) */}
                    <div className="relative h-64 md:h-auto min-h-[400px]">
                        <EmblaCarousel slides={umkm.galleryImages} options={carouselOptions} />
                    </div>

                    {/* Info Toko */}
                    <div className="p-6 md:p-8 flex flex-col">
                        <h1 className="text-3xl font-bold text-gray-900">{umkm.name}</h1>
                        <p className="text-md text-gray-500 mt-1">Milik {umkm.owner}</p>
                        <p className="mt-4 text-gray-700 leading-relaxed">{umkm.description}</p>
                        
                        <div className="mt-auto pt-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Hubungi Kami:</h3>
                            <div className="flex space-x-4">
                                <a href={`https://instagram.com/${umkm.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                                    <InstagramIcon/>
                                    <span>Instagram</span>
                                </a>
                                <a href={`https://wa.me/${umkm.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg transition-colors">
                                    <WhatsAppIcon />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
                    {/* Menu (Dengan Gambar) */}
                    <div className="bg-white p-6 md:p-8">
                        <h2 className="text-2xl font-bold mb-4">Menu Unggulan</h2>
                        <ul className="space-y-4">
                            {umkm.menu.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 border-b border-dashed pb-4 last:border-b-0 last:pb-0">
                                    <img 
                                        src={item.imageSrc} 
                                        alt={item.name} 
                                        className="size-16 rounded-md object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                            <span className="font-bold text-sky-600 text-sm whitespace-nowrap">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1 text-justify">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pengiriman */}
                    <div className="bg-white p-6 md:p-8">
                        <h2 className="text-2xl font-bold mb-4">Opsi Pengiriman</h2>
                        <div className="flex flex-wrap gap-3">
                            {umkm.delivery.map((method, index) => (
                                <span key={index} className="bg-sky-50 text-sky-700 text-sm font-medium px-3 py-1.5 rounded-full">
                                    {method}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};