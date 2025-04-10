import { useState, useEffect } from 'react';
import PosterData from '../assets/content/content.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface PosyerImage {
  url: string;
}

// interface PosterDataType {
//   Poster: {
//     PosyerImages: PosyerImage[];
//   };
// }

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: PosyerImage[] = PosterData.Poster.PosterImages;
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHeroVisible(true);
    }, 500);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className={`relative w-full h-auto md:h-[70vh] overflow-hidden transition-transform duration-700 ease-in-out ${
        isHeroVisible ? 'transform translate-x-0' : 'transform translate-x-full'
      } mt-11 md:mt-[60px]`}
    >
      {/* Image Slides */}
      <div className="relative w-full h-60 md:h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
              index === currentIndex ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer shadow-md md:block" // मार्जिन और शैडो जोड़ा, मोबाइल पर भी दिखेगा
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer shadow-md md:block" // मार्जिन और शैडो जोड़ा, मोबाइल पर भी दिखेगा
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Hero;