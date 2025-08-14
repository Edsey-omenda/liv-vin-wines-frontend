import React, { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
        <img
          src={images[selectedImage]}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
              selectedImage === index ? "border-red-900" : "border-slate-200"
            }`}
          >
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="w-full h-full object-contain bg-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
