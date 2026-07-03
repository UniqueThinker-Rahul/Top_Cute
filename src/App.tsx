import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Escorts from './components/Escorts';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Location Components
import Dehradun from './components/Dehradun';
import Bangalore from './components/Bangalore';
import Lucknow from './components/Lucknow';
import Hyderabad from './components/Hyderabad';
import Categories from './components/Categories';

export default function App() {
  const [showFloatingWidgets, setShowFloatingWidgets] = useState(false);

  // =========================================================
  // 🔒 WEBSITE SECURITY HOOK (Blocks Inspect, Copy, Right-Click)
  // =========================================================
  useEffect(() => {
    // 1. Prevent Right Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Prevent Copy & Paste
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };
    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 3. Prevent Keyboard Shortcuts for Developer Tools and Copying
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block F12 (Inspect Element)
      if (e.key === 'F12') {
        e.preventDefault();
      }

      // Block Ctrl+Shift+I / Cmd+Option+I (Inspect Element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
      }

      // Block Ctrl+Shift+J / Cmd+Option+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
      }

      // Block Ctrl+Shift+C / Cmd+Option+C (Inspect Element selection mode)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
      }

      // Block Ctrl+U / Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
      }

      // Block Ctrl+C / Cmd+C (Copy)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
      }
    };

    // Prevent text selection globally via CSS injection for robustness
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `;
    document.head.appendChild(style);

    // Attach Event Listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function when component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('keydown', handleKeyDown);
      document.head.removeChild(style);
    };
  }, []);

  // =========================================================
  // SCROLL WIDGET LOGIC
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingWidgets(true);
      } else {
        setShowFloatingWidgets(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BrowserRouter>
      <div className="bg-luxury-bg text-white min-h-screen font-sans selection:bg-luxury-gold selection:text-black">
        
        <Header />

        <main>
          <Routes>
            {/* ========================================================= */}
            {/* FULL SINGLE PAGE WEBSITE - ALL SECTIONS STACKED TOGETHER  */}
            {/* ========================================================= */}
            <Route path="/" element={
              <div className="flex flex-col w-full overflow-x-hidden">
                <div id="main-home"><Home /></div>
                <div id="main-about"><About /></div>
                <div id="main-services"><Services /></div>
                <div id="main-categories"><Categories /></div>
                <div id="main-gallery"><Escorts /></div>
                <div id="main-contact"><Contact /></div>
              </div>
            } />

            {/* Dynamic Service Details */}
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/service/:id" element={<ServiceDetail />} />

            {/* Location SEO Landing Pages (Kept separate intentionally) */}
            <Route path="/dehradun" element={<Dehradun />} />
            <Route path="/bangalore" element={<Bangalore />} />
            <Route path="/lucknow" element={<Lucknow />} />
            <Route path="/hyderabad" element={<Hyderabad />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Action Widgets */}
        <AnimatePresence>
          {showFloatingWidgets && (
            <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={scrollToTop}
                className="bg-luxury-card/90 backdrop-blur-md border border-luxury-gold/30 text-luxury-gold p-3.5 rounded-full hover:bg-luxury-gold hover:text-black transition-colors duration-250 hidden sm:flex items-center justify-center shadow-xl cursor-pointer"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="tel:9996265679"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="bg-gradient-to-r from-luxury-gold to-rose-500 text-white font-bold p-4 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Phone className="w-5 h-5 fill-white text-white" />
              </motion.a>

              <motion.a
                href="https://wa.me/919996265679"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="bg-[#25D366] text-white p-4 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba56] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </motion.a>
            </div>
          )}
        </AnimatePresence>

        {/* Mobile Bottom Bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0d14]/95 backdrop-blur-md border-t border-luxury-gold/30 grid grid-cols-2 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
          <a href="tel:9996265679" className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-luxury-gold to-rose-500 text-white font-sans font-black text-xs uppercase tracking-widest">
            <Phone className="w-4 h-4 fill-white text-white" />
            <span>Call Hostess</span>
          </a>
          <a href="https://wa.me/919996265679" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-emerald-600 text-white font-sans font-black text-xs uppercase tracking-widest">
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}