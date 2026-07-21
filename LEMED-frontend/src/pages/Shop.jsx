import { useEffect, useState } from "react";
import { useLang } from "../context/LangContext";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const { lang, t } = useLang();

  useEffect(() => {
    fetch("https://localhost:7088/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const dir = lang === "fa" ? "rtl" : "ltr";
  const tags = [t.allProducts, "New", "Sale"];
  const filtered =
    filter === t.allProducts || filter === "All"
      ? products
      : products.filter((p) => p.tag === filter);

  return (
    <div dir={dir}>
      <h1 className="flex flex-col gap-5 text-3xl font-bold">{t.shopTitle}</h1>
      <div style={{margin : "50px 0px 30px 10px"}} className="flex gap-2 mt-4 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            style={{padding : "6px 40px"}}
            className={`border px-4 py-1.5 text-sm ${
              filter === tag ? "bg-black text-white border-black" : "border-gray-300"
            }`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", marginLeft : "10px" }}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
export default Shop;