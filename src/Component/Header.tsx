import { useState, useEffect } from 'react';
import HeaderData from '../assets/content/content.json';

interface MenuItem {
  title: string;
  path: string;
}

interface HeaderDataType {
  Header: {
    LogoSrc: string;
    Title: string;
    Menu: MenuItem[];
  };
}

function Header() {
  const data: HeaderDataType = HeaderData;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header
      className={`font-mono fixed top-0 left-0 w-full flex justify-between items-center pl-3 pr-3 bg-white text-black shadow-lg z-20 transition-transform duration-500 ease-in-out ${
        isHeaderVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="flex items-center space-x-4">
        <img src={data.Header.LogoSrc} alt="Logo" className="h-12 md:h-17 m-0" />
        <h3 className="text-xl md:text-2xl font-bold hidden md:block">{data.Header.Title}</h3>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="md:hidden flex items-center justify-center p-2 bg-gray-800 rounded-md z-30"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Nav */}
      <nav className="pr-5 md:pr-15 hidden md:block">
        <ul className="flex space-x-6 md:space-x-10">
          {data.Header.Menu.map((menuItem, index) => (
            <li key={index} className="hover:text-indigo-500 cursor-pointer text-sm md:text-base">
              <a href={menuItem.path}>{menuItem.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 md:hidden transition-all duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'opacity-80' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      >
        {/* Dark Sidebar with smooth transition */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-black p-6 transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out z-50`}
        >
          <button
            className="text-white mb-4"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4">
            {data.Header.Menu.map((menuItem, index) => (
              <li key={index} className="text-white text-xl">
                <a href={menuItem.path}>{menuItem.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;