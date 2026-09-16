"use client";
import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { sendOrder } from "../lib/telegram";

export default function PreOrderForm() {
  const { t } = useI18n();
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [quantity, setQuantity] = useState("1");
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (phone.length < 6) {
      setError("Введите корректный номер телефона");
      setLoading(false);
      return;
    }

    const success = await sendOrder(name, phone, city, quantity);

    if (success) {
      setSubmitted(true);
    } else {
      setError("Ошибка отправки. Попробуйте позже.");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center p-12 bg-gradient-to-br from-glass-bg to-glass-bg/50 rounded-3xl border border-glass-border backdrop-blur-xl">
        <div className="w-20 h-20 bg-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-3 text-white">Спасибо за заказ!</h3>
        <p className="text-text-secondary">Мы перезвоним вам в течение 15 минут.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("form_name") || "Ваше имя"}
        className="w-full px-6 py-4 rounded-xl bg-glass-bg border border-glass-border text-white placeholder-text-muted focus:border-cyan focus:outline-none transition-all"
        required
      />

      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+373 (__) ___-___"
        className="w-full px-6 py-4 rounded-xl bg-glass-bg border border-glass-border text-white placeholder-text-muted focus:border-cyan focus:outline-none transition-all"
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Город"
          className="w-full px-6 py-4 rounded-xl bg-glass-bg border border-glass-border text-white placeholder-text-muted focus:border-cyan focus:outline-none transition-all"
        />
        
        <select
  value={quantity}
  onChange={(e) => setQuantity(e.target.value)}
  className="w-full px-6 py-4 rounded-xl bg-glass-bg border border-glass-border text-white focus:border-cyan focus:outline-none transition-all cursor-pointer"
>
  <option value="1">1 шт. — $125</option>
  <option value="2">2 шт. — $250</option>
  <option value="3">3 шт. — $360 (скидка 4%)</option>
  <option value="5">5 шт. — $550 (опт, скидка 12%)</option>
</select>
      </div>

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-cyan to-blue font-display font-bold text-black hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all duration-300 disabled:opacity-50 text-lg"
      >
        {loading ? "Отправка..." : (t("hero_cta_primary") || "ЗАКАЗАТЬ")} →
      </button>

      <p className="text-xs text-text-muted text-center">
        {t("form_privacy") || "Нажимая кнопку, вы соглашаетесь с обработкой данных"}
      </p>
    </form>
  );
}