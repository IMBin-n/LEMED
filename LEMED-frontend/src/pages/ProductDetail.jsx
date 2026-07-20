import { useState } from "react";
import { PRODUCTS } from "../services/mockData";
import { useParams } from "react-router-dom";
import { useLang } from "../context/LangContext";
import ProductCard from "../components/ProductCard";
function ProductDetail({ product, setPage}) {
    const { lang , t} = useLang();
  
  const [selectedSize, setSize] = useState("M");
  const [selectedColor, setColor] = useState("Black");
    const { id } = useParams();
  
//   const id = location.href.
// console.log(id)
const dir = lang === "fa" ? "rtl" : "ltr";
const sizes = ["S", "M", "L", "XL"];
const colors = ["Black", "Brown", "Khaki"];
const related = PRODUCTS.filter(p => p?.id !== id).slice(0, 3);
const producttt = PRODUCTS.find(p => p.id === Number(id));
console.log(producttt)

  return (
    <div className="page" dir={dir}>
      <div className="product-detail">
        <div className="detail-gallery">
          <img src={producttt.image} alt={producttt.name} />
        </div>
        <div className="detail-info">
          <button className="back-btn" onClick={() => setPage("shop")}>back</button>
          <div className="detail-tag-line">LeMed Collection</div>
          <h1 className="detail-name">{lang === "fa" ? producttt.nameFA : producttt.name}</h1>
          <p className="detail-price">${producttt.price}</p>
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
          {/* {producttt.map(p => ( */}
            <ProductCard key={producttt.id} product={producttt} lang={lang}
              onClick={() => setPage({ name: "product", data: producttt })} />
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;