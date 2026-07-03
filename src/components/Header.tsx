// import React, { useState, useEffect } from 'react';
// import { Menu, X, Phone, ChevronDown } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false); 
  
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // ALL LINKS NOW POINT TO HASH IDs ON THE SINGLE PAGE
//   const menuItems = [
//     { name: 'Home', path: '/', hash: '#main-home' },
//     { name: 'About', path: '/', hash: '#main-about' },
//     { name: 'Services', path: '/', hash: '#main-services' },
//     { name: 'Categories', path: '/', hash: '#main-categories' },
//     { name: 'VIP Gallery', path: '/', hash: '#main-gallery' },
//     { name: 'FAQ', path: '/', hash: '#faq' }, // FAQ is inside Home.tsx
//     { name: 'Contact', path: '/', hash: '#main-contact' },
//   ];

//   const locationsList = [
//     { name: 'Dehradun', path: '/dehradun' },
//     { name: 'Bangalore', path: '/bangalore' },
//     { name: 'Hyderabad', path: '/hyderabad' },
//     { name: 'Lucknow', path: '/lucknow' },
//   ];

//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, path: string, hash: string) => {
//     e.preventDefault();
//     setIsOpen(false);
//     setIsLocationMenuOpen(false);

//     if (location.pathname !== path) {
//       navigate(path);
//       if (hash) {
//         setTimeout(() => {
//           const el = document.querySelector(hash);
//           if (el) {
//             const headerOffset = 80;
//             const elementPosition = el.getBoundingClientRect().top;
//             const offsetPosition = elementPosition + window.scrollY - headerOffset;
//             window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//           }
//         }, 180);
//       } else {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }
//     } else {
//       if (hash) {
//         const el = document.querySelector(hash);
//         if (el) {
//           const headerOffset = 80;
//           const elementPosition = el.getBoundingClientRect().top;
//           const offsetPosition = elementPosition + window.scrollY - headerOffset;
//           window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//         }
//       } else {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0d14]/95 backdrop-blur-md border-b border-luxury-gold/30 shadow-lg' : 'bg-[#0a0d14]/70 backdrop-blur-sm border-b border-white/10'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
          
//           <div className="flex-shrink-0 flex items-center">
//             <a href="#" onClick={(e) => handleNavClick(e, '/', '#main-home')} className="group flex items-center gap-2.5">
//               <img src="/TCG logo.png" alt="Top Cute Girls Logo" className="w-[42px] h-[42px] shrink-0 object-contain" />
//               <div className="flex flex-col items-start gap-0">
//                 <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-luxury-gold hover:opacity-90 transition-opacity whitespace-nowrap">TOP CUTE GIRLS</span>
//                 <span className="font-sans text-[10px] tracking-[0.25em] text-zinc-400 uppercase">Premium Agency</span>
//               </div>
//             </a>
//           </div>

//           <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
//             {menuItems.map((item, index) => {
//               if (index === 4) { // Insert Location Dropdown before VIP Gallery
//                 return (
//                   <React.Fragment key="locations-dropdown">
//                     <div className="relative group py-2" onMouseEnter={() => setIsLocationMenuOpen(true)} onMouseLeave={() => setIsLocationMenuOpen(false)}>
//                       <button className="flex items-center gap-1 font-sans text-sm font-medium text-white/85 hover:text-luxury-gold transition-colors cursor-pointer">
//                         Locations <ChevronDown className="w-4 h-4" />
//                         <span className="absolute bottom-0 left-0 h-[2px] bg-luxury-gold transition-all duration-300 w-0 group-hover:w-full" />
//                       </button>
//                       {isLocationMenuOpen && (
//                         <div className="absolute top-full left-0 mt-0 w-48 bg-[#141925] border border-luxury-gold/20 rounded-xl shadow-xl overflow-hidden py-2">
//                           {locationsList.map((loc) => (
//                             <button key={loc.name} onClick={(e) => handleNavClick(e, loc.path, '')} className="w-full text-left px-4 py-2.5 text-sm font-sans text-zinc-300 hover:text-luxury-gold hover:bg-white/5 transition-colors cursor-pointer">
//                               {loc.name}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                     <a key={item.name} href="#" onClick={(e) => handleNavClick(e, item.path, item.hash)} className={`font-sans text-sm font-medium transition-colors duration-200 relative group py-2 ${location.hash === item.hash ? 'text-luxury-gold' : 'text-white/85 hover:text-luxury-gold'}`}>
//                       {item.name}
//                       <span className={`absolute bottom-0 left-0 h-[2px] bg-luxury-gold transition-all duration-300 ${location.hash === item.hash ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//                     </a>
//                   </React.Fragment>
//                 );
//               }
//               return (
//                 <a key={item.name} href="#" onClick={(e) => handleNavClick(e, item.path, item.hash)} className={`font-sans text-sm font-medium transition-colors duration-200 relative group py-2 ${location.hash === item.hash || (location.pathname === '/' && !location.hash && item.name === 'Home') ? 'text-luxury-gold' : 'text-white/85 hover:text-luxury-gold'}`}>
//                   {item.name}
//                   <span className={`absolute bottom-0 left-0 h-[2px] bg-luxury-gold transition-all duration-300 ${location.hash === item.hash || (location.pathname === '/' && !location.hash && item.name === 'Home') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//                 </a>
//               );
//             })}
//           </nav>

