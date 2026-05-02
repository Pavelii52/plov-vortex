import { Soup, Salad, UtensilsCrossed, Flame, Cookie, CupSoda, Wheat } from "lucide-react";

type Category = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
};

const categories: Category[] = [
  {
    title: "Супы",
    icon: Soup,
    items: ["Шурпа по-узбекски", "Мастава (Мастоба)", "Лагман по-узбекски", "Машхурда", "Чалоп"],
  },
  {
    title: "Салаты",
    icon: Salad,
    items: [
      "Аччик-чучук (Шакароб)",
      "Салат из редьки с гранатом",
      "Салат «Ташкент»",
      "Салат «Бахор»",
      "Ферганский салат из капусты",
    ],
  },
  {
    title: "Плов",
    icon: Flame,
    items: [
      "Плов Самаркандский",
      "Плов Ферганский",
      "Плов Ташкентский",
      "Плов Бухарский (Бахш)",
      "Плов Бухарский (Ош-и софи)",
    ],
  },
  {
    title: "Вторые блюда",
    icon: UtensilsCrossed,
    items: [
      "Манты с мясом",
      "Манты с тыквой",
      "Шашлык из баранины",
      "Шашлык из говядины",
      "Шашлык из курицы",
      "Шашлык из печени (Джигар)",
      "Казан-кебаб",
      "Ковурма",
      "Джиз-быз",
      "Норин (Туграма)",
      "Басма",
      "Ханум",
    ],
  },
  {
    title: "Выпечка",
    icon: Wheat,
    items: [
      "Самса с мясом",
      "Самса с тыквой",
      "Тандыр-нон",
      "Патыр",
      "Катлама с мясом",
      "Катлама к чаю",
    ],
  },
  {
    title: "Десерты",
    icon: Cookie,
    items: ["Нишалда", "Халвайтар", "Пахлава по-узбекски"],
  },
  {
    title: "Напитки",
    icon: CupSoda,
    items: ["Зелёный чай по-узбекски", "Мурч-чой", "Чалап"],
  },
];

const Recipes = () => {
  return (
    <section id="recipes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-brown/40 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Наследие узбекской кухни
          </span>
          <h2 className="section-title mt-2">
            Золотой фонд <span className="golden-text">рецептов</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-4">
            Бережно собранная коллекция блюд, передающих вкус и душу Востока
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                    {cat.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent ml-2" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((name, i) => (
                    <div
                      key={name}
                      className="group bg-card rounded-xl p-5 border border-border/50 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.4)] animate-fade-in-up"
                      style={{ animationDelay: `${(ci * 80 + i * 50)}ms`, animationFillMode: "both" }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-display text-lg shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-foreground/90 font-medium group-hover:text-primary transition-colors">
                          {name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
