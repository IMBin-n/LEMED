import { useParams, Link } from "react-router-dom";

export default function OrderSuccess() {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24">
      <h1 className="font-serif text-4xl mb-10">سفارش ثبت شد 🎉</h1>
      <p className="text-gray-500 mb-10">شماره‌ی سفارش شما: #{id}</p>
      <Link
        to="/shop"
        className="bg-black text-white text-sm tracking-widest uppercase py-3 px-8 inline-block hover:bg-gray-800"
      >
        ادامه‌ی خرید
      </Link>
    </div>
  );
}