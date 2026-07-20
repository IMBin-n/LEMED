import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";
import ProductCard from "../components/ProductCard";

function Shop({ setPage }) {
  const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
    const { lang, t } = useLang();
  useEffect(() => {
  fetch("https://localhost:7088/api/products")
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err));
}, []);
  
  const dir = lang === "fa" ? "rtl" : "ltr";
  const tags = [t.allProducts, "New", "Sale"];
const filtered = filter === t.allProducts || filter === "All"
    ? products
    : products.filter(p => p.tag === filter);

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
export default Shop;