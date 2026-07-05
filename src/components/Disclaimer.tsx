import React, { useEffect } from 'react';

export default function Disclaimer() {
  // यह सुनिश्चित करता है कि जब पेज खुले, तो वह हमेशा ऊपर (Top) से शुरू हो
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-luxury-bg text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-luxury-gold uppercase block">
            LEGAL INFORMATION
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Disclaimer
          </h1>
          <div className="h-[2px] w-16 bg-luxury-gold mx-auto" />
        </div>

        {/* Content Box (0% Changes to User Content) */}
        <div className="bg-luxury-card/50 border border-luxury-gold/15 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Disclaimer</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              This website may have links to other websites that are not managed by us and are provided for general information purposes only. By accessing and using this website. You acknowledge and agree to the terms outlined in this disclaimer.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Information Accuracy</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              We strive to keep all information on this website accurate and up to date. However, we make no guarantees regarding their completeness or reliability. or accuracy of the content. The information may be changed, amended or removed from time to time without prior notice.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Personal Responsibility</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              Visitors are responsible for their own decisions when using this website. Any actions taken based on the information provided are at the user's own discretion and risk.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Third-Party Links</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              This website may include links to other websites operated by third parties. We do not own, control, or approve the content, products, services, or rules on other websites, and we are not responsible for what they do or say.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Privacy</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              We respect the privacy of our visitors. Any information you send through our contact form email is confidential. or other channels is handled carefully and follows our Privacy Policy. We do not knowingly disclose personal information except where required by applicable law.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Disclaimer</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              All content on this website is intended to be used for informational purposes only. By visiting and using this website. By using this site, you accept the terms and conditions presented in this disclaimer.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Accuracy of Information</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              We try to keep the information updated on this website accurate and up to date. We cannot promise that it is complete, reliable, or always correct.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Individual Liability</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              Each visitor to this website is fully liable for any decisions made while using the website. Any actions taken based on the information available are done at the individual's discretion and liability.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Links to Third-Party Sites</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              This website may link to other websites. These third-party sites are not owned or controlled by us, and we have no control over the information, products, or services they provide.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Privacy</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              We respect your privacy. Any information you send through contact forms or email will be handled carefully and kept in line with our Privacy Policy.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Website Availability</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              We try to keep this website available as much as possible, but we cannot promise it will always be up. We are not responsible for downtime, technical problems, maintenance, or other events beyond our control.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Intellectual Property</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              You may not change, use, or copy anything on this website without the owner’s permission unless we say otherwise. All text, images, logos, and other content on this site belong to the website owner. You may not copy, share, or reuse any material without written permission.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Limitation of Liability</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              As allowed by law, we are not responsible for any losses or damages from using, or not being able to use, this website.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Changes to This Disclaimer</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              We reserve the right to modify or change this disclaimer from time to time without any prior notice. Your continued use of this website following any changes made will imply that you agree to the updated disclaimer.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-bold text-luxury-gold">Contact Us</h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              If you have any queries related to the disclaimer, please feel free to contact us. Please contact us using the Contact Us page or the contact details on this website.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}