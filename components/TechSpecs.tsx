"use client";
import { motion } from "framer-motion";
import { useI18n } from "..\/lib\/i18n";

export default function TechSpecs() {
  const { t } = useI18n();
  
  const specs = [
    { label: t("spec_camera"), value: t("spec_camera_val") },
    { label: t("spec_ai"), value: t("spec_ai_val") },
    { label: t("spec_audio"), value: t("spec_audio_val") },
    { label: t("spec_wifi"), value: t("spec_wifi_val") },
    { label: t("spec_control"), value: t("spec_control_val") },
    { label: t("spec_chip"), value: t("spec_chip_val") },
    { label: t("spec_memory"), value: t("spec_memory_val") },
    { label: t("spec_battery"), value: t("spec_battery_val") },
    { label: t("spec_music"), value: t("spec_music_val") },
    { label: t("spec_video"), value: t("spec_video_val") },
    { label: t("spec_standby"), value: t("spec_standby_val") },
    { label: t("spec_weight"), value: t("spec_weight_val") },
    { label: t("spec_material"), value: t("spec_material_val") },
    { label: t("spec_os"), value: t("spec_os_val") },
  ];

  return (
    <section id="specs" className="py-32 px-6 bg-surface border-y border-glass-border">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mb-4"
        >
          {t("specs_title")}<br />{t("specs_title_2")}
        </motion.h2>
        
        <p className="text-center text-cyan font-mono text-lg mb-16">{t("comparison_desc")}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-glass-border rounded-2xl overflow-hidden border border-glass-border">
          {specs.map((spec, i) => (
            <div key={i} className="bg-background p-6 flex flex-col justify-between hover:bg-graphite transition-colors duration-300">
              <span className="font-mono text-xs text-text-muted tracking-widest mb-2">{spec.label}</span>
              <span className="font-display text-lg md:text-xl font-bold text-text-primary">{spec.value}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-text-muted text-xs mt-8 font-mono">{t("spec_disclaimer")}</p>
      </div>
    </section>
  );
}
