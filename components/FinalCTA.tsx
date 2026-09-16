"use client";
import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n";
import PreOrderForm from "./PreOrderForm";

export default function FinalCTA() {
  const { t } = useI18n();

  return (
    <section id="specs" className="py-40 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          {t("cta_title")}<br />{t("cta_title_2")}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-xl mb-12 max-w-2xl mx-auto"
        >
          {t("cta_desc")}
        </motion.p>
        
        <PreOrderForm />
      </div>
    </section>
  );
}