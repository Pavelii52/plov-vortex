import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
            Настоящий{" "}
            <span className="golden-text">узбекский плов</span>
            <br />с доставкой
          </h1>
          <p className="text-lg sm:text-xl text-foreground/90 max-w-xl">
            Готовим плов по рецептам ферганских мастеров. Каждую пятницу и субботу — 
            свежий, ароматный, с пылу с жару прямо к вашему столу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#order" className="btn-primary animate-pulse-glow">
              Заказать плов
            </a>
            <a href="/guide.pdf" download className="btn-secondary">
              Скачать гайд
            </a>
          </div>
          <p className="text-sm text-foreground/70">
            Доставка по пятницам с 15:00
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-sm">Листай вниз</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
