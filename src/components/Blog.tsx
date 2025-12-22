import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen, Beaker, Flame, Droplets, Sword, Users, Map, Utensils, Crown, Heart, Sparkles, Leaf, AlertCircle, Check, X, Star, Zap } from 'lucide-react';

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

const spicesArticle = {
  title: "Зира, Барбарис и Секретные Специи",
  subtitle: "Полный Гайд по Специям для Плова",
  intro: "Плов — это не просто блюдо, это настоящий кулинарный ритуал. Секрет вкусного плова кроется в идеальном балансе специй, которые превращают простые ингредиенты в ароматный, насыщенный и гармоничный кулинарный шедевр.",
  mainSpices: [
    {
      name: "Зира (кумин)",
      icon: Star,
      color: "from-amber-500 to-orange-600",
      title: "Душа плова",
      description: "Без зиры нет настоящего плова. Это та специя, которая делает вкус блюда глубже, придает ему характерный пряный аромат. Зира не только усиливает вкус мяса и риса, но и помогает балансировать жирность, придавая плову легкость.",
      tips: [
        "Добавьте зиру в начале приготовления, обжарив её с луком и мясом",
        "Для более интенсивного аромата можно немного обжарить зиру в сухой сковороде перед добавлением"
      ]
    },
    {
      name: "Барбарис",
      icon: Zap,
      color: "from-red-500 to-pink-600",
      title: "Яркая кислинка",
      description: "Барбарис приносит свежую кислинку и легкую терпкость, делая плов более многослойным. Эта специя имеет мощный аромат, который идеально контрастирует с богатством мяса и риса. Барбарис также помогает подчеркнуть сладость моркови.",
      tips: [
        "Барбарис добавляют на заключительном этапе приготовления, чтобы сохранить его вкус и аромат",
        "Если хочется усилить кислинку, можно добавить чуть больше барбариса, но не переусердствуйте"
      ]
    }
  ],
  secretSpices: [
    {
      name: "Шафран",
      description: "Роскошная специя, которая добавит вашему плову неповторимый вкус и золотистый оттенок. Шафран делает плов более утонченным.",
      icon: Crown
    },
    {
      name: "Кориандр",
      description: "Отличное дополнение к плову, особенно с бараниной. Кориандр добавляет легкую цитрусовую ноту и делает вкус более насыщенным.",
      icon: Leaf
    },
    {
      name: "Гвоздика",
      description: "Обладает мощным ароматом. Один или два бутона гвоздики придадут вашему плову пряную глубину, но не перебьют основной вкус.",
      icon: Sparkles
    },
    {
      name: "Чеснок",
      description: "Добавление чеснока в конце готовки делает плов более насыщенным, с легким пикантным оттенком.",
      icon: Flame
    }
  ],
  avoid: [
    {
      name: "Перец чили",
      reason: "Хотя он придает блюдам остроту, в плове он не всегда уместен. Лучше использовать перец сладкий или черный молотый."
    },
    {
      name: "Базилик",
      reason: "Это хорошая специя для итальянской кухни, но для плова он будет не в своей тарелке. Его вкус слишком яркий."
    },
    {
      name: "Лавровый лист",
      reason: "Несмотря на свою универсальность, лавровый лист не является традиционной специей для плова и может добавить лишнюю горечь."
    }
  ],
  balanceTips: "Главный секрет вкусного плова — это правильный баланс специй. Помните, что специи должны работать в гармонии, а не перекрывать друг друга. Начните с базовых: зира, барбарис, немного соли. Затем по желанию добавьте более экзотичные специи, такие как шафран или кориандр.",
  conclusion: "Плов — это искусство, и специи — его кисть. Зира, барбарис и другие специи способны создать гармонию вкусов, которые будут радовать вас и ваших гостей. Идеальный плов начинается с правильных специй, а их разнообразие позволит вам создавать новые, захватывающие версии классического блюда."
};

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

