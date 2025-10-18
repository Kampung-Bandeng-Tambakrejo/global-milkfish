"use client";

import React from 'react';
import { umkmData } from '../../data/umkm';

export default function LandingContent({onSelectUmkm}) {
    return (
        <div className= "animate-fade-in">
            <header className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <img
                    src = "https://cdn.vectorstock.com/i/1000v/24/07/isolated-milkfish-logo-design-vector-43622407.jpg"
                    alt="Global Milkfish Logo"
                    className="absolute inset-0 object-cover w-full h-full"/>

                <div className="relative z-20 p-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Selamat Datang di Global Milkfish</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Sebuah inisiatif bersama untuk membawa cita rasa otentik dari Kampung Bandeng Tambakrejo ke panggung dunia.</p>
                </div>
            </header>

            <section className="bg-white py-16 md:py-24 px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-900">Tentang Global Milkfish</h2>
                    <p className="mt-4 tetx-lg text-gray-600 leading-relaxed">Global Milkfish adalah etalase digital bagi para pelaku UMKM di Kampung Bandeng Tambakrejo. Kami berkomitmen untuk melestarikan resep tradisional sambil berinovasi, memastikan setiap produk yang Anda nikmati memiliki kualitas terbaik dan cerita yang kaya di baliknya.</p>
                </div>
            </section>

            <section className="bg-gray-100 py-16 md:py-24 px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Temukan UMKM Favorit Anda</h2>
                    <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {umkmData.map((umkm) => (
                            <div 
                            key= {umkm.id} 
                            onClick={() => onSelectUmkm(umkm)}
                            className="group bg-gray-50 rounder-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className="relative h-48">
                                    <img src={umkm.imageSrc} alt={`Toko ${umkm.name}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-bold truncate"> {umkm.name} </h3>
                                    <p className="text-sm text-gray-500 nt-1"> Oleh {umkm.owner}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24 px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-900">Hubungi Kami</h2>
                    <p className="mt-4 tetx-lg text-gray-600 leading-relaxed">Jika Anda memiliki pertanyaan atau ingin berkolaborasi, silakan hubungi kami melalui kontak di bawah ini.</p>
                </div>
            </section>

            <footer className="bg-gray-800 py-8 md:py-12 px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm text-gray-400">© 2025 Global Milkfish. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}