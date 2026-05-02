import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ПловоВихрь" className="h-10 w-auto" />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
              Меню
            </a>
            <a href="#story" className="text-muted-foreground hover:text-primary transition-colors">
              История
            </a>
            <a href="#recipes" className="text-muted-foreground hover:text-primary transition-colors">
              Рецепты
            </a>
            <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
              Блог
            </a>
            <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2024 ПловоВихрь. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
