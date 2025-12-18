import mascot from "@/assets/mascot.png";

const SteamParticle = ({ className }: { className?: string }) => (
  <div className={`absolute w-3 h-8 bg-gradient-to-t from-warm-cream/40 to-transparent rounded-full blur-sm ${className}`} />
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-deep-brown" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              Настоящий{" "}
              <span className="golden-text">узбекский плов</span>
              <br />с доставкой
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Готовим плов по рецептам ферганских мастеров. Каждую пятницу и субботу — 
              свежий, ароматный, с пылу с жару прямо к вашему столу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#order" className="btn-primary animate-pulse-glow">
                Заказать плов
              </a>
              <a href="/guide.pdf" download className="btn-secondary">
                Скачать гайд
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Доставка по пятницам и субботам с 12:00 до 20:00
            </p>
          </div>

          {/* Mascot with steam animation */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: "0.3s" }}>
            <div className="relative animate-float">
              {/* Steam particles */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2">
                <SteamParticle className="animate-steam left-0" />
                <SteamParticle className="animate-steam-delay-1 left-6" />
                <SteamParticle className="animate-steam-delay-2 left-12" />
              </div>
              
              {/* Glow effect behind mascot */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              
              <img
                src={mascot}
                alt="ПловоВихрь маскот"
                className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
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
