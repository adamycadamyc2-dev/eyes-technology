"use client";
import { motion } from "framer-motion";

const comparison = [
  { feature: "Камера", mt5: "8 МП, 3280×2464", rayban: "12 МП, 1080p", winner: "mt5" },
  { feature: "ИИ-ассистент", mt5: "Hey Turbo (26 языков)", rayban: "Meta AI (ограничено)", winner: "mt5" },
  { feature: "Перевод", mt5: "26 языков в реальном времени", rayban: "Ограниченные языки", winner: "mt5" },
  { feature: "Вес", mt5: "35 г", rayban: "49 г", winner: "mt5" },
  { feature: "Батарея", mt5: "11 часов", rayban: "4 часа", winner: "mt5" },
  { feature: "Память", mt5: "64 ГБ", rayban: "32 ГБ", winner: "mt5" },
  { feature: "Wi-Fi", mt5: "Wi-Fi 6 dual-band", rayban: "Wi-Fi 5", winner: "mt5" },
  { feature: "Цена", mt5: "$149", rayban: "$299", winner: "mt5" },
];

export default function Comparison() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            MT5 ULTRA
          </h2>
          <p className="text-cyan font-mono text-lg">
            VS RAY-BAN META
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-px bg-glass-border rounded-3xl overflow-hidden border border-glass-border shadow-2xl">
          {/* Header */}
          <div className="bg-background p-6 font-mono text-xs text-text-muted tracking-widest">
            ХАРАКТЕРИСТИКА
          </div>
          <div className="bg-gradient-to-br from-cyan/20 to-blue/20 p-6 font-display font-bold text-cyan text-center">
            MT5 ULTRA
          </div>
          <div className="bg-background p-6 font-display font-bold text-text-secondary text-center">
            RAY-BAN
          </div>

          {/* Rows */}
          {comparison.map((item, i) => (
            <div key={i} className="contents">
              <div className="bg-background p-6 font-mono text-xs text-text-muted flex items-center">
                {item.feature}
              </div>
              <div className={`p-6 font-medium text-center ${item.winner === 'mt5' ? 'bg-cyan/5 text-cyan' : 'bg-background text-text-primary'}`}>
                {item.mt5}
              </div>
              <div className="bg-background p-6 text-text-secondary text-center">
                {item.rayban}
              </div>
            </div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-text-muted text-xs mt-8 font-mono"
        >
          * Данные основаны на официальных спецификациях производителей.
        </motion.p>
      </div>
    </section>
  );
}