import { useContext } from "react";
import { useLang } from "../context/LangContext";
import { ARTICLES, PRODUCTS } from "../services/mockData";
import ProductCard from "../components/ProductCard";
function Landing() {
  const { lang, t } = useLang();
  
  // const { lang, T } = useContext(LangContext);
  // console.log(lang, T , "fffff")
  const dir = lang === "fa" ? "rtl" : "ltr";
  return (
    <div className="page" dir={dir}>
      <div className="hero">
        <div className="hero-img" />
        <div className="hero-content">
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-sub">{t.heroSub}</p>
          <button className="hero-cta" onClick={() => setPage("shop")}>{t.shopNow}</button>
        </div>
      </div>

      <div className="section">
        <div className="section-label">{t.newArrivals}</div>
        <div className="products-grid">
          {PRODUCTS.slice(0, 3).map(p => (
            <ProductCard key={p.id} product={p} lang={lang} onClick={() => setPage({ name: "product", data: p })} />
          ))}
        </div>
      </div>

      <div className="section" style={{ background: "var(--cream)" }}>
        <div className="section-label">{t.featuredArticles}</div>
        <div className="articles-grid" style={{ padding: 0 }}>
          {ARTICLES.slice(0, 2).map(a => (
            <div key={a.id} className="article-card" onClick={() => setPage({ name: "article", data: a })}>
              <div className="article-img"><img src={a.image} alt={a.title} /></div>
              <div className="article-meta">
                <div className="article-date">{a.date}</div>
                <div className="article-title-text">{lang === "fa" ? a.titleFA : a.title}</div>
                <span className="read-more">{t.readMore} →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <span>© 2025 LeMed</span>
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1rem" }}>
          Craft that lasts
        </span>
      </footer>
    </div>
  );
}
export default Landing;