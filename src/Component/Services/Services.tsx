import { useState, useEffect } from 'react';
import ServiceData from '../../assets/content/content.json';

interface ServiceItem {
  title: string;
  imgUrl: string;
  description: string;
  button: string;
}

interface ServiceDataType {
  service: {
    ourServic: ServiceItem[];
  };
}

const Services = () => {
  const data: ServiceDataType = ServiceData;
  const services = data.service.ourServic;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <div className="font-mono py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-box bg-white rounded-lg shadow-md overflow-hidden relative group hover:shadow-xl transition-shadow duration-300 transform translate-x-[-20px] opacity-0 ${
                isVisible ? 'translate-x-0 opacity-100' : ''
              } transition-transform transition-opacity duration-500 ease-out`}
              style={{ transitionDelay: `${index * 100}ms` }} // हर बॉक्स में थोड़ा डिले
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img src={service.imgUrl} alt={service.title} className="h-12 w-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                <div className="text-center">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                    {service.button}
                  </button>
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