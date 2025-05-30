/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Link } from 'react-router-dom';
// import HeaderData from '../../assets/content/content.json';


interface MenuItem {
  name: string;
  href: string;
  
}

interface HeaderDataType {
  Header: {
    LogoSrc: string;
    Title: string;
    description: string;
    buttonone: string;
    buttontwo: string;
    buttontwourl: string;
    anchortagone: string;
    navigation: MenuItem[];
  };
}


 const Hero = ({ content }: any) => {
   const data: HeaderDataType = content;
   const datas = data?.Header;
   return (
     <div className="font-mono bg-white">
       <div className="relative isolate px-6 pt-14 lg:px-8">
         <div
           aria-hidden="true"
           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
         >
           <div
             style={{
               clipPath:
                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
             }}
             className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
           />
         </div>
         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-36">
           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
             {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
           </div>
           <div className="text-center">
             <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
               {datas.Title}
             </h1>
             <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
               {datas.description}
             </p>
             <div className="mt-10 flex items-center justify-center gap-x-6">
               <a
                 href="#book-consult"
                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                 {datas.buttonone}
               </a>
               <Link
                 to={datas.buttontwourl}
                 className="text-sm/6 font-semibold text-gray-900"
               >
                 {datas.buttontwo} <span aria-hidden="true">→</span>
               </Link>
             </div>
           </div>
         </div>
         <div
           aria-hidden="true"
           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
         >
           <div
             style={{
               clipPath:
                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
             }}
             className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
           />
         </div>
       </div>
     </div>
   );
 };
export default Hero;




































// import { useState, useEffect } from 'react';
// import PosterData from '../../assets/content/content.json';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// interface PosyerImage {
//   url: string;
// }

// // interface PosterDataType {
// //   Poster: {
// //     PosyerImages: PosyerImage[];
// //   };
// // }

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images: PosyerImage[] = PosterData.Poster.PosterImages;
//   const [isHeroVisible, setIsHeroVisible] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsHeroVisible(true);
//     }, 500);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div
//       className={`relative w-full h-auto md:h-[70vh] overflow-hidden transition-transform duration-700 ease-in-out ${
//         isHeroVisible ? 'transform translate-x-0' : 'transform translate-x-full'
//       } mt-11 md:mt-[60px]`}
//     >
//       {/* Image Slides */}
//       <div className="relative w-full h-60 md:h-full">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
//               index === currentIndex ? 'transform translate-x-0' : 'transform translate-x-full'
//             }`}
//           >
//             <img
//               src={image.url}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer shadow-md md:block" // मार्जिन और शैडो जोड़ा, मोबाइल पर भी दिखेगा
//       >
//         <FontAwesomeIcon icon={faArrowLeft} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full z-10 cursor-pointer shadow-md md:block" // मार्जिन और शैडो जोड़ा, मोबाइल पर भी दिखेगा
//       >
//         <FontAwesomeIcon icon={faArrowRight} />
//       </button>
//     </div>
//   );
// };

// export default Hero;