"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "..\/lib\/i18n";
import { Camera, Mic, Wifi, Shield, Battery } from "lucide-react";

export default function MagicInside() {
  const { t } = useI18n();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            {t("magic_title")}<br />{t("magic_title_2")}
          </motion.h2>
          
          <p className="mt-8 text-text-secondary text-lg leading-relaxed max-w-md">
            {t("magic_desc")}
          </p>
        </div>
        
        <div className="relative h-[700px] flex flex-col justify-center gap-4">
          <motion.div style={{ y: y1 }} className="p-6 rounded-2xl bg-graphite border border-glass-border flex items-center gap-4">
            <Camera className="text-cyan" /> <span className="font-mono text-sm">{t("spec_camera_val")}</span>
          </motion.div>
          <motion.div style={{ y: y2 }} className="p-6 rounded-2xl bg-graphite border border-glass-border flex items-center gap-4 ml-8">
            <Mic className="text-purple" /> <span className="font-mono text-sm">{t("spec_ai_val")}</span>
          </motion.div>
          <motion.div style={{ y: y3 }} className="p-6 rounded-2xl bg-graphite border border-glass-border flex items-center gap-4 ml-16">
            <Wifi className="text-cyan" /> <span className="font-mono text-sm">{t("spec_wifi_val")}</span>
          </motion.div>
          <motion.div style={{ y: y4 }} className="p-6 rounded-2xl bg-graphite border border-glass-border flex items-center gap-4 ml-8">
            <Battery className="text-text-secondary" /> <span className="font-mono text-sm">{t("spec_battery_val")}</span>
          </motion.div>
          <motion.div style={{ y: y5 }} className="p-6 rounded-2xl bg-graphite border border-glass-border flex items-center gap-4 ml-16">
            <Shield className="text-cyan" /> <span className="font-mono text-sm">{t("spec_material_val")}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
