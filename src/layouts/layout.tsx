import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppFooter from "@/components/ui/AppFooter";
import AppHeader from "@/components/ui/AppHeader";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AppHeader />
      <div className="container mx-auto flex-1 py-10 bg-white">{children}</div>
      <AppFooter />
    </div>
  );
};

export default Layout;
