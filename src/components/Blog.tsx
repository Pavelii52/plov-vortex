import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen, Beaker, Flame, Droplets, Sword, Users, Map, Utensils, Crown, Heart, Sparkles } from 'lucide-react';

const fullArticle = {
  title: "Почему рис в плове должен быть рассыпчатым?",
  intro: "Плов — это не просто блюдо, а целая философия, в которой скрыта гармония традиций и кулинарных секретов. Одна из главных особенностей идеального плова — рассыпчатость риса. Почему же этот фактор так важен? Давайте разберемся в этом вопросе.",
  sections: [
    {
      icon: BookOpen,
      title: "1. Важность правильного сорта риса",
      content: "Рис играет ключевую роль в приготовлении плова. Для этого блюда идеально подходят длиннозерные сорта, такие как «Лазурный (Лазер)» или «басмати». Эти сорта содержат меньше амилопектина — компонента крахмала, отвечающего за клейкость. Короткозернистые сорта, наоборот, содержат больше амилопектина, что приводит к слипанию. В идеальном плове рис должен быть рассыпчатым, но впитывать ароматы мяса и специй.",
    },
    {
      icon: Droplets,
      title: "2. Влажность и обработка зерна",
      content: "Важно не только выбрать правильный сорт, но и правильно обработать рис. Замачивание риса перед готовкой позволяет зернам набухнуть, равномерно распределяя влагу. Это помогает избежать слипания в процессе приготовления. Промывание риса удаляет избыточный крахмал, минимизируя риск того, что рис станет клейким.",
    },
    {
      icon: Flame,
      title: "3. Технология приготовления: тепло и время",
      content: "Рис «работает» с температурой и временем. Сначала он впитывает воду, разбухает, а затем начинает выделять крахмал. Чтобы рис остался рассыпчатым, важно не перегревать его и поддерживать умеренную температуру. Идеальный плов готовится с учетом баланса тепла и времени, чтобы каждый зернышко сохранило свою форму.",
    },
    {
      icon: Beaker,
      title: "4. Роль масла и других ингредиентов",
      content: "Масло, будь то растительное или топленое, обвивает зерна риса, предотвращая их слипание. Оно помогает сохранить структуру риса, особенно на заключительном этапе приготовления. Также важно правильно сбалансировать другие ингредиенты (мясо, овощи, специи), чтобы их жиры и жидкости не нарушили текстуру риса.",
    },
    {
      icon: Beaker,
      title: "5. Химия процесса варки",
      content: "Когда рис варится, происходит несколько химических реакций, влияющих на его текстуру. Амилоза отвечает за рассыпчатость, а амилопектин за вязкость. Чтобы рис остался рассыпчатым, важно контролировать количество воды и тщательно промывать рис.",
    },
  ],
  conclusion: "Идеальный плов — это не только результат удачи, но и точной науки, основанной на химии и физике. Следуя всем рекомендациям, можно достичь желаемой рассыпчатости риса, которая не только улучшит вкус, но и придаст эстетическую привлекательность блюду. Не забывайте, что кулинария — это искусство, но и наука!",
};

const tamerlaneArticle = {
  title: "Легенда о Тамерлане и плове",
  subtitle: "Как грозный полководец создал кулинарный шедевр для своей армии",
  intro: "Представьте бескрайние степи XIV века. Пыль под копытами сотен тысяч лошадей, звон клинков и… ненавистный армии запах прокисшей похлёбки. Великий завоеватель Тамерлан столкнулся с проблемой: как кормить огромное войско в длительных походах? Ответом стал не просто рецепт, а стратегическое оружие — плов, блюдо, которое вошло в историю и до сих пор объединяет народы.",
  principles: [
    {
      icon: Flame,
      title: "Энергия в одном котле",
      description: "Сочетание жирного мяса (баранины) и сытной моркови давало силу, а рис, впитывая соки и жир, становился идеальным источником долгих углеводов для долгих переходов.",
    },
    {
      icon: Utensils,
      title: "Скорость и практичность",
      description: "Все ингредиенты готовились в одном казане — минимальная посуда, максимальная эффективность.",
    },
    {
      icon: Clock,
      title: "Долгое хранение",
      description: "Правильно приготовленный плов в кожаных мешках мог питать воинов ещё несколько дней.",
    },
  ],
  symbolism: [
    "Его готовили перед битвами для поднятия настроения.",
    "Им праздновали победы, объединяя за одним котлом воинов разных народов.",
    "Котел плова (казан) стал символом общего котла, братства и равенства перед лицом трудностей.",
  ],
  legacy: "От Самарканда до Османской Порты — везде, где проходила армия Тамерлана, оставался рецепт. Каждый регион адаптировал его под себя: добавлял изюм или нуту, чеснок или барбарис, готовил с курицей или рыбой. Но основа оставалась неизменной: сытность, польза и особая магия, когда простые ингредиенты, собранные вместе, рождают нечто большее — символ гостеприимства, праздника и мудрости.",
  conclusion: "Иногда величайшие открытия рождаются не в тишине лабораторий, а в шуме походных станов. Из необходимости — в вечность. Из стратегии выживания — в искусство, объединяющее за одним столом. Именно так и появился плов — блюдо, построившее империю и пережившее её.",
  ps: "Говорят, тот самый казан исторический плов должен был быть настолько вкусным, что, попробовав его, даже самый уставший воин готов был снова идти в бой. Возможно, в этом и заключался секрет непобедимой армии Тамерлана.",
};

