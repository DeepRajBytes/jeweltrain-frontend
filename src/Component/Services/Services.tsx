import { useState, useEffect, useRef } from "react";
import ServiceData from "../../assets/content/content.json";

interface ServiceItem {
  title: string;
  imgUrl: string;
  description: string;
  button: string;
  href: string;
}

interface ServiceDataType {
  service: {
    ourServic: ServiceItem[];
  };
}

const Services = () => {
  const data: ServiceDataType = ServiceData;
  const services = data.service.ourServic;

  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isBoxesVisible, setIsBoxesVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsHeadingVisible(true);
      setIsBoxesVisible(true);
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === headingRef.current && entry.isIntersecting) {
              setIsHeadingVisible(true);
            }
            if (entry.target === boxesRef.current && entry.isIntersecting) {
              setIsBoxesVisible(true);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (headingRef.current) observer.observe(headingRef.current);
      if (boxesRef.current) observer.observe(boxesRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isMobile]);

  return (
    <div className="font-mono py-12 bg-opacity-0 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with falling animation */}
        <h2
          ref={headingRef}
          className={`text-3xl font-bold text-gray-800 mb-8 text-center transform ${
            isHeadingVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[-100px] opacity-0"
          } transition-all duration-700 ease-out`}
        >
          Our Services
        </h2>

        {/* Service boxes with scroll-triggered animation */}
        <div
          ref={boxesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-box bg-gray-50 rounded-lg shadow-md overflow-hidden relative group hover:shadow-xl transition-all duration-700 ease-out opacity-0 transform ${
                isBoxesVisible
                  ? "opacity-100 translate-x-0"
                  : "translate-x-[-100%]"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="h-12 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <a
                    href="#book-consult"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {service.button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
