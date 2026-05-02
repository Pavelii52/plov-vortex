import plov from "@/assets/plov.png";
import samsa from "@/assets/samsa.jpg";
import salad from "@/assets/salad.jpg";

const menuItems = [
  {
    id: 1,
    name: "Ташкентский плов",
    description: "Тот самый плов, ради которого стоит встать пораньше. Рис девзира, нежная баранина, морковь соломкой и секретная смесь специй — всё как в лучших чайханах Ташкента.",
    price: "30 BYN",
    weight: "1 кг",
    image: plov,
    badge: "Хит",
  },
  {
    id: 2,
    name: "Самса с мясом",
    description: "Хрустящее слоёное тесто, сочная начинка из баранины с луком. Каждый кусочек — маленькое путешествие по улочкам Ташкента. Осторожно: вызывает привыкание!",
    price: "15 BYN",
    weight: "мин. 5 шт",
    image: samsa,
    badge: "Популярное",
  },
  {
    id: 3,
    name: "Морковча",
    description: "Пикантная морковь по-корейски с секретным узбекским твистом. Идеальный гарнир к плову или самостоятельная закуска для тех, кто любит поострее.",
    price: "5 BYN",
    weight: "300 г",
    image: salad,
    badge: null,
  },
];

const MenuItem = ({ item }: { item: typeof menuItems[0] }) => {
  return (
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
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-primary font-bold text-xl">{item.price}</span>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm text-muted-foreground">{item.weight}</span>
          <a
            href="#recipes"
            className="text-primary font-semibold hover:underline transition-all"
          >
            К рецептам →
          </a>
        </div>
      </div>
    </div>
  );
};

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
      </div>
    </section>
  );
};

export default Menu;
