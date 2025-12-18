import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import kazan from "@/assets/kazan.jpg";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Отлично!",
        description: "Гайд отправлен на вашу почту. Проверьте входящие!",
      });
      
      // Download PDF
      const link = document.createElement("a");
      link.href = "/guide.pdf";
      link.download = "5_oshibok_v_prigotovlenii_plova.pdf";
      link.click();
      
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={kazan}
          alt="Казан с пловом"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="text-primary font-semibold text-sm">Бесплатный гайд</span>
          </div>
          
          <h2 className="section-title">
            5 ошибок в приготовлении плова,{" "}
            <span className="golden-text">которые убивают вкус</span>
          </h2>
          
          <p className="section-subtitle mx-auto mt-4 mb-8">
            Скачайте бесплатный PDF-гайд и узнайте, почему ваш плов получается 
            «не таким». Внутри — секреты, о которых молчат ошпозы.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              required
              className="input-field flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? "Отправляем..." : "Получить гайд"}
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            Никакого спама. Только полезные рецепты и секреты.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-display font-bold golden-text">12</div>
              <div className="text-sm text-muted-foreground">страниц</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold golden-text">5</div>
              <div className="text-sm text-muted-foreground">главных ошибок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold golden-text">3</div>
              <div className="text-sm text-muted-foreground">секретных рецепта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
