"use client";
import { createContext, useContext, useState } from "react";

type Language = "ru" | "ro";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  ru: {
    brand: "MT5 ULTRA",
    tagline: "Не хуже Ray-Ban. Лучше.",
    nav_features: "Возможности",
    nav_technology: "Технологии",
    nav_design: "Дизайн",
    nav_specs: "Характеристики",
    nav_faq: "FAQ",
    pre_order: "ПРЕДЗАКАЗ",
    hero_title_1: "УВИДЬ БУДУЩЕЕ.",
    hero_title_2: "НА СВОЁМ ЛИЦЕ.",
    hero_subtitle: "ИИ • AR • АУДИО • КАМЕРА • ЗДОРОВЬЕ",
    hero_cta_primary: "ПРЕДЗАКАЗАТЬ",
    hero_cta_secondary: "УЗНАТЬ БОЛЬШЕ",
    marquee: "ИИ • AR • АУДИО • КАМЕРА 8МП • WI-FI 6 • UV400 • IP65",
    features_title: "СОЗДАНО ДЛЯ",
    features_title_2: "ИСКЛЮЧИТЕЛЬНЫХ.",
    feature_camera: "КАМЕРА 8 МП POV",
    feature_camera_desc: "Фото 3280×2464, видео 1080p, электронная стабилизация.",
    feature_ai: "ИИ ПЕРЕВОДЧИК",
    feature_ai_desc: "Голосовой перевод на 26 языков в реальном времени.",
    feature_audio: "OPEN-EAR АУДИО",
    feature_audio_desc: "Динамики открытого типа + ENC шумоподавление.",
    feature_wifi: "WI-FI 6",
    feature_wifi_desc: "Двухдиапазонная быстрая передача данных.",
    feature_control: "УМНОЕ УПРАВЛЕНИЕ",
    feature_control_desc: "Сенсорная панель + кнопки + голос.",
    feature_battery: "11 ЧАСОВ",
    feature_battery_desc: "До 11 часов музыки, зарядный кейс 3000 мАч.",
    magic_title: "MT5 ULTRA",
    magic_title_2: "ТЕХНОЛОГИИ БУДУЩЕГО.",
    magic_desc: "Камера от первого лица, ИИ-переводчик, открытое аудио и Wi-Fi 6 — всё в лёгкой оправе весом всего 35 грамм. Защита IP65 и UV400.",
    specs_title: "ТЕХНИЧЕСКИЕ",
    specs_title_2: "ХАРАКТЕРИСТИКИ.",
    spec_camera: "КАМЕРА",
    spec_camera_val: "8 МП, 3280×2464, 1080p, Anti-shake",
    spec_ai: "ИИ",
    spec_ai_val: "Перевод на 26 языков, распознавание объектов",
    spec_audio: "АУДИО",
    spec_audio_val: "Open-ear динамики, 2 микрофона ENC",
    spec_wifi: "ПЕРЕДАЧА ДАННЫХ",
    spec_wifi_val: "Wi-Fi 6 (двухдиапазонный)",
    spec_control: "УПРАВЛЕНИЕ",
    spec_control_val: "Сенсорная панель + кнопки + голос",
    spec_chip: "ЧИПСЕТ",
    spec_chip_val: "Bluetrum BT8961C5 + Allwinner V821L2",
    spec_memory: "ПАМЯТЬ",
    spec_memory_val: "2 ГБ SDNAND + 64 ГБ NORFLASH",
    spec_battery: "БАТАРЕЯ",
    spec_battery_val: "300 мАч (очки) + 2000-3000 мАч (кейс)",
    spec_music: "МУЗЫКА",
    spec_music_val: "До 11 часов",
    spec_video: "ВИДЕО",
    spec_video_val: "До 2 часов записи",
    spec_standby: "ОЖИДАНИЕ",
    spec_standby_val: "До 96 часов",
    spec_weight: "ВЕС",
    spec_weight_val: "35 г",
    spec_material: "ОПРАВА",
    spec_material_val: "TR90, IP65, UV400",
    spec_os: "СОВМЕСТИМОСТЬ",
    spec_os_val: "Android 7.0+, iOS 13+ (AIbuds)",
    spec_disclaimer: "* Все характеристики подтверждены производителем.",
    comparison_title: "MT5 ULTRA",
    comparison_subtitle: "VS RAY-BAN",
    comparison_desc: "Те же премиальные технологии. Лучшая цена. Больше функций.",
    cta_title: "НЕ ГАДЖЕТ.",
    cta_title_2: "РАСШИРЕНИЕ ТЕБЯ.",
    cta_desc: "Присоединяйся к революции умных очков. MT5 Ultra — технологии будущего уже сегодня.",
    cta_primary: "ПРЕДЗАКАЗАТЬ MT5 ULTRA",
    cta_secondary: "ПОЛУЧИТЬ ОБНОВЛЕНИЯ",
    footer_product: "ПРОДУКТ",
    footer_support: "ПОДДЕРЖКА",
    footer_legal: "ИНФОРМАЦИЯ",
    footer_features: "Возможности",
    footer_technology: "Технологии",
    footer_specs: "Характеристики",
    footer_preorder: "Предзаказ",
    footer_faq: "FAQ",
    footer_contact: "Контакты",
    footer_shipping: "Доставка",
    footer_returns: "Возврат",
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия",
    footer_cookie: "Cookies",
    footer_rights: "© 2026 MT5 ULTRA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.",
    footer_precision: "СОЗДАНО С ТОЧНОСТЬЮ.",
  },
  ro: {
    brand: "MT5 ULTRA",
    tagline: "Nu mai rău decât Ray-Ban. Mai bun.",
    nav_features: "Caracteristici",
    nav_technology: "Tehnologie",
    nav_design: "Design",
    nav_specs: "Specificații",
    nav_faq: "FAQ",
    pre_order: "PRE-COMANDĂ",
    hero_title_1: "VEZI VIITORUL.",
    hero_title_2: "PE FAȚA TA.",
    hero_subtitle: "AI • AR • AUDIO • CAMERĂ 8MP • WI-FI 6 • UV400 • IP65",
    hero_cta_primary: "PRE-COMANDĂ ACUM",
    hero_cta_secondary: "EXPLORĂ TEHNOLOGIA",
    marquee: "AI • AR • AUDIO • CAMERĂ 8MP • WI-FI 6 • UV400 • IP65",
    features_title: "PROIECTAT PENTRU",
    features_title_2: "EXCEPȚIONAL.",
    feature_camera: "CAMERĂ 8 MP POV",
    feature_camera_desc: "Foto 3280×2464, video 1080p, stabilizare electronică.",
    feature_ai: "TRADUCĂTOR AI",
    feature_ai_desc: "Traducere vocală în 26 de limbi în timp real.",
    feature_audio: "AUDIO OPEN-EAR",
    feature_audio_desc: "Difuzoare open-ear + reducere zgomot ENC.",
    feature_wifi: "WI-FI 6",
    feature_wifi_desc: "Transmitere date dual-band rapidă.",
    feature_control: "CONTROL INTELIGENT",
    feature_control_desc: "Panou tactil + butoane + voce.",
    feature_battery: "11 ORE",
    feature_battery_desc: "Până la 11 ore muzică, carcasă încărcare 3000 mAh.",
    magic_title: "MT5 ULTRA",
    magic_title_2: "TEHNOLOGIA VIITORULUI.",
    magic_desc: "Cameră POV, traducător AI, audio open-ear și Wi-Fi 6 — totul într-o ramă ușoară de doar 35 de grame. Protecție IP65 și UV400.",
    specs_title: "SPECIFICAȚII",
    specs_title_2: "TEHNICE.",
    spec_camera: "CAMERĂ",
    spec_camera_val: "8 MP, 3280×2464, 1080p, Anti-shake",
    spec_ai: "AI",
    spec_ai_val: "Traducere 26 limbi, recunoaștere obiecte",
    spec_audio: "AUDIO",
    spec_audio_val: "Difuzoare Open-ear, 2 microfoane ENC",
    spec_wifi: "DATE",
    spec_wifi_val: "Wi-Fi 6 (dual-band)",
    spec_control: "CONTROL",
    spec_control_val: "Panou tactil + butoane + voce",
    spec_chip: "CHIPSET",
    spec_chip_val: "Bluetrum BT8961C5 + Allwinner V821L2",
    spec_memory: "MEMORIE",
    spec_memory_val: "2 GB SDNAND + 64 GB NORFLASH",
    spec_battery: "BATERIE",
    spec_battery_val: "300 mAh (ochelari) + 2000-3000 mAh (carcasă)",
    spec_music: "MUZICĂ",
    spec_music_val: "Până la 11 ore",
    spec_video: "VIDEO",
    spec_video_val: "Până la 2 ore înregistrare",
    spec_standby: "STANDBY",
    spec_standby_val: "Până la 96 ore",
    spec_weight: "GREUTATE",
    spec_weight_val: "35 g",
    spec_material: "RAMĂ",
    spec_material_val: "TR90, IP65, UV400",
    spec_os: "COMPATIBILITATE",
    spec_os_val: "Android 7.0+, iOS 13+ (AIbuds)",
    spec_disclaimer: "* Toate specificațiile confirmate de producător.",
    comparison_title: "MT5 ULTRA",
    comparison_subtitle: "VS RAY-BAN",
    comparison_desc: "Aceleași tehnologii premium. Preț mai bun. Mai multe funcții.",
    cta_title: "NU UN GADGET.",
    cta_title_2: "O EXTENSIE A TA.",
    cta_desc: "Alătură-te revoluției ochelarilor inteligenți. MT5 Ultra — tehnologia viitorului deja astăzi.",
    cta_primary: "PRE-COMANDĂ MT5 ULTRA",
    cta_secondary: "OBTINE ACTUALIZĂRI",
    footer_product: "PRODUS",
    footer_support: "SUPORT",
    footer_legal: "INFORMAȚII",
    footer_features: "Caracteristici",
    footer_technology: "Tehnologie",
    footer_specs: "Specificații",
    footer_preorder: "Pre-comandă",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_shipping: "Livrare",
    footer_returns: "Returnare",
    footer_privacy: "Confidențialitate",
    footer_terms: "Termeni",
    footer_cookie: "Cookies",
    footer_rights: "© 2026 MT5 ULTRA. TOATE DREPTURILE REZERVATE.",
    footer_precision: "PROIECTAT CU PRECIZIE.",
  },
};

type I18nContextType = {
  lang: Language;
  t: (key: string) => string;
  setLang: (lang: Language) => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ru");

  const t = (key: string) => {
    return translations[lang][key] || translations["ru"][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}