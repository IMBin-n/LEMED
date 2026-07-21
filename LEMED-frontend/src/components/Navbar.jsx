import { NavLink } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { useAuth } from "../context/AuthContext";




export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { user, logout, isAuthenticated } = useAuth();
  const linkClass = ({ isActive }) =>
    [
      "text-[0.8rem] font-normal uppercase tracking-[0.1em] text-clay",
      "transition-colors duration-DEFAULT hover:text-brand-red",
      isActive ? "text-ink border-b border-ink pb-0.5" : "",
    ].join(" ");

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-5 bg-offwhite/90 backdrop-blur-md border-b border-mist">
      <NavLink
        to="/"
        className="font-display text-2xl font-light tracking-[0.12em] text-ink"
      >
        LeMed
      </NavLink>

      <ul className="hidden sm:flex items-center gap-5 md:gap-10 list-none">
        {t.nav.map((item) => (
          <li key={item.key}>
            <NavLink to={`/${item.key}`} className={linkClass}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

{isAuthenticated ? (
  <div className="flex items-center gap-3">
    <NavLink to="/orders" className="text-xs text-gray-500 hover:text-black">
      سفارش‌های من
    </NavLink>
    <span className="text-sm">{user.fullName}</span>
    <button onClick={logout} className="text-xs text-gray-400 hover:text-black">
      خروج
    </button>
  </div>
) : (
  <NavLink to="/login" className="text-sm">ورود</NavLink>
)}
      <div className="flex items-center gap-6 md:gap-9">
        <button
          onClick={toggleLang}
          className="border border-mist rounded-sm text-[0.72rem] tracking-[0.08em] px-3 py-1.5 text-clay transition-all duration-DEFAULT hover:border-ink hover:text-ink"
          dir={lang === "fa" ? "ltr" : "rtl"}
        >
          {t.langToggle}
        </button>
      </div>
    </nav>
  );
}