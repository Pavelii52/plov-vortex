import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Recipes from "@/components/Recipes";
import LeadMagnet from "@/components/LeadMagnet";
import Blog from "@/components/Blog";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Recipes />
        <LeadMagnet />
        <Blog />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
