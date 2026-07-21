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
    <div className="flex flex-col gap-10 justify-center items-center min-h-screen pt-32">
      <div style={{padding : "70px 20px 20px 20px"}} className="flex flex-col justify-center items-center rounded-md  bg-gray-200  w-1/3">
      <h1 className="font-serif text-3xl mb-8" style={{marginBottom : "30px"}}>ثبت‌نام</h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
        <input
          type="text"
          placeholder="نام و نام‌خانوادگی"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          style={{padding : "7px"}}
          className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
        <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{padding : "7px"}}
          className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-black"
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          style={{padding : "7px"}}
          className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-black"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{padding : "8px"}}
          className="bg-gray-800 rounded-md text-white text-sm tracking-widest uppercase py-3 mt-2  disabled:cursor-none"
        >
          {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </button>
      </form>

      <p style={{marginTop : "20px"}} className="text-sm text-gray-500 mt-6">
        قبلاً ثبت‌نام کردی؟{" "}
        <Link to="/login" className="text-black underline">
          وارد شو
        </Link>
      </p>
   </div>

    </div>
  );
}