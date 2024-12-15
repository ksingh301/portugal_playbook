import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <span onClick={scrollToTop} className="cursor-pointer text-white font-bold tracking-wide text-xl hover:text-blue-400 transition-colors">
          
        </span>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('features')} className="text-white hover:text-gray-300 transition-colors tracking-wide">THE GUIDE</button>
          <button onClick={() => scrollToSection('faq')} className="text-white hover:text-gray-300 transition-colors tracking-wide">FAQ</button>
          <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-gray-300 transition-colors tracking-wide">PRICING</button>
          <button onClick={() => scrollToSection('about-us')} className="text-white hover:text-gray-300 transition-colors tracking-wide">WHO WE ARE</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 text-white hover:text-gray-300 focus:outline-none">
            {!isOpen ? (
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-3 space-y-2 bg-gray-900/95 backdrop-blur-sm">
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-white hover:text-gray-300 tracking-wide">THE GUIDE</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-white hover:text-gray-300 tracking-wide">FAQ</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-white hover:text-gray-300 tracking-wide">PRICING</button>
            <button onClick={() => scrollToSection('about-us')} className="block w-full text-left px-3 py-2 text-white hover:text-gray-300 tracking-wide">WHO WE ARE</button>
          </div>
        </div>
      </div>
    </nav>
  );
}