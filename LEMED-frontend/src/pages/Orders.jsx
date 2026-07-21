import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_URL = "https://localhost:7088";

const STATUS_FA = {
  Pending: "در انتظار",
  Paid: "پرداخت شده",
  Shipped: "ارسال شده",
  Delivered: "تحویل داده شده",
  Cancelled: "لغو شده",
};

export default function Orders() {
  const { isAuthenticated, token, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [authLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (!isAuthenticated) return;

    fetch(`${API_URL}/api/orders/mine`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("خطا در دریافت سفارش‌ها");
        return res.json();
      })
      .then((data) => setOrders(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [isAuthenticated, token]);

  if (loading) return <p className="text-gray-500">در حال بارگذاری...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  if (orders.length === 0) {
    return (
      <div className="text-center py-24">
        <h1 className="font-serif text-3xl mb-4">سفارش‌های من</h1>
        <p className="text-gray-500 mb-8">هنوز سفارشی ثبت نکردی.</p>
        <Link
          to="/shop"
          className="bg-black text-white text-sm tracking-widest uppercase py-3 px-8 inline-block hover:bg-gray-800"
        >
          مشاهده‌ی فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-serif text-3xl mb-8">سفارش‌های من</h1>

      <div className="flex flex-col gap-8">
        {orders.map((order) => (
          <div key={order.id} className="border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <div>
                <p className="font-medium">سفارش #{order.id}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                </p>
              </div>
              <span className="text-xs uppercase tracking-wide border border-gray-300 px-3 py-1">
                {STATUS_FA[order.status] || order.status}
              </span>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.product?.name || "محصول"} × {item.quantity}
                    <span className="text-gray-400 text-xs mr-2">
                      ({item.size} / {item.color})
                    </span>
                  </span>
                  <span className="text-gray-600">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-gray-100 font-medium">
              <span>جمع کل</span>
              <span>${order.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}