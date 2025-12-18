import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const dishes = [
  { id: "plov", name: "Ташкентский плов (1 кг)", price: 30 },
  { id: "samsa", name: "Самса (мин. 5 шт)", price: 15 },
  { id: "salad", name: "Морковча (300 г)", price: 5 },
];

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "friday",
    time: "12-14",
    items: {} as Record<string, number>,
    comment: "",
  });

  const handleItemChange = (id: string, quantity: number) => {
    setFormData((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [id]: Math.max(0, quantity),
      },
    }));
  };

  const total = Object.entries(formData.items).reduce((sum, [id, qty]) => {
    const dish = dishes.find((d) => d.id === id);
    return sum + (dish?.price || 0) * qty;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (total === 0) {
      toast({
        title: "Выберите блюда",
        description: "Пожалуйста, добавьте хотя бы одно блюдо в заказ",
        variant: "destructive",
      });
      return;
    }

    const orderItems = Object.entries(formData.items)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const dish = dishes.find((d) => d.id === id);
        return `${dish?.name} x${qty}`;
      })
      .join("\n");

    const message = `🍚 Новый заказ!\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nАдрес: ${formData.address}\n\nЗаказ:\n${orderItems}\n\nИтого: ${total} BYN\n\nДата: ${formData.date === "friday" ? "Пятница" : "Суббота"}\n\nКомментарий: ${formData.comment || "—"}`;

    const telegramUrl = `https://t.me/plovovikhr_bot?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");

    toast({
      title: "Заказ отправлен!",
      description: "Мы свяжемся с вами для подтверждения",
    });
  };

  return (
    <section id="order" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-brown/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Заказ
          </span>
          <h2 className="section-title mt-2">
            Оформить <span className="golden-text">доставку</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Доставляем по пятницам и субботам.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border/50 space-y-8">
            {/* Dishes selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-foreground">
                Выберите блюда
              </h3>
              {dishes.map((dish) => (
                <div
                  key={dish.id}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-xl"
                >
                  <div>
                    <span className="text-foreground font-medium">{dish.name}</span>
                    <span className="text-primary ml-2 font-semibold">{dish.price} BYN</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleItemChange(dish.id, (formData.items[dish.id] || 0) - 1)}
                      className="w-8 h-8 rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-foreground font-semibold">
                      {formData.items[dish.id] || 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleItemChange(dish.id, (formData.items[dish.id] || 0) + 1)}
                      className="w-8 h-8 rounded-full bg-background border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              
              {total > 0 && (
                <div className="text-right pt-2">
                  <span className="text-2xl font-display font-bold golden-text">
                    Итого: {total} BYN
                  </span>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Телефон"
                required
                className="input-field"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <input
              type="text"
              placeholder="Адрес доставки"
              required
              className="input-field w-full"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />

            {/* Date */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">День доставки</label>
              <select
                className="input-field w-full"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              >
                <option value="friday">Пятница</option>
                <option value="saturday">Суббота</option>
              </select>
            </div>

            <textarea
              placeholder="Комментарий к заказу (необязательно)"
              className="input-field w-full h-24 resize-none"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            />

            <button type="submit" className="btn-primary w-full text-lg">
              Отправить заказ в Telegram
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
