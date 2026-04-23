"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxContextType = {
  isOpen: boolean;
  currentIndex: number;
  images: LightboxImage[];
  open: (images: LightboxImage[], index?: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
};

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((newImages: LightboxImage[], index = 0) => {
    setImages(newImages);
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        currentIndex,
        images,
        open,
        close,
        next,
        prev,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
}
