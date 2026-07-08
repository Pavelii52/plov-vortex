import { Link } from "react-router-dom";
import { Gift, Sparkles } from "lucide-react";

const BonusBanner = () => {
  return (
    <section className="py-6 relative">
      <div className="container mx-auto px-4">
        <Link
          to="/#recipes"
          className="block max-w-5xl mx-auto rounded-2xl border-2 border-primary/50 bg-gradient-to-r from-primary/15 via-card to-primary/15 p-5 md:p-6 shadow-[0_15px_40px_-15px_hsl(var(--primary)/0.6)] hover:scale-[1.01] transition-transform"
        >
          <div className="flex items-center gap-4 flex-wrap justify-center text-center md:text-left">
            <div className="p-3 rounded-xl bg-primary/20 border border-primary/40 shrink-0">
              <Gift className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1 min-w-[260px]">
              <p className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Бонус для гостей
              </p>
              <h3 className="font-display text-lg md:text-xl text-foreground leading-snug">
                Открывая доступ к любому рецепту из категорий{" "}
                <span className="golden-text">Супы, Салаты, Плов, Вторые блюда или Выпечка</span>
                {" "}— получаете бонусом{" "}
                <span className="golden-text">все Десерты и Напитки бесплатно!</span>
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BonusBanner;
