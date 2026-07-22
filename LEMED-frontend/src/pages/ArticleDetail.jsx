import { useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";

function ArticleDetail() {
  const { lang, t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state?.article;
  console.log(article , "article");
    const dir = lang === "fa" ? "rtl" : "ltr";
  return (
    <div className="page" dir={dir}>
      <div className="article-detail">
        <button className="back-btn"
            onClick={() => navigate(`/articles`)}
        
        >{t.backToArticles}</button>
        <h1>{lang === "fa" ? article.articleDetails.titleFA : article.title}</h1>
        <div className="article-date" style={{ marginTop: "1rem" }}>{article.articleDetails.date}</div>
        <img className="article-detail-img" src={article.articleDetails.image} alt={article.articleDetails.title} />
        <p>{lang === "fa" ? article.articleDetails.excerptFA : article.articleDetails.excerpt}</p>
        <p>
          {lang === "fa"
            ? "در دنیایی که ترندها با سرعتی بی‌سابقه تغییر می‌کنند، مد آهسته (Slow Fashion) یادآور ارزش کیفیت، اصالت و انتخاب آگاهانه است. این رویکرد، ما را به خرید کمتر اما هوشمندانه‌تر دعوت می‌کند؛ انتخاب محصولاتی که با دقت طراحی شده‌اند، دوام بالایی دارند و برای سال‌ها بخشی از استایل ما باقی می‌مانند."
            : "In a world where trends change faster than ever, Slow Fashion reminds us of the true value of quality, authenticity, and mindful choices. It encourages us to buy less, but choose better—investing in pieces that are thoughtfully designed, beautifully crafted, and made to last."}
        </p>
        <p>
          {lang === "fa"
            ? "این رویکرد نه تنها کیفیتی بهتر ایجاد می‌کند، بلکه رابطه‌ای عمیق‌تر بین شما و آنچه حمل می‌کنید ایجاد می‌کند. یک کیف که با زمان بهتر می‌شود، نه بدتر."
            : "This approach not only creates better quality, but a deeper relationship between you and what you carry. A bag that gets better with time, not worse."}
        </p>
        <p>
          {lang === "fa"
            ? "در LeMed نیز همین فلسفه الهام‌بخش ماست. باور داریم یک کیف باکیفیت، با طراحی مینیمال و ماندگار، می‌تواند سال‌ها همراه استایل شما باشد و نیازی به تعویض مداوم نداشته باشد. ما به جای دنبال کردن ترندهای زودگذر، محصولاتی را انتخاب می‌کنیم که زیبایی، کارایی و ماندگاری را در کنار هم ارائه دهند."
            : "At LeMed, this philosophy inspires everything we do. We believe that a well-crafted handbag with timeless design should be more than a seasonal accessory—it should become a lasting part of your everyday style. Rather than chasing temporary trends, we focus on offering pieces that combine elegance, functionality, and enduring quality."}
        </p>
         <p>
          {lang === "fa"
            ? "زیبایی واقعی در انتخاب‌های آگاهانه نهفته است؛ انتخاب‌هایی که نه‌تنها استایل شخصی ما را کامل می‌کنند، بلکه ارزش کیفیت، دوام و سادگی را نیز حفظ می‌کنند."
            : "True style is built on thoughtful choices—choices that reflect your personality while embracing quality, simplicity, and timeless design."}
        </p>
      </div>
    </div>
  );
}
export default ArticleDetail;