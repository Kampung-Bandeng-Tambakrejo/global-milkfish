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

            </header>
        </div>
    );
}