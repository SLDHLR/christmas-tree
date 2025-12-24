import React, { useRef } from 'react';
import { TreeMode } from '../types';

interface UIOverlayProps {
  mode: TreeMode;
  onToggle: () => void;
  onPhotosUpload: (photos: string[]) => void;
  hasPhotos: boolean;
}

export const UIOverlay: React.FC<UIOverlayProps> = ({ mode, onToggle, onPhotosUpload, hasPhotos }) => {
  const isFormed = mode === TreeMode.FORMED;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const photoUrls: string[] = [];
    const readers: Promise<string>[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith('image/')) continue;

      const promise = new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            resolve(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      });

      readers.push(promise);
    }

    Promise.all(readers).then((urls) => {
      onPhotosUpload(urls);
    });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8 z-10">
      
      {/* Header */}
      <header className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E6BF] to-[#D4AF37] font-serif drop-shadow-lg tracking-wider text-center">
          Merry Christmas
        </h1>
        
        {/* Upload Button - Only show when no photos uploaded */}
        {!hasPhotos && (
          <div className="mt-6 pointer-events-auto">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleUploadClick}
              className="group px-8 py-3 border-2 border-[#D4AF37] bg-black/50 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_#D4AF37] hover:border-[#fff] hover:bg-[#D4AF37]/20"
            >
              <span className="relative z-10 font-serif text-lg md:text-xl text-[#D4AF37] tracking-[0.1em] group-hover:text-white transition-colors">
                Upload Photos
              </span>
            </button>
          </div>
        )}
      </header>

      {/* Control Panel */}
      {/* <div className="flex flex-col items-center mb-8 pointer-events-auto">
        <button
          onClick={onToggle}
          className={`
            group relative px-12 py-4 border-2 border-[#D4AF37] 
            bg-black/50 backdrop-blur-md overflow-hidden transition-all duration-500
            hover:shadow-[0_0_30px_#D4AF37] hover:border-[#fff]
          `}
        >
          <div className={`absolute inset-0 bg-[#D4AF37] transition-transform duration-500 ease-in-out origin-left ${isFormed ? 'scale-x-0' : 'scale-x-100'} opacity-10`}></div>
          
          <span className="relative z-10 font-serif text-xl md:text-2xl text-[#D4AF37] tracking-[0.2em] group-hover:text-white transition-colors">
            {isFormed ? 'UNLEASH CHAOS' : 'RESTORE ORDER'}
          </span>
        </button>
        
        <p className="mt-4 text-[#F5E6BF] font-serif text-xs opacity-50 tracking-widest text-center max-w-md">
          {isFormed 
            ? "A magnificent assembly of the finest ornaments. Truly spectacular." 
            : "Creative potential unleashed. Waiting to be made great again."}
        </p>
      </div> */}

      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] opacity-50"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37] opacity-50"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37] opacity-50"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] opacity-50"></div>
    </div>
  );
};