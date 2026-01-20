import founder from "@/assets/founder.png";

const Story = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-brown to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img
              src={founder}
              alt="Основатель ПловоВихрь"
              className="relative z-10 rounded-3xl w-full max-w-md mx-auto shadow-2xl"
            />
          </div>

          {/* Story content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              История
            </span>
            <h2 className="section-title">
              От яичницы до{" "}
              <span className="golden-text">ферганского плова</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Привет! Меня зовут Павел, я родился в Узбекистане, и моя кулинарная история началась с яичницы. 
                Да-да, той самой пригоревшей яичницы, которую я гордо называл «по-французски» 
                (хотя французы бы точно со мной поспорили).
              </p>
              <p>
                Но однажды судьба занесла меня в Фергану, где местный ошпаз (мастер плова) 
                раскрыл мне все секреты настоящего плова. Зирвак, девзира, правильный казан — 
                я впитывал знания как рис впитывает бульон.
              </p>
              <p>
                Теперь каждые выходные я готовлю плов для всех, кто соскучился по настоящему 
                вкусу. Никаких компромиссов — только аутентичный рецепт и самые свежие 
                ингредиенты.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/90">
              «Плов — это не просто еда. Это история, рассказанная через рис, мясо и специи.»
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
