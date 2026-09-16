"use client";
import { useI18n } from "..\/lib\/i18n";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <motion.div 
      className="flex gap-1 bg-glass-bg rounded-full p-1 border border-glass-border backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {(["ru", "ro"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
            lang === l
              ? "bg-cyan text-background"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </motion.div>
  );
}
