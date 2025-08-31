import React, { useState } from 'react';

const ImageCard = ({ src, alt, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="max-w-sm rounded-lg shadow-lg overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setIsOpen(true)}
        role="button"
        aria-label={`Enlarge image: ${alt}`}
      >
        <img src={src} alt={alt} className="w-full h-auto" />
        {title && (
          <h3 className="text-xl font-semibold mt-2 px-4">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 px-4 pb-4">
            {description}
          </p>
        )}
      </div>

      {/* Lightbox overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
          onKeyDown={e => e.key === 'Escape' && setIsOpen(false)}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={src}
            alt={alt}
            className="max-w-3xl max-h-[90vh] rounded shadow-lg"
            onClick={e => e.stopPropagation()} // prevent closing when clicking on image
          />
        </div>
      )}
    </>
  );
};

export default ImageCard;
