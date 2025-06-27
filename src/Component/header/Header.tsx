/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    anchortagone: string;
    navigation: MenuItem[];
  };
}

const HeadHero = ({ content }: any) => {
  const data: HeaderDataType = content;
  const datas = data.Header;
  const navigation = data.Header.navigation;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-[999] font-mono">
      {showNav && (
        <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className={`flex lg:flex-1 h-14`}>
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/images/JTlogo2.png"
                  className="h-[120px] w-auto object-contain -mt-6"
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="#" className="text-sm font-semibold text-gray-900">
                {datas.anchortagone} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
              >
                <div className="fixed inset-0 z-50">
                  {/* Backdrop */}
                  <motion.div
                    className="fixed inset-0 bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />

                  {/* Sidebar Panel */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed inset-y-0 left-0 z-50 w-full max-w-xs overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 shadow-xl"
                  >
                    <div className="flex items-center justify-between h-20">
                      <Link to="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                          alt=""
                          src="/images/JTlogoa2.png"
                          className="h-18 w-auto"
                        />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>

                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                        <div className="py-6">
                          <Link
                            to="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {datas.anchortagone}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Dialog>
            )}
          </AnimatePresence>
        </header>
      )}
    </div>
  );
};

export default HeadHero;
