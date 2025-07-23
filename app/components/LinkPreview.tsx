"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface LinkPreviewProps {
  url?: string;          // URL para Thum.io
  title?: string;
  className?: string;
  image?: StaticImageData; // Imagen importada local
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url, title, className, image }) => {
  const screenshotUrl = url ? `https://image.thum.io/get/${url}` : "";

  return (
    <a
      href={url ?? "#"}
      target={url ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`group block w-full max-w-md mx-auto cyber-preview ${className ?? ""}`}
    >
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-[0_0_25px_rgba(255,0,255,0.5)]">
        {image ? (
          <Image
            src={image}
            alt={title ?? "Project"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            fill
          />
        ) : (
          <img
            src={screenshotUrl}
            alt={title ?? url}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-md">
            {title ?? (url ?? "Project")}
          </h3>
        </div>
        <div className="absolute inset-0 rounded-xl ring-1 ring-pink-500/20 group-hover:ring-pink-500/70 group-hover:shadow-[0_0_25px_rgba(255,0,255,0.8)] transition-all duration-300" />
      </div>
    </a>
  );
};

export default LinkPreview;
