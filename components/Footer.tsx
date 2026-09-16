"use client";
import { useI18n } from "../lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-background border-t border-glass-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">{t("brand")}</h3>
            <p className="text-cyan text-sm mb-4">{t("tagline")}</p>
            <p className="text-text-muted text-sm">{t("footer_precision")}</p>
          </div>

          {/* Продукт */}
          <div>
            <h4 className="font-display font-bold mb-4 text-sm tracking-widest uppercase">
              {t("footer_product")}
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#features" className="hover:text-cyan transition-colors">{t("footer_features")}</a></li>
              <li><a href="#technology" className="hover:text-cyan transition-colors">{t("footer_technology")}</a></li>
              <li><a href="#specs" className="hover:text-cyan transition-colors">{t("footer_specs")}</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">{t("footer_preorder")}</a></li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h4 className="font-display font-bold mb-4 text-sm tracking-widest uppercase">
              {t("footer_support")}
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#faq" className="hover:text-cyan transition-colors">{t("footer_faq")}</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">{t("footer_contact")}</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">{t("footer_shipping")}</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">{t("footer_returns")}</a></li>
            </ul>
          </div>

          {/* Секция ИНФОРМАЦИЯ УДАЛЕНА */}
        </div>

        {/* Bottom */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs font-mono">
            {t("footer_rights")}
          </p>
          <p className="text-text-muted text-xs font-mono">
            {t("footer_precision")}
          </p>
        </div>
      </div>
    </footer>
  );
}