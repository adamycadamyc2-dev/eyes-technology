"use client";
import { useState } from "react";
import { useI18n } from "../lib/i18n";

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: t("faq_q1"),
      a: t("faq_a1")
    },
    {
      q: t("faq_q2"),
      a: t("faq_a2")
    },
    {
      q: t("faq_q3"),
      a: t("faq_a3")
    },
    {
      q: t("faq_q4"),
      a: t("faq_a4")
    },
    {
      q: t("faq_q5"),
      a: t("faq_a5")
    },
    {
      q: t("faq_q6"),
      a: t("faq_a6")
    },
    {
      q: t("faq_q7"),
      a: t("faq_a7")
    },
    {
      q: t("faq_q8"),
      a: t("faq_a8")
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 max-w-4xl mx-auto">
      <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-8">
        {t("faq_title")}
      </h2>
      <p className="text-center text-text-secondary mb-16">
        {t("faq_subtitle")}
      </p>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="border border-glass-border rounded-2xl overflow-hidden bg-glass-bg/30 backdrop-blur-sm hover:bg-glass-bg/50 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex justify-between items-center text-left"
            >
              <span className="font-display text-lg font-medium text-text-primary">
                {faq.q}
              </span>
              <span className="text-cyan text-2xl ml-4">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            
            {openIndex === i && (
              <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}