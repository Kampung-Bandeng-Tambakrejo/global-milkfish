"use client";

import React from 'react';
import { InstagramIcon, WhatsAppIcon, ArrowLeftIcon} from '../ui/Icons';

export default function DetailContent({umkm, onBack}){
    return (
        <div className= "max-w-5xl mx-auto p-4 md:p-8 animated-fade-in">
            <button onClick={onBack} className="flex items-center gap-2 text-cyan-600 font-semibold mb-6 hover:text-cyan-800 transition-colors">
                <ArrowLeftIcon/>
                Kembali ke halaman sebelumnya
            </button> 

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                        <img src={umkm.imageSrc} alt={`Toko ${umkm.name}`} className="absolute inset-0 w-full h-full object-cover" />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col">
                        <h1 className="text-3xl font-bold text-gray-900">{umkm.name}</h1>
                        <p className="text-md text-gray-500 mt-1">Milik {umkm.owner}</p>
                        <p className="mt-4 text-gray-700 leading-relaxed">{umkm.description}</p>

                        <div className="mt-auto pt-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Hubungi Kami</h3>

                            <div className="flex space-x-4">
                                <a href={`https://instagram.com/${umkm.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors">
                                    <InstagramIcon/>
                                    <span>Instagram</span>
                                </a>

                                <a href={`https://wa.me/${umkm.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-md transition-colors">
                                    <WhatsAppIcon/>
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
                    <div className="bg-white p-6 md:p-8">
                        <h2 className="text-2xl font-bold mb-4">Menu</h2>
                        <ul className="space-y-3">
                            {umkm.menu.map((item, index) => (
                                <li key={index} className="flex justify-between items-baseline border-b border-dashed pb-2">
                                    <span className="text-gray-800">{item.name}</span>
                                    <span className="font-semibold text-gray-600">{item.price}</span>
                                    <div className="flex items-center gap-2">
                                        <img src={item.imageSrc} alt={item.name} className="w-12 h-12 object-cover rounded-full"></img>
                                    </div>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 md:p-8">
                        <h2 className="text-2xl font-bold mb-4">Opsi Pengiriman</h2>
                        <div>
                            {umkm.delivery.map((method, index) => (
                                <span key={index} className="bg-cyan-50 text-cyan-700 text-sm font-medium px-3 py-1.5 rounded-full">
                                    {method}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}