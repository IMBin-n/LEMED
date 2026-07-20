import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import Badge from "./Badge";

export default function ProductCard({ product }) {
  const { lang } = useLang();
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer group"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-mist">
        <img
          src={product.image}
          alt={lang === "fa" ? product.nameFA : product.name}
          className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <Badge dir={lang === "fa" ? "rtl" : "ltr"}>{product.tag}</Badge>
      </div>
      <div className="py-4 flex justify-between items-baseline">
        <span className="text-[0.88rem] font-normal text-ink">
          {lang === "fa" ? product.nameFA : product.name}
        </span>
        <span className="font-display text-lg text-clay">
          ${product.price}
        </span>
      </div>
    </div>
  );
}
