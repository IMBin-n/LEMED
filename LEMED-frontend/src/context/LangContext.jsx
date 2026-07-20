import { createContext, useContext, useState } from "react";

const T = {
  en: {
    dir: "ltr",
    nav: [
      { key: "shop", label: "Shop" },
      { key: "articles", label: "Articles" },
      { key: "about", label: "About" },
      { key: "shoppingCart", label: "shopping cart" },

    ],
    heroTitle: "LeMed",
    heroSub: "Bags built to carry a life",
    shopNow: "Shop Now",
    newArrivals: "New Arrivals",
    featuredArticles: "Featured Articles",
    readMore: "Read more",
    shopTitle: "Shop",
    allProducts: "All",
    productDetail: "Product Detail",
    relatedProducts: "Related Products",
    addToCart: "Add to Cart",
    size: "Size",
    color: "Color",
    aboutTitle: "About LeMed",
    aboutText:
      "LeMed was born from a desire for bags that outlast trends. We believe in honest materials, quiet design, and pieces that earn their place in your everyday life.",
    contactUs: "Contact Us",
    articleTitle: "Journal",
    backToShop: "← Back to Shop",
    backToArticles: "← Back to Articles",
    loading: "Loading...",
    langToggle: "فارسی",
    notFoundTitle: "Page not found",
    notFoundText: "The page you're looking for doesn't exist.",
    backHome: "Back to Home",
  },
  fa: {
    dir: "rtl",
    nav: [
      { key: "shop", label: "فروشگاه" },
      { key: "articles", label: "مقالات" },
      { key: "about", label: "درباره ما" },
      { key: "shoppingCart", label: "سبد خرید" },
    ],
    heroTitle: "لُمِد",
    heroSub: "کیف‌هایی که برای یک زندگی ساخته شده‌اند",
    shopNow: "خرید کنید",
    newArrivals: "تازه‌واردها",
    featuredArticles: "مقالات برگزیده",
    readMore: "بیشتر بخوانید",
    shopTitle: "فروشگاه",
    allProducts: "همه",
    productDetail: "جزئیات محصول",
    relatedProducts: "محصولات مشابه",
    addToCart: "افزودن به سبد",
    size: "سایز",
    color: "رنگ",
    aboutTitle: "درباره لِمِد",
    aboutText:
      "لِمِد از دل اشتیاق به کیف‌هایی زاده شد که از ترندها پیشی می‌گیرند. ما به مواد صادقانه، طراحی آرام و قطعاتی ایمان داریم که جای خود را در زندگی روزمره‌تان می‌یابند.",
    contactUs: "تماس با ما",
    articleTitle: "مجله",
    backToShop: "→ بازگشت به فروشگاه",
    backToArticles: "→ بازگشت به مقالات",
    loading: "در حال بارگذاری...",
    langToggle: "English",
    notFoundTitle: "صفحه پیدا نشد",
    notFoundText: "صفحه‌ای که دنبالش می‌گردید وجود ندارد.",
    backHome: "بازگشت به خانه",
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = T[lang];
  const toggleLang = () => setLang((l) => (l === "en" ? "fa" : "en"));

  return (
    <LangContext.Provider value={{ lang, t, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
