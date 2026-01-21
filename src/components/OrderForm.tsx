const OrderForm = () => {
  const openTelegram = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.open('https://t.me/Plovovihr_bot?start=order', '_blank');
    } else {
      window.open('https://web.telegram.org/k/#@Plovovihr_bot?start=order', '_blank');
    }
  };

  return (
    <section id="order" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-brown/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Заказ
          </span>
          <h2 className="section-title mt-2">
            Заказ доставки <span className="golden-text">плова</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border/50 text-center">
            <button
              onClick={openTelegram}
              className="inline-block text-xl py-5 px-10 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] mb-8"
              style={{ background: '#0088cc', color: 'white' }}
            >
              🚀 ПЕРЕЙТИ В TELEGRAM ДЛЯ ЗАКАЗА
            </button>

            <div className="bg-muted/50 p-6 rounded-xl text-left">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                📌 Как сделать заказ:
              </h3>
              <div className="space-y-2 text-foreground/80">
                <p>1. <strong className="text-foreground">Нажмите синюю кнопку выше</strong></p>
                <p>2. Откроется Telegram (на телефоне — приложение, на компьютере — сайт)</p>
                <p>3. <strong className="text-foreground">Если меню не появилось автоматически, напишите:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Команду: <code className="bg-background px-2 py-0.5 rounded">/start</code></li>
                  <li>Или текст: "заказ"</li>
                  <li>Или: "хочу заказать плов"</li>
                </ul>
                <p>4. Следуйте инструкциям бота</p>
                <p>5. Получите подтверждение заказа</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Или откройте веб-версию:{' '}
              <a 
                href="https://web.telegram.org/k/#@Plovovihr_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                web.telegram.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
