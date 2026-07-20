import { Outlet } from "react-router-dom";
import { useLang } from "../context/LangContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { lang, t } = useLang();

  return (
    <div dir={t.dir} lang={lang} className="min-h-screen flex flex-col bg-offwhite text-ink font-body font-light">
      <Navbar />
      <main className="flex-1 pt-[70px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
