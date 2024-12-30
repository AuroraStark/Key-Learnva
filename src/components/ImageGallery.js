import React from 'react';

const ImageGallery = () => {
  // Array of image URLs or paths
  const images = [
    '../../../public/gallery/IMG_2208.jpeg',
    '@images/gallery/IMG_2208.jpeg',
    'path/to/image3.jpg'
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} style={{ width: '30%' }} />
      ))}
    </div>
  );
};

export default ImageGallery;
