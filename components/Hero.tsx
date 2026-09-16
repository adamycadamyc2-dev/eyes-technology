"use client";
import { motion } from "framer-motion";
import GlassesScene from "./GlassesScene";
import { useI18n } from "../lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen w-full flex flex-col overflow-hidden bg-background pt-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT LAYER */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 md:px-12 pt-8 pb-16">
        
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-block font-mono text-[10px] md:text-xs tracking-[0.4em] text-white/70 uppercase border border-white/20 rounded-full px-5 py-2.5 bg-black/40 backdrop-blur-md">
            {t("hero_label")}
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-display font-bold tracking-tight text-center mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: "1.05",
            maxWidth: "900px",
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}
        >
          <span className="block text-white">{t("hero_title_1")}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-500 to-purple">
            {t("hero_title_2")}
          </span>
        </motion.h1>

        {/* PRODUCT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-4xl -mt-8 mb-8"
          style={{
            filter: "drop-shadow(0 40px 80px rgba(0, 240, 255, 0.2))",
          }}
        >
          <GlassesScene />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-mono text-white/60 text-xs md:text-sm tracking-[0.25em] uppercase mb-10 text-center"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.9)",
          }}
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#order"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-full bg-white text-black font-display font-bold tracking-wide hover:bg-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 text-sm h-12 flex items-center"
          >
            {t("hero_cta_primary")} →
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-full bg-black/50 text-white border border-white/30 font-display font-medium tracking-wide hover:border-cyan/50 backdrop-blur-md transition-all duration-300 text-sm h-12 flex items-center"
          >
            {t("hero_cta_secondary")} ↓
          </motion.a>
        </motion.div>
      </div>

      {/* Tech specs bar */}
      <div className="relative z-20 border-t border-white/10 bg-black/60 backdrop-blur-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] md:text-xs font-mono text-white/50 tracking-[0.2em] uppercase">
          <span>{t("spec_ai_short")}</span>
          <span className="text-cyan/40 hidden md:inline">•</span>
          <span>{t("spec_camera_short")}</span>
          <span className="text-cyan/40 hidden md:inline">•</span>
          <span>{t("spec_translate_short")}</span>
          <span className="text-cyan/40 hidden md:inline">•</span>
          <span>{t("spec_wifi_short")}</span>
        </div>
      </div>
    </section>
  );
}