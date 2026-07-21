import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";

export default function ProductCard({ product }) {
  const { lang } = useLang();
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer group"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.tag && (
          <span style={{padding : "5px 10px"}} className="absolute top-3 right-3 bg-black text-white text-[0.65rem] tracking-wider uppercase px-2 py-1">
            {product.tag}
          </span>
        )}
      </div>
      <div className="py-4 flex justify-between items-baseline">
        <span className="text-[0.88rem] font-normal text-black">
          {product.name}
        </span>
        <span className="text-lg text-gray-600">${product.price}</span>
      </div>
    </div>
  );
}