import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-deep-brown to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Контакты
          </span>
          <h2 className="section-title mt-2">
            Свяжитесь <span className="golden-text">с нами</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <a
            href="https://t.me/plovovikhr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all group text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Telegram</h3>
            <p className="text-muted-foreground text-sm">@plovovikhr</p>
          </a>

          <a
            href="tel:+79001234567"
            className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all group text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
            <p className="text-muted-foreground text-sm">+7 (900) 123-45-67</p>
          </a>

          <div className="bg-card p-6 rounded-2xl border border-border/50 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Доставка</h3>
            <p className="text-muted-foreground text-sm">Москва и область</p>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border/50 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Время</h3>
            <p className="text-muted-foreground text-sm">Пт-Сб: 12:00–20:00</p>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden border border-border/50 h-64 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Карта зоны доставки</p>
              <p className="text-sm">Москва и ближайшее Подмосковье</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
