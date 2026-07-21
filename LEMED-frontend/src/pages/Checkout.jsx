import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const API_URL = "https://localhost:7088";

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const { isAuthenticated, token, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // اگه لاگین نیست، بفرستش صفحه‌ی ورود
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [authLoading, isAuthenticated, navigate]);

  // اگه سبد خالیه، بفرستش فروشگاه
  // این خط رو به‌جای useEffect قبلی که items رو watch می‌کرد بذار:
const [cartWasEmptyOnLoad] = useState(items.length === 0);

useEffect(() => {
  if (cartWasEmptyOnLoad) {
    navigate("/shop");
  }
}, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          shippingAddress: address,
          shippingCity: city,
          shippingPhone: phone,
          items: items.map((i) => ({
            productId: i.id,
            size: i.size,
            color: i.color,
            quantity: i.qty,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "خطا در ثبت سفارش");

      clearCart();
      navigate(`/order-success/${data.id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen pt-32">
      <h1 className="font-serif text-3xl mb-8">تکمیل خرید</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="آدرس کامل"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
        <input
          type="text"
          placeholder="شهر"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
        <input
          type="tel"
          placeholder="شماره تماس"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />

        <div className="border-t border-gray-200 pt-4 mt-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>جمع کل</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="bg-black text-white text-sm tracking-widest uppercase py-4 mt-2 hover:bg-gray-800 disabled:opacity-50"
        >
          {submitting ? "در حال ثبت سفارش..." : "ثبت نهایی سفارش"}
        </button>
      </form>
    </div>
  );
}