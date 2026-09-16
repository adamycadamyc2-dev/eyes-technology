"use client";
import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n";
import { Camera, Mic, Headphones, Wifi, Touchpad, Battery } from "lucide-react";

export default function BentoFeatures() {
  const { t } = useI18n();
  
  const features = [
    { title: t("feature_camera"), desc: t("feature_camera_desc"), icon: Camera, col: "md:col-span-2" },
    { title: t("feature_ai"), desc: t("feature_ai_desc"), icon: Mic, col: "md:col-span-1" },
    { title: t("feature_audio"), desc: t("feature_audio_desc"), icon: Headphones, col: "md:col-span-1" },
    { title: t("feature_wifi"), desc: t("feature_wifi_desc"), icon: Wifi, col: "md:col-span-2" },
    { title: t("feature_control"), desc: t("feature_control_desc"), icon: Touchpad, col: "md:col-span-1" },
    { title: t("feature_battery"), desc: t("feature_battery_desc"), icon: Battery, col: "md:col-span-2" },
  ];

  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mb-16"
      >
        {t("features_title")}<br />{t("features_title_2")}
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, borderColor: "rgba(0, 240, 255, 0.3)" }}
            className={`${f.col} group relative p-8 rounded-3xl bg-glass-bg border border-glass-border backdrop-blur-xl transition-all duration-500`}
          >
            <f.icon className="w-8 h-8 text-cyan mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-display text-2xl font-bold mb-2">{f.title}</h3>
            <p className="text-text-secondary font-sans">{f.desc}</p>
            <div className="absolute inset-0 rounded-3xl bg-gradient-radial from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}