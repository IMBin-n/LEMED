function ArticleDetail({ article, setPage, lang, t }) {
  const dir = lang === "fa" ? "rtl" : "ltr";
  return (
    <div className="page" dir={dir}>
      <div className="article-detail">
        <button className="back-btn" onClick={() => setPage("articles")}>{t.backToArticles}</button>
        <h1>{lang === "fa" ? article.titleFA : article.title}</h1>
        <div className="article-date" style={{ marginTop: "1rem" }}>{article.date}</div>
        <img className="article-detail-img" src={article.image} alt={article.title} />
        <p>{lang === "fa" ? article.excerptFA : article.excerpt}</p>
        <p>
          {lang === "fa"
            ? "طراحی آهسته چیزی بیش از یک ترند است — این یک فلسفه است. در دنیایی که مصرف سریع هنجار شده، ما معتقدیم که هر کیفی باید داستانی برای گفتن داشته باشد. از انتخاب چرم تا دوخت نهایی، هر مرحله با دقت و قصد انجام می‌شود."
            : "Slow design is more than a trend — it is a philosophy. In a world where fast consumption has become the norm, we believe every bag should have a story to tell. From the selection of leather to the final stitch, every step is performed with care and intention."}
        </p>
        <p>
          {lang === "fa"
            ? "این رویکرد نه تنها کیفیتی بهتر ایجاد می‌کند، بلکه رابطه‌ای عمیق‌تر بین شما و آنچه حمل می‌کنید ایجاد می‌کند. یک کیف که با زمان بهتر می‌شود، نه بدتر."
            : "This approach not only creates better quality, but a deeper relationship between you and what you carry. A bag that gets better with time, not worse."}
        </p>
      </div>
    </div>
  );
}
export default ArticleDetail;