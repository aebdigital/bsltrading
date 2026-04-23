"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useCallback } from "react";
import { useLightbox } from "./lightbox-context";

export function Lightbox() {
  const { isOpen, images, currentIndex, close, next, prev } = useLightbox();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    },
    [isOpen, close, next, prev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
        onClick={close}
      >
        {/* Controls */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            close();
          }}
          className="absolute right-6 top-6 z-[110] bg-white/10 p-4 text-white backdrop-blur-md transition-colors hover:bg-white/20"
          aria-label="Zatvoriť"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-6 z-[110] bg-white/10 p-5 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              aria-label="Predchádzajúci"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-6 z-[110] bg-white/10 p-5 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              aria-label="Nasledujúci"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-8 left-1/2 z-[110] -translate-x-1/2 bg-white/10 px-6 py-2 text-sm font-black text-white backdrop-blur-md">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Image Container */}
        <div className="relative h-[85vh] w-[90vw] overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={images[currentIndex].src}
              initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full w-full items-center justify-center"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                quality={95}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
