import { useState } from "react";
import { Soup, Salad, UtensilsCrossed, Flame, Cookie, CupSoda, Wheat, Clock, ChefHat, Sparkles, BookOpen, Lightbulb } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import recipesData from "@/data/recipes.json";
import RecipeUnlockForm from "@/components/RecipeUnlockForm";

type Recipe = { ingredients: string; time: string; difficulty: string; steps?: string; tips?: string };
const recipes = recipesData as Record<string, Recipe>;


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
    items: ["Самса с мясом", "Самса с тыквой", "Тандыр-нон", "Патыр", "Катлама с мясом", "Катлама к чаю"],
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

const parseIngredients = (raw: string): { section?: string; items: string[] }[] => {
  if (!raw) return [];
  // Split into sections by lines that look like "Для X:" headers
  const blocks = raw.split(/\n\s*\n/);
  const sections: { section?: string; items: string[] }[] = [];
  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;
    let section: string | undefined;
    let body = trimmed;
    const headerMatch = trimmed.match(/^(Для [^:]+:)\s*/);
    if (headerMatch) {
      section = headerMatch[1].replace(/:$/, "");
      body = trimmed.slice(headerMatch[0].length);
    }
    const items = body
      .split(/;\s*/)
      .map((s) => s.replace(/\s+/g, " ").trim())
      .filter(Boolean);
    sections.push({ section, items });
  }
  return sections;
};

const parseSteps = (raw?: string): string[] => {
  if (!raw) return [];
  return raw
    .split(/\n+/)
    .map((s) => s.replace(/^\s*\d+[\.\)]\s*/, "").trim())
    .filter(Boolean);
};

const Recipes = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showRecipe, setShowRecipe] = useState(false);
  const [unlocked, setUnlocked] = useState<boolean>(
    typeof window !== "undefined" && localStorage.getItem("recipes_unlocked") === "1"
  );
  const [showUnlock, setShowUnlock] = useState(false);

  const recipe = selected ? recipes[selected] : null;
  const sections = recipe ? parseIngredients(recipe.ingredients) : [];
  const steps = parseSteps(recipe?.steps);

  const handleRecipeClick = () => {
    if (unlocked) setShowRecipe(true);
    else setShowUnlock(true);
  };

  return (
    <section id="recipes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-brown/40 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Наследие узбекской кухни
          </span>
          <h2 className="section-title mt-2">
            Золотой фонд <span className="golden-text">рецептов</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mt-4">
            {unlocked
              ? "Доступ открыт — нажмите на блюдо, чтобы посмотреть ингредиенты и пошаговый рецепт с авторскими фишками."
              : "Откройте бесплатный доступ ко всем пошаговым рецептам и фишкам — оставьте имя и email."}
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
                  {cat.items.map((name, i) => {
                    const has = !!recipes[name];
                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => { if (has) setSelected(name); }}
                        disabled={!has}
                        className="group bg-card rounded-xl p-5 border border-border/50 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.4)] animate-fade-in-up text-left disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative"
                        style={{ animationDelay: `${ci * 80 + i * 50}ms`, animationFillMode: "both" }}
                        aria-label={`Открыть рецепт: ${name}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-primary font-display text-lg shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-foreground/90 font-medium group-hover:text-primary transition-colors flex-1">
                            {name}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ingredients dialog */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) {
            setSelected(null);
            setShowRecipe(false);
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-display">
              <span className="golden-text">{selected}</span>
            </DialogTitle>
            <DialogDescription className="sr-only">Список ингредиентов рецепта</DialogDescription>
          </DialogHeader>

          {recipe && (
            <div className="space-y-6 mt-2">
              {(recipe.time || recipe.difficulty) && (
                <div className="flex flex-wrap gap-3 text-sm">
                  {recipe.time && (
                    <div className="flex items-start gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                      <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80 whitespace-pre-line">{recipe.time}</span>
                    </div>
                  )}
                  {recipe.difficulty && (
                    <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                      <ChefHat className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground/80">{recipe.difficulty}</span>
                    </div>
                  )}
                </div>
              )}

              <div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                  Ингредиенты
                </h4>
                <div className="space-y-4">
                  {sections.map((sec, si) => (
                    <div key={si}>
                      {sec.section && (
                        <p className="text-primary font-semibold mb-2">{sec.section}</p>
                      )}
                      <ul className="space-y-1.5">
                        {sec.items.map((it, ii) => (
                          <li key={ii} className="flex items-start gap-2 text-foreground/85">
                            <span className="text-primary mt-1.5 text-xs">●</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Кнопка: рецепт и фишки (бесплатно) */}
              {recipe.steps && (
                <button
                  type="button"
                  onClick={handleRecipeClick}
                  className="group relative w-full overflow-hidden rounded-xl px-6 py-4 font-display font-bold text-lg text-white shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.85) 100%)",
                  }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center justify-center gap-3">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span>{unlocked ? "Рецепт и фишки приготовления" : "Открыть рецепт и фишки"}</span>
                    <span className="ml-2 px-2 py-0.5 rounded-md bg-white/20 text-sm">{unlocked ? "Бесплатно" : "Подписка"}</span>
                  </span>
                </button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Full recipe (after unlock) */}
      <Dialog open={showRecipe} onOpenChange={setShowRecipe}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-primary/40">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-display flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="golden-text">{selected}</span>
            </DialogTitle>
            <DialogDescription className="sr-only">
              Пошаговый рецепт и авторские фишки
            </DialogDescription>
          </DialogHeader>

          {recipe && (
            <div className="space-y-6 mt-2">
              {steps.length > 0 && (
                <div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-3">
                    Пошаговый рецепт
                  </h4>
                  <ol className="space-y-3">
                    {steps.map((s, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 text-primary font-bold flex items-center justify-center text-sm">
                          {i + 1}
                        </span>
                        <span className="text-foreground/85 leading-relaxed pt-0.5">{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {recipe.tips && (
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    Фишки и секреты
                  </h4>
                  <p className="text-foreground/85 whitespace-pre-line leading-relaxed">
                    {recipe.tips}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Recipes;
