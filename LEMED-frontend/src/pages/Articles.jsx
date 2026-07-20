import { useLang } from "../context/LangContext";
import { ARTICLES } from "../services/mockData";

function Articles({ setPage}) {
      const { lang, t } = useLang();
  
  const dir = lang === "fa" ? "rtl" : "ltr";
  return (
    <div className="page" dir={dir}>
      <div className="articles-header">
        <h1>{t.articleTitle}</h1>
      </div>
      <div className="articles-grid">
        {ARTICLES.map(a => (
          <div key={a.id} className="article-card" onClick={() => setPage({ name: "article", data: a })}>
            <div className="article-img"><img src={a.image} alt={a.title} /></div>
            <div className="article-meta">
              <div className="article-date">{a.date}</div>
              <div className="article-title-text">{lang === "fa" ? a.titleFA : a.title}</div>
              <div className="article-excerpt">{lang === "fa" ? a.excerptFA : a.excerpt}</div>
              <span className="read-more">{t.readMore} →</span>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <span>© 2025 LeMed</span>
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1rem" }}>Craft that lasts</span>
      </footer>
    </div>
  );
}
export default Articles;