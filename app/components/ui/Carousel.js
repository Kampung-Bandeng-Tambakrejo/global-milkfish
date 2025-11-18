// carousel.js (LENGKAP DAN SUDAH DIPERBAIKI)

"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Pastikan import ini ada
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

export const EmblaCarousel = ({ slides, options }) => {
  // --- PERBAIKAN DIMULAI DI SINI ---
  
  // 1. Buat array plugins secara dinamis
  const plugins = [];
  if (options && options.autoplay) {
    // Hanya tambahkan plugin Autoplay JIKA ada opsinya
    plugins.push(Autoplay(options.autoplay));
  }

  // 2. Gunakan array 'plugins' yang sudah benar
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  
  // --- PERBAIKAN SELESAI ---

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // 3. Perbaikan kecil: Pastikan plugin autoplay ada sebelum menggunakannya
    if (options && options.autoplay && emblaApi.plugins().autoplay) {
        emblaApi.on('pointerDown', () => emblaApi.plugins().autoplay.stop());
    }
    // 4. Tambahkan onSelect ke dependency array
  }, [emblaApi, options, onSelect]); 

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {slides.map((imgUrl, index) => (
            <div className="relative flex-none w-full h-64 md:h-full min-h-[400px] md:min-h-[500px]" key={index}>
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={imgUrl}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Tombol Navigasi (Prev/Next) */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 text-gray-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        onClick={scrollPrev}
      >
        <ChevronLeftIcon className="size-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 text-gray-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        onClick={scrollNext}
      >
        <ChevronRightIcon className="size-6" />
      </button>

      {/* Tombol Dot */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};