const blogPosts = [
  {
    id: 3,
    title: "Зира, барбарис и секретные специи",
    excerpt: "Полный гайд по специям для плова. Что добавлять, а что оставить в магазине.",
    category: "Рецепты",
    readTime: "7 мин",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=400&h=300&fit=crop",
  },
];

const InfographicItem = ({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) => (
  <div className="flex flex-col items-center p-4 bg-card/50 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-3`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <span className="text-2xl font-display font-bold text-foreground">{value}</span>
    <span className="text-sm text-muted-foreground text-center">{label}</span>
  </div>
);

const ProcessStep = ({ step, title, description, delay }: { step: number; title: string; description: string; delay: number }) => (
  <div 
    className="relative flex items-start gap-4 animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold shadow-lg">
      {step}
    </div>
    <div className="flex-1 pb-8 border-l-2 border-primary/30 pl-6 -ml-5">
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const AnimatedPrinciple = ({ principle, index }: { principle: typeof tamerlaneArticle.principles[0]; index: number }) => (
  <div 
    className="relative bg-gradient-to-br from-card to-muted/30 rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group animate-fade-in"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
      <principle.icon className="w-8 h-8 text-primary-foreground" />
    </div>
    <div className="pt-8">
      <h4 className="text-lg font-display font-bold text-foreground mb-2">{principle.title}</h4>
      <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
    </div>
  </div>
);

const TimelineEvent = ({ text, index }: { text: string; index: number }) => (
  <div 
    className="flex items-start gap-4 animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
    </div>
    <p className="text-muted-foreground pt-1">{text}</p>
  </div>
);

const FeaturedArticle = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border/50 mb-12">
      {/* Hero Image with Overlay */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1596097635121-14b63a7a1b8c?w=800&h=400&fit=crop"
          alt="Рассыпчатый рис в плове"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-3">
            Рецепты
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            {fullArticle.title}
          </h3>
          <div className="flex items-center gap-4 mt-3 text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 5 мин чтения
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="text-muted-foreground leading-relaxed mb-8">
          {fullArticle.intro}
        </p>

        {/* Infographic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <InfographicItem icon={BookOpen} label="Сорт риса" value="Лазер" color="bg-primary" />
          <InfographicItem icon={Droplets} label="Замачивание" value="30 мин" color="bg-accent" />
          <InfographicItem icon={Flame} label="Температура" value="Средняя" color="bg-orange-500" />
          <InfographicItem icon={Beaker} label="Промывание" value="3-5 раз" color="bg-amber-600" />
        </div>

        {/* Expandable Content */}
        <div className={`space-y-6 overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {/* Process Steps */}
          <div className="bg-muted/30 rounded-xl p-6 mb-6">
            <h4 className="font-display font-semibold text-lg text-foreground mb-4">Этапы подготовки риса:</h4>
            <ProcessStep step={1} title="Выбор сорта" description="Лазурный (Лазер) — идеальный сорт с низким содержанием амилопектина" delay={100} />
            <ProcessStep step={2} title="Промывание" description="3-5 раз до прозрачной воды для удаления крахмала" delay={200} />
            <ProcessStep step={3} title="Замачивание" description="30 минут в теплой подсоленной воде" delay={300} />
            <ProcessStep step={4} title="Приготовление" description="Средний огонь с контролем влаги" delay={400} />
          </div>

          {/* Article Sections */}
          {fullArticle.sections.map((section, index) => (
            <div 
              key={index} 
              className="border-l-4 border-primary/50 pl-6 py-2 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <section.icon className="w-5 h-5 text-primary" />
                <h4 className="font-display font-semibold text-foreground">{section.title}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Conclusion Box */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
            <h4 className="font-display font-semibold text-lg text-foreground mb-2">📌 Заключение</h4>
            <p className="text-muted-foreground leading-relaxed">{fullArticle.conclusion}</p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 mx-auto mt-6 text-primary font-semibold hover:text-primary/80 transition-colors group"
        >
          {isExpanded ? (
            <>
              Свернуть <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </>
          ) : (
            <>
              Читать полностью <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </article>
  );
};

const TamerlaneArticle = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl overflow-hidden shadow-xl border border-border/50 mb-12">
      {/* Hero Section with Dramatic Overlay */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=600&fit=crop"
          alt="Великая армия Тамерлана"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center animate-pulse">
          <Crown className="w-10 h-10 text-primary" />
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
              История
            </span>
            <span className="inline-block bg-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              XIV век
            </span>
          </div>
          <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-2">
            {tamerlaneArticle.title}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {tamerlaneArticle.subtitle}
          </p>
          <div className="flex items-center gap-4 mt-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 8 мин чтения
            </span>
            <span className="flex items-center gap-1">
              <Map className="w-4 h-4" /> Центральная Азия
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10">
        {/* Intro with Decorative Elements */}
        <div className="relative mb-10">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed pl-6 italic">
            {tamerlaneArticle.intro}
          </p>
        </div>

        {/* Infographic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <InfographicItem icon={Sword} label="Армия" value="100K+" color="bg-primary" />
          <InfographicItem icon={Map} label="Походы" value="30 лет" color="bg-accent" />
          <InfographicItem icon={Utensils} label="Казанов" value="1000+" color="bg-orange-500" />
          <InfographicItem icon={Users} label="Народов" value="Десятки" color="bg-amber-600" />
        </div>

        {/* Three Principles Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h4 className="text-xl font-display font-bold text-foreground">Три гениальных принципа Тамерлана</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tamerlaneArticle.principles.map((principle, index) => (
              <AnimatedPrinciple key={index} principle={principle} index={index} />
            ))}
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`space-y-8 overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {/* Recipe Origins */}
          <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
            <h4 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-primary" />
              Идея, рождённая в походном шатре
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Легенда гласит, что перед одним из самых сложных походов Тамерлан собрал своих военачальников. Проблема была очевидна: обычная еда портилась, не хватало посуды, а приготовление пищи для армии занимало часы, которые можно было потратить на переход.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Так из необходимости родилось кулинарное искусство. Повара Тамерлана оттачивали рецепт: мясо — крупными кусками, чтобы не высыхало, морковь — соломкой для сладости, рис — особым сортом, чтобы зерно к зерну. Специи не только улучшали вкус, но и дезинфицировали воду и мясо в условиях похода.
            </p>
          </div>

          {/* Symbolism Section */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 border border-primary/10">
            <h4 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              Символ побед и единства
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Плов быстро стал больше, чем едой. Это был ритуал, укрепляющий дух.
            </p>
            <div className="space-y-4">
              {tamerlaneArticle.symbolism.map((item, index) => (
                <TimelineEvent key={index} text={item} index={index} />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">
              Историки отмечают, что скорость передвижения армии Тамерлана отчасти была обеспечена этой эффективной системой питания. В то время как противники тратили время на охоту и сложные приготовления, воины Тамерлана быстро получали калорийную, горячую пищу и были готовы к новым свершениям.
            </p>
          </div>

          {/* Legacy Section */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent via-primary to-transparent rounded-full" />
            <div className="pl-6">
              <h4 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <Map className="w-5 h-5 text-primary" />
                Наследие, пережившее империи
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {tamerlaneArticle.legacy}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Сегодня, когда мы готовим или пробуем настоящий плов, мы прикасаемся к легенде. К истории о том, как великий полководец, чьё имя внушало страх, проявил гениальную заботу о своих воинах, накормив их не просто едой, а наследием, которое будет кормить целые народы ещё много веков.
              </p>
            </div>
          </div>

          {/* Conclusion Box */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20">
            <h4 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
              ✨ Заключительная мысль
            </h4>
            <p className="text-muted-foreground leading-relaxed text-lg italic">
              {tamerlaneArticle.conclusion}
            </p>
          </div>

          {/* P.S. Section */}
          <div className="bg-muted/20 rounded-xl p-6 border-l-4 border-accent">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">P.S.</span> {tamerlaneArticle.ps}
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 mx-auto mt-8 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25 group"
        >
          {isExpanded ? (
            <>
              Свернуть историю <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </>
          ) : (
            <>
              Читать легенду полностью <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </article>
  );
};

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <article className="card-menu group cursor-pointer">
    <div className="relative overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {post.category}
        </span>
      </div>
    </div>
    
    <div className="p-6 space-y-3">
      <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-muted-foreground">{post.readTime} чтения</span>
        <span className="text-primary text-sm font-semibold group-hover:underline">
          Читать →
        </span>
      </div>
    </div>
  </article>
);

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Блог
          </span>
          <h2 className="section-title mt-2">
            Рецепты и <span className="golden-text">истории</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Погружаемся в культуру плова: от древних легенд до современных лайфхаков
          </p>
        </div>

        {/* Featured Article */}
        <FeaturedArticle />

        {/* Tamerlane Legend Article */}
        <TamerlaneArticle />

        {/* Other Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Все статьи
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