//           <div className="hidden md:flex items-center">
//             <a href="tel:9996265679" className="inline-flex items-center gap-2 bg-gradient-to-r from-luxury-gold to-rose-500 hover:brightness-110 font-sans text-xs font-black tracking-widest uppercase text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300">
//               <Phone className="w-4 h-4 fill-white text-white" />
//               <span>+91-9996265679</span>
//             </a>
//           </div>

//           <div className="flex md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-luxury-gold p-2">
//               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={`md:hidden fixed top-20 left-0 w-full bg-[#0a0d14]/95 border-b border-luxury-gold/30 shadow-2xl backdrop-blur-lg transition-all duration-300 overflow-y-auto ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'}`}>
//         <div className="px-4 space-y-4">
//           {menuItems.map((item, index) => (
//             <React.Fragment key={`mob-${item.name}`}>
//               {index === 4 && (
//                 <div className="px-4 py-2">
//                   <p className="text-sm font-bold text-luxury-gold uppercase tracking-widest mb-3">Locations</p>
//                   <div className="grid grid-cols-2 gap-2 pl-2 border-l border-luxury-gold/30">
//                     {locationsList.map((loc) => (
//                       <button key={loc.name} onClick={(e) => handleNavClick(e, loc.path, '')} className="text-left text-sm text-zinc-400 hover:text-luxury-gold py-2 transition-colors">
//                         {loc.name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               <a href="#" onClick={(e) => handleNavClick(e, item.path, item.hash)} className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-350 hover:text-luxury-gold hover:bg-[#141925]/55 transition-all duration-200 border-l-2 border-transparent hover:border-luxury-gold">
//                 {item.name}
//               </a>
//             </React.Fragment>
//           ))}
//           <div className="pt-4 px-4">
//             <a href="tel:9996265679" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-luxury-gold to-rose-500 font-sans text-xs font-black tracking-widest uppercase text-white py-3 px-6 rounded-full shadow-lg">
//               <Phone className="w-5 h-5 fill-white text-white" />
//               <span>Call +91-9996265679</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ALL LINKS NOW POINT TO HASH IDs ON THE SINGLE PAGE
  const menuItems = [
    { name: 'Home', path: '/', hash: '#main-home' },
    { name: 'About', path: '/', hash: '#main-about' },
    { name: 'Services', path: '/', hash: '#main-services' },
    { name: 'Categories', path: '/', hash: '#main-categories' },
    { name: 'VIP Gallery', path: '/', hash: '#main-gallery' },
    { name: 'FAQ', path: '/', hash: '#faq' },
    { name: 'Contact', path: '/', hash: '#main-contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, path: string, hash: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== path) {
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 180);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0d14]/95 backdrop-blur-md border-b border-luxury-gold/30 shadow-lg' : 'bg-[#0a0d14]/70 backdrop-blur-sm border-b border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={(e) => handleNavClick(e, '/', '#main-home')} className="group flex items-center gap-2.5">
              <img src="/TCG logo.png" alt="Top Cute Girls Logo" className="w-[42px] h-[42px] shrink-0 object-contain" />
              <div className="flex flex-col items-start gap-0">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-luxury-gold hover:opacity-90 transition-opacity whitespace-nowrap">TOP CUTE GIRLS</span>
                <span className="font-sans text-[10px] tracking-[0.25em] text-zinc-400 uppercase">Premium Agency</span>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href="#" 
                onClick={(e) => handleNavClick(e, item.path, item.hash)} 
                className={`font-sans text-sm font-medium transition-colors duration-200 relative group py-2 ${location.hash === item.hash || (location.pathname === '/' && !location.hash && item.name === 'Home') ? 'text-luxury-gold' : 'text-white/85 hover:text-luxury-gold'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-luxury-gold transition-all duration-300 ${location.hash === item.hash || (location.pathname === '/' && !location.hash && item.name === 'Home') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:9996265679" className="inline-flex items-center gap-2 bg-gradient-to-r from-luxury-gold to-rose-500 hover:brightness-110 font-sans text-xs font-black tracking-widest uppercase text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300">
              <Phone className="w-4 h-4 fill-white text-white" />
              <span>+91-9996265679</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-luxury-gold p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed top-20 left-0 w-full bg-[#0a0d14]/95 border-b border-luxury-gold/30 shadow-2xl backdrop-blur-lg transition-all duration-300 overflow-y-auto ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 space-y-4">
          {menuItems.map((item) => (
            <a 
              key={`mob-${item.name}`} 
              href="#" 
              onClick={(e) => handleNavClick(e, item.path, item.hash)} 
              className="block px-4 py-3 rounded-lg text-base font-medium text-zinc-350 hover:text-luxury-gold hover:bg-[#141925]/55 transition-all duration-200 border-l-2 border-transparent hover:border-luxury-gold"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a href="tel:9996265679" className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-luxury-gold to-rose-500 font-sans text-xs font-black tracking-widest uppercase text-white py-3 px-6 rounded-full shadow-lg">
              <Phone className="w-5 h-5 fill-white text-white" />
              <span>Call +91-9996265679</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}