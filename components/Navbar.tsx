"use client";
import { motion } from "framer-motion";
import { useI18n } from "../lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useI18n();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-background/80 border-b border-glass-border"
    >
      {/* Logo */}
      <div className="flex flex-col">
        <div className="font-display text-xl font-bold tracking-tight text-text-primary">
          {t("brand")}
        </div>
        <div className="text-[10px] text-cyan font-mono tracking-wide">
          {t("tagline")}
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden lg:flex gap-8 text-xs font-medium text-text-secondary tracking-wide">
        <a href="#features" className="hover:text-cyan transition-colors duration-300">
          {t("nav_features")}
        </a>
        <a href="#technology" className="hover:text-cyan transition-colors duration-300">
          {t("nav_technology")}
        </a>
        <a href="#design" className="hover:text-cyan transition-colors duration-300">
          {t("nav_design")}
        </a>
        <a href="#specs" className="hover:text-cyan transition-colors duration-300">
          {t("nav_specs")}
        </a>
        <a href="#faq" className="hover:text-cyan transition-colors duration-300">
          {t("nav_faq")}
        </a>
      </div>

      {/* Actions */}
      <div className="flex gap-3 items-center">
        <LanguageSwitcher />
        <motion.a
          href="#order"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 rounded-full bg-text-primary text-background font-display font-medium tracking-wide hover:bg-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 text-xs"
        >
          {t("pre_order")}
        </motion.a>
      </div>
    </motion.nav>
  );
}