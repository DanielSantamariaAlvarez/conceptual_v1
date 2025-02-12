'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ropaSubmenu = [
    { href: '/ropa', label: 'Ver todo' },
    { href: '/ropa/secciones', label: 'Secciones' },
    { href: '/ropa/sets', label: 'Sets' },
    { href: '/ropa/tops', label: 'Tops' },
    { href: '/ropa/bottoms', label: 'Bottoms' },
    { href: '/ropa/dresses', label: 'Dresses' },
  ];

  const accesoriosSubmenu = [
    { href: '/accesorios', label: 'Ver todo' },
    { href: '/accesorios/cinturones', label: 'Cinturones' },
    { href: '/accesorios/collares', label: 'Collares' },
    { href: '/accesorios/anillos', label: 'Anillos' },
    { href: '/accesorios/bodychains', label: 'Bodychains' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      href: '/ropa', 
      label: 'Ropa',
      hasSubmenu: true,
      submenu: ropaSubmenu 
    },
    { 
      href: '/accesorios', 
      label: 'Accesorios',
      hasSubmenu: true,
      submenu: accesoriosSubmenu 
    },
    { href: '/colecciones', label: 'Colecciones' },
    { href: '/sostenibilidad', label: 'Sostenibilidad' },
    { href: '/arte', label: 'Arte' },
    { href: '/about', label: 'About us' },
  ];

  return (
    <div className="fixed w-full z-50">
      {/* Título CONCEPTUAL */}
      <div className={`w-full text-center py-2 transition-all duration-300 ${
        isScrolled ? 'bg-transparent' : 'bg-white'
      }`}>
        <h1 className={`text-lg font-bold tracking-widest ${
          isScrolled ? 'text-white' : 'text-black'
        }`}>
          CONCEPTUAL
        </h1>
      </div>

      {/* Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled ? 'bg-transparent' : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative group"
                >
                  <Link
                    href={link.href}
                    className={`font-medium transition-colors duration-200 relative group ${
                      isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out ${
                      isScrolled ? 'bg-white' : 'bg-black'
                    }`} />
                  </Link>

                  {/* Submenu */}
                  {link.hasSubmenu && (
                    <div className="absolute left-0 mt-2 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="py-2 bg-white shadow-lg rounded-md overflow-hidden">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden absolute right-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md focus:outline-none ${
                  isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-black'
                }`}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => !link.hasSubmenu && setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.hasSubmenu && (
                    <div className="pl-4">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar; 