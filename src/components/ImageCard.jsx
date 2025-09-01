import React from 'react';

const ImageCard = ({ src, alt, title, description }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full h-40 object-cover" />
      {title && (
        <h3 className="text-lg font-semibold mt-2 px-4 text-gray-800">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 px-4 pb-4 text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export default ImageCard;
