// ️ ЗАМЕНИ НА СВОИ ДАННЫЕ!
const BOT_TOKEN = "8855895612:AAGHNqZLp78uCdWY2_Rr_kCXZDecANcyLmc";
const CHAT_ID = "8595839079";

export async function sendOrder(name: string, phone: string, city: string, quantity: string) {
  const message = `🔥 <b>НОВЫЙ ЗАКАЗ MT5 ULTRA!</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
🏙️ <b>Город:</b> ${city}
📦 <b>Количество:</b> ${quantity} шт.

🕐 <b>Время:</b> ${new Date().toLocaleString("ru-RU")}

---
💡 <i>Умные очки с ИИ-ассистентом Hey Turbo</i>`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Ошибка:", error);
    return false;
  }
}