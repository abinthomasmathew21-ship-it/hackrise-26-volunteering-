import React, { useState } from 'react';
import { FAQS } from '../data/rolesData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-red-600 font-mono">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-zinc-950">
            GOT QUESTIONS ABOUT VOLUNTEERING?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto">
            Everything you need to know about responsibilities, certificates, eligibility, and the 12-hour hackathon experience.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-white border border-zinc-200 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-zinc-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-zinc-500">
          Have more questions? Contact the organizing team via email at{' '}
          <a
            href="mailto:contact@orbinex.org"
            className="text-red-600 font-bold hover:underline"
          >
            contact@orbinex.org
          </a>{' '}
          or connect with µLearn MBCCET coordinators.
        </div>
      </div>
    </section>
  );
};
