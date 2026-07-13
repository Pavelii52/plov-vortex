import { Users, MapPin, CalendarCheck } from "lucide-react";
import plov from "@/assets/plov.png";
import samsa from "@/assets/samsa.jpg";
import salad from "@/assets/salad.jpg";

const menuItems = [
  {
    id: 1,
    name: "Ташкентский плов",
    description:
      "Тот самый плов, ради которого стоит встать пораньше. Рис девзира, нежная баранина, морковь соломкой и секретная смесь специй — всё как в лучших чайханах Ташкента.",
    weight: "1 кг",
    image: plov,
    badge: "Хит",
  },
  {
    id: 2,
    name: "Самса с мясом",
    description:
      "Хрустящее слоёное тесто, сочная начинка из баранины с луком. Каждый кусочек — маленькое путешествие по улочкам Ташкента. Осторожно: вызывает привыкание!",
    weight: "мин. 5 шт",
    image: samsa,
    badge: "Популярное",
  },
  {
    id: 3,
    name: "Морковча",
    description:
      "Пикантная морковь по-корейски с секретным узбекским твистом. Идеальный гарнир к плову или самостоятельная закуска для тех, кто любит поострее.",
    weight: "300 г",
    image: salad,
    badge: null,
  },
];

const MenuItem = ({ item }: { item: typeof menuItems[0] }) => (
  <div className="card-menu group">
    <div className="relative overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {item.badge && (
        <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {item.badge}
        </span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
        {item.name}
      </h3>

      <p className="text-muted-foreground leading-relaxed">{item.description}</p>

      <div className="flex justify-between items-center pt-2">
        <span className="text-sm text-muted-foreground">{item.weight}</span>
        <a
          href="tel:+375257753138"
          className="text-primary font-semibold hover:underline transition-all"
        >
          Заказать по телефону →
        </a>
      </div>
    </div>
  </div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Меню
          </span>
          <h2 className="section-title mt-2">
            Что в нашем <span className="golden-text">казане</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Каждое блюдо готовится с душой и по традиционным рецептам.
            Никаких полуфабрикатов — только свежие ингредиенты и огонь казана.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        {/* Catering block */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8 md:p-12 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.5)]">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="space-y-5">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                  Плов на компанию
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold">
                  Готовим плов <span className="golden-text">от 10 человек</span>
                  <br />с выездом к вам
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Свадьба, день рождения, корпоратив или встреча с друзьями — приедем
                  со своим казаном и приготовим настоящий узбекский плов прямо у вас:
                  во дворе, на даче, в загородном доме. Аромат дымка, живой огонь и
                  атмосфера чайханы включены.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">Компании от 10 человек</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">Выезд по предварительному согласованию</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CalendarCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">Дата и меню — обсуждаем заранее</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 11l-3 3-2-2"/></svg>
                    <span className="text-foreground/90">Всё своё: казан, продукты, дрова</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="tel:+375257753138" className="btn-primary text-center">
                    Согласовать выезд
                  </a>
                  <a
                    href="https://instagram.com/pavel_tuzhylkin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-center"
                  >
                    Написать в Instagram
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Стоимость и детали рассчитываем индивидуально под вашу компанию и место проведения.
                </p>
              </div>

              <div className="hidden md:block">
                <img
                  src={plov}
                  alt="Плов на большую компанию"
                  className="w-64 h-64 object-cover rounded-2xl border-2 border-primary/30 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
