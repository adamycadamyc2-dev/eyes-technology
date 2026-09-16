import { NextResponse } from "next/server";

const BOT_TOKEN = "8855895612:AAGHNqZLp78uCdWY2_Rr_kCXZDecANcyLmc";
const CHAT_ID = "8595839079";

export async function POST(request: Request) {
  try {
    const { name, phone, city, quantity } = await request.json();

    // Автоматический расчёт суммы заказа
    let totalPrice = 0;
    switch(quantity) {
      case "1": totalPrice = 125; break;
      case "2": totalPrice = 250; break;
      case "3": totalPrice = 360; break;
      case "5": totalPrice = 550; break;
      default: totalPrice = 125;
    }

    const message = `🔥 <b>НОВЫЙ ЗАКАЗ EYES TECHNOLOGY!</b>

👤 <b>Имя:</b> ${name}
📞 <b>Телефон:</b> ${phone}
🏙️ <b>Город:</b> ${city}
📦 <b>Количество:</b> ${quantity} шт.
💰 <b>Сумма заказа:</b> $${totalPrice}

🕐 <b>Время:</b> ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Chisinau" })}

---
💡 <i>Умные очки с ИИ-ассистентом Hey Turbo</i>`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.text();
      console.error("Telegram error:", errorData);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}