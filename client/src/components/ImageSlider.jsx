import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://github.com/MohitLucifer/Sports_booking_system/blob/main/client/src/images/versus%201.jpg?raw=true",
    "https://github.com/MohitLucifer/Sports_booking_system/blob/main/client/src/images/versus%202.jpg?raw=true",
    "https://github.com/MohitLucifer/Sports_booking_system/blob/main/client/src/images/versus%203.jpg?raw=true",
    "https://github.com/MohitLucifer/Sports_booking_system/blob/main/client/src/images/versus%204.jpg?raw=true",
    "https://github.com/MohitLucifer/Sports_booking_system/blob/main/client/src/images/versus%205.jpg?raw=true",
    "https://github.com/MohitLucifer/Sports_booking_system/blob/main/client/src/images/versus%206.jpg?raw=true",
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative text-white w-full h-96 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-20"></div>
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <h1 className="text-white text-4xl font-bold">
          Welcome to SportBooking.com
        </h1>
      </div>

      {images.map((image, index) => (
        <img
          key={index}
          src={`${image}`}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
