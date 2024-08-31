import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    '/images/woman-is-holding-laptop-she-is-holding-laptop_926484-51.png',
    '/images/woman-suit-is-using-laptop-with-white-background_559571-719.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        style={{
          maxWidth: '100vw',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default ImageCarousel;
