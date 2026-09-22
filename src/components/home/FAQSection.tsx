"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "1. What is Trimix IPTV?",
    answer: (
      <>
        Trimix IPTV is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
        <Link
          href="/channels"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
        >
          live TV channels
        </Link>{" "}
        and{" "}
        <a
          href="#pricing"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors cursor-pointer"
        >
          IPTV subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "2. Do I need a subscription to use Trimix IPTV?",
    answer: (
      <>
        Yes, a subscription is required. However, we offer a{" "}
        <a
          href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Trimix%20IPTV."
          target="_blank"
          rel="noreferrer"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
        >
          free trial
        </a>{" "}
        so you can test the service before committing to our{" "}
        <a
          href="#pricing"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors cursor-pointer"
        >
          subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "3. What devices are compatible with Trimix IPTV?",
    answer: (
      <>
        Trimix IPTV works on Android TV, Firestick, Smart TVs, Android phones, tablets, and apps like TiviMate and IPTV Smarters. Follow our step-by-step{" "}
        <Link
          href="/installation"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
        >
          installation guides
        </Link>{" "}
        to get started.
      </>
    ),
  },
  {
    id: 4,
    question: "4. Can I watch on multiple devices at the same time?",
    answer: (
      <>
        Yes, we offer multi-device support. You can choose an{" "}
        <a
          href="#pricing"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors cursor-pointer"
        >
          IPTV subscription plan
        </a>{" "}
        that allows streaming on more than one device simultaneously. Perfect for families or shared accounts.
      </>
    ),
  },
  {
    id: 5,
    question: "5. Can I watch sports on Trimix IPTV?",
    answer: (
      <>
        Absolutely. We offer a wide selection of live sports channels, including major leagues and international events. Explore our full{" "}
        <Link
          href="/channels"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
        >
          channels catalog
        </Link>
        .
      </>
    ),
  },
  {
    id: 6,
    question: "6. What payment methods do you accept?",
    answer: (
      <>
        We accept PayPal, cryptocurrency (such as Bitcoin), credit cards, and instant bank transfers for quick and secure payments. Contact our{" "}
        <Link
          href="/contact"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
        >
          support team
        </Link>{" "}
        for any payment inquiries.
      </>
    ),
  },
  {
    id: 7,
    question: "7. What kind of content is included?",
    answer: (
      <>
        The service includes live TV channels, sports, movies, TV series, kids&apos; content, international channels, and more – all in HD or 4K quality. Learn more in our{" "}
        <Link
          href="/blog"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
        >
          IPTV articles &amp; guides
        </Link>
        .
      </>
    ),
  },
  {
    id: 8,
    question: "8. Do I need a VPN?",
    answer: (
      <>
        A VPN is not required but is recommended in some regions to ensure unrestricted access and added privacy. Read our{" "}
        <Link
          href="/faq"
          className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
        >
          FAQ knowledge base
        </Link>{" "}
        for further setup details.
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#060813] text-white relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight animate-fade-up">
            Frequently Asked Questions<br />(FAQ)
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Find answers to common questions about our IPTV service, including{" "}
            <a
              href="#pricing"
              className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors cursor-pointer"
            >
              subscriptions
            </a>
            ,{" "}
            <Link
              href="/installation"
              className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
            >
              devices
            </Link>
            , streaming quality, payments, and more. If you need further help, our{" "}
            <Link
              href="/contact"
              className="text-[#00F0FF] font-semibold hover:text-[#A855F7] transition-colors"
            >
              support team
            </Link>{" "}
            is here for you.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4 mx-auto animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? "border-[#00F0FF]/50 bg-[#0c1020] shadow-[0_0_20px_rgba(0,240,255,0.12)]" : "border-white/10 glass-panel hover:border-[#00F0FF]/30"}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left gap-4 bg-transparent cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isOpen ? "text-[#00F0FF]" : "text-stone-400"}`} />
                    <h3 className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-300 ${isOpen ? "text-[#00F0FF]" : "text-white"}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#00F0FF]" : "text-stone-500"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-stone-300 leading-relaxed bg-transparent border-t border-white/5 pt-4 mt-1">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Knowledge Base */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#7C3AED] text-white font-bold text-xs sm:text-sm hover:from-[#7C3AED] hover:to-[#00F0FF] transition-all duration-300 shadow-[0_4px_15px_rgba(0,240,255,0.3)] hover:scale-105 active:scale-95"
          >
            <span>View Complete FAQ Knowledge Base</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