const SpiceCard = ({ spice, index }: { spice: typeof spicesArticle.mainSpices[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative bg-gradient-to-br from-card to-muted/30 rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group animate-fade-in overflow-hidden"
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${spice.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Floating Icon */}
      <div className={`absolute -top-3 -right-3 w-20 h-20 rounded-full bg-gradient-to-br ${spice.color} flex items-center justify-center shadow-lg transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
        <spice.icon className="w-10 h-10 text-white" />
      </div>
      
      <div className="relative z-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">{spice.name}</span>
        <h4 className="text-xl font-display font-bold text-foreground mt-1 mb-3">{spice.title}</h4>
        <p className="text-muted-foreground leading-relaxed mb-4">{spice.description}</p>
        
        {/* Tips */}
        <div className="space-y-2">
          <span className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" /> Как использовать:
          </span>
          {spice.tips.map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SecretSpiceItem = ({ spice, index }: { spice: typeof spicesArticle.secretSpices[0]; index: number }) => (
  <div 
    className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
      <spice.icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h5 className="font-semibold text-foreground">{spice.name}</h5>
      <p className="text-sm text-muted-foreground">{spice.description}</p>
    </div>
  </div>
);

const AvoidItem = ({ item, index }: { item: typeof spicesArticle.avoid[0]; index: number }) => (
  <div 
    className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/20 animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
      <X className="w-4 h-4 text-red-500" />
    </div>
    <div>
      <h5 className="font-semibold text-foreground">{item.name}</h5>
      <p className="text-sm text-muted-foreground">{item.reason}</p>
    </div>
  </div>
);

const SpicesArticle = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl overflow-hidden shadow-xl border border-border/50 mb-12">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=1200&h=600&fit=crop"
          alt="Специи для плова"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent" />
        
        {/* Floating Spice Icons */}
        <div className="absolute top-6 right-6 flex gap-3">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center animate-pulse shadow-lg">
            <Star className="w-7 h-7 text-white" />
          </div>
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Рецепты
            </span>
            <span className="inline-block bg-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Гайд
            </span>
          </div>
          <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-2">
            {spicesArticle.title}
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {spicesArticle.subtitle}
          </p>
          <div className="flex items-center gap-4 mt-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 7 мин чтения
            </span>
            <span className="flex items-center gap-1">
              <Leaf className="w-4 h-4" /> Специи
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10">
        {/* Intro */}
        <div className="relative mb-10">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500 via-primary to-transparent rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed pl-6">
            {spicesArticle.intro} <span className="font-semibold text-foreground">Готовы раскрыть все секреты? Тогда начнем.</span>
          </p>
        </div>

        {/* Spice Infographic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <InfographicItem icon={Star} label="Зира" value="№1" color="bg-amber-500" />
          <InfographicItem icon={Zap} label="Барбарис" value="№2" color="bg-red-500" />
          <InfographicItem icon={Leaf} label="Секретные" value="4+" color="bg-green-600" />
          <InfographicItem icon={AlertCircle} label="Избегать" value="3" color="bg-gray-500" />
        </div>

        {/* Main Spices Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-6 h-6 text-amber-500" />
            <h4 className="text-xl font-display font-bold text-foreground">Главные специи для плова</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {spicesArticle.mainSpices.map((spice, index) => (
              <SpiceCard key={index} spice={spice} index={index} />
            ))}
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`space-y-8 overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {/* Secret Spices Section */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 md:p-8 border border-primary/10">
            <h4 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Секретные специи: что ещё стоит попробовать?
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Теперь, когда мы разобрались с основными специями, давайте откроем несколько секретов для тех, кто хочет вывести вкус плова на новый уровень.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {spicesArticle.secretSpices.map((spice, index) => (
                <SecretSpiceItem key={index} spice={spice} index={index} />
              ))}
            </div>
          </div>

          {/* What to Avoid */}
          <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
            <h4 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Чего точно НЕ стоит добавлять в плов?
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Несмотря на разнообразие специй, есть несколько, которые стоит избегать в плове:
            </p>
            <div className="space-y-3">
              {spicesArticle.avoid.map((item, index) => (
                <AvoidItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Balance Tips */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500 via-primary to-transparent rounded-full" />
            <div className="pl-6">
              <h4 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <Beaker className="w-5 h-5 text-primary" />
                Идеальный баланс специй: как избежать ошибок?
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {spicesArticle.balanceTips}
              </p>
            </div>
          </div>

          {/* Conclusion Box */}
          <div className="bg-gradient-to-br from-amber-500/10 via-primary/5 to-accent/10 rounded-2xl p-6 md:p-8 border border-amber-500/20">
            <h4 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
              🎨 Вывод
            </h4>
            <p className="text-muted-foreground leading-relaxed text-lg italic">
              {spicesArticle.conclusion}
            </p>
          </div>

          {/* Final Note */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border-l-4 border-primary text-center">
            <p className="text-foreground font-semibold text-lg">
              Порадуйте себя и своих близких настоящим пловом, который будет вкусным и незабываемым!
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 mx-auto mt-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-amber-500/25 group"
        >
          {isExpanded ? (
            <>
              Свернуть гайд <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </>
          ) : (
            <>
              Читать полный гайд <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </article>
  );
};

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

        {/* Spices Guide Article */}
        <SpicesArticle />

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
