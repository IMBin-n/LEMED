import { useState } from "react";

// ─── MOCK DATA ───────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id: 1, name: "Hobo Bag", nameFA: "کیف هوبو", price: 189, tag: "New", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
  { id: 2, name: "Tote Bag", nameFA: "کیف توت", price: 145, tag: "", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80" },
  { id: 3, name: "Duffle Bag", nameFA: "کیف دافل", price: 220, tag: "Sale", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
  { id: 4, name: "Crossbody", nameFA: "کیف دوشی", price: 165, tag: "", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&q=80" },
  { id: 5, name: "Bucket Bag", nameFA: "کیف باکت", price: 198, tag: "New", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" },
  { id: 6, name: "Clutch", nameFA: "کلاچ", price: 95, tag: "", image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4c6b?w=400&q=80" },
];

const ARTICLES = [
  { id: 1, title: "The Art of Slow Fashion", titleFA: "هنر مد آهسته", date: "Jun 2025", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", excerpt: "Why buying less means owning more. A reflection on intentional style.", excerptFA: "چرا کمتر خریدن یعنی بیشتر داشتن. تأملی درباره سبک زندگی آگاهانه." },
  { id: 2, title: "Material Matters", titleFA: "جنس اهمیت دارد", date: "May 2025", image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=600&q=80", excerpt: "From tanneries in Italy to ateliers in Tehran — our supply chain story.", excerptFA: "از دباغ‌خانه‌های ایتالیا تا کارگاه‌های تهران — داستان زنجیره تأمین ما." },
  { id: 3, title: "Carry Culture", titleFA: "فرهنگ حمل", date: "Apr 2025", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80", excerpt: "How the bag you carry says more than you think.", excerptFA: "کیفی که حمل می‌کنید بیشتر از آنچه فکر می‌کنید چیزی می‌گوید." },
];

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  en: {
    nav: ["Shop", "Articles", "About"],
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
    aboutText: "LeMed was born from a desire for bags that outlast trends. We believe in honest materials, quiet design, and pieces that earn their place in your everyday life.",
    contactUs: "Contact Us",
    articleTitle: "Journal",
    backToShop: "← Back to Shop",
    backToArticles: "← Back to Articles",
    loading: "Loading...",
    langToggle: "فارسی",
  },
  fa: {
    nav: ["فروشگاه", "مقالات", "درباره ما"],
    heroTitle:"لُمِد",
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
    aboutText: "لِمِد از دل اشتیاق به کیف‌هایی زاده شد که از ترندها پیشی می‌گیرند. ما به مواد صادقانه، طراحی آرام و قطعاتی ایمان داریم که جای خود را در زندگی روزمره‌تان می‌یابند.",
    contactUs: "تماس با ما",
    articleTitle: "مجله",
    backToShop: "→ بازگشت به فروشگاه",
    backToArticles: "→ بازگشت به مقالات",
    loading: "در حال بارگذاری...",
    langToggle: "English",
  },
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Inter:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1a18;
    --clay: #3d3830;
    --sage: #4a5240;
    --sand: #c8b99a;
    --cream: #f5f2ed;
    --mist: #e8e4de;
    --red: #8b1a1a;
    --white: #fafaf8;
    --font-display: 'Cormorant Garamond', serif;
    --font-body: 'Inter', sans-serif;
    --transition: 0.25s ease;
  }

  body { background: var(--white); color: var(--ink); font-family: var(--font-body); font-weight: 300; }
  [dir="rtl"] { font-family: 'Tahoma', var(--font-body); }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.25rem 3rem;
    background: rgba(250,250,248,0.92); backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--mist);
  }
  .nav-logo {
    font-family: var(--font-display); font-size: 1.6rem; font-weight: 300;
    letter-spacing: 0.12em; color: var(--ink); cursor: pointer;
    text-decoration: none;
  }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links button {
    background: none; border: none; cursor: pointer;
    font-family: var(--font-body); font-size: 0.8rem; font-weight: 400;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--clay);
    transition: color var(--transition); padding: 0;
  }
  .nav-links button:hover { color: var(--red); }
  .nav-links button.active { color: var(--ink); border-bottom: 1px solid var(--ink); }
  .nav-right { display: flex; align-items: center; gap: 1.5rem; }
  .lang-btn {
    background: none; border: 1px solid var(--mist); cursor: pointer;
    font-size: 0.72rem; letter-spacing: 0.08em; padding: 0.35rem 0.75rem;
    color: var(--clay); transition: all var(--transition); border-radius: 2px;
  }
  .lang-btn:hover { border-color: var(--ink); color: var(--ink); }

  /* PAGES */
  .page { min-height: 100vh; padding-top: 70px; }

  /* ── LANDING ── */
  .hero {
    height: 90vh; display: flex; align-items: flex-end;
    background: var(--ink); position: relative; overflow: hidden;
  }
  .hero-img {
    position: absolute; inset: 0;
    background: url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1400&q=80') center/cover;
    opacity: 0.55;
  }
  .hero-content {
    position: relative; z-index: 2; padding: 4rem 3rem;
    max-width: 640px;
  }
  .hero-title {
    font-family: var(--font-display); font-size: clamp(5rem, 12vw, 10rem);
    font-weight: 300; color: var(--white); line-height: 0.9;
    letter-spacing: -0.02em;
  }
  .hero-sub {
    margin-top: 1.5rem; font-size: 0.85rem; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--sand);
  }
  .hero-cta {
    display: inline-block; margin-top: 2.5rem;
    padding: 0.9rem 2.5rem; background: var(--white); color: var(--ink);
    font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase;
    border: none; cursor: pointer; transition: background var(--transition);
    font-family: var(--font-body);
  }
  .hero-cta:hover { background: var(--sand); }

  .section { padding: 5rem 3rem; }
  .section-label {
    font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--sage); margin-bottom: 2.5rem; display: flex; align-items: center; gap: 1rem;
  }
  .section-label::after { content: ''; flex: 1; height: 1px; background: var(--mist); }

  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 2rem; }
  .product-card { cursor: pointer; group: true; }
  .product-card:hover .product-img-wrap img { transform: scale(1.04); }
  .product-img-wrap { overflow: hidden; aspect-ratio: 3/4; background: var(--mist); position: relative; }
  .product-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; display: block; }
  .product-tag {
    position: absolute; top: 1rem; left: 1rem;
    background: var(--red); color: var(--white);
    font-size: 0.65rem; letter-spacing: 0.1em; padding: 0.3rem 0.6rem; text-transform: uppercase;
  }
  [dir="rtl"] .product-tag { left: auto; right: 1rem; }
  .product-info { padding: 1rem 0; display: flex; justify-content: space-between; align-items: baseline; }
  .product-name { font-size: 0.88rem; font-weight: 400; color: var(--ink); }
  .product-price { font-family: var(--font-display); font-size: 1.1rem; color: var(--clay); }

  /* ── SHOP ── */
  .shop-header { padding: 3rem 3rem 1.5rem; border-bottom: 1px solid var(--mist); }
  .shop-header h1 { font-family: var(--font-display); font-size: 3.5rem; font-weight: 300; }
  .filter-bar { display: flex; gap: 0.5rem; margin-top: 1.5rem; }
  .filter-btn {
    background: none; border: 1px solid var(--mist); cursor: pointer;
    font-size: 0.75rem; letter-spacing: 0.08em; padding: 0.4rem 1rem;
    color: var(--clay); transition: all var(--transition); text-transform: uppercase;
  }
  .filter-btn.active, .filter-btn:hover { background: var(--ink); color: var(--white); border-color: var(--ink); }

  /* ── PRODUCT DETAIL ── */
  .product-detail { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 70px); }
  .detail-gallery { background: var(--mist); position: relative; overflow: hidden; }
  .detail-gallery img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .detail-info { padding: 4rem 3.5rem; display: flex; flex-direction: column; gap: 1.5rem; }
  .detail-tag-line { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--sage); }
  .detail-name { font-family: var(--font-display); font-size: 3rem; font-weight: 300; line-height: 1.1; }
  .detail-price { font-family: var(--font-display); font-size: 2rem; color: var(--clay); }
  .detail-divider { height: 1px; background: var(--mist); }
  .size-options, .color-options { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem; }
  .size-btn, .color-btn {
    border: 1px solid var(--mist); background: none; cursor: pointer;
    font-size: 0.75rem; padding: 0.5rem 1rem; transition: all var(--transition);
    color: var(--clay);
  }
  .size-btn:hover, .color-btn:hover, .size-btn.active, .color-btn.active {
    background: var(--ink); color: var(--white); border-color: var(--ink);
  }
  .add-cart-btn {
    background: var(--ink); color: var(--white); border: none; cursor: pointer;
    padding: 1.1rem 2rem; font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase;
    font-family: var(--font-body); transition: background var(--transition); margin-top: 0.5rem;
  }
  .add-cart-btn:hover { background: var(--red); }
  .back-btn {
    background: none; border: none; cursor: pointer; font-size: 0.78rem;
    color: var(--sage); letter-spacing: 0.08em; padding: 0; margin-bottom: 1rem;
    font-family: var(--font-body);
  }
  .back-btn:hover { color: var(--ink); }
  .option-label { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--clay); }

  /* ── ARTICLES ── */
  .articles-header { padding: 3rem 3rem 1.5rem; }
  .articles-header h1 { font-family: var(--font-display); font-size: 3.5rem; font-weight: 300; }
  .articles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2.5rem; padding: 2.5rem 3rem 5rem; }
  .article-card { cursor: pointer; }
  .article-img { aspect-ratio: 4/3; overflow: hidden; background: var(--mist); }
  .article-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; display: block; }
  .article-card:hover .article-img img { transform: scale(1.04); }
  .article-meta { padding: 1.2rem 0; }
  .article-date { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sage); margin-bottom: 0.5rem; }
  .article-title-text { font-family: var(--font-display); font-size: 1.5rem; font-weight: 400; line-height: 1.2; margin-bottom: 0.7rem; }
  .article-excerpt { font-size: 0.82rem; color: var(--clay); line-height: 1.7; }
  .read-more { font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--red); margin-top: 0.8rem; display: block; }

  /* ── ARTICLE DETAIL ── */
  .article-detail { max-width: 760px; margin: 0 auto; padding: 3rem 2rem 6rem; }
  .article-detail-img { width: 100%; aspect-ratio: 16/9; object-fit: cover; margin: 2rem 0; display: block; }
  .article-detail h1 { font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300; line-height: 1.1; }
  .article-detail p { font-size: 1rem; line-height: 1.9; color: var(--clay); margin-bottom: 1.5rem; }

  /* ── ABOUT ── */
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 70px); }
  .about-img-col { position: relative; overflow: hidden; background: var(--ink); }
  .about-img-col img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; display: block; }
  .about-text-col { padding: 5rem 4rem; display: flex; flex-direction: column; justify-content: center; gap: 2rem; }
  .about-text-col h1 { font-family: var(--font-display); font-size: clamp(2.5rem, 4vw, 4.5rem); font-weight: 300; line-height: 1.1; }
  .about-text-col p { font-size: 0.95rem; line-height: 1.9; color: var(--clay); max-width: 420px; }
  .contact-btn {
    align-self: flex-start; background: none; border: 1px solid var(--ink); cursor: pointer;
    font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.9rem 2rem;
    font-family: var(--font-body); color: var(--ink); transition: all var(--transition);
  }
  .contact-btn:hover { background: var(--ink); color: var(--white); }
  .about-accent {
    position: absolute; bottom: 2rem; right: 2rem;
    font-family: var(--font-display); font-size: 6rem; color: var(--red);
    opacity: 0.6; font-style: italic; line-height: 1; pointer-events: none;
  }
  [dir="rtl"] .about-accent { right: auto; left: 2rem; }

  /* ── RELATED ── */
  .related-section { padding: 3rem; background: var(--cream); }
  .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 1.5rem; }

  /* ── FOOTER ── */
  footer {
    border-top: 1px solid var(--mist); padding: 2.5rem 3rem;
    display: flex; justify-content: space-between; align-items: center;
    font-size: 0.72rem; color: var(--sage); letter-spacing: 0.08em;
  }

  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { gap: 1.2rem; }
    .section { padding: 3rem 1.5rem; }
    .product-detail, .about-grid { grid-template-columns: 1fr; }
    .detail-gallery { height: 60vw; }
    .hero-title { font-size: 4.5rem; }
    .articles-grid, .products-grid { grid-template-columns: 1fr 1fr; }
    .related-grid { grid-template-columns: 1fr 1fr; }
    footer { flex-direction: column; gap: 1rem; text-align: center; }
  }
