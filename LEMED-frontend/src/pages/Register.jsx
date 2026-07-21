import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(fullName, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen pt-32">
      <h1 className="font-serif text-3xl mb-8">ثبت‌نام</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="نام و نام‌خانوادگی"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
        <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white text-sm tracking-widest uppercase py-3 mt-2 hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6">
        قبلاً ثبت‌نام کردی؟{" "}
        <Link to="/login" className="text-black underline">
          وارد شو
        </Link>
      </p>
    </div>
  );
}