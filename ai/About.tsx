import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-luxury-bg relative overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-luxury-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-luxury-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Removed 'items-start' to allow the left column to stretch to the full height of the text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Two Full-Size Images (Top & Bottom) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full z-10">
            
            {/* 1st Image (Top - Sticky while scrolling) */}
            <div className="relative group w-full lg:sticky lg:top-28 mb-12">
              <div className="absolute -inset-2 bg-luxury-gold rounded-2xl blur-xl opacity-20 transition duration-1000 group-hover:opacity-30"></div>
              
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-luxury-card aspect-[4/5] shadow-2xl">
                
                {/* 100% SECURE Badge */}
                <div className="absolute top-0 right-0 bg-luxury-gold text-white font-sans text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-bl-xl z-20 shadow-lg">
                  100% Secure
                </div>

                <img
                  src="/Call girls in dehradun.png" // Updated to local .png image
                  alt="Elegant Luxury Model Portrait"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-750 ease-out scale-102 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/90 via-[#0a0d14]/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <p className="font-serif text-lg text-luxury-gold font-bold">VIP Hospitality & Privacy</p>
                  <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed">Carefully vetted models ensuring pristine standards of elegance.</p>
                </div>
              </div>
            </div>

            {/* 2nd Image (Bottom of the left column) */}
            <div className="relative group w-full mt-auto hidden lg:block pb-2">
              <div className="absolute -inset-2 bg-luxury-gold rounded-2xl blur-xl opacity-20 transition duration-1000 group-hover:opacity-30"></div>
              
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-luxury-card aspect-[4/5] shadow-2xl">
                <img
                  src="/High class dehradun escort.png" // Second Local Image
                  alt="Discreet Escort Companionship"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-750 ease-out scale-102 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/90 via-[#0a0d14]/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <p className="font-serif text-lg text-luxury-gold font-bold">Elite Companionship</p>
                  <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed">Safe, reliable, and entirely discreet experience.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Text Description */}
          <div className="lg:col-span-7 flex flex-col space-y-10 pb-4">
            
            {/* Header Section */}
            <div className="space-y-4">
              <span className="font-sans text-[10px] font-black tracking-[0.3em] text-luxury-gold uppercase block">
                ABOUT US
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-[1.1]">
                Premium Dehradun <br />
                <span className="text-zinc-400">Call Girls</span>
              </h2>
              {/* Red Line Divider */}
              <div className="h-[2px] w-12 bg-luxury-gold mt-6" />
            </div>

            {/* Intro Paragraphs */}
            <div className="space-y-4 font-sans text-[13px] sm:text-sm text-zinc-300 font-light leading-relaxed">
              <p>
                Welcome to our premium Dehradun call girls. We bring together professionalism, privacy, and excellent companionship to create a refined experience.
              </p>
              <p>
                We work hard to provide friendliness. Respectful companions for clients who want to enjoy time with smart and confident people in Dehradun.
              </p>
              <p>
                Our goal is to give you a reliable and discreet service. We always focus on your comfort, confidentiality, and satisfaction.
              </p>
              <p>
                Whether you are visiting Dehradun for business, a holiday, or a special occasion. We work hard to make your time pleasant and memorable with companionship that matches your preferences.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-luxury-gold">Our Commitment</h3>
              <div className="space-y-4 font-sans text-[13px] sm:text-sm text-zinc-300 font-light leading-relaxed">
                <p>We believe that excellent companionship is built on trust, mutual respect, and professionalism. We keep every interaction private so your information is protected during booking and while you are with our companions.</p>
                <p>Our support team is here to help with bookings, schedules, and general questions. We offer quick, polite service at every step.</p>
              </div>
            </div>

            {/* Premium Companionship */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-luxury-gold">Premium Companionship</h3>
              <div className="space-y-4 font-sans text-[13px] sm:text-sm text-zinc-300 font-light leading-relaxed">
                <p>Our companions are selected for their confidence, personality, communication skills, and professional attitude. They are friendly and neat. They can go with clients to parties and private events.</p>
                <p>We can get a person to accompany you. This might be for dinner dates. Or work events. Private parties. Hotel stays. Weekend trips. Or city tours. We pick the person who fits what you want.</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4 pt-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-luxury-gold">Why Choose Us?</h3>
              <p className="font-sans text-[13px] sm:text-sm text-zinc-300 font-light leading-relaxed">
                Our reputation is built on providing a professional and dependable experience. Our clients select us because we concentrate on:
              </p>

              {/* 2-Column Grid for Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2 pb-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <p className="font-sans text-[12px] sm:text-[13px] font-bold text-white">Complete privacy and confidentiality</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <p className="font-sans text-[12px] sm:text-[13px] font-bold text-white">Professional customer support</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <p className="font-sans text-[12px] sm:text-[13px] font-bold text-white">Easy and convenient booking process</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <p className="font-sans text-[12px] sm:text-[13px] font-bold text-white">Elegant and well-presented companions</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <p className="font-sans text-[12px] sm:text-[13px] font-bold text-white">Reliable service with customer</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                  <p className="font-sans text-[12px] sm:text-[13px] font-bold text-white">Respectful and discreet communication</p>
                </div>
              </div>

              <p className="font-sans text-[13px] sm:text-sm text-zinc-300 font-light leading-relaxed">
                We know each client likes different things. We try to give a custom experience. We also keep high standards of being professional.
              </p>
            </div>

            {/* Privacy Comes First */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-luxury-gold">Privacy Comes First</h3>
              <div className="space-y-4 font-sans text-[13px] sm:text-sm text-zinc-300 font-light leading-relaxed">
                <p>Confidentiality is one of our core values. All inquiries, bookings, and personal details shared with us are handled with the utmost care. Our commitment to discretion allows clients to enjoy a comfortable experience with complete peace of mind.</p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-luxury-gold">Our Vision</h3>
              <div className="space-y-4 font-sans text-[13px] sm:text-sm text-zinc-300 font-light leading-relaxed">
                <p>Our goal is to become one of the most trusted names for good companionship in Dehradun. We do this by providing reliable service, staying professional, and building strong trust with our clients.</p>
                <p>We are constantly working to improve our call girl services. We want every experience to show quality, elegance, and respect.</p>
              </div>
            </div>

            {/* Bottom Link */}
            <div className="pt-4">
              <a
                id="about-explore-btn"
                href="#main-gallery"
                className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase text-luxury-gold hover:text-white transition-colors duration-200 group"
              >
                <span>View Elite Companions Roster</span>
                <span className="transform group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}