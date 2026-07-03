import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data';

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-luxury-bg relative overflow-hidden border-t border-luxury-gold/10"
    >
      {/* Decorative Gold Rings overlay */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-luxury-gold/[0.01] rounded-full border border-luxury-gold/5 pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-luxury-gold/[0.02] rounded-full border border-luxury-gold/5 pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-luxury-gold uppercase">
            Sophisticated Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Premium Call Girls <br className="sm:hidden" />
            <span className="text-luxury-gold">Service in Dehradun</span>
          </h2>
          <div className="h-[1px] w-24 bg-luxury-gold mx-auto my-6" />
          <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            From premier guest accommodations in Dehradun's prime resorts to personal excursions, 
            our companions provide the quintessential luxury touch and delightful charm you deserve.
          </p>
        </div>

        {/* Alternating Services Layout */}
        <div className="space-y-20">
          {servicesData.map((service, idx) => {
            const isLuckyEven = idx % 2 === 0;
            return (
              <div
                id={`service-block-${idx}`}
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isLuckyEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Block Column */}
                <div
                  className={`col-span-1 lg:col-span-6 ${
                    isLuckyEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-2xl border border-luxury-gold/20 shadow-xl bg-luxury-card">
                    {/* Shadow border overlay */}
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-luxury-gold to-[#e6be75] rounded-2xl blur-md opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none" />
                    
                    {/* Grayscale container */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-luxury-card rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-750 scale-102 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-40 group-hover:opacity-10 transition-opacity animate-fade-in" />
                    </div>
                  </div>
                </div>

                {/* Text Block Column */}
                <div
                  className={`col-span-1 lg:col-span-6 space-y-6 ${
                    isLuckyEven ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
                  }`}
                >
                  <span className="font-sans text-xs font-bold text-luxury-gold uppercase tracking-[0.2em]">
                    Service Category 0{idx + 1}
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-3.5xl font-extrabold text-white">
                    {service.title}
                  </h3>

                  <p className="font-sans text-base text-zinc-300 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3 font-sans text-sm text-zinc-400">
                    {service.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 shrink-0">
                          <Check className="w-3 h-3 text-luxury-gold" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      id={`service-detail-link-${idx}`}
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 bg-[#220810]/40 text-white hover:text-luxury-gold font-sans text-xs font-black tracking-widest uppercase py-3 px-5 rounded-lg border border-luxury-gold/30 hover:border-luxury-gold transition-all duration-200 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 text-luxury-gold" />
                    </Link>

                    <a
                      id={`service-book-${idx}`}
                      href={`https://wa.me/919996265679?text=Hi%2C%20I%20am%20interested%20in%20the%20"${encodeURIComponent(service.title)}"%20service%20in%20Dehradun.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-luxury-gold to-yellow-600 hover:brightness-110 text-black font-sans text-xs font-black tracking-widest uppercase py-3 px-5 rounded-lg transition-all duration-200"
                    >
                      <span>Reserve Service</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}