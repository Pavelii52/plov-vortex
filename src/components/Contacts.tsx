import { Phone, MapPin, Instagram } from "lucide-react";

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

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="https://instagram.com/pavel_tuzhylkin"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all group text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Instagram className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
            <p className="text-muted-foreground text-sm">@pavel_tuzhylkin</p>
          </a>

          <a
            href="tel:+375257753138"
            className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all group text-center"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
            <p className="text-muted-foreground text-sm">+375 25 775 31 38</p>
          </a>

          <div className="bg-card p-6 rounded-2xl border border-border/50 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Доставка</h3>
            <p className="text-muted-foreground text-sm">г. Жодино</p>
          </div>
        </div>

        {/* Map of Zhodino */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37952.54088908379!2d28.305!3d54.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcb5c51b8e2dd%3A0x400e44f7e86f820!2z0JbQvtC00LjQvdC-!5e0!3m2!1sru!2sby!4v1700000000000!5m2!1sru!2sby"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта г. Жодино"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