`;

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Nav({ page, setPage, lang, setLang, t }) {
  return (
    <nav dir={lang === "fa" ? "rtl" : "ltr"}>
      <span className="nav-logo" onClick={() => setPage("landing")}>LeMed</span>
      <ul className="nav-links">
        {["shop", "articles", "about"].map((p, i) => (
          <li key={p}>
            <button className={page === p ? "active" : ""} onClick={() => setPage(p)}>
              {t.nav[i]}
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button className="lang-btn" onClick={() => setLang(lang === "en" ? "fa" : "en")}>
          {t.langToggle}
        </button>
      </div>
    </nav>
  );
}

function ProductCard({ product, lang, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
      </div>
      <div className="product-info">
        <span className="product-name">{lang === "fa" ? product.nameFA : product.name}</span>
        <span className="product-price">${product.price}</span>
      </div>
    </div>
  );
}

// ─── PAGES ───────────────────────────────────────────────────────────────────

function Landing({ setPage, lang, t }) {
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

function Shop({ setPage, lang, t }) {
  const [filter, setFilter] = useState("All");
  const dir = lang === "fa" ? "rtl" : "ltr";
  const tags = [t.allProducts, "New", "Sale"];
  const filtered = filter === t.allProducts || filter === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.tag === filter);

  return (
    <div className="page" dir={dir}>
      <div className="shop-header">
        <h1>{t.shopTitle}</h1>
        <div className="filter-bar">
          {tags.map(tag => (
            <button key={tag} className={`filter-btn${filter === tag ? " active" : ""}`}
              onClick={() => setFilter(tag)}>{tag}</button>
          ))}
        </div>
      </div>
      <div className="section">
        <div className="products-grid">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} lang={lang}
              onClick={() => setPage({ name: "product", data: p })} />
          ))}
        </div>
      </div>
      <footer>
        <span>© 2025 LeMed</span>
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1rem" }}>Craft that lasts</span>
      </footer>
    </div>
  );
}

function ProductDetail({ product, setPage, lang, t }) {
  const [selectedSize, setSize] = useState("M");
  const [selectedColor, setColor] = useState("Black");
  const dir = lang === "fa" ? "rtl" : "ltr";
  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Black", "Brown", "Khaki"];
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="page" dir={dir}>
      <div className="product-detail">
        <div className="detail-gallery">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <button className="back-btn" onClick={() => setPage("shop")}>{t.backToShop}</button>
          <div className="detail-tag-line">LeMed Collection</div>
          <h1 className="detail-name">{lang === "fa" ? product.nameFA : product.name}</h1>
          <p className="detail-price">${product.price}</p>
          <div className="detail-divider" />

          <div>
            <div className="option-label">{t.size}</div>
            <div className="size-options">
              {sizes.map(s => (
                <button key={s} className={`size-btn${selectedSize === s ? " active" : ""}`}
                  onClick={() => setSize(s)}>{s}</button>
              ))}
            </div>
          </div>

          <div>
            <div className="option-label">{t.color}</div>
            <div className="color-options">
              {colors.map(c => (
                <button key={c} className={`color-btn${selectedColor === c ? " active" : ""}`}
                  onClick={() => setColor(c)}>{c}</button>
              ))}
            </div>
          </div>

          <button className="add-cart-btn">{t.addToCart}</button>
        </div>
      </div>

      <div className="related-section" dir={dir}>
        <div className="section-label">{t.relatedProducts}</div>
        <div className="related-grid">
          {related.map(p => (
            <ProductCard key={p.id} product={p} lang={lang}
              onClick={() => setPage({ name: "product", data: p })} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Articles({ setPage, lang, t }) {
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

function About({ lang, t }) {
  const dir = lang === "fa" ? "rtl" : "ltr";
  return (
    <div className="page" dir={dir}>
      <div className="about-grid">
        <div className="about-img-col">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="About" />
          <div className="about-accent">LeMed</div>
        </div>
        <div className="about-text-col">
          <h1>{t.aboutTitle}</h1>
          <p>{t.aboutText}</p>
          <p style={{ fontSize: "0.85rem", color: "var(--sage)" }}>
            {lang === "fa"
              ? "تهران، ایران — از ۲۰۲۲"
              : "Tehran, Iran — Est. 2022"}
          </p>
          <button className="contact-btn">{t.contactUs}</button>
        </div>
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("landing");
  const [lang, setLang] = useState("en");

  const t = T[lang];
  const currentPage = typeof page === "object" ? page.name : page;

  return (
    <>
      <style>{styles}</style>
      <Nav page={currentPage} setPage={setPage} lang={lang} setLang={setLang} t={t} />

      {currentPage === "landing" && <Landing setPage={setPage} lang={lang} t={t} />}
      {currentPage === "shop" && <Shop setPage={setPage} lang={lang} t={t} />}
      {currentPage === "product" && <ProductDetail product={page.data} setPage={setPage} lang={lang} t={t} />}
      {currentPage === "articles" && <Articles setPage={setPage} lang={lang} t={t} />}
      {currentPage === "article" && <ArticleDetail article={page.data} setPage={setPage} lang={lang} t={t} />}
      {currentPage === "about" && <About lang={lang} t={t} />}
    </>
  );
}
