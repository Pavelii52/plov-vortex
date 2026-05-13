import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Soup, Salad, UtensilsCrossed, Flame, Cookie, CupSoda, Wheat, Clock, ChefHat, Lock, Sparkles, BookOpen, Lightbulb, LogIn, LogOut } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import recipesData from "@/data/recipes.json";

type Recipe = { ingredients: string; time: string; difficulty: string; steps?: string; tips?: string };
const recipes = recipesData as Record<string, Recipe>;
const RECIPE_PRICE_BYN = 3.9;
const UNLOCK_KEY = "plovovihr_unlocked_recipes";

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
  const { user, loading: authLoading } = useAuth();
  const [selected, setSelected] = useState<string | null>(null);
  const [payOpen, setPayOpen] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(UNLOCK_KEY);
      if (raw) setUnlocked(JSON.parse(raw));
    } catch {}
  }, []);

  const recipe = selected ? recipes[selected] : null;
  const sections = recipe ? parseIngredients(recipe.ingredients) : [];
  const steps = parseSteps(recipe?.steps);
  const isUnlocked = true;
  const isQualifying = (_name: string) => false;
  const handleUnlock = () => {
    setPayOpen(false);
    setShowRecipe(true);
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
            {user
              ? "Нажмите на блюдо, чтобы посмотреть список ингредиентов"
              : "Бесплатная регистрация открывает доступ ко всем названиям и спискам ингредиентов"}
          </p>
        </div>

        {!authLoading && !user && (
          <div className="max-w-3xl mx-auto mb-12 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card p-6 md:p-8 text-center shadow-[0_15px_40px_-15px_hsl(var(--primary)/0.5)]">
            <div className="inline-flex items-center gap-2 bg-primary/15 px-3 py-1 rounded-full text-primary text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Регистрация бесплатна
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              Откройте <span className="golden-text">Золотой фонд</span>
            </h3>
            <p className="text-foreground/70 mb-5 max-w-xl mx-auto">
              Зарегистрируйтесь бесплатно, чтобы увидеть ингредиенты ко всем блюдам.
              Полные пошаговые рецепты с авторскими фишками — отдельно по {RECIPE_PRICE_BYN.toFixed(2)} BYN.
            </p>
            <Link to="/auth" className="btn-primary inline-flex items-center gap-2">
              <LogIn className="w-4 h-4" /> Зарегистрироваться бесплатно
            </Link>
          </div>
        )}

        {user && (
          <div className="max-w-3xl mx-auto mb-10 flex items-center justify-between gap-3 text-sm text-foreground/70 px-4">
            <span>Вы вошли как <span className="text-primary font-medium">{user.email}</span></span>
            <button
              onClick={() => supabase.auth.signOut()}
              className="inline-flex items-center gap-1.5 hover:text-primary transition"
            >
              <LogOut className="w-4 h-4" /> Выйти
            </button>
          </div>
        )}

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
                        onClick={() => {
                          if (!user) {
                            toast({
                              title: "Нужна бесплатная регистрация",
                              description: "Создайте аккаунт за минуту, чтобы увидеть ингредиенты.",
                            });
                            return;
                          }
                          if (has) setSelected(name);
                        }}
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
                          {!user && has && (
                            <Lock className="w-4 h-4 text-foreground/40 shrink-0 mt-1" />
                          )}
                        </div>
                        {!user && has && (
                          <Link
                            to="/auth"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute inset-0"
                            aria-label="Зарегистрироваться, чтобы открыть"
                          />
                        )}
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

              {/* Премиум-кнопка: рецепт и фишки */}
              {recipe.steps && (
                <button
                  type="button"
                  onClick={() => {
                    if (isUnlocked) setShowRecipe(true);
                    else setPayOpen(true);
                  }}
                  className="group relative w-full overflow-hidden rounded-xl px-6 py-4 font-display font-bold text-lg text-white shadow-[0_10px_30px_-5px_rgba(220,38,38,0.6)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_-5px_rgba(220,38,38,0.8)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #b91c1c 100%)",
                  }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center justify-center gap-3">
                    {isUnlocked ? (
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    ) : (
                      <Lock className="w-5 h-5" />
                    )}
                    <span>Рецепт и фишки приготовления</span>
                    {!isUnlocked && (
                      <span className="ml-2 px-2 py-0.5 rounded-md bg-white/20 text-sm">
                        {RECIPE_PRICE_BYN.toFixed(2)} BYN
                      </span>
                    )}
                  </span>
                </button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Paywall dialog */}
      <Dialog open={payOpen} onOpenChange={setPayOpen}>
        <DialogContent className="max-w-md bg-card border-red-500/40">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display flex items-center gap-2">
              <Lock className="w-6 h-6 text-red-500" />
              Премиум-рецепт
            </DialogTitle>
            <DialogDescription>
              Полный пошаговый рецепт «{selected}» с авторскими фишками — за {RECIPE_PRICE_BYN.toFixed(2)} BYN.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 text-sm text-foreground/80 py-2">
            <p>✓ Подробные шаги приготовления</p>
            <p>✓ Секреты и тонкости от Павла</p>
            <p>✓ Доступ навсегда</p>
            {selected && isQualifying(selected) && (
              <div className="mt-3 rounded-lg border border-primary/40 bg-primary/10 p-3 text-foreground">
                <p className="font-semibold text-primary mb-1">🎁 Бонус!</p>
                <p>
                  Покупая этот рецепт, вы автоматически и бесплатно получаете доступ ко{" "}
                  <span className="font-semibold">всем «Десертам» и «Напиткам»</span>.
                </p>
              </div>
            )}
          </div>
          <DialogFooter className="gap-2">
            <button
              type="button"
              onClick={() => setPayOpen(false)}
              className="px-4 py-2 rounded-lg border border-border text-foreground/80 hover:bg-muted transition"
            >
              Отмена
            </button>
            <button
              type="button"
              onClick={handleUnlock}
              className="px-5 py-2 rounded-lg font-semibold text-white shadow-lg transition hover:scale-105"
              style={{ background: "linear-gradient(135deg, #dc2626, #ef4444)" }}
            >
              Оплатить {RECIPE_PRICE_BYN.toFixed(2)} BYN
            </button>
          </DialogFooter>
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
