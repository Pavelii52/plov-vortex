import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Sparkles, Mail, Lock, ArrowLeft } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate("/#recipes", { replace: true });
  }, [user, navigate]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Вход в личный кабинет | ПловоВихрь";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const restoreDesc = setMeta('meta[name="description"]', "name", "description", "Войдите или зарегистрируйтесь, чтобы открыть рецепты ПловоВихрь.");
    const restoreOgTitle = setMeta('meta[property="og:title"]', "property", "og:title", "Вход в личный кабинет | ПловоВихрь");
    const restoreOgDesc = setMeta('meta[property="og:description"]', "property", "og:description", "Войдите или зарегистрируйтесь, чтобы открыть рецепты ПловоВихрь.");
    const restoreOgUrl = setMeta('meta[property="og:url"]', "property", "og:url", "https://plov-vortex.lovable.app/auth");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://plov-vortex.lovable.app/auth");

    return () => {
      document.title = prevTitle;
      restoreDesc();
      restoreOgTitle();
      restoreOgDesc();
      restoreOgUrl();
      if (prevCanonical !== null) canonical?.setAttribute("href", prevCanonical);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/` },
        });
        if (error) throw error;
        toast({ title: "Добро пожаловать! 🎉", description: "Регистрация бесплатна. Доступ к рецептам открыт." });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast({ title: "С возвращением!" });
      }
      navigate("/#recipes");
    } catch (err: any) {
      toast({ title: "Ошибка", description: err.message ?? String(err), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) {
      toast({ title: "Ошибка Google входа", description: String(result.error.message ?? result.error), variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-background via-deep-brown/30 to-background">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary mb-6 transition">
          <ArrowLeft className="w-4 h-4" /> На главную
        </Link>

        <div className="bg-card border border-primary/30 rounded-2xl p-8 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)]">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Регистрация бесплатна
            </div>
            <h1 className="font-display text-3xl golden-text">
              {mode === "signup" ? "Создайте аккаунт" : "Вход в Золотой фонд"}
            </h1>
            <p className="text-foreground/70 text-sm mt-2">
              Бесплатный доступ ко всем названиям блюд и спискам ингредиентов
            </p>
          </div>

          <button
            onClick={handleGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-border bg-background hover:bg-muted transition font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Продолжить с Google
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-foreground/50">или email</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль (мин. 6 символов)"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-60"
            >
              {loading ? "Подождите..." : mode === "signup" ? "Зарегистрироваться бесплатно" : "Войти"}
            </button>
          </form>

          <p className="text-center text-sm text-foreground/60 mt-5">
            {mode === "signup" ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
            <button
              onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
              className="text-primary font-semibold hover:underline"
            >
              {mode === "signup" ? "Войти" : "Зарегистрироваться"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
