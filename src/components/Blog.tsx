import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen, Beaker, Flame, Droplets } from 'lucide-react';

const fullArticle = {
  title: "Почему рис в плове должен быть рассыпчатым?",
  intro: "Плов — это не просто блюдо, а целая философия, в которой скрыта гармония традиций и кулинарных секретов. Одна из главных особенностей идеального плова — рассыпчатость риса. Почему же этот фактор так важен? Давайте разберемся в этом вопросе.",
  sections: [
    {
      icon: BookOpen,
      title: "1. Важность правильного сорта риса",
      content: "Рис играет ключевую роль в приготовлении плова. Для этого блюда идеально подходят длиннозерные сорта, такие как «жасмин» или «басмати». Эти сорта содержат меньше амилопектина — компонента крахмала, отвечающего за клейкость. Короткозернистые сорта, наоборот, содержат больше амилопектина, что приводит к слипанию. В идеальном плове рис должен быть рассыпчатым, но впитывать ароматы мяса и специй.",
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

const blogPosts = [
  {
    id: 2,
    title: "Легенда о Тамерлане и плове",
    excerpt: "Как великий завоеватель придумал блюдо, которое кормило его армии в походах.",
    category: "Истории",
    readTime: "4 мин",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  },
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
          <InfographicItem icon={BookOpen} label="Сорт риса" value="Басмати" color="bg-primary" />
          <InfographicItem icon={Droplets} label="Замачивание" value="30 мин" color="bg-accent" />
          <InfographicItem icon={Flame} label="Температура" value="Средняя" color="bg-orange-500" />
          <InfographicItem icon={Beaker} label="Промывание" value="3-5 раз" color="bg-amber-600" />
        </div>

        {/* Expandable Content */}
        <div className={`space-y-6 overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {/* Process Steps */}
          <div className="bg-muted/30 rounded-xl p-6 mb-6">
            <h4 className="font-display font-semibold text-lg text-foreground mb-4">Этапы подготовки риса:</h4>
            <ProcessStep step={1} title="Выбор сорта" description="Длиннозерный рис с низким содержанием амилопектина" delay={100} />
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
