import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ChevronRight, Star, Shield, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function Categories() {
  const curatedCategories = [
    { id: 1, title: 'Premium VIP Models', desc: 'Elite companions for high-end events and private meetings.', img: '/Dehradun call girls near me.webp', alt: 'Dehradun call girls near me' },
    { id: 2, title: 'Russian & International', desc: 'Exotic beauties from around the globe for a unique experience.', img: '/Call girl dehradun.webp', alt: 'Call girl dehradun' },
    { id: 3, title: 'College Girls', desc: 'Young, energetic, and fun-loving companions for your dates.', img: '/College Girls Call Girls.webp', alt: 'College Girls Call Girls' },
    { id: 4, title: 'Housewives', desc: 'Mature, passionate, and deeply understanding encounters.', img: '/Dehradun bhabhi call girl.webp', alt: 'Dehradun bhabhi call girl' },
    { id: 5, title: 'Travel Companions', desc: 'Perfect partners for your weekend getaways and business trips.', img: '/Escort dehradun.webp', alt: 'Escort dehradun' },
    { id: 6, title: 'Dinner Dates', desc: 'Sophisticated and articulate dates for corporate or private dinners.', img: '/Escort service dehradun.webp', alt: 'Escort service dehradun' },
  ];

  const featuredProfiles = [
    { id: 1, name: 'Aarohi', age: 22, stats: '34-26-34', img: '/Dehradun escort girl.webp', alt: 'Dehradun escort girl' },
    { id: 2, name: 'Kiara', age: 24, stats: '36-28-36', img: '/Punjabi Call Girls-optimized.webp', alt: 'Punjabi Call Girls' },
    { id: 3, name: 'Natasha', age: 23, stats: '34-24-34', img: '/Sexy Aunty for Sex-optimized.webp', alt: 'Sexy Aunty for Sex' },
    { id: 4, name: 'Priya', age: 21, stats: '32-26-34', img: '/call girl Dehradun bhabhi-optimized.webp', alt: 'call girl Dehradun bhabhi' },
  ];

  const ourServices = [
    { id: 1, title: 'In-Call Services', desc: 'Visit our luxurious and discreet private spaces for an unforgettable time.', img: '/Escorts in dehradun.webp', alt: 'Escorts in dehradun' },
    { id: 2, title: 'Out-Call Services', desc: 'We deliver premium companionship directly to your hotel or residence.', img: '/Call Girl Near Me in Dehradun-optimized.webp', alt: 'Call Girl Near Me in Dehradun' },
    { id: 3, title: 'Couples Massage', desc: 'Relaxing and intimate massage therapies for you and your partner.', img: '/Escorts dehradun-optimized.webp', alt: 'Escorts dehradun' },
  ];

  const memberships = [
    { id: 1, name: 'Silver Tier', price: '₹15,000', duration: 'Per Session', features: ['2 Hours Duration', '1 Premium Model', 'Discreet Meeting', 'Complimentary Drinks'] },
    { id: 2, name: 'Gold VIP', price: '₹30,000', duration: 'Overnight', features: ['Full Night Duration', 'Top Tier VIP Model', 'Priority Booking', 'Custom Outfits', 'Unrestricted Fun'], highlight: true },
    { id: 3, name: 'Diamond', price: '₹50,000', duration: 'Weekend', features: ['48 Hours Duration', 'International Model', 'Travel Escort', 'VIP Treatment'] },
  ];

  return (
    <div className="bg-[#0a0d14] text-white">
      <div className="sr-only">
        <h2>Dehradun call girl service - Call girl dehradun - Dehradun escort service</h2>
        <p>Providing premium escort service dehradun, Dehradun escort selections, and professional escorts in dehradun. Get trusted options for an independent escort dehradun or a luxury Dehradun escort girl encounter.</p>
        <p>Connect instantly via our official Dehradun call girl number, premium call girls number in dehradun, or save our dedicated Dehradun call girl WhatsApp number and Dehradun call girl mobile number for immediate bookings.</p>
      </div>

      <section className="relative py-20 bg-[#0a0d14] border-b border-luxury-gold/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/5 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Companionship <span className="text-luxury-gold">Categories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm md:text-base"
          >
            Explore our diverse portfolio of elite companions, offering the finest choices for a premium Call girl dehradun or an exclusive Dehradun escort.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[#141925]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-luxury-gold mb-6">Tailored Options for Your Desires</h2>
          <p className="text-zinc-300 leading-relaxed mb-6 text-sm md:text-base">
            We understand that every gentleman has unique preferences when seeking a reliable Dehradun call girl service or top Dehradun call girls for premium outcall hospitality.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0a0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Curated Selections</h2>
            <div className="w-16 h-1 bg-luxury-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curatedCategories.map((category) => (
              <div key={category.id} className="bg-[#141925] border border-white/5 rounded-xl overflow-hidden group cursor-pointer hover:border-luxury-gold/50 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="h-56 overflow-hidden">
                  <img src={category.img} alt={category.alt} width="800" height="600" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-luxury-gold mb-2">{category.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{category.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0 bg-[#11151e] border-y border-luxury-gold/20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-gold mb-6">For the Discerning Gentleman</h2>
            <p className="text-zinc-300 mb-6 leading-relaxed">
              Experience signature companionship that transcends the ordinary with our elite roster of high class dehradun escort models.
            </p>
            <ul className="space-y-4 mb-8 text-sm text-zinc-400">
              <li className="flex items-center gap-3"><Shield className="text-luxury-gold w-5 h-5" /> 100% Verified & Discreet</li>
              <li className="flex items-center gap-3"><Star className="text-luxury-gold w-5 h-5" /> Top 1% Elite Models</li>
              <li className="flex items-center gap-3"><Clock className="text-luxury-gold w-5 h-5" /> 24/7 Availability</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
            <img src="/Dehradun Call Girls WhatsApp Number-optimized.webp" alt="Dehradun Call Girls WhatsApp Number" width="800" height="1000" loading="lazy" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Featured Profiles</h2>
            <div className="w-16 h-1 bg-luxury-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProfiles.map((profile) => (
              <div key={profile.id} className="bg-[#141925] rounded-xl overflow-hidden group border border-white/5">
                <div className="h-72 overflow-hidden relative">
                  <img src={profile.img} alt={profile.alt} width="600" height="800" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                    <p className="text-luxury-gold text-xs font-semibold tracking-widest uppercase mt-1">Age: {profile.age} • {profile.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Trust Block */}
          <div className="mt-12 bg-[#141925]/80 border border-luxury-gold/20 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-lg">
            <Shield className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold text-luxury-gold mb-3">How Verification Works</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Every companion in our elite roster undergoes a strict 3-step physical verification process. We verify government-issued ID for age confirmation, conduct in-person interviews to ensure 5-star hospitality standards, and guarantee that all portfolio photos are 100% accurate and current.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 bg-[#141925]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourServices.map((service) => (
              <div key={service.id} className="text-center group">
                <div className="w-full h-48 overflow-hidden rounded-xl mb-6">
                  <img src={service.img} alt={service.alt} width="800" height="600" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm px-4">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Features/Trust Section */}
      <section className="py-20 sm:py-24 bg-luxury-card border-b border-luxury-gold/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold/[0.02] rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-14 h-14 bg-luxury-gold/10 border border-luxury-gold/30 rounded-2xl flex items-center justify-center text-luxury-gold shadow-md">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                100% Private & Confidential
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                No identity checks logged and zero residual profiles. We protect standard client logs instantly from access, guaranteeing complete, seamless privacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-14 h-14 bg-luxury-gold/10 border border-luxury-gold/30 rounded-2xl flex items-center justify-center text-luxury-gold shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                Beautiful & Professional
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                Carefully chosen, charming models exhibiting five-star hospitality standards. Intelligent, multilingual conversation partners for gentlemen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-14 h-14 bg-luxury-gold/10 border border-luxury-gold/30 rounded-2xl flex items-center justify-center text-luxury-gold shadow-md">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                VIP Escort Service
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                Elite resort visits and premium mountain companionship across Dehradun. Specially customized escapes to Mussoorie and wellness hill spas.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0d14] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">VIP Memberships & Tariffs</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Transparent pricing for an absolutely premium experience with elite companions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {memberships.map((plan) => (
              <div key={plan.id} className={`rounded-2xl p-8 transition-all duration-300 ${plan.highlight ? 'bg-gradient-to-b from-[#1a1f2e] to-[#0a0d14] border-2 border-luxury-gold transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative' : 'bg-[#141925] border border-white/10 hover:border-luxury-gold/50'}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-luxury-gold text-black text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-black text-luxury-gold">{plan.price}</span>
                  <span className="text-zinc-500 text-sm block mt-1">{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                      <Star className="w-4 h-4 text-luxury-gold mr-3 shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}