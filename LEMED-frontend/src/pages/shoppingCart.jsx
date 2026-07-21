import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function shoppingCart() {
  const { items, removeFromCart, updateQty, cartTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="text-center py-24">
        <h1 className="font-serif text-4xl mb-4">Shopping Cart</h1>
        <p className="text-gray-500 mb-8">سبد خرید شما خالی است.</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-black text-white text-sm tracking-widest uppercase py-3 px-8 hover:bg-gray-800 transition-colors"
        >
          مشاهده‌ی فروشگاه
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-serif text-4xl mb-10">Shopping Cart</h1>

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div
            key={`${item.id}-${item.size}-${item.color}`}
            className="flex items-center gap-6 border-b border-gray-200 pb-6"
          >
            <div className="w-24 h-28 bg-black flex-shrink-0">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex-1">
              <h2 className="font-serif text-xl">{item.name}</h2>
              <p className="text-xs text-gray-500 mt-1">
                Size: {item.size} · Color: {item.color}
              </p>
              <p className="text-sm text-gray-700 mt-2">${item.price}</p>
            </div>

            <div className="flex items-center border border-gray-300">
              <button
                onClick={() =>
                  updateQty(item.id, item.size, item.color, item.qty - 1)
                }
                className="w-8 h-8 text-gray-600 hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-8 text-center text-sm">{item.qty}</span>
              <button
                onClick={() =>
                  updateQty(item.id, item.size, item.color, item.qty + 1)
                }
                className="w-8 h-8 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <p className="w-20 text-right font-medium">
              ${(item.price * item.qty).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.id, item.size, item.color)}
              className="text-xs text-gray-400 hover:text-red-600 uppercase tracking-wide"
            >
              حذف
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>جمع کل</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-black text-white text-sm tracking-widest uppercase py-4 mt-4 hover:bg-gray-800 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
