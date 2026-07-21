import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { useCart } from "../context/CartContext";

const SIZES = ["S", "M", "L", "XL"];
const COLORS = ["Black", "Brown", "Khaki"];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useLang();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Black");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    setAdded(false);
    fetch(`https://localhost:7088/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  const dir = lang === "fa" ? "rtl" : "ltr";

  if (loading) return <p>{t.loading}</p>;
  if (!product) return <p>محصول پیدا نشد.</p>;

  function handleAddToCart() {
    addToCart(product, size, color, 1);
    setAdded(true);
  }

  return (
    <div dir={dir}>
      <div className="product-detail">
        <div className="detail-gallery">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <button className="back-btn" onClick={() => navigate("/shop")}>
            back
          </button>
          <div className="detail-tag-line">LeMed Collection</div>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">${product.price}</p>
          <div className="detail-divider" />

          <div>
            <div className="option-label">{t.size}</div>
            <div className="size-options">
              {SIZES.map((s) => (
                <button
                  key={s}
                  className={`size-btn${size === s ? " active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="option-label">{t.color}</div>
            <div className="color-options">
              {COLORS.map((c) => (
                <button
                  key={c}
                  className={`color-btn${color === c ? " active" : ""}`}
                  onClick={() => setColor(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <button className="add-cart-btn" onClick={handleAddToCart}>
            {added ? "Added ✓" : t.addToCart}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;