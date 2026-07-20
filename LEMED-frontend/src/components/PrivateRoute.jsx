import { Navigate } from "react-router-dom";

// اسکلت اولیه برای Phase 9 (Authentication). فعلاً چون هنوز
// AuthContext ساخته نشده، isAuthenticated همیشه false است و
// این کامپوننت هنوز جایی در روت‌ها استفاده نمی‌شود.
export default function PrivateRoute({ children }) {
  const isAuthenticated = false; // بعداً از AuthContext می‌آید

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
