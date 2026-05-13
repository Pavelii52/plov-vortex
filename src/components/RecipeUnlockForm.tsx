import { useState } from "react";
import { z } from "zod";
import { Sparkles, Mail, User as UserIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Введите имя").max(80),
  email: z.string().trim().email("Некорректный email").max(255),
});

interface Props {
  onUnlocked: () => void;
}

const RecipeUnlockForm = ({ onUnlocked }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ name, email });
    if (!parsed.success) {
      toast({ title: "Проверьте поля", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("recipe_leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      source: "recipes_unlock",
    });
    setLoading(false);
    if (error && !error.message.toLowerCase().includes("duplicate")) {
      toast({ title: "Ошибка", description: "Не удалось сохранить. Попробуйте ещё раз.", variant: "destructive" });
      return;
    }
    localStorage.setItem("recipes_unlocked", "1");
    toast({ title: "Доступ открыт!", description: "Все рецепты и фишки теперь доступны." });
    onUnlocked();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-foreground/80">
        Оставьте имя и email — и мы откроем доступ ко всем пошаговым рецептам и авторским фишкам бесплатно.
      </div>

      <div className="relative">
        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={80}
          required
          className="w-full pl-10 pr-3 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
        <input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={255}
          required
          className="w-full pl-10 pr-3 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full overflow-hidden rounded-xl px-6 py-4 font-display font-bold text-lg text-white shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.85) 100%)" }}
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
        <span className="relative flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 animate-pulse" />
          {loading ? "Открываем доступ..." : "Открыть рецепты"}
        </span>
      </button>

      <p className="text-xs text-foreground/60 text-center">
        Никакого спама. Только полезные рецепты и секреты.
      </p>
    </form>
  );
};

export default RecipeUnlockForm;